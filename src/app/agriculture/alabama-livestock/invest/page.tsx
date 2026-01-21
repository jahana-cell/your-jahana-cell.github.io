
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CreditCard, Loader2, PartyPopper, Wallet, Minus, Plus, User, CheckCircle, Info, Handshake, TrendingUp, Shield, DollarSign } from 'lucide-react';
import { useState, useEffect } from 'react';
import { createInvestmentPaymentIntent } from '@/app/stripe/actions';
import { FadeIn } from '@/components/fade-in';
import { useToast } from '@/hooks/use-toast';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { loadStripe, StripeElementsOptions } from '@stripe/stripe-js';
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { INVESTMENT_TERMS } from '@/lib/constants';
import Image from 'next/image';


const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const CheckoutForm = ({ clientSecret, email, name, setPaymentSuccess, totalCharge, shares }: { clientSecret: string, email: string, name: string, setPaymentSuccess: (success: boolean) => void; totalCharge: number; shares: number }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
        return_url: `${window.location.origin}/agriculture/livestock/invest?success=true`,
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
        description: `Your investment has been processed. A receipt has been sent to ${email}.`,
      });
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
        <PaymentElement />
        <Button type="submit" disabled={!stripe || loading} className="w-full h-12 text-lg">
            {loading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : <Wallet className="mr-2 h-5 w-5" />}
            Pay ${totalCharge.toFixed(2)}
        </Button>
        {error && <p className="text-sm text-destructive mt-2">{error}</p>}
    </form>
  );
};


export default function LivestockInvestmentPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [clientSecret, setClientSecret] = useState<string | null>(null);
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    const [numberOfShares, setNumberOfShares] = useState(1);
    const [totalCharge, setTotalCharge] = useState(0);
    const [investmentAmount, setInvestmentAmount] = useState(0);
    const [processingFee, setProcessingFee] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const investment = numberOfShares * 1000;
        const cardFee = (investment * 0.029) + 0.30;
        
        setInvestmentAmount(investment);
        setProcessingFee(cardFee);
        setTotalCharge(investment + cardFee);
    }, [numberOfShares]);
    
    const handleCustomerSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        if (!name || !email) {
            setError('Please enter your name and email.');
            return;
        }
        setLoading(true);
        
        const intentResult = await createInvestmentPaymentIntent({
            name,
            email,
            investmentDetails: {
                shares: numberOfShares,
                investmentAmount,
                totalCharge,
            }
        });
        
        if (intentResult.clientSecret) {
            setClientSecret(intentResult.clientSecret);
        } else {
            setError(intentResult.error || 'Failed to initialize payment.');
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
        },
    } : undefined;

  return (
    <div className="bg-muted/50 min-h-screen">
      <main className="container mx-auto px-4 py-16 md:py-24">
        <FadeIn>
          <Card className="max-w-2xl mx-auto shadow-xl overflow-hidden">
            <div className="relative h-48 w-full">
              <Image
                src="https://images.pexels.com/photos/28467961/pexels-photo-28467961.jpeg"
                alt="Sheep grazing in a field"
                fill
                sizes="100vw"
                className="object-cover"
                data-ai-hint="sheep field"
                priority
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
            <div className="p-6 md:p-8 text-center -mt-16 relative z-10">
                <div className="inline-block bg-background p-2 rounded-full shadow-lg mb-4">
                    <div className="bg-primary/10 p-4 rounded-full">
                        <DollarSign className="w-10 h-10 text-primary" />
                    </div>
                </div>
                <CardHeader className="p-0">
                    <CardTitle className="font-headline text-3xl md:text-4xl">Invest in the Community Livestock Fund</CardTitle>
                    <CardDescription className="text-lg mt-2">Become a partner in a mission-driven project to build a resilient food economy.</CardDescription>
                </CardHeader>
            </div>
            <CardContent className="p-6 md:p-8 pt-0 space-y-8">
              
              <div className="space-y-4">
                <h3 className="font-headline text-xl text-center">Key Investment Benefits</h3>
                <div className="grid sm:grid-cols-3 gap-4 text-center">
                    <div className="p-4 bg-background rounded-lg border">
                        <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
                        <p className="font-semibold">32% Projected ROI</p>
                    </div>
                    <div className="p-4 bg-background rounded-lg border">
                        <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
                        <p className="font-semibold">Asset-Secured & Insured</p>
                    </div>
                    <div className="p-4 bg-background rounded-lg border">
                        <Handshake className="w-8 h-8 text-primary mx-auto mb-2" />
                        <p className="font-semibold">Community-Driven Impact</p>
                    </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-headline text-xl text-center">Investment Terms</h3>
                <Card className="bg-background">
                    <CardContent className="p-4 text-sm space-y-2">
                        {INVESTMENT_TERMS.map(term => (
                            <div key={term.text} className="flex justify-between items-center">
                                <span className="text-muted-foreground">{term.text}</span>
                                <span className="font-medium text-right">{term.value}</span>
                            </div>
                        ))}
                    </CardContent>
                </Card>
              </div>

              <Separator />
                
              {paymentSuccess ? (
                    <div className="text-center p-4 rounded-lg bg-green-50 border border-green-200">
                        <PartyPopper className="mx-auto h-10 w-10 text-green-700 mb-2" />
                        <h3 className="font-bold text-green-800">Payment Successful!</h3>
                        <p className="text-sm text-green-700/80">Thank you for your investment. A receipt has been sent to your email.</p>
                        <Button onClick={resetForm} className="mt-4">Make Another Investment</Button>
                    </div>
                ) : !clientSecret ? (
                    <form onSubmit={handleCustomerSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input id="name" value={name} onChange={e => setName(e.target.value)} placeholder="Jane Doe" required/>
                        </div>
                        <div className="space-y-2">
                             <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="jane.doe@example.com" required/>
                        </div>
                        <div className="p-4 rounded-md bg-muted/50 my-6 space-y-3 text-sm">
                            <Label>Number of Shares ($1,000 per share)</Label>
                            <div className="flex items-center justify-center gap-4">
                                <Button size="icon" variant="outline" type="button" onClick={() => handleShareChange(-1)} disabled={numberOfShares <= 1}>
                                    <Minus className="h-4 w-4" />
                                </Button>
                                <div className="text-center">
                                    <div className="font-bold text-lg">{numberOfShares}</div>
                                    <div className="text-xs text-muted-foreground">Share(s)</div>
                                </div>
                                <Button size="icon" variant="outline" type="button" onClick={() => handleShareChange(1)}>
                                    <Plus className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                        {error && <p className="text-sm text-destructive">{error}</p>}
                        <Button type="submit" disabled={loading} className="w-full h-12 text-lg">
                          {loading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : <User className="mr-2 h-5 w-5" />}
                          Continue to Payment
                        </Button>
                    </form>
                ) : null}

                {options && clientSecret && !paymentSuccess && (
                     <div>
                        <div className="p-4 rounded-md bg-muted/50 mb-6 space-y-3 text-sm">
                            <div className="flex justify-between items-center">
                                <span className="text-muted-foreground">Investment Amount:</span>
                                <span className="font-medium">${investmentAmount.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-muted-foreground">Card Processing Fee (2.9% + $0.30):</span>
                                <span className="font-medium">+ ${processingFee.toFixed(2)}</span>
                            </div>
                            <Separator />
                            <div className="flex justify-between items-center font-bold text-base">
                                <span>Total Charge:</span>
                                <span className="text-primary">${totalCharge.toFixed(2)}</span>
                            </div>
                        </div>
                        <Elements options={options} stripe={stripePromise}>
                            <CheckoutForm 
                                clientSecret={clientSecret} 
                                email={email}
                                name={name}
                                shares={numberOfShares}
                                setPaymentSuccess={setPaymentSuccess}
                                totalCharge={totalCharge}
                            />
                        </Elements>
                    </div>
                )}
              
              <Separator />

              <div className="text-center p-4 rounded-lg bg-green-50 border border-green-200">
                  <div className="flex items-center justify-center gap-3 mb-4">
                     <Wallet className="w-5 h-5 text-green-700" />
                    <p className="text-sm font-semibold text-green-800">0% Fee Payment Options</p>
                  </div>
                 <p className="text-muted-foreground text-sm">To avoid transaction fees, you can pay via Zelle, Venmo, or CashApp.</p>
                 <p className="text-muted-foreground text-sm mt-2">Please send a text message to <a href="sms:2056162945" className="font-mono text-foreground underline hover:text-primary">205-616-2945</a> to request payment through one of these methods.</p>
              </div>

              <div className="text-center pt-6 border-t">
                <p className="text-sm text-muted-foreground">Have questions? <Link href="/contact?subject=Livestock Inquiry" className="text-primary underline hover:text-primary/80">Contact us</Link> or <Link href="/agriculture/livestock" className="text-primary underline hover:text-primary/80">learn more about the fund</Link>.</p>
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      </main>
    </div>
  );
}
