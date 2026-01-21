
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { headers } from 'next/headers';
import { dbAdmin } from '@/lib/firebase-admin';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2024-06-20',
});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(req: NextRequest) {
  if (!dbAdmin) {
    console.error("Firestore Admin is not initialized.");
    return NextResponse.json({ error: 'Internal Server Error: Database not configured.' }, { status: 500 });
  }

  const body = await req.text();
  const signature = headers().get('stripe-signature')!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err: any) {
    console.error(`❌ Error message: ${err.message}`);
    return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
  }

  // Handle the event
  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object;
      console.log(`PaymentIntent for ${paymentIntent.amount} was successful!`);
      
      const cartType = paymentIntent.metadata.cartType || 'Shop';

      let collectionName: string;
      switch (cartType) {
        case 'Investment':
          collectionName = 'investments';
          break;
        case 'Training':
          collectionName = 'training_bookings';
          break;
        case 'Pre-Booking':
          collectionName = 'prebookings';
          break;
        default:
          collectionName = 'orders';
          break;
      }

      try {
        const querySnapshot = await dbAdmin.collection(collectionName)
          .where('stripePaymentIntentId', '==', paymentIntent.id)
          .limit(1)
          .get();
        
        if (!querySnapshot.empty) {
            const docId = querySnapshot.docs[0].id;
            await dbAdmin.collection(collectionName).doc(docId).update({
                status: 'succeeded'
            });
            console.log(`Updated ${collectionName} document ${docId} to succeeded.`);
        } else {
            console.warn(`No document found in collection '${collectionName}' with PaymentIntent ID: ${paymentIntent.id}`);
        }

      } catch (error) {
          console.error(`Error updating document status in Firestore for collection '${collectionName}':`, error);
      }
      
      break;
    
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  return NextResponse.json({ received: true });
}
