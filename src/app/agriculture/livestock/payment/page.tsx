'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { loadStripe, StripeElementsOptions } from '@stripe/stripe-js';
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { createInvestmentPaymentIntent } from '@/app/stripe/actions';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';
import { 
  Loader2, Minus, Plus, 
  ShieldCheck, PartyPopper, 
  Lock, ArrowLeft
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

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

const CheckoutForm = ({ clientSecret, email, setPaymentSuccess, totalCharge }: { clientSecret: string; email: string; setPaymentSuccess: (success: boolean) => void; totalCharge: number; }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!stripe || !elements) return;
    
    setLoading(true);
    setError(null);

    const { error: confirmError } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/agriculture/alabama-livestock/payment?success=true`,
        receipt_email: email,
      },
      redirect: 'if_required',
    });

    if (confirmError) {
      setError(confirmError.message || 'Payment failed.');
      toast({ title: 'Payment Failed', description: confirmError.message, variant: 'destructive' });
      setLoading(false);
    } else {
      setPaymentSuccess(true);
      toast({ title: 'Investment Secured', description: `Receipt sent to ${email}.` });
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
        <div className="p-1">
            <PaymentElement options={{
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
            }} />
        </div>
        <Button 
            type="submit" 
            disabled={!stripe || loading} 
            className="w-full h-16 bg-neutral-900 text-white text-[10px] tracking-[0.25em] uppercase font-bold hover:bg-neutral-800 rounded-sm transition-all shadow-lg border border-neutral-900"
        >
            {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Lock className="mr-2 h-3 w-3" />}
            Authorize ${totalCharge.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </Button>
        {error && <p className="text-xs text-red-500 text-center mt-2 font-medium tracking-wide">{error}</p>}
    </form>
  );
};

export default function AlabamaPaymentPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [clientSecret, setClientSecret] = useState<string | null>(null);
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    const [numberOfShares, setNumberOfShares] = useState(1);
    
    const SHARE_PRICE = 1000;
    const [investmentAmount, setInvestmentAmount] = useState(0);
    const [processingFee, setProcessingFee] = useState(0);
    const [totalCharge, setTotalCharge] = useState(0);
    
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const investment = numberOfShares * SHARE_PRICE;
        const cardFee = (investment * 0.029) + 0.30;
        
        setInvestmentAmount(investment);
        setProcessingFee(cardFee);
        setTotalCharge(investment + cardFee);
    }, [numberOfShares]);
    
    const handleCustomerSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        if (!name || !email) {
            setError('Investor details required.');
            return;
        }
        setLoading(true);
        
        const intentResult = await createInvestmentPaymentIntent({
            name,
            email,
            investmentDetails: {
                project: 'Alabama Livestock Project',
                shares: numberOfShares,
                investmentAmount,
                totalCharge,
            }
        });
        
        if (intentResult.clientSecret) {
            setClientSecret(intentResult.clientSecret);
        } else {
            setError(intentResult.error || 'Initialization failed.');
        }
        setLoading(false);
    }

    const handleShareChange = (change: number) => {
        setNumberOfShares(prev => Math.max(1, prev + change));
    }

    const resetForm = () => {
        setName('');
        setEmail('');
        setClientSecret(null);
        setPaymentSuccess(false);
        setNumberOfShares(1);
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
    <div className="bg-[#F9F9F7] min-h-screen text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white">
      
      <header className="relative w-full h-[45vh] flex items-center justify-center bg-[#121212] overflow-hidden">
         <Image
            src="https://i.imgur.com/xY71DAw.png"
            alt="Alabama Livestock"
            fill
            sizes="100vw"
            className="object-cover opacity-50 grayscale"
            priority
         />
         <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent z-10" />
         <div className="relative z-20 text-center px-6">
            <FadeIn>
                <div className="inline-flex items-center gap-2 border border-white/20 px-3 py-1 mb-6 backdrop-blur-sm">
                    <Lock className="w-3 h-3 text-white/70" />
                    <p className="text-white/70 text-[9px] uppercase tracking-[0.3em] font-bold">Secure Transaction</p>
                </div>
                <h1 className="text-4xl md:text-6xl font-serif text-white tracking-tight mb-4">Investment Portal</h1>
                <p className="text-white/60 font-serif italic text-lg">Alabama Livestock Project</p>
            </FadeIn>
         </div>
      </header>

      <main className="container mx-auto px-4 md:px-6 py-12 md:py-24 -mt-24 relative z-30">
        <div className="max-w-3xl mx-auto">
            
            {paymentSuccess ? (
                <FadeIn>
                    <div className="bg-white border border-stone-200 shadow-xl p-12 md:p-16 text-center">
                        <div className="w-20 h-20 bg-stone-50 rounded-full flex items-center justify-center mx-auto mb-8 border border-stone-100">
                             <PartyPopper className="w-8 h-8 text-neutral-900" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-serif mb-6 text-neutral-900">Investment Secured!</h2>
                        <p className="text-neutral-500 font-light mb-10 leading-relaxed max-w-md mx-auto">
                            Thank you, {name}. Your investment has been processed. A receipt and confirmation have been sent to {email}.
                        </p>
                        <Button 
                            onClick={resetForm} 
                            variant="outline" 
                            className="h-12 px-8 uppercase tracking-[0.2em] text-[10px] font-bold border-stone-300 hover:bg-stone-50 hover:text-black"
                        >
                            Make Another Investment
                        </Button>
                    </div>
                </FadeIn>
            ) : !clientSecret ? (
                 <FadeIn>
                    <div className="bg-white border border-stone-200 shadow-sm p-8 md:p-12">
                        
                        <div className="text-center border-b border-stone-100 pb-8 mb-10">
                             <span className="inline-block px-3 py-1 bg-stone-100 text-[9px] uppercase tracking-widest text-neutral-500 font-bold mb-4 rounded-full">Phase 1 Target</span>
                             <div className="flex flex-col items-center">
                                 <h3 className="font-serif text-3xl text-neutral-900">$20,000</h3>
                                 <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 mt-2">Fundraising Goal</p>
                             </div>
                        </div>

                        <form onSubmit={handleCustomerSubmit} className="space-y-12">
                             
                             <div className="text-center py-10 bg-[#FAFAF9] border border-stone-100">
                                <Label className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 block mb-8">
                                    Investment Volume (${SHARE_PRICE.toLocaleString()} / Share)
                                </Label>
                                <div className="flex items-center justify-center gap-8 md:gap-12">
                                    <Button 
                                        size="icon" 
                                        variant="outline" 
                                        type="button" 
                                        onClick={() => handleShareChange(-1)} 
                                        disabled={numberOfShares <= 1} 
                                        className="h-12 w-12 rounded-full border-stone-300 text-neutral-400 hover:border-black hover:bg-black hover:text-white transition-all duration-300"
                                    >
                                        <Minus className="h-4 w-4" />
                                    </Button>
                                    
                                    <div className="text-center w-32">
                                        <div className="font-serif text-6xl md:text-7xl leading-none text-neutral-900">{numberOfShares}</div>
                                        <div className="text-[9px] uppercase tracking-[0.25em] text-neutral-400 mt-3 font-medium">
                                            Share{numberOfShares > 1 ? 's' : ''}
                                        </div>
                                    </div>
                                    
                                    <Button 
                                        size="icon" 
                                        variant="outline" 
                                        type="button" 
                                        onClick={() => handleShareChange(1)} 
                                        className="h-12 w-12 rounded-full border-stone-300 text-neutral-400 hover:border-black hover:bg-black hover:text-white transition-all duration-300"
                                    >
                                        <Plus className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <Label htmlFor="name" className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 font-bold">Full Name</Label>
                                    <Input 
                                        id="name" 
                                        value={name} 
                                        onChange={e => setName(e.target.value)} 
                                        placeholder="e.g. John Doe" 
                                        required 
                                        className="h-14 bg-[#FAFAF9] border-stone-200 focus:border-neutral-900 rounded-sm text-base px-4 transition-colors"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <Label htmlFor="email" className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 font-bold">Email</Label>
                                    <Input 
                                        id="email" 
                                        type="email" 
                                        value={email} 
                                        onChange={e => setEmail(e.target.value)} 
                                        placeholder="investor@example.com" 
                                        required 
                                        className="h-14 bg-[#FAFAF9] border-stone-200 focus:border-neutral-900 rounded-sm text-base px-4 transition-colors"
                                    />
                                </div>
                            </div>

                            {error && <p className="text-xs text-red-500 text-center font-medium">{error}</p>}
                            
                            <Button 
                                type="submit" 
                                disabled={loading} 
                                className="w-full h-16 bg-neutral-900 text-white text-[10px] tracking-[0.25em] uppercase font-bold hover:bg-white hover:text-neutral-900 hover:border hover:border-neutral-900 rounded-sm transition-all shadow-lg"
                            >
                                {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Proceed to Payment"}
                            </Button>
                        </form>
                    </div>
                 </FadeIn>
            ) : null}

            {options && clientSecret && !paymentSuccess && (
                <FadeIn delay={0.1}>
                    <div className="bg-white border border-stone-200 shadow-sm">
                        <div className="p-8 md:p-10 bg-[#FAFAF9] border-b border-stone-200">
                             <div className="flex justify-between items-center mb-8">
                                <h3 className="text-[10px] uppercase tracking-[0.25em] font-bold text-neutral-900">02 / Secure Payment</h3>
                                <button onClick={resetForm} className="text-[10px] border-b border-neutral-300 pb-0.5 text-neutral-400 hover:text-black hover:border-black uppercase tracking-widest transition-colors">
                                    Edit Details
                                </button>
                            </div>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center"><span className="text-neutral-500 text-sm font-light">Principal ({numberOfShares} Shares)</span><span className="font-serif text-lg">${investmentAmount.toLocaleString()}</span></div>
                                <div className="flex justify-between items-center"><span className="text-neutral-400 text-xs font-light">Card Fee (2.9% + 0.30)</span><span className="text-neutral-400 font-mono text-xs">+${processingFee.toFixed(2)}</span></div>
                                <Separator className="bg-stone-200 my-4" />
                                <div className="flex justify-between items-center"><span className="font-bold text-neutral-900 uppercase tracking-widest text-xs">Total Charge</span><span className="font-serif text-3xl text-neutral-900">${totalCharge.toFixed(2)}</span></div>
                            </div>
                        </div>
                        <div className="p-8 md:p-10">
                            <Elements options={options} stripe={stripePromise}>
                                <CheckoutForm clientSecret={clientSecret} email={email} setPaymentSuccess={setPaymentSuccess} totalCharge={totalCharge} />
                            </Elements>
                        </div>
                    </div>
                </FadeIn>
            )}

             {/* --- CONCIERGE / WHATSAPP TRANSFER SECTION --- */}
             <FadeIn delay={0.2}>
                <div className="mt-8 p-8 md:p-10 border border-stone-200 bg-white text-center rounded-sm shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-stone-200 via-neutral-400 to-stone-200 opacity-20"></div>
                    
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F5F5F4] text-neutral-600 text-[9px] uppercase tracking-widest font-bold mb-6 border border-stone-200">
                      <ShieldCheck className="w-3 h-3" /> Zero-Fee Alternative
                    </div>
                    
                    <h4 className="font-serif text-2xl text-neutral-900 mb-4">Direct Transfer Concierge</h4>
                    <p className="text-sm text-neutral-500 font-light mb-8 max-w-md mx-auto leading-loose">
                        To avoid card fees, we accept direct transfers via Zelle, Venmo, or CashApp. Contact our team to arrange a secure transfer.
                    </p>
                    
                    <div className="flex justify-center">
                        <a 
                          href="https://wa.me/12144736888?text=I'd%20like%20to%20invest%20in%20the%20Alabama%20Livestock%20project%20via%20direct%20transfer." 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="group flex items-center gap-3 border border-stone-200 px-8 py-4 text-xs uppercase tracking-[0.2em] font-medium text-neutral-600 hover:bg-[#25D366] hover:border-[#25D366] hover:text-white transition-all duration-500"
                        >
                            <svg className="h-4 w-4 fill-current transition-colors" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                               <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                    </svg>
                                    <span>WhatsApp: +1 (214) 473-6888</span>
                                </a>
                            </div>
                        </div>
                    </FadeIn>
            
            <div className="text-center pt-12">
                <Link href="/agriculture/alabama-livestock" className="group inline-flex items-center gap-2 text-[10px] text-neutral-400 uppercase tracking-widest hover:text-neutral-900 transition-colors">
                    <ArrowLeft className="w-3 h-3 transition-transform duration-300 group-hover:-translate-x-1" /> 
                    Return to Project Page
                </Link>
            </div>
        </div>
      </main>
    </div>
  );
}

    