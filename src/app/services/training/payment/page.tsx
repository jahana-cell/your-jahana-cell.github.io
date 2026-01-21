'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { motion } from 'framer-motion';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DollarSign, Sprout, Wallet, Loader2, PartyPopper, User, Lock } from "lucide-react";
import { format } from 'date-fns';
import { Separator } from '@/components/ui/separator';
import { loadStripe, StripeElementsOptions } from '@stripe/stripe-js';
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { createTrainingPaymentIntent } from '@/app/stripe/actions';
import { useToast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Image from 'next/image';


type BookingDetails = {
    course: string;
    date: string;
    price: string;
}

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: delay, ease: [0.21, 0.47, 0.32, 0.98] }}
  >
    {children}
  </motion.div>
);

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const CheckoutForm = ({ clientSecret, email, name, setPaymentSuccess, totalCharge, booking }: { clientSecret: string; email: string; name: string; setPaymentSuccess: (success: boolean) => void; totalCharge: number; booking: BookingDetails | null; }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!stripe || !elements || !booking) {
      return;
    }
    setLoading(true);
    setError(null);

    const { error: confirmError } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/services/training/payment?success=true`,
        receipt_email: email,
      },
      redirect: 'if_required',
    });

    if (confirmError) {
      setError(confirmError.message || 'An unexpected error occurred during payment.');
      toast({
        title: 'Payment Failed',
        description: confirmError.message || 'An unexpected error occurred.',
        variant: 'destructive',
      });
      setLoading(false);
    } else {
      setPaymentSuccess(true);
      toast({
        title: 'Payment Successful!',
        description: `Your booking for ${booking.course} is confirmed. A receipt has been sent to ${email}.`,
      });
      localStorage.removeItem('trainingBooking');
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
        <div className="p-1">
            <PaymentElement 
                options={{ 
                    layout: 'tabs',
                    appearance: {
                        theme: 'stripe',
                        variables: {
                            colorPrimary: '#171717',
                            colorBackground: '#ffffff',
                            colorText: '#171717',
                            fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                            spacingUnit: '4px',
                            borderRadius: '2px',
                        }
                    }
                }} 
            />
        </div>
        <Button type="submit" disabled={!stripe || loading} className="w-full h-16 bg-neutral-900 text-white text-[10px] tracking-[0.25em] uppercase font-bold hover:bg-neutral-800 rounded-sm transition-all shadow-lg border border-neutral-900">
            {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Lock className="mr-2 h-3 w-3" />}
            Pay ${totalCharge.toFixed(2)}
        </Button>
        {error && <p className="text-xs text-red-500 text-center mt-2 font-medium tracking-wide">{error}</p>}
    </form>
  );
};


export default function TrainingPaymentPage() {
  const [booking, setBooking] = useState<BookingDetails | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  
  const [totalCharge, setTotalCharge] = useState(0);
  const [investmentAmount, setInvestmentAmount] = useState(0);
  const [processingFee, setProcessingFee] = useState(0);
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const savedBooking = localStorage.getItem('trainingBooking');
    if (savedBooking) {
      const parsedBooking = JSON.parse(savedBooking);
      setBooking(parsedBooking);
      const investment = parseFloat(parsedBooking.price) || 100;
      const cardFee = (investment * 0.029) + 0.30;
      setInvestmentAmount(investment);
      setProcessingFee(cardFee);
      setTotalCharge(investment + cardFee);
    }
  }, []);

  const handleCustomerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!name || !email) {
      setError('Please enter your name and email.');
      return;
    }
    if (!booking) {
        setError('Booking details are missing. Please go back and select a course and date.');
        return;
    }
    setLoading(true);
    
    const intentResult = await createTrainingPaymentIntent({
        amountInCents: totalCharge * 100,
        name,
        email,
        bookingDetails: booking,
    });

    if (intentResult.clientSecret) {
        setClientSecret(intentResult.clientSecret);
    } else {
        setError(intentResult.error || 'Failed to initialize payment.');
    }
    setLoading(false);
  }

  const options: StripeElementsOptions | undefined = clientSecret ? {
      clientSecret,
      appearance: {
        theme: 'stripe',
        labels: 'floating',
        variables: { colorPrimary: '#000000', fontFamily: 'inherit' }
      },
  } : undefined;

  return (
    <div className="bg-[#F9F9F7] min-h-screen text-neutral-900 font-sans">
       <header className="relative w-full h-[45vh] flex items-center justify-center bg-[#121212] overflow-hidden">
         <Image
            src="https://images.unsplash.com/photo-1492496913980-501348b61469?q=80&w=1080"
            alt="Training Session"
            fill
            className="object-cover opacity-50 grayscale"
            priority
         />
         <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent z-10" />
         <div className="relative z-20 text-center px-6">
            <FadeIn>
                <div className="inline-flex items-center gap-2 border border-white/20 px-3 py-1 mb-6 backdrop-blur-sm">
                    <Lock className="w-3 h-3 text-white/70" />
                    <p className="text-white/70 text-[9px] uppercase tracking-[0.3em] font-bold">Secure Payment</p>
                </div>
                <h1 className="text-4xl md:text-6xl font-serif text-white tracking-tight mb-4">Training Booking</h1>
                <p className="text-white/60 font-serif italic text-lg">Confirm Your Session</p>
            </FadeIn>
         </div>
      </header>

      <main className="container mx-auto px-4 md:px-6 py-12 md:py-24 -mt-24 relative z-30">
        <FadeIn>
          <div className="max-w-xl mx-auto">
            
            {paymentSuccess ? (
                <div className="bg-white border border-stone-200 shadow-xl p-12 md:p-16 text-center">
                    <div className="w-20 h-20 bg-stone-50 rounded-full flex items-center justify-center mx-auto mb-8 border border-stone-100">
                       <PartyPopper className="w-8 h-8 text-neutral-900" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-serif mb-6 text-neutral-900">Booking Confirmed!</h2>
                    <p className="text-neutral-500 font-light mb-10 leading-relaxed max-w-md mx-auto">
                        Thank you for your payment. A confirmation has been sent to your email.
                    </p>
                    <Button asChild variant="outline" className="h-12 px-8 uppercase tracking-[0.2em] text-[10px] font-bold border-stone-300 hover:bg-stone-50 hover:text-black">
                        <Link href="/services/training">Book Another Session</Link>
                    </Button>
                </div>
            ) : !clientSecret ? (
                <div className="bg-white border border-stone-200 shadow-sm p-8 md:p-12">
                     <div className="text-center border-b border-stone-100 pb-8 mb-8">
                        {booking ? (
                            <>
                                <h3 className="font-serif text-2xl">{booking.course}</h3>
                                <p className="text-muted-foreground mt-1">{format(new Date(booking.date), "EEEE, MMMM d, yyyy")}</p>
                                <p className="text-5xl font-bold font-mono text-primary mt-4">${parseFloat(booking.price).toFixed(2)}</p>
                            </>
                        ): (
                            <div className="text-center text-muted-foreground p-4">Loading booking details... If you arrived here directly, please <Link href="/services/training" className="underline text-primary">start by booking a session</Link>.</div>
                        )}
                     </div>
                     <form onSubmit={handleCustomerSubmit} className="space-y-8">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-3">
                                <Label htmlFor="name" className="text-[10px] uppercase tracking-[0.2em] font-bold">Full Name</Label>
                                <Input id="name" placeholder="e.g. John Doe" value={name} onChange={e => setName(e.target.value)} required className="h-14 bg-[#FAFAF9] border-stone-200 focus:border-neutral-900 rounded-sm text-base px-4"/>
                            </div>
                            <div className="space-y-3">
                                <Label htmlFor="email" className="text-[10px] uppercase tracking-[0.2em] font-bold">Email</Label>
                                <Input id="email" type="email" placeholder="investor@example.com" value={email} onChange={e => setEmail(e.target.value)} required className="h-14 bg-[#FAFAF9] border-stone-200 focus:border-neutral-900 rounded-sm text-base px-4"/>
                            </div>
                        </div>
                        {error && <p className="text-sm text-destructive">{error}</p>}
                        <Button type="submit" disabled={loading || !booking} className="w-full h-16 bg-black text-white text-[11px] tracking-[0.3em] uppercase font-bold hover:bg-neutral-800 rounded-sm">
                            {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Proceed to Payment"}
                        </Button>
                    </form>
                </div>
            ) : null}

              {options && clientSecret && !paymentSuccess && booking && (
                  <FadeIn delay={0.1}>
                       <div className="bg-white border border-stone-200 shadow-sm">
                            <div className="p-8 md:p-10 bg-[#FAFAF9] border-b border-stone-200">
                                 <div className="flex justify-between items-center mb-8">
                                    <h3 className="text-[10px] uppercase tracking-[0.25em] font-bold text-neutral-900">Secure Payment</h3>
                                    <button onClick={() => setClientSecret(null)} className="text-[10px] border-b border-neutral-300 pb-0.5 text-neutral-400 hover:text-black hover:border-black uppercase tracking-widest">Edit</button>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center"><span className="text-neutral-500 text-sm">Session Fee</span><span className="font-serif text-lg">${investmentAmount.toFixed(2)}</span></div>
                                    <div className="flex justify-between items-center"><span className="text-neutral-400 text-xs">Card Fee (2.9% + $0.30)</span><span className="text-neutral-400 font-mono text-xs">+${processingFee.toFixed(2)}</span></div>
                                    <Separator className="bg-stone-200 my-4" />
                                    <div className="flex justify-between items-center"><span className="font-bold uppercase tracking-widest text-xs">Total Charge</span><span className="font-serif text-3xl">${totalCharge.toFixed(2)}</span></div>
                                </div>
                            </div>
                            <div className="p-8 md:p-10">
                                <Elements options={options} stripe={stripePromise}>
                                    <CheckoutForm clientSecret={clientSecret} email={email} name={name} setPaymentSuccess={setPaymentSuccess} totalCharge={totalCharge} booking={booking} />
                                </Elements>
                            </div>
                        </div>
                  </FadeIn>
              )}

             <FadeIn delay={0.2}>
                <div className="mt-8 p-8 md:p-10 border border-stone-200 bg-white text-center rounded-sm shadow-sm">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F5F5F4] text-neutral-600 text-[9px] uppercase tracking-widest font-bold mb-6 border border-stone-200"><Wallet className="w-3 h-3" /> Zero-Fee Options</div>
                    <p className="text-sm text-neutral-500 font-light mb-4 max-w-md mx-auto">To avoid card fees, you can pay via Zelle, Venmo, or CashApp.</p>
                     <p className="text-sm text-neutral-500">Please send a text message to <a href="sms:2056162945" className="font-mono text-foreground underline hover:text-primary">205-616-2945</a> to request payment.</p>
                </div>
            </FadeIn>
            
            <div className="text-center pt-12">
                <Link href="/services/training" className="group inline-flex items-center gap-2 text-[10px] text-neutral-400 uppercase tracking-widest hover:text-neutral-900">
                    Return to Booking
                </Link>
            </div>
          </div>
        </FadeIn>
      </main>
    </div>
  );
}

    