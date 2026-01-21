
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, Droplets, Leaf, Package, 
  BookOpen, Sun, Wind, Scaling, FileText, BarChart2 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, TableFooter } from "@/components/ui/table";
import { Separator } from '@/components/ui/separator';

// Data
const marketDrivers = [
  { icon: Sun, title: "Wellness & Health Trend", description: "Rising consumer demand for natural, high-fat, and lactose-free dairy alternatives." },
  { icon: Leaf, title: "Premium & Artisanal Market", description: "Willingness to pay a premium for high-quality, locally-sourced, and ethically-produced food products." },
  { icon: Package, title: "Shelf Stability & Export", description: "Ghee's long shelf life makes it ideal for direct-to-consumer online sales and future export opportunities." },
];

const revenueProjections = {
    ghee: {
        units: 1000,
        price: 22.50,
        get revenue() { return this.units * this.price; },
        cogs: -9000,
        get profit() { return this.revenue + this.cogs; }
    },
    cheese: {
        units: 2000,
        price: 12.00,
        get revenue() { return this.units * this.price; },
        cogs: -7200,
        get profit() { return this.revenue + this.cogs; }
    },
    get totalRevenue() { return this.ghee.revenue + this.cheese.revenue; },
    get totalProfit() { return this.ghee.profit + this.cheese.profit; },
};

const startupCosts = {
    equipment: 15000,
    regulatory: 2500,
    initialSupplies: 5000,
    marketing: 2500,
    contingency: 5000,
    get total() { return this.equipment + this.regulatory + this.initialSupplies + this.marketing + this.contingency; }
};

export default function GheeManufacturingClientPage() {
    return (
        <div className="bg-white text-neutral-800 font-serif">

            {/* Hero Section */}
            <header className="relative h-[80vh] w-full">
                <Image
                    src="https://images.unsplash.com/photo-1573812461383-e5f8b759d12e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxnaGVlfGVufDB8fHx8MTc1ODU1NTY0Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Artisanal Ghee"
                    fill
                    sizes="100vw"
                    className="object-cover"
                    priority
                    data-ai-hint="ghee jars"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"/>
                <div className="absolute bottom-0 left-0 right-0 p-12 text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold leading-tight">Ghee & Specialty Cheese</h1>
                        <p className="mt-4 max-w-2xl text-lg text-neutral-200">A high-demand, value-added business case for a dairy production facility.</p>
                    </motion.div>
                </div>
            </header>
            
            <main className="py-24">
                <div className="container mx-auto max-w-5xl px-6">
                    
                    <div className="mb-16 text-center">
                         <Link href="/agriculture" className="text-sm uppercase tracking-widest text-neutral-500 hover:text-black transition-colors mb-4 inline-flex items-center gap-2">
                           <ArrowLeft size={16}/> Back to Agriculture
                         </Link>
                         <h2 className="text-4xl font-bold mt-2">Executive Summary</h2>
                    </div>

                    <div className="prose prose-lg lg:prose-xl max-w-none mx-auto text-neutral-600">
                        <p className="lead">This business case outlines a strategic investment into a value-added dairy processing facility specializing in two high-demand products: <strong>artisanal ghee</strong> and <strong>specialty cheeses</strong> (such as goat cheese). This venture is designed to integrate seamlessly with GrowShare Capital’s existing agricultural initiatives, transforming raw milk from our partner farms into premium, shelf-stable consumer goods. By capturing the value-add locally, we create a powerful new revenue stream, enhance the profitability of our entire agricultural ecosystem, and meet a growing consumer demand for high-quality, ethically-produced food products.</p>
                        
                        <blockquote className="border-l-4 border-primary bg-primary/5 p-6 rounded-r-lg">
                           The global ghee market is projected to reach $8.9 billion by 2028, growing at a CAGR of 6.2%. Our entry targets a niche segment of this market focused on quality, locality, and ethical sourcing.
                        </blockquote>
                    </div>

                    <Separator className="my-20" />

                    {/* Market Drivers */}
                    <section className="mb-20">
                        <h3 className="text-3xl font-bold text-center mb-12">Market Opportunity</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {marketDrivers.map((driver, i) => (
                                <Card key={i} className="text-center p-6 border-l-4 border-primary">
                                    <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                        <driver.icon className="w-8 h-8 text-primary"/>
                                    </div>
                                    <h4 className="font-bold text-lg mb-2">{driver.title}</h4>
                                    <p className="text-sm text-neutral-500">{driver.description}</p>
                                </Card>
                            ))}
                        </div>
                    </section>

                    <Separator className="my-20" />
                    
                    {/* Financials */}
                    <section>
                         <h3 className="text-3xl font-bold text-center mb-12">Financial Projections (Year 1)</h3>
                        <Card className="shadow-lg border-primary/20">
                            <Tabs defaultValue="projections">
                                <TabsList className="grid w-full grid-cols-2">
                                    <TabsTrigger value="projections">Revenue & Profit</TabsTrigger>
                                    <TabsTrigger value="costs">Startup Costs</TabsTrigger>
                                </TabsList>
                                <TabsContent value="projections" className="p-6">
                                     <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>Product</TableHead>
                                                <TableHead>Units Sold (Yr 1)</TableHead>
                                                <TableHead>Price/Unit</TableHead>
                                                <TableHead>Revenue</TableHead>
                                                <TableHead>COGS</TableHead>
                                                <TableHead className="text-right font-bold">Net Profit</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell>Artisanal Ghee</TableCell>
                                                <TableCell>{revenueProjections.ghee.units.toLocaleString()}</TableCell>
                                                <TableCell>${revenueProjections.ghee.price.toFixed(2)}</TableCell>
                                                <TableCell>${revenueProjections.ghee.revenue.toLocaleString()}</TableCell>
                                                <TableCell>(${Math.abs(revenueProjections.ghee.cogs).toLocaleString()})</TableCell>
                                                <TableCell className="text-right font-bold">${revenueProjections.ghee.profit.toLocaleString()}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Specialty Cheese</TableCell>
                                                <TableCell>{revenueProjections.cheese.units.toLocaleString()}</TableCell>
                                                <TableCell>${revenueProjections.cheese.price.toFixed(2)}</TableCell>
                                                <TableCell>${revenueProjections.cheese.revenue.toLocaleString()}</TableCell>
                                                <TableCell>(${Math.abs(revenueProjections.cheese.cogs).toLocaleString()})</TableCell>
                                                <TableCell className="text-right font-bold">${revenueProjections.cheese.profit.toLocaleString()}</TableCell>
                                            </TableRow>
                                        </TableBody>
                                        <TableFooter>
                                            <TableRow className="font-bold text-lg bg-primary/5">
                                                <TableCell colSpan={3}>Total</TableCell>
                                                <TableCell>${revenueProjections.totalRevenue.toLocaleString()}</TableCell>
                                                <TableCell></TableCell>
                                                <TableCell className="text-right">${revenueProjections.totalProfit.toLocaleString()}</TableCell>
                                            </TableRow>
                                        </TableFooter>
                                    </Table>
                                </TabsContent>
                                <TabsContent value="costs" className="p-6">
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>Category</TableHead>
                                                <TableHead className="text-right">Estimated Cost</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            <TableRow><TableCell>Processing & Packaging Equipment</TableCell><TableCell className="text-right">${startupCosts.equipment.toLocaleString()}</TableCell></TableRow>
                                            <TableRow><TableCell>Licensing & Regulatory Compliance</TableCell><TableCell className="text-right">${startupCosts.regulatory.toLocaleString()}</TableCell></TableRow>
                                            <TableRow><TableCell>Initial Supplies & Inventory</TableCell><TableCell className="text-right">${startupCosts.initialSupplies.toLocaleString()}</TableCell></TableRow>
                                            <TableRow><TableCell>Marketing & Brand Launch</TableCell><TableCell className="text-right">${startupCosts.marketing.toLocaleString()}</TableCell></TableRow>
                                            <TableRow><TableCell>Contingency Fund</TableCell><TableCell className="text-right">${startupCosts.contingency.toLocaleString()}</TableCell></TableRow>
                                        </TableBody>
                                        <TableFooter>
                                            <TableRow className="font-bold text-lg bg-primary/5">
                                                <TableCell>Total Estimated Startup Capital</TableCell>
                                                <TableCell className="text-right">${startupCosts.total.toLocaleString()}</TableCell>
                                            </TableRow>
                                        </TableFooter>
                                    </Table>
                                    <p className="text-xs text-center mt-4 text-neutral-500">
                                        With a net profit of ${revenueProjections.totalProfit.toLocaleString()} in Year 1, the project has a potential payback period of approximately 2 years.
                                    </p>
                                </TabsContent>
                            </Tabs>
                        </Card>
                    </section>
                </div>
            </main>
        </div>
    );
}
