'use client';

import { loadStripe, StripeElementsOptions } from '@stripe/stripe-js';
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CreditCard, Loader2, PartyPopper, Wallet, User, ShoppingCart, Truck, Store, Lock } from 'lucide-react';
import { useState, useEffect } from 'react';
import { createCheckoutPaymentIntent } from './actions';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useCart } from '@/context/cart-context';
import Image from 'next/image';
import Link from 'next/link';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

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

const CheckoutForm = ({ clientSecret, email, setPaymentSuccess, totalCharge }: { clientSecret: string; email: string; setPaymentSuccess: (success: boolean) => void; totalCharge: number }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { clearCart } = useCart();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setLoading(true);
    setError(null);

    const { error: confirmError } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/checkout?success=true`,
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
      clearCart();
      toast({
        title: 'Payment Successful!',
        description: 'Your order has been placed. A receipt has been sent to your email.',
      });
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
      
      <Button 
        type="submit" 
        disabled={!stripe || loading} 
        className="w-full h-16 bg-neutral-900 text-white text-[10px] tracking-[0.25em] uppercase font-bold hover:bg-neutral-800 rounded-sm transition-all shadow-lg border border-neutral-900"
      >
        {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Lock className="mr-2 h-3 w-3" />}
        Pay ${totalCharge.toFixed(2)}
      </Button>
      {error && <p className="text-xs text-red-500 text-center mt-2 font-medium tracking-wide">{error}</p>}
    </form>
  );
};

interface ShippingInfo {
    line1: string;
    line2: string | null;
    city: string;
    state: string;
    postal_code: string;
    country: string;
}

const pickupLocations = {
    'Shop': {
        name: 'Main Store Pickup',
        address: '3622 Central Ave',
        city: 'Memphis, TN 38111',
        country: 'United States'
    },
    'Pre-Booking': {
        name: 'Khalui Farm Pickup',
        address: '900 Orr Rd',
        city: 'Arlington, TN 38002',
        country: 'United States'
    }
}


export default function CheckoutPage() {
    const { cartItems, cartTotal, cartCount, cartType } = useCart();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [deliveryMethod, setDeliveryMethod] = useState('pickup');
    const [shipping, setShipping] = useState<ShippingInfo>({
        line1: '',
        line2: '',
        city: '',
        state: '',
        postal_code: '',
        country: 'US',
    });

    const [clientSecret, setClientSecret] = useState<string | null>(null);
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    
    const shippingFee = deliveryMethod === 'shipping' && cartTotal > 0 ? 7.50 : 0;
    const processingFee = cartTotal > 0 ? (cartTotal * 0.029) + 0.30 : 0;
    const totalCharge = cartTotal + shippingFee + processingFee;

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    
    const pickupLocation = cartType ? pickupLocations[cartType] : pickupLocations['Shop'];

    const handleCustomerSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        
        const isShippingInvalid = deliveryMethod === 'shipping' && (!shipping.line1 || !shipping.city || !shipping.state || !shipping.postal_code);

        if (!name || !email || isShippingInvalid) {
            setError('Please fill out all required fields.');
            return;
        }
        if (cartCount === 0) {
            setError('Your cart is empty.');
            return;
        }
        setLoading(true);
        
        const intentResult = await createCheckoutPaymentIntent(
            totalCharge * 100, 
            name, 
            email, 
            deliveryMethod === 'shipping' ? shipping : null,
            cartItems,
            cartType
        );

        if (intentResult.clientSecret) {
            setClientSecret(intentResult.clientSecret);
        } else {
            setError(intentResult.error || 'Failed to initialize payment.');
        }
        setLoading(false);
    }

    const handleShippingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setShipping(prev => ({ ...prev, [e.target.name]: e.target.value }));
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
                    src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1080"
                    alt="Checkout"
                    fill
                    className="object-cover opacity-50 grayscale"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent z-10" />
                <div className="relative z-20 text-center px-6">
                    <FadeIn>
                        <div className="inline-flex items-center gap-2 border border-white/20 px-3 py-1 mb-6 backdrop-blur-sm">
                            <Lock className="w-3 h-3 text-white/70" />
                            <p className="text-white/70 text-[9px] uppercase tracking-[0.3em] font-bold">Secure Checkout</p>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif text-white tracking-tight mb-4">Order Summary</h1>
                    </FadeIn>
                </div>
            </header>

            <main className="container mx-auto px-4 md:px-6 py-12 md:py-24 -mt-24 relative z-30">
                <Card className="mx-auto max-w-5xl w-full shadow-xl bg-white border-stone-200">
                    {paymentSuccess ? (
                        <CardContent className="p-12 md:p-16 text-center">
                             <div className="w-20 h-20 bg-stone-50 rounded-full flex items-center justify-center mx-auto mb-8 border border-stone-100">
                                <PartyPopper className="w-8 h-8 text-neutral-900" />
                            </div>
                            <h3 className="font-headline text-3xl font-bold text-green-800">Payment Successful!</h3>
                            <p className="text-lg text-muted-foreground mt-2">Thank you for your order. A confirmation receipt has been sent to your email.</p>
                            <Button asChild className="mt-6">
                                <Link href="/shop">Continue Shopping</Link>
                            </Button>
                        </CardContent>
                    ) : (
                        <div className="grid md:grid-cols-2">
                                <div className="p-8 md:p-12 order-2 md:order-1">
                                    {!clientSecret ? (
                                        <FadeIn>
                                        <form onSubmit={handleCustomerSubmit} className="space-y-8">
                                            <div className="space-y-6">
                                                <h3 className="text-xl font-serif font-medium">1. Delivery Method</h3>
                                                <RadioGroup value={deliveryMethod} onValueChange={setDeliveryMethod} className="grid grid-cols-2 gap-4">
                                                    <Label htmlFor="shipping" className={`flex flex-col items-center justify-center rounded-sm border-2 p-4 cursor-pointer hover:bg-stone-50 hover:border-black transition-all ${deliveryMethod === 'shipping' ? 'border-black' : 'border-stone-200'}`}>
                                                        <RadioGroupItem value="shipping" id="shipping" className="sr-only" />
                                                        <Truck className="mb-2 h-6 w-6" />
                                                        Shipping
                                                    </Label>
                                                    <Label htmlFor="pickup" className={`flex flex-col items-center justify-center rounded-sm border-2 p-4 cursor-pointer hover:bg-stone-50 hover:border-black transition-all ${deliveryMethod === 'pickup' ? 'border-black' : 'border-stone-200'}`}>
                                                        <RadioGroupItem value="pickup" id="pickup" className="sr-only" />
                                                        <Store className="mb-2 h-6 w-6" />
                                                        Local Pickup
                                                    </Label>
                                                </RadioGroup>
                                            </div>
                                            
                                            {deliveryMethod === 'pickup' && pickupLocation && (
                                                <Alert className="bg-[#FAFAF9] border-stone-200">
                                                    <Store className="h-4 w-4" />
                                                    <AlertTitle>{pickupLocation.name}</AlertTitle>
                                                    <AlertDescription>
                                                        {pickupLocation.address}<br />
                                                        {pickupLocation.city}
                                                    </AlertDescription>
                                                </Alert>
                                            )}

                                            <div className="space-y-6">
                                                <h3 className="text-xl font-serif font-medium">2. Contact Information</h3>
                                                <div className="grid md:grid-cols-2 gap-6">
                                                     <div className="space-y-3">
                                                        <Label htmlFor="name" className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 font-bold">Full Name</Label>
                                                        <Input id="name" placeholder="e.g. John Doe" value={name} onChange={e => setName(e.target.value)} required className="h-12 bg-[#FAFAF9] border-stone-200 focus:border-neutral-900 rounded-sm text-base px-4" />
                                                    </div>
                                                    <div className="space-y-3">
                                                        <Label htmlFor="email" className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 font-bold">Email</Label>
                                                        <Input id="email" type="email" placeholder="investor@example.com" value={email} onChange={e => setEmail(e.target.value)} required className="h-12 bg-[#FAFAF9] border-stone-200 focus:border-neutral-900 rounded-sm text-base px-4"/>
                                                    </div>
                                                </div>
                                            </div>

                                            {deliveryMethod === 'shipping' && (
                                                <div className="space-y-6">
                                                    <h3 className="text-xl font-serif font-medium">3. Shipping Address</h3>
                                                    <div className="space-y-3">
                                                        <Label htmlFor="line1" className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 font-bold">Address</Label>
                                                        <Input id="line1" name="line1" value={shipping.line1} onChange={handleShippingChange} required className="h-12 bg-[#FAFAF9] border-stone-200 focus:border-neutral-900 rounded-sm text-base px-4"/>
                                                    </div>
                                                    <div className="space-y-3">
                                                        <Label htmlFor="line2" className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 font-bold">Apartment, etc. (Optional)</Label>
                                                        <Input id="line2" name="line2" value={shipping.line2 || ''} onChange={handleShippingChange} className="h-12 bg-[#FAFAF9] border-stone-200 focus:border-neutral-900 rounded-sm text-base px-4"/>
                                                    </div>
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                        <div className="space-y-3">
                                                            <Label htmlFor="city" className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 font-bold">City</Label>
                                                            <Input id="city" name="city" value={shipping.city} onChange={handleShippingChange} required className="h-12 bg-[#FAFAF9] border-stone-200 focus:border-neutral-900 rounded-sm text-base px-4"/>
                                                        </div>
                                                        <div className="space-y-3">
                                                            <Label htmlFor="state" className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 font-bold">State</Label>
                                                            <Input id="state" name="state" value={shipping.state} onChange={handleShippingChange} required className="h-12 bg-[#FAFAF9] border-stone-200 focus:border-neutral-900 rounded-sm text-base px-4"/>
                                                        </div>
                                                    </div>
                                                    <div className="space-y-3">
                                                        <Label htmlFor="postal_code" className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 font-bold">ZIP Code</Label>
                                                        <Input id="postal_code" name="postal_code" value={shipping.postal_code} onChange={handleShippingChange} required className="h-12 bg-[#FAFAF9] border-stone-200 focus:border-neutral-900 rounded-sm text-base px-4"/>
                                                    </div>
                                                </div>
                                            )}
                                            
                                            {error && <p className="text-sm text-destructive mt-2">{error}</p>}
                                            <Button type="submit" disabled={loading || cartCount === 0} className="w-full h-14 bg-black text-white text-[11px] tracking-[0.3em] uppercase font-bold hover:bg-neutral-800 rounded-sm transition-all shadow-lg">
                                                {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Proceed to Payment"}
                                            </Button>
                                        </form>
                                        </FadeIn>
                                    ) : null}
                                    {options && clientSecret && (
                                         <FadeIn delay={0.1}>
                                            <Elements options={options} stripe={stripePromise}>
                                            <CheckoutForm 
                                                clientSecret={clientSecret} 
                                                email={email}
                                                setPaymentSuccess={setPaymentSuccess}
                                                totalCharge={totalCharge}
                                            />
                                        </Elements>
                                        </FadeIn>
                                    )}
                                </div>
                            <div className="p-8 md:p-12 bg-[#FAFAF9] rounded-b-lg md:rounded-r-lg md:rounded-bl-none order-1 md:order-2 border-b md:border-l md:border-b-0 border-stone-200">
                                <h3 className="font-serif text-2xl mb-6 flex items-center gap-3"><ShoppingCart className="w-6 h-6"/> Order Summary</h3>
                                {cartCount > 0 ? (
                                    <div className="space-y-4">
                                        {cartItems.map(item => (
                                            <div key={item.id} className="flex items-center gap-4 text-sm">
                                                <div className="relative w-16 h-16 rounded-md overflow-hidden border border-stone-200">
                                                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                                                </div>
                                                <div className="flex-grow">
                                                    <p className="font-semibold">{item.name}</p>
                                                    <p className="text-muted-foreground">{item.quantity} x ${item.price.toFixed(2)}</p>
                                                </div>
                                                <p className="font-semibold">${(item.quantity * item.price).toFixed(2)}</p>
                                            </div>
                                        ))}
                                        <Separator className="bg-stone-200 !my-6"/>
                                        <div className="space-y-2 text-sm">
                                            <div className="flex justify-between">
                                                <p className="text-muted-foreground">Subtotal</p>
                                                <p className="font-medium">${cartTotal.toFixed(2)}</p>
                                            </div>
                                            <div className="flex justify-between">
                                                <p className="text-muted-foreground">Shipping</p>
                                                <p className="font-medium">${shippingFee.toFixed(2)}</p>
                                            </div>
                                            <div className="flex justify-between">
                                                <p className="text-muted-foreground">Card Fee (2.9% + $0.30)</p>
                                                <p className="font-medium">${processingFee.toFixed(2)}</p>
                                            </div>
                                        </div>
                                        <Separator className="bg-stone-200 !my-6" />
                                        <div className="flex justify-between items-center font-bold text-lg">
                                            <p>Total</p>
                                            <p>${totalCharge.toFixed(2)}</p>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="text-center text-muted-foreground py-8">
                                        <p>Your cart is empty.</p>
                                        <Button variant="link" asChild><Link href="/shop">Go Shopping</Link></Button>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </Card>
            </main>
        </div>
    );
}



    