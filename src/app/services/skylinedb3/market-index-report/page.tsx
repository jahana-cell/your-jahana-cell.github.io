
'use client';

import Link from 'next/link';
import { ArrowLeft, BarChart2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function MarketIndexReportPage() {
    const costData = [
        { category: "Single-Family Residential", low: 150, high: 220 },
        { category: "Multi-Family (Wood Frame)", low: 130, high: 190 },
        { category: "Multi-Family (Steel/Concrete)", low: 180, high: 280 },
        { category: "Commercial Retail Shell", low: 90, high: 150 },
        { category: "Commercial Office Fit-Out", low: 75, high: 130 },
    ];

    return (
        <div className="bg-white min-h-screen">
            <div className="container mx-auto max-w-4xl px-6 py-24 md:py-32">
                 <div className="mb-12">
                    <Link href="/services/skylinedb3" className="group inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-black transition-colors">
                        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                        Back to SkylineDB3
                    </Link>
                </div>

                <header className="mb-16 text-center">
                    <p className="text-base font-semibold uppercase tracking-widest text-amber-700 mb-2">2026 Data Analysis</p>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-neutral-900">Market Index Report</h1>
                    <p className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">A real-time cost analysis for regional workforce housing and commercial development across the Delta region.</p>
                </header>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3">
                            <BarChart2 className="w-6 h-6 text-primary" />
                            Estimated Cost Per Square Foot (2025-2026)
                        </CardTitle>
                        <CardDescription>
                            These figures represent estimated hard construction costs for the Memphis, TN and Blytheville, AR markets. They exclude land acquisition, soft costs (design, permits), and site development.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Project Category</TableHead>
                                    <TableHead className="text-right">Low-End Estimate</TableHead>
                                    <TableHead className="text-right">High-End Estimate</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {costData.map((item, index) => (
                                    <TableRow key={index}>
                                        <TableCell className="font-medium">{item.category}</TableCell>
                                        <TableCell className="text-right font-mono">${item.low.toFixed(2)} / sqft</TableCell>
                                        <TableCell className="text-right font-mono">${item.high.toFixed(2)} / sqft</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>

                 <div className="mt-12 text-sm text-neutral-500 border-l-4 border-neutral-200 pl-4">
                    <h4 className="font-bold text-neutral-700 mb-2">Disclaimer</h4>
                    <p>
                        The cost estimates provided are for informational purposes only and are based on current market conditions, which are subject to change. Actual project costs can vary significantly based on material selection, site conditions, labor availability, and project complexity. SkylineDB3 provides project-specific, detailed cost estimates as part of our comprehensive design-build services.
                    </p>
                </div>

            </div>
        </div>
    );
}
