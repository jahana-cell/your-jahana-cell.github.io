
'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, TableCaption, TableFooter } from "@/components/ui/table";
import { FadeIn } from "@/components/fade-in";
import { BarChart, Scale, Users, FileText, DollarSign, TrendingUp, CheckCircle, XCircle, Award, Zap, Leaf, Anchor, ArrowRight, ShieldCheck, Target, Lightbulb, PieChart, AlertTriangle, HardHat, ChevronsRight, Milestone, Briefcase, Handshake, ShoppingCart, Tv, Newspaper, Construction } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const startupCosts = [
    { item: "DIY Walk-in Cooler Build", cost: "$1,650" },
    { item: "Processing Equipment", cost: "$2,500" },
    { item: "Admin & Licensing", cost: "~$50" },
];

const coolerBreakdown = [
    { item: "Insulation, Lumber, Sealant", cost: "$700" },
    { item: "Window A/C Unit (12k+ BTU)", cost: "$500" },
    { item: "CoolBot Pro Controller", cost: "$450" },
]

const equipmentBreakdown = [
    { item: "Stainless Steel Tables, Saws, Grinder (Used)", cost: "$1,500" },
    { item: "Chest Freezers (2, Used)", cost: "$700" },
    { item: "Knives, Wraps, Bags, Scale, etc.", cost: "$300" },
]

const SectionHeader = ({ icon: Icon, title, subtitle }: { icon: any, title: string, subtitle?: string }) => (
    <div className="mb-8 text-center">
        <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
            <Icon className="w-10 h-10 text-primary" />
        </div>
        <h2 className="text-3xl md:text-4xl font-headline font-bold">{title}</h2>
        {subtitle && <p className="mt-2 text-lg text-muted-foreground max-w-3xl mx-auto">{subtitle}</p>}
    </div>
);


export default function PlanAPage() {
  return (
    <div className="bg-muted/50">
        <header className="bg-background py-10">
            <div className="container mx-auto px-4 text-center">
                <p className="font-semibold text-primary">BUSINESS PLAN: MODEL A</p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight font-headline mt-2">
                    A Community Meat Initiative
                </h1>
                <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                    A Partnership between GrowShare Capital and Baraka Farm LLC
                </p>
            </div>
        </header>

      <main className="container mx-auto px-4 py-16 md:py-24 space-y-20">
        
        <FadeIn>
            <Alert variant="destructive" className="max-w-3xl mx-auto">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>This is an Estimate for Illustrative Purposes</AlertTitle>
                <AlertDescription>
                    The financial figures presented in this business plan are estimates based on current market conditions and are subject to change. This document is for illustrative purposes to show the possibility of the venture and is not final. Please check this page periodically for the most current information.
                </AlertDescription>
            </Alert>
        </FadeIn>

        <FadeIn>
            <section id="summary">
                <SectionHeader icon={FileText} title="Executive Summary" />
                <div className="prose prose-lg max-w-3xl mx-auto text-muted-foreground">
                    <p>This plan outlines a partnership between GrowShare Capital (acting as the "Investor Coordinator") and Baraka Farm LLC (the "Processor") to provide a community-focused meat processing service. GrowShare Capital will aggregate demand, manage logistics, and serve as the financial intermediary. Baraka Farm LLC will provide the physical facilities and labor.</p>
                    <p>The primary business model is based on "Custom Exempt" regulations from the Alabama Department of Agriculture and Industries (ADAI). This service is for animal owners' exclusive use, and all meat is labeled "NOT FOR SALE."</p>
                    <p>The cornerstone of this venture is the strategic investment in a low-cost DIY walk-in cooler, which is essential for food safety and meat quality. This plan also includes a financial analysis of an alternative "Commercial Sales" model to evaluate its potential profitability and highlight its different, more stringent legal requirements.</p>
                </div>
            </section>
        </FadeIn>

        <FadeIn>
             <section id="pros-cons">
                <SectionHeader icon={ShieldCheck} title="Pros and Cons of the Custom Exempt Model" />
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <Card className="bg-green-50 border-green-200"><CardHeader><h3 className="font-bold text-xl text-green-800 flex items-center gap-3"><Zap />Pros (Advantages)</h3></CardHeader><CardContent><ul className="list-disc list-inside space-y-2">
                        <li><strong>Community-Centric:</strong> Provides a needed service directly to a trusted network, fostering local food sovereignty.</li>
                        <li><strong>Quality and Process Control:</strong> Members have full transparency and control over the entire process.</li>
                        <li><strong>Lower Regulatory Bar:</strong> While still requiring registration and adherence to safety standards, the "Custom Exempt" model is less complex and costly than becoming a fully inspected facility.</li>
                        <li><strong>Clear Partnership Roles:</strong> The division of labor is distinct, allowing each partner to focus on their strengths.</li>
                    </ul></CardContent></Card>
                    <Card className="bg-red-50 border-red-200"><CardHeader><h3 className="font-bold text-xl text-red-800 flex items-center gap-3"><AlertTriangle />Cons (Disadvantages & Risks)</h3></CardHeader><CardContent><ul className="list-disc list-inside space-y-2">
                       <li><strong>Significant Upfront Investment:</strong> The venture requires a substantial initial capital investment in equipment.</li>
                        <li><strong>Regulatory Burden:</strong> Strict adherence to ADAI regulations is mandatory. Failure to comply can result in fines or shutdown.</li>
                        <li><strong>Single Point of Failure:</strong> The operation depends entirely on the Baraka Farm LLC facility.</li>
                        <li><strong>Reliant on Consistent Volume:</strong> Investment payback is directly tied to processing a consistent number of animals.</li>
                    </ul></CardContent></Card>
                </div>
            </section>
        </FadeIn>
        
        <FadeIn>
            <section id="partnership">
                <SectionHeader icon={Briefcase} title="Business Description & Partnership Roles" />
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-start">
                    <Card className="h-full">
                        <CardHeader>
                            <CardTitle>Coordinator: GrowShare Capital (acting as the "Investor Coordinator")</CardTitle>
                        </CardHeader>
                        <CardContent>
                           <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                <li>Organizes community members ("owners").</li>
                                <li>Manages all financial transactions.</li>
                                <li>Handles communication and scheduling.</li>
                           </ul>
                        </CardContent>
                    </Card>
                     <Card className="h-full">
                        <CardHeader>
                            <CardTitle>Processor: Baraka Farm LLC</CardTitle>
                        </CardHeader>
                        <CardContent>
                           <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                <li>Operates the physical slaughter and processing facility at Saleem Farms.</li>
                                <li>Responsible for humane slaughter, chilling, aging, cutting, and packaging.</li>
                           </ul>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </FadeIn>
        
        <FadeIn>
            <section id="operations">
                <SectionHeader icon={ChevronsRight} title="Operations Plan (Custom Exempt Model)" />
                <div className="max-w-2xl mx-auto space-y-4">
                    <Card><CardHeader><CardTitle>1. Coordination & Scheduling</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">GrowShare Capital gathers owners and schedules a processing day.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle>2. Animal Purchase</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">GrowShare Capital coordinates the purchase of live animals.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle>3. Slaughter</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">The animal is humanely slaughtered at Baraka Farm LLC's registered facility.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle>4. Chilling & Aging</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">The carcass is immediately chilled and then aged in the walk-in cooler (10-14 days for cattle, 3-7 for sheep/goats).</p></CardContent></Card>
                    <Card><CardHeader><CardTitle>5. Processing</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">The aged carcass is cut and packaged according to the owner's instructions.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle>6. Labeling & Pickup</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Every package is marked "NOT FOR SALE," frozen, and owners are notified for pickup.</p></CardContent></Card>
                </div>
            </section>
        </FadeIn>


        <FadeIn>
            <section id="financials-custom">
                <SectionHeader icon={BarChart} title="Financial Analysis: Custom Exempt Service Model" subtitle="This is the official, recommended business model." />
                <div className="max-w-4xl mx-auto space-y-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>Startup Costs (Investment in Baraka Farm LLC)</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Item</TableHead>
                                        <TableHead className="text-right">Estimated Cost</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {startupCosts.map((item) => (
                                        <TableRow key={item.item}>
                                            <TableCell>{item.item}</TableCell>
                                            <TableCell className="text-right font-mono">{item.cost}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                                <TableFooter>
                                    <TableRow className="font-bold text-lg">
                                        <TableCell>Total Estimated Startup Costs</TableCell>
                                        <TableCell className="text-right font-mono">$4,200</TableCell>
                                    </TableRow>
                                </TableFooter>
                            </Table>
                        </CardContent>
                    </Card>
                    <div className="grid md:grid-cols-2 gap-8">
                        <Card>
                             <CardHeader><CardTitle>DIY Cooler Breakdown</CardTitle></CardHeader>
                            <CardContent>
                                <Table>
                                    <TableBody>{coolerBreakdown.map(item=>(<TableRow key={item.item}><TableCell>{item.item}</TableCell><TableCell className="text-right font-mono">{item.cost}</TableCell></TableRow>))}</TableBody>
                                </Table>
                            </CardContent>
                        </Card>
                        <Card>
                             <CardHeader><CardTitle>Equipment Breakdown</CardTitle></CardHeader>
                            <CardContent>
                                <Table>
                                    <TableBody>{equipmentBreakdown.map(item=>(<TableRow key={item.item}><TableCell>{item.item}</TableCell><TableCell className="text-right font-mono">{item.cost}</TableCell></TableRow>))}</TableBody>
                                </Table>
                            </CardContent>
                        </Card>
                    </div>

                    
                    <Card className="bg-primary/5 border-primary/20">
                        <CardHeader>
                            <CardTitle>Investment Payback for Investors</CardTitle>
                            <CardDescription>The path to profitability is clear and direct. Your initial investment is recouped from the net profits generated by each animal processed for the community. Here's how it works:</CardDescription>
                        </CardHeader>
                        <CardContent className="prose prose-base max-w-none text-muted-foreground">
                            <h4 className="font-bold text-foreground">Payback Calculation:</h4>
                            <p>The payback model is straightforward: the initial $4,200 startup investment is recovered from the net profit generated by processing animals for the community. With a total net profit of $645 per cow processed, the investment is paid back once the venture has processed approximately 7 cows.</p>
                            <div className="my-4 p-4 bg-background rounded-md">
                                <p className="text-center font-mono text-lg">
                                    $4,200 (Investment) &divide; $645 (Profit per Cow) = <strong className="text-primary">6.51 Cows</strong>
                                </p>
                            </div>
                            
                            <h4 className="font-bold text-foreground mt-6">Path to Sustainable ROI:</h4>
                            <p>After this break-even point is reached, all subsequent net profits are distributed to investors according to their share, creating a sustainable, long-term return on your initial investment.</p>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </FadeIn>

        <FadeIn>
            <section id="financials-commercial">
                <SectionHeader icon={Scale} title="Financial Analysis: Alternative Commercial Sales Model" />
                <div className="max-w-4xl mx-auto space-y-8">
                    <Card className="border-destructive bg-red-50">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3 text-destructive"><AlertTriangle/> Critical Warning</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>To legally sell meat by the pound, the facility must be <strong>USDA or State-Inspected</strong>, not just "Custom Exempt." This requires a much larger investment to meet stricter regulatory standards.</p>
                        </CardContent>
                    </Card>
                    
                    <Card>
                        <CardHeader>
                            <CardTitle>Scenario 1: Selling "Hot Processed" Meat (Without a Cooler)</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="font-bold text-destructive mb-2">Conclusion: This is highly illegal and dangerous. The meat would be poor quality and unsafe. This model is unprofitable even before considering the immense legal fines and liability.</p>
                             <Table>
                                <TableBody>
                                    <TableRow><TableCell>Total Potential Revenue (400 lbs @ $5/lb)</TableCell><TableCell className="text-right font-mono">+$2,000</TableCell></TableRow>
                                    <TableRow><TableCell>Animal Purchase Cost</TableCell><TableCell className="text-right font-mono">-$1,600</TableCell></TableRow>
                                    <TableRow className="font-bold"><TableCell>Net Profit</TableCell><TableCell className="text-right font-mono">+$400</TableCell></TableRow>
                                    <TableRow><TableCell>GrowShare Capital Share (75%)</TableCell><TableCell className="text-right font-mono">$300</TableCell></TableRow>
                                    <TableRow><TableCell>Baraka Farm LLC Share (25% for labor cost)</TableCell><TableCell className="text-right font-mono">$100</TableCell></TableRow>
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>

                     <Card>
                        <CardHeader>
                            <CardTitle>Scenario 2: Selling "Cold Processed" Meat (With a Cooler)</CardTitle>
                        </CardHeader>
                        <CardContent>
                           <p className="font-bold mb-2">Conclusion: While this model is legal if the facility is fully inspected, the profit margin at a flat $5/lb rate is too low to justify the massive investment needed for an inspected facility. The payback period would be extremely long.</p>
                             <Table>
                                <TableBody>
                                    <TableRow><TableCell>Total Potential Revenue (400 lbs @ $5/lb)</TableCell><TableCell className="text-right font-mono">+$2,000</TableCell></TableRow>
                                    <TableRow><TableCell>Animal Purchase Cost</TableCell><TableCell className="text-right font-mono">-$1,600</TableCell></TableRow>
                                    <TableRow className="font-bold"><TableCell>Net Profit</TableCell><TableCell className="text-right font-mono">+$400</TableCell></TableRow>
                                    <TableRow><TableCell>GrowShare Capital Share (75%)</TableCell><TableCell className="text-right font-mono">$300</TableCell></TableRow>
                                    <TableRow><TableCell>Baraka Farm LLC Share (25% for labor cost)</TableCell><TableCell className="text-right font-mono">$100</TableCell></TableRow>
                                </TableBody>
                            </Table>
                            <div className="mt-4 prose prose-sm max-w-none">
                                <h5 className="font-semibold text-foreground">Payback Analysis on Initial Investment:</h5>
                                <p>To recoup the initial <span className="font-mono">$4,200</span> investment in the cooler and equipment, based on the <span className="font-mono">$300</span> investor share per animal, the venture would need to process <strong className="text-primary">14 animals</strong> just to break even.</p>
                                <p className="font-mono text-center my-2 p-2 bg-muted rounded-md">$4,200 (Investment) &divide; $300 (Investor Share) = 14 Animals</p>
                                <p>This extended payback period, combined with the high cost of becoming a fully inspected facility, makes this commercial model significantly less attractive than the Custom Exempt service model.</p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Path to Profitability in Commercial Sales</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground mb-4">The analysis shows that a flat rate of $5.00/lb is not a robust commercial model. To be profitable, the business would need to adopt differentiated pricing based on the cut of meat. For example:</p>
                             <Table>
                                <TableBody>
                                    <TableRow><TableCell>Ground Beef</TableCell><TableCell className="text-right font-mono">~$5-7 / lb</TableCell></TableRow>
                                    <TableRow><TableCell>Roasts</TableCell><TableCell className="text-right font-mono">~$8-12 / lb</TableCell></TableRow>
                                    <TableRow><TableCell>Steaks (Sirloin, Ribeye)</TableCell><TableCell className="text-right font-mono">~$15-25 / lb</TableCell></TableRow>
                                </TableBody>
                            </Table>
                             <p className="text-muted-foreground mt-4">This strategy would significantly increase the total revenue from a single animal, making the venture financially viable, though it requires a more complex business model and a significantly larger initial investment to become a fully inspected facility.</p>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </FadeIn>

        <FadeIn>
             <Card className="max-w-4xl mx-auto text-center bg-background border-2 border-primary/20">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Ready to Explore the Alternatives?</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-6">View the goat/lamb and poultry-focused business plans for models with different operational dynamics.</p>
                    <div className="flex justify-center gap-4">
                        <Button asChild>
                            <Link href="/agriculture/alabama-livestock/plan-b">View Plan B: Goat &amp; Lamb <ArrowRight className="ml-2 h-4 w-4"/></Link>
                        </Button>
                         <Button asChild variant="outline">
                            <Link href="/agriculture/alabama-livestock/plan-c">View Plan C: Poultry <ArrowRight className="ml-2 h-4 w-4"/></Link>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </FadeIn>

      </main>
    </div>
  );
}
