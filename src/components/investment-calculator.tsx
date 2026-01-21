
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function InvestmentCalculator() {
  const [investment, setInvestment] = useState(1000);
  const minInvestment = 1000;
  const maxInvestment = 100000;
  const perShareValue = 1000;
  
  const lowReturnRate = 0.30; 
  const highReturnRate = 0.35; 

  const handleSliderChange = (value: number[]) => {
    setInvestment(value[0]);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value.replace(/[^0-9]/g, ''));
    if (!isNaN(value)) {
        setInvestment(Math.max(minInvestment, Math.min(maxInvestment, value)));
    }
  };

  const investmentUnits = Math.floor(investment / perShareValue);
  const lowReturn = investment * lowReturnRate;
  const highReturn = investment * highReturnRate;
  
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <Card className="bg-card p-6 md:p-8 lg:p-10 rounded-xl shadow-lg border h-full">
      <CardHeader className="p-0">
        <CardTitle className="text-2xl md:text-3xl font-bold text-foreground font-headline">
          Calculate Your Potential Return
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0 pt-8">
        <div className="space-y-6">
          <div>
            <label htmlFor="investment-amount" className="block text-sm font-medium text-foreground mb-2">
              Investment Amount
            </label>
            <div className="relative">
                 <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                 <Input
                    id="investment-amount"
                    type="text"
                    value={investment.toLocaleString()}
                    onChange={handleInputChange}
                    className="w-full text-2xl font-bold font-headline text-primary pl-6 h-12"
                    min={minInvestment}
                    max={maxInvestment}
                  />
            </div>
            <Slider
              value={[investment]}
              onValueChange={handleSliderChange}
              min={minInvestment}
              max={maxInvestment}
              step={1000}
              className="mt-4"
            />
          </div>

          <div className="space-y-4 rounded-lg bg-muted/50 p-4">
            <p className="text-center font-semibold text-muted-foreground">Projected Annual Return</p>
            <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                    <p className="text-sm text-muted-foreground">Investment Shares</p>
                    <p className="text-2xl font-bold text-primary">{investmentUnits}</p>
                </div>
                <div>
                    <p className="text-sm text-muted-foreground">Livestock Return</p>
                    <p className="text-2xl font-bold text-primary">{investmentUnits} <span className="text-lg">goat/sheep</span></p>
                </div>
            </div>
             <div className="text-center">
                <p className="text-sm text-muted-foreground">Est. Annual Value ({lowReturnRate*100}-{highReturnRate*100}%)</p>
                <p className="text-2xl font-bold text-primary">{formatCurrency(lowReturn)} - {formatCurrency(highReturn)}</p>
            </div>
          </div>
          
          <Button className="w-full" size="lg" asChild>
             <Link href="#secure">Invest Now</Link>
          </Button>
          
        </div>
      </CardContent>
    </Card>
  );
}
