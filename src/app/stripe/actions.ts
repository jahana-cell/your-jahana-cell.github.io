
'use server';

import Stripe from 'stripe';
import { dbAdmin } from '@/lib/firebase-admin';
import * as admin from 'firebase-admin';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
});

interface InvestmentDetails {
    shares: number;
    investmentAmount: number;
    totalCharge: number;
    project: string; // Added project name
}

interface BookingDetails {
    course: string;
    date: string;
    price: string;
}

async function sendInvestmentNotificationEmail(details: { 
    name: string; 
    email: string; 
    investmentDetails: InvestmentDetails;
}) {
  const { name, email, investmentDetails } = details;

  if (!dbAdmin) {
    console.error('Database not initialized. Cannot send investment notification.');
    return { success: false, error: 'Internal Server Error: Database not configured.' };
  }

  try {
     await dbAdmin.collection("mail").add({
      to: 'info@growsharecapital.com',
      message: {
        subject: `New Investment in ${investmentDetails.project} from: ${name}`,
        html: `
            <h1>New Investment Received</h1>
            <p>A new investment has been placed on the website.</p>
            <h2>Investor Details:</h2>
            <ul>
                <li><strong>Name:</strong> ${name}</li>
                <li><strong>Email:</strong> ${email}</li>
            </ul>
            <h2>Investment Details:</h2>
            <ul>
              <li><strong>Project:</strong> ${investmentDetails.project}</li>
              <li><strong>Shares:</strong> ${investmentDetails.shares}</li>
              <li><strong>Investment Amount:</strong> $${investmentDetails.investmentAmount.toFixed(2)}</li>
              <li><strong>Total Charged (incl. fees):</strong> $${investmentDetails.totalCharge.toFixed(2)}</li>
            </ul>
        `,
      },
    });
    return { success: true, message: 'Notification email sent.' };
  } catch (error: any) {
    console.error('Failed to send investment notification email:', error);
    return { success: false, error: error.message || 'Failed to send notification email.' };
  }
}

async function sendTrainingNotificationEmail(details: {
    name: string;
    email: string;
    bookingDetails: BookingDetails;
}) {
    const { name, email, bookingDetails } = details;

    if (!dbAdmin) {
        console.error('Database not initialized. Cannot send training notification.');
        return { success: false };
    }
    
    try {
         await dbAdmin.collection("mail").add({
            to: 'info@growsharecapital.com',
            message: {
                subject: `New Training Booking from: ${name}`,
                html: `
                    <h1>New Training Session Booked</h1>
                    <h2>Customer Details:</h2>
                    <ul>
                        <li><strong>Name:</strong> ${name}</li>
                        <li><strong>Email:</strong> ${email}</li>
                    </ul>
                    <h2>Booking Details:</h2>
                    <ul>
                        <li><strong>Course:</strong> ${bookingDetails.course}</li>
                        <li><strong>Date:</strong> ${new Date(bookingDetails.date).toLocaleDateString()}</li>
                        <li><strong>Amount Paid:</strong> $${parseFloat(bookingDetails.price).toFixed(2)}</li>
                    </ul>
                `,
            }
        });
        return { success: true };
    } catch (error) {
        console.error('Failed to send training notification:', error);
        return { success: false };
    }
}


export async function createInvestmentPaymentIntent(details: {
    name: string;
    email: string;
    investmentDetails: InvestmentDetails;
}) {
    const { name, email, investmentDetails } = details;
    const { shares, investmentAmount, totalCharge, project } = investmentDetails;
    const amountInCents = Math.round(totalCharge * 100);

    if (!dbAdmin) {
        console.error('Database not initialized. Cannot create investment intent.');
        return { error: 'Internal Server Error: Database not configured.' };
    }

    try {
        const existingCustomers = await stripe.customers.list({ email, limit: 1 });
        let customer;
        if (existingCustomers.data.length > 0) {
            customer = existingCustomers.data[0];
        } else {
            customer = await stripe.customers.create({ name, email });
        }

        const paymentIntent = await stripe.paymentIntents.create({
            amount: amountInCents,
            currency: 'usd',
            customer: customer.id,
            automatic_payment_methods: { enabled: true },
            metadata: {
                cartType: 'Investment',
                project: project,
                shares: shares,
            }
        });
        
        await dbAdmin.collection('investments').add({
            customerName: name,
            customerEmail: email,
            shares,
            investmentAmount,
            totalAmount: totalCharge,
            project: project,
            status: 'pending_payment',
            createdAt: admin.firestore.FieldValue.serverTimestamp(),
            stripePaymentIntentId: paymentIntent.id,
        });

        await sendInvestmentNotificationEmail({ name, email, investmentDetails });
        
        return { clientSecret: paymentIntent.client_secret };

    } catch (error: any) {
        console.error('Error creating investment payment intent:', error);
        return { error: error.message || 'An unknown error occurred.' };
    }
}


export async function createTrainingPaymentIntent(details: {
    amountInCents: number,
    name: string,
    email: string,
    bookingDetails: BookingDetails,
}) {
    const { amountInCents, name, email, bookingDetails } = details;

    if (!dbAdmin) {
        console.error('Database not initialized. Cannot create training intent.');
        return { error: 'Internal Server Error: Database not configured.' };
    }

    try {
        const existingCustomers = await stripe.customers.list({ email: email, limit: 1 });
        let customer;

        if (existingCustomers.data.length > 0) {
            customer = existingCustomers.data[0];
        } else {
            customer = await stripe.customers.create({ name, email });
        }

        const paymentIntent = await stripe.paymentIntents.create({
            amount: amountInCents,
            currency: 'usd',
            customer: customer.id,
            automatic_payment_methods: { enabled: true },
             metadata: {
                cartType: 'Training',
                course: bookingDetails.course,
                date: bookingDetails.date,
            }
        });

        await dbAdmin.collection('training_bookings').add({
            customerName: name,
            customerEmail: email,
            ...bookingDetails,
            totalAmount: amountInCents / 100,
            status: 'pending_payment',
            createdAt: admin.firestore.FieldValue.serverTimestamp(),
            stripePaymentIntentId: paymentIntent.id,
        });
        
        await sendTrainingNotificationEmail({name, email, bookingDetails});

        return { clientSecret: paymentIntent.client_secret };

    } catch (error: any) {
        console.error("Error creating training payment intent:", error);
        return { error: error.message || "An unknown error occurred." };
    }
}
