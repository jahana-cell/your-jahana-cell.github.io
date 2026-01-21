
'use server';

import Stripe from 'stripe';
import { dbAdmin } from '@/lib/firebase-admin';
import * as admin from 'firebase-admin';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
});

interface ShippingInfo {
    line1: string;
    line2: string | null;
    city: string;
    state: string;
    postal_code: string;
    country: string;
}

interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
}

type CartType = 'Shop' | 'Pre-Booking';


async function sendOrderNotificationEmail(details: { 
    name: string; 
    email: string; 
    totalAmount: number; 
    items: CartItem[];
    shipping: ShippingInfo | null;
    type: CartType | null;
}) {
  const { name, email, totalAmount, items, shipping, type } = details;

  if (!dbAdmin) {
    console.error('Database not initialized. Cannot send order notification.');
    return { success: false, error: 'Internal Server Error: Database not configured.' };
  }

  try {
     await dbAdmin.collection("mail").add({
      to: 'info@growsharecapital.com',
      message: {
        subject: `New ${type || 'Shop'} Order from: ${name}`,
        html: `
          <h1>New Order Received</h1>
          <p>A new order has been placed on the website.</p>
          <h2>Customer Details:</h2>
          <ul>
              <li><strong>Name:</strong> ${name}</li>
              <li><strong>Email:</strong> ${email}</li>
          </ul>
          <h2>Order Details:</h2>
          <ul>${items.map(item => `<li>${item.quantity} x ${item.name} - $${(item.price * item.quantity).toFixed(2)}</li>`).join('')}</ul>
          <p><strong>Total Amount Charged:</strong> $${totalAmount.toFixed(2)}</p>
          <h2>Delivery:</h2>
          ${shipping ? `<p><strong>Address:</strong> ${shipping.line1}, ${shipping.city}, ${shipping.state} ${shipping.postal_code}</p>` : '<p>Pickup Order</p>'}
        `,
      },
    });

    return { success: true, message: 'Notification email sent.' };
  } catch (error: any) {
    console.error('Failed to send order notification email:', error);
    return { success: false, error: error.message || 'Failed to send notification email.' };
  }
}


/**
 * Creates a PaymentIntent and saves order details to Firestore.
 * @param amountInCents The total amount to charge, in cents.
 * @param name The customer's name.
 * @param email The customer's email.
 * @param shipping The customer's shipping address, or null for pickup.
 * @param cartItems The items in the customer's cart.
 * @param cartType The type of cart, to determine which collection to save to.
 * @returns An object containing the client secret for the PaymentIntent or an error message.
 */
export async function createCheckoutPaymentIntent(
    amountInCents: number, 
    name: string, 
    email: string, 
    shipping: ShippingInfo | null,
    cartItems: CartItem[],
    cartType: CartType | null
) {
    if (!dbAdmin) {
        console.error('Database not initialized. Cannot create checkout intent.');
        return { error: 'Internal Server Error: Database not configured.' };
    }
  try {
    // 1. Create or update Stripe Customer
    const existingCustomers = await stripe.customers.list({ email: email, limit: 1 });
    let customer;

    const customerData = {
        name,
        email,
        shipping: shipping ? {
            name,
            address: {
                line1: shipping.line1,
                city: shipping.city,
                state: shipping.state,
                postal_code: shipping.postal_code,
                country: shipping.country,
                ...(shipping.line2 && { line2: shipping.line2 }),
            },
        } : null,
    };
    
    if (existingCustomers.data.length > 0) {
      customer = await stripe.customers.update(existingCustomers.data[0].id, customerData);
    } else {
      customer = await stripe.customers.create(customerData);
    }
    
    // 2. Create Stripe Payment Intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amountInCents),
      currency: 'usd',
      customer: customer.id,
      automatic_payment_methods: {
        enabled: true,
      },
      metadata: {
        cartType: cartType || 'Shop',
      }
    });

    const totalAmount = amountInCents / 100;

    // 3. Save order to Firestore
    const orderData = {
        customerName: name,
        customerEmail: email,
        shippingAddress: shipping,
        items: cartItems,
        totalAmount: totalAmount,
        status: 'pending_payment',
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
        stripePaymentIntentId: paymentIntent.id,
        stripeCustomerId: customer.id,
        type: cartType || 'Shop'
    };
    
    const collectionName = cartType === 'Pre-Booking' ? 'prebookings' : 'orders';
    await dbAdmin.collection(collectionName).add(orderData);

    // 4. Send notification email
    await sendOrderNotificationEmail({
        name,
        email,
        totalAmount: totalAmount,
        items: cartItems,
        shipping: shipping,
        type: cartType
    });


    return { clientSecret: paymentIntent.client_secret };
  } catch (error: any) {
    console.error('Error during checkout process:', error);
    return { error: error.message || 'An unknown error occurred.' };
  }
}
