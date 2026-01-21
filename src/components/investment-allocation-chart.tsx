
"use client"

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { investmentAllocationData } from '@/lib/constants';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Lightbulb } from 'lucide-react';
import { useMediaQuery } from "@/hooks/use-media-query";


const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background border p-2 rounded-lg shadow-lg">
        <p className="font-bold">{label}</p>
        <p className="text-primary font-mono">${payload[0].value}</p>
      </div>
    );
  }
  return null;
};

export default function InvestmentAllocationChart() {
    const isMobile = useMediaQuery("(max-width: 768px)");

    const chartData = investmentAllocationData.map(item => ({
        ...item,
        name: isMobile ? (item.abbreviation || item.name) : item.name,
    }));

    return (
        <section id="investment-allocation" className="py-16 md:py-24 bg-muted/50">
            <div className="container mx-auto px-4 max-w-4xl">
                <Card className="border-accent/20 shadow-lg">
                    <CardHeader className="text-center">
                        <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                            <Lightbulb className="w-8 h-8 text-primary"/>
                        </div>
                        <CardTitle className="font-headline text-2xl md:text-3xl">What Your Investment Funds</CardTitle>
                        <CardDescription className="max-w-2xl mx-auto">
                            Each $1,000 investment share is a direct contribution to the sustainable growth and ethical management of the livestock program. This detailed allocation breaks down how every dollar is strategically used, from acquiring animals to ensuring their health and well-being, and supporting the farm's daily operations.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="w-full h-96">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart
                                    data={chartData}
                                    margin={{ top: 5, right: 20, left: -10, bottom: isMobile ? 40 : 5 }}
                                >
                                    <XAxis 
                                        dataKey="name" 
                                        stroke="hsl(var(--muted-foreground))" 
                                        fontSize={12} 
                                        tickLine={false} 
                                        axisLine={false} 
                                        interval={0}
                                        angle={isMobile ? -45 : 0}
                                        textAnchor={isMobile ? 'end' : 'middle'}
                                        dy={isMobile ? 10 : 0}
                                    />
                                    <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`}/>
                                    <Tooltip content={<CustomTooltip />} cursor={{fill: 'hsl(var(--muted))'}}/>
                                    <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                                        {investmentAllocationData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}
