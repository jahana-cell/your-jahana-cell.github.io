'use server';

import { z } from 'zod';
import { format } from 'date-fns';
import { dbAdmin } from '@/lib/firebase-admin';
import * as admin from 'firebase-admin';

// --- VALIDATION SCHEMAS ---
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Invalid email address.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
  subject: z.string().min(1, 'Please select a subject.'),
});

type ContactFormState = {
    message?: string;
    errors?: {
        name?: string[];
        email?: string[];
        message?: string[];
        subject?: string[];
    }
}

// --- ACTION: SUBMIT INQUIRY ---
export async function submitInquiry(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Please correct the errors below.',
    };
  }

  const { name, email, subject, message } = validatedFields.data;

  if (!dbAdmin) {
    console.error("Firebase Admin SDK is not initialized.");
    return {
        message: "Server configuration error. Please try again later.",
        errors: {}
    };
  }

  try {
    // Professional HTML Template
    const inquiryHtml = `
      <div style="font-family: Arial, sans-serif; color: #333; padding: 20px;">
        <h1 style="border-bottom: 1px solid #ccc; padding-bottom: 10px; color: #444;">New Website Inquiry</h1>
        <p>You have received a new message from the contact form.</p>
        
        <h3 style="color: #555; margin-top: 30px;">Client Details</h3>
        <ul style="list-style: none; padding: 0;">
          <li style="margin-bottom: 10px;"><strong>Name:</strong> ${name}</li>
          <li style="margin-bottom: 10px;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #0066cc;">${email}</a></li>
          <li style="margin-bottom: 10px;"><strong>Topic:</strong> ${subject}</li>
        </ul>

        <h3 style="color: #555; margin-top: 30px;">Message</h3>
        <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #0066cc;">
            ${message.replace(/\n/g, '<br>')}
        </div>
      </div>
    `;

    // Write to "mail" collection to trigger Firebase email extension
    await dbAdmin.collection('mail').add({
      to: 'info@growsharecapital.com', 
      replyTo: email, 
      message: {
        subject: `[Website Inquiry] ${subject} - ${name}`,
        html: inquiryHtml,
      }
    });

    return { 
        message: 'Thank you. Your message has been securely transmitted.',
    };
  } catch (error) {
    console.error('Failed to send email via firestore:', error);
    return { 
        message: 'We encountered a technical issue sending your message. Please try again or contact us directly.',
    }
  }
}

// --- ACTION: TRAINING BOOKING NOTIFICATION ---
const trainingBookingSchema = z.object({
  course: z.string(),
  date: z.string(),
});

export async function sendTrainingBookingNotification(bookingDetails: { course: string, date: string }): Promise<{ success: boolean; message: string }> {
  const validatedFields = trainingBookingSchema.safeParse(bookingDetails);

  if (!validatedFields.success) {
    console.error('Invalid booking details:', validatedFields.error);
    return { success: false, message: 'Invalid booking details.' };
  }

  const { course, date } = validatedFields.data;

  if (!dbAdmin) {
    console.error("Firebase Admin SDK is not initialized.");
    return { success: false, message: 'Server configuration error. Please try again later.' };
  }

  try {
     const formattedDate = format(new Date(date), "EEEE, MMMM d, yyyy");
     
     const bookingHtml = `
       <div style="font-family: Arial, sans-serif; color: #333;">
         <h1 style="border-bottom: 1px solid #ccc;">New Training Session Booked</h1>
         <p>A new training session has been booked on the website.</p>
         <ul>
           <li><strong>Course:</strong> ${course}</li>
           <li><strong>Date:</strong> ${formattedDate}</li>
         </ul>
       </div>
     `;

     await dbAdmin.collection('mail').add({
        to: 'info@growsharecapital.com',
        message: {
            subject: `New Booking: ${course}`,
            html: bookingHtml,
        }
     });
    
    return { success: true, message: 'Notification sent successfully.' };
  } catch (error) {
    console.error('Failed to send booking notification:', error);
    return { success: false, message: 'Failed to send notification email.' };
  }
}

// --- ACTION: NEWSLETTER SUBSCRIPTION (Keep DB Logic) ---
const newsletterSchema = z.object({
  email: z.string().email('Invalid email address.'),
});

type NewsletterFormState = {
  message: string;
  error?: string;
}

export async function subscribeToNewsletter(prevState: NewsletterFormState, formData: FormData): Promise<NewsletterFormState> {
  const validatedFields = newsletterSchema.safeParse({
    email: formData.get('email'),
  });

  if (!validatedFields.success) {
    return {
      message: validatedFields.error.flatten().fieldErrors.email?.[0] || 'Invalid input.',
      error: 'validation',
    };
  }

  const { email } = validatedFields.data;

  if (!dbAdmin) {
    console.error("Firebase Admin SDK is not initialized.");
    return {
        message: "Server configuration error. Please try again later.",
        error: 'server',
    };
  }

  try {
    await dbAdmin.collection('subscribers').add({
      email: email,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    return { 
        message: 'Thank you for subscribing!',
    };
  } catch (error) {
    console.error('Error in subscribeToNewsletter:', error);
    if ((error as any).code === 'permission-denied') {
        return {
            message: 'You do not have permission to perform this action.',
            error: 'server',
        }
    }
    return { 
        message: 'Sorry, we were unable to subscribe you at this time. Please try again later.',
        error: 'server',
    }
  }
}
