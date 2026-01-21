
'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FadeIn } from "@/components/fade-in";
import { BarChart, Scale, Users, FileText, DollarSign, HardHat, PackageCheck, Lightbulb, PieChart, Target, ShieldCheck, TrendingUp, CheckCircle, XCircle, Egg, Award, Leaf, Zap, Anchor, ArrowRight, AlertTriangle, ChevronsRight, Milestone, Briefcase, ShoppingCart, Tv, Newspaper, Construction } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const broilerPlanAssumptions = [
    { metric: "Capacity", value: "100 broilers/batch" },
    { metric: "Batches Per Year", value: "6" },
    { metric: "Total Broilers", value: "600" },
    { metric: "Price Per Broiler", value: "$20" },
    { metric: "Total Revenue", value: "$12,000" },
];

const broilerPlanExpenses = [
  { item: "Chicks (600 @ $4/ea)", cost: "$2,400" },
  { item: "Feed", cost: "$3,600" },
  { item: "Utilities", cost: "$1,500" },
  { item: "Labor (Part-time)", cost: "$2,000" },
  { item: "Health & Supplies", cost: "$500" },
  { item: "Processing & Packaging", cost: "$1,000" },
  { item: "Total Annual Expenses", cost: "$11,000", isTotal: true },
];

const layerPlanAssumptions = [
    { metric: "Capacity", value: "500 layers" },
    { metric: "Eggs Per Year", value: "12,500 dozen" },
    { metric: "Price Per Dozen", value: "$4.50" },
    { metric: "Total Revenue", value: "$56,250" },
];

const layerPlanExpenses = [
  { item: "Pullets (500 layers)", cost: "$5,000" },
  { item: "Feed", cost: "$15,000" },
  { item: "Utilities & Supplies", cost: "$4,000" },
  { item: "Labor (1 part-time)", cost: "$15,000" },
  { item: "Health & Vaccination", cost: "$1,500" },
  { item: "Packaging", cost: "$2,000" },
  { item: "Total Annual Expenses", cost: "$42,500", isTotal: true },
];

const swotItems = {
  strengths: [
    { title: "Quick ROI", description: "A fast production cycle (6-8 weeks) allows for rapid returns on investment." },
    { title: "High Demand", description: "Consistent local and regional demand for fresh poultry and eggs ensures a steady market." },
    { title: "Scalability", description: "Operations can be scaled up or down relatively easily to match market demand and capital." }
  ],
  weaknesses: [
    { title: "Disease Risk", description: "Flocks are susceptible to diseases, which can lead to significant losses if not managed properly." },
    { title: "Feed Price Volatility", description: "Feed constitutes a major cost, and its price can fluctuate, impacting profitability." },
    { title: "Labor Intensive", description: "Requires consistent daily management for feeding, cleaning, and health monitoring." }
  ],
  opportunities: [
    { title: "Value-Added Products", description: "Potential to process and sell packaged cuts, smoked chicken, or organic/free-range products at a premium." },
    { title: "Government Grants", description: "Access to USDA grants and loans for small farms, especially with an optimal investment strategy." },
    { title: "Direct-to-Consumer Sales", description: "Build a strong brand and sell directly through farmers' markets or a subscription model, capturing higher margins." }
  ],
  threats: [
    { title: "Regulatory Changes", description: "Changes in food safety, environmental, or animal welfare regulations could increase operational costs." },
    { title: "Competition", description: "Competition from large-scale commercial poultry farms can put pressure on pricing." },
    { title: "Extreme Weather", description: "Heatwaves or severe cold can stress birds and impact production, requiring climate-controlled housing." }
  ]
};

const useOfFunds = [
    { item: "Modern Poultry Housing (Broilers & Layers)", allocation: "45%", description: "Constructing climate-controlled, biosecure coops to optimize bird health and production efficiency." },
    { item: "High-Quality Chicks & Pullets", allocation: "20%", description: "Sourcing genetically strong, disease-free birds from reputable hatcheries to ensure a productive flock." },
    { item: "Automated Feeding & Watering Systems", allocation: "15%", description: "Investing in automation to reduce labor costs, minimize feed waste, and ensure consistent nutrition." },
    { item: "Operational Runway & Value-Added Processing", allocation: "20%", description: "Covering initial feed, utilities, and labor, plus initial setup for on-site processing to capture higher margins." },
];

const processingCosts = [
    { item: "Basic Shade Structure", cost: "$500 - $1,500" },
    { item: "Stainless Steel Tables & Cones", cost: "$1,200 - $2,500" },
    { item: "Scalder & Plucker Machine", cost: "$1,000 - $2,000" },
    { item: "Water & Drainage Hookup", cost: "$1,000 - $2,500" },
];

const risks = [
    { risk: "Disease Outbreak (e.g., Avian Influenza)", mitigation: "Strict biosecurity protocols, all-in/all-out flock management, and regular veterinary oversight." },
    { risk: "Feed Cost Spikes", mitigation: "Bulk purchasing agreements with local mills and exploring on-farm feed formulation to stabilize costs." },
    { risk: "Extreme Weather Events", mitigation: "Investment in insulated, well-ventilated housing with backup power systems to protect flocks from temperature stress." },
    { risk: "Market Access & Competition", mitigation: "Developing a strong direct-to-consumer brand and securing contracts with local restaurants and retailers to create a loyal customer base." },
];

const SectionHeader = ({ icon: Icon, title, subtitle }: { icon: any, title: string, subtitle?: string }) => (
    <div className="mb-8 text-center">
        <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
            <Icon className="w-10 h-10 text-primary" />
        </div>
        <h2 className="text-3xl md:text-4xl font-headline font-bold">{title}</h2>
        {subtitle && <p className="mt-2 text-lg text-muted-foreground max-w-3xl mx-auto">{subtitle}</p>}
    </div>
);


export default function PlanCPage() {
  return (
    <div className="bg-muted/50">
        <header className="bg-background py-10">
            <div className="container mx-auto px-4 text-center">
                <p className="font-semibold text-primary">BUSINESS PLAN: MODEL C</p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight font-headline mt-2">
                    Poultry Production
                </h1>
                <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                    A streamlined model focused on maximizing broiler (meat) and layer (egg) production for quick returns.
                </p>
            </div>
        </header>

      <main className="container mx-auto px-4 py-16 md:py-24 space-y-20">
        
        <FadeIn>
            <Alert variant="destructive" className="max-w-3xl mx-auto">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Disclaimer: This is an Estimate</AlertTitle>
                <AlertDescription>
                    This business plan is for illustrative purposes to show the possibility of the venture and is not final. The financial figures presented are estimates based on current market conditions and are subject to change. Please check this page periodically for the most current information.
                </AlertDescription>
            </Alert>
        </FadeIn>

        <FadeIn>
            <section id="summary">
                <SectionHeader icon={FileText} title="Executive Summary" />
                <div className="prose prose-lg max-w-3xl mx-auto text-muted-foreground">
                    <p>This business plan details the <strong>"Poultry-Focused Plan (Model C),"</strong> a strategy designed for immediate positive cash flow and high potential net profit through a streamlined operational model. Given its quick production cycles and faster path to revenue, this plan is the recommended approach for the initial launch phase (Phase 1) of the agricultural enterprise.</p>
                    <p>The core of this model is a dual-focus operation: a broiler program for meat production and a layer program for egg production. This approach allows the team to master rapid production cycles, optimize processes, and build a strong market reputation. The successful implementation of this plan will create a solid foundation before potentially diversifying into more complex livestock with longer growth cycles.</p>
                </div>
            </section>
        </FadeIn>
        
        <FadeIn>
            <section id="market-overview">
                <SectionHeader icon={Target} title="Market Overview and Pain Points" subtitle="There is a consistent and growing demand for locally-sourced, fresh poultry and eggs as consumers seek alternatives to industrial-scale farming."/>
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 text-base">
                    <Card><CardContent className="p-6"><strong>Lack of Fresh, Local Poultry:</strong> Most consumers are limited to poultry from large-scale commercial operations, which often lacks the freshness of locally-raised products.</CardContent></Card>
                    <Card><CardContent className="p-6"><strong>Desire for Ethical Sourcing:</strong> Consumers are concerned about animal welfare and antibiotics, and are willing to pay a premium for ethically-raised products.</CardContent></Card>
                    <Card className="md:col-span-2 max-w-md mx-auto"><CardContent className="p-6"><strong>Limited Access to Farm-Fresh Eggs:</strong> The quality difference is significant, yet reliable local supply is often limited and inconsistent.</CardContent></Card>
                </div>
            </section>
        </FadeIn>

        <FadeIn>
            <section id="opportunity">
                <SectionHeader icon={Lightbulb} title="The Opportunity" subtitle="Current market dynamics present a clear opportunity for a well-managed local poultry operation."/>
                 <div className="max-w-5xl mx-auto">
                    <Card className="border-border bg-transparent shadow-none">
                        <CardContent className="p-4 md:p-6 grid md:grid-cols-3 gap-8 items-stretch">
                            <div className="p-6 rounded-lg bg-background/50 border flex flex-col">
                                <h3 className="font-bold text-xl mb-2 flex items-center gap-3"><TrendingUp /> Speed to Market</h3>
                                <p className="text-muted-foreground flex-grow">The 6-8 week broiler cycle allows for multiple revenue streams per year, generating cash flow much faster than other livestock.</p>
                            </div>
                            <div className="p-6 rounded-lg bg-background/50 border flex flex-col">
                                <h3 className="font-bold text-xl mb-2 flex items-center gap-3"><DollarSign/> Premium Demand</h3>
                                <p className="text-muted-foreground flex-grow">Tap directly into the consumer base willing to pay higher prices for locally-raised, ethically-sourced poultry and eggs.</p>
                            </div>
                            <div className="p-6 rounded-lg bg-background/50 border flex flex-col">
                                <h3 className="font-bold text-xl mb-2 flex items-center gap-3"><Users /> Community Brand</h3>
                                <p className="text-muted-foreground flex-grow">A D2C model builds brand loyalty and provides invaluable, direct feedback for continuous product improvement.</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </FadeIn>

        <FadeIn>
            <section id="solution">
                <SectionHeader icon={Award} title="Our Solution" subtitle="Our solution is a dual-pronged poultry operation that efficiently meets market demand while maximizing revenue potential."/>
                <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 text-center mt-8">
                    <Card className="flex flex-col">
                        <CardHeader>
                            <PackageCheck className="h-10 w-10 text-primary mx-auto mb-3"/>
                            <h3 className="font-bold text-xl">Broiler Operation (Meat)</h3>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-muted-foreground">A focused program for raising meat chickens with rapid production cycles, ensuring a consistent supply of fresh chicken for the local market.</p>
                        </CardContent>
                    </Card>
                    <Card className="flex flex-col">
                        <CardHeader>
                            <Egg className="h-10 w-10 text-primary mx-auto mb-3"/>
                            <h3 className="font-bold text-xl">Layer Operation (Eggs)</h3>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-muted-foreground">A supplementary program that provides a steady, year-round cash flow from the sale of farm-fresh eggs, a high-demand staple.</p>
                        </CardContent>
                    </Card>
                    <Card className="flex flex-col">
                        <CardHeader>
                            <Users className="h-10 w-10 text-primary mx-auto mb-3"/>
                            <h3 className="font-bold text-xl">Direct-to-Consumer Model</h3>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-muted-foreground">We sell directly to customers through farmers' markets, restaurant partnerships, and a farm-gate sales model, ensuring we capture the full retail margin.</p>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </FadeIn>

        <FadeIn>
            <section id="competitors">
                <SectionHeader icon={ChevronsRight} title="Competitive Landscape"/>
                <div className="max-w-4xl mx-auto overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow><TableHead>Competitor Type</TableHead><TableHead>Strengths</TableHead><TableHead>Weaknesses</TableHead><TableHead>How We Compete</TableHead></TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow><TableCell className="font-medium">Large Commercial Farms</TableCell><TableCell>Extreme scale, low cost</TableCell><TableCell>Lower quality perception, no transparency</TableCell><TableCell>On quality, freshness, ethics, and community connection.</TableCell></TableRow>
                            <TableRow><TableCell className="font-medium">Other Local/Backyard Farms</TableCell><TableCell>Similar local appeal</TableCell><TableCell>Inconsistent supply, limited scale</TableCell><TableCell>We offer a more professional, reliable, and scalable operation.</TableCell></TableRow>
                            <TableRow><TableCell className="font-medium">Supermarket (Organic)</TableCell><TableCell>Convenience, brand recognition</TableCell><TableCell>Higher price, less fresh, no local story</TableCell><TableCell>Fresher product with a compelling local story at a competitive price.</TableCell></TableRow>
                        </TableBody>
                    </Table>
                </div>
            </section>
        </FadeIn>
        
        <FadeIn>
             <section id="swot">
                <SectionHeader icon={ShieldCheck} title="SWOT Analysis" subtitle="A strategic overview of the poultry operation's internal strengths and weaknesses, along with external opportunities and threats." />
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <Card className="bg-green-50 border-green-200"><CardHeader><h3 className="font-bold text-xl text-green-800 flex items-center gap-3"><Zap />Strengths</h3></CardHeader><CardContent className="space-y-4">{swotItems.strengths.map(item => (<div key={item.title}><h4 className="font-semibold text-foreground">{item.title}</h4><p className="text-sm text-green-900/80">{item.description}</p></div>))}</CardContent></Card>
                    <Card className="bg-orange-50 border-orange-200"><CardHeader><h3 className="font-bold text-xl text-orange-800 flex items-center gap-3"><Anchor />Weaknesses</h3></CardHeader><CardContent className="space-y-4">{swotItems.weaknesses.map(item => (<div key={item.title}><h4 className="font-semibold text-foreground">{item.title}</h4><p className="text-sm text-orange-900/80">{item.description}</p></div>))}</CardContent></Card>
                    <Card className="bg-blue-50 border-blue-200"><CardHeader><h3 className="font-bold text-xl text-blue-800 flex items-center gap-3"><Leaf />Opportunities</h3></CardHeader><CardContent className="space-y-4">{swotItems.opportunities.map(item => (<div key={item.title}><h4 className="font-semibold text-foreground">{item.title}</h4><p className="text-sm text-blue-900/80">{item.description}</p></div>))}</CardContent></Card>
                    <Card className="bg-red-50 border-red-200"><CardHeader><h3 className="font-bold text-xl text-red-800 flex items-center gap-3"><AlertTriangle />Threats</h3></CardHeader><CardContent className="space-y-4">{swotItems.threats.map(item => (<div key={item.title}><h4 className="font-semibold text-foreground">{item.title}</h4><p className="text-sm text-red-900/80">{item.description}</p></div>))}</CardContent></Card>
                </div>
            </section>
        </FadeIn>
        
         <FadeIn>
            <section id="marketing">
                <SectionHeader icon={ShoppingCart} title="Marketing Strategy" subtitle="Our marketing will focus on building a strong local brand and fostering direct relationships with consumers."/>
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                    <Card><CardHeader><CardTitle className="flex items-center gap-3"><Tv/>Offline Marketing</CardTitle></CardHeader><CardContent><ul className="list-disc list-inside space-y-2"><li><strong>Farmers' Markets:</strong> Become the go-to vendor for fresh chicken and eggs.</li><li><strong>Restaurant Partnerships:</strong> Supply local chefs who prioritize high-quality, local ingredients.</li><li><strong>Farm-Gate Sales:</strong> Establish an on-site pickup location for pre-orders.</li></ul></CardContent></Card>
                    <Card><CardHeader><CardTitle className="flex items-center gap-3"><Newspaper/>Online Marketing</CardTitle></CardHeader><CardContent><ul className="list-disc list-inside space-y-2"><li><strong>Social Media:</strong> Showcase the clean, healthy environment of our flocks.</li><li><strong>Email Newsletter:</strong> Announce product availability and share recipes.</li><li><strong>Simple E-commerce:</strong> Implement a pre-ordering system for easy pickups.</li></ul></CardContent></Card>
                </div>
            </section>
        </FadeIn>

        <FadeIn>
            <section id="roadmap">
                <SectionHeader icon={Milestone} title="Roadmap for Launch & Growth"/>
                <div className="max-w-2xl mx-auto space-y-4">
                    <Card><CardHeader><CardTitle>Phase 1 (Q1-Q2): Foundation & Setup</CardTitle></CardHeader><CardContent><ul className="list-disc list-inside text-muted-foreground space-y-1"><li>Secure optimal-tier funding ($20,000+).</li><li>Construct modern, climate-controlled poultry housing.</li><li>Install automated feeding and watering systems.</li><li>Source initial flocks of high-quality chicks and pullets.</li></ul></CardContent></Card>
                    <Card><CardHeader><CardTitle>Phase 2 (Q3): First Production Cycle</CardTitle></CardHeader><CardContent><ul className="list-disc list-inside text-muted-foreground space-y-1"><li>Raise the first batch of 100 broilers to market weight.</li><li>Establish layer flock and begin egg collection and packaging.</li><li>Launch marketing efforts and establish a presence at one primary farmers' market.</li></ul></CardContent></Card>
                    <Card><CardHeader><CardTitle>Phase 3 (Q4 - Year 2): Scale and Optimize</CardTitle></CardHeader><CardContent><ul className="list-disc list-inside text-muted-foreground space-y-1"><li>Initiate continuous, rotating batches of broilers to ensure a constant supply.</li><li>Scale layer flock based on demand to optimize egg production.</li><li>Secure partnerships with 2-3 local restaurants or retailers.</li></ul></CardContent></Card>
                    <Card><CardHeader><CardTitle>Phase 4 (Year 3): Profitability & Expansion</CardTitle></CardHeader><CardContent><ul className="list-disc list-inside text-muted-foreground space-y-1"><li>Achieve profitability targets for both broiler and layer operations.</li><li>Implement value-added processing for packaged cuts.</li><li>Explore expansion into other poultry (e.g., turkeys) or a subscription model.</li></ul></CardContent></Card>
                </div>
            </section>
        </FadeIn>

        <FadeIn>
            <section id="management">
                <SectionHeader icon={Briefcase} title="Management Plan"/>
                <div className="prose prose-lg max-w-3xl mx-auto text-muted-foreground">
                    <p>The operational team will require expertise in poultry husbandry, biosecurity protocols, and direct-to-consumer sales. Initial management will be handled by the founding team, focusing on establishing efficient daily routines for flock care, egg collection, and sales. As the operation scales, a part-time position will be created to assist with labor-intensive tasks and market sales.</p>
                </div>
            </section>
        </FadeIn>
        
        <FadeIn>
            <section id="revenue-streams">
                <SectionHeader icon={Scale} title="Revenue Streams"/>
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
                    <Card><CardHeader><CardTitle>Broiler Sales (Meat)</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Revenue from the sale of whole processed chickens.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle>Layer Sales (Eggs)</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Consistent, year-round revenue from the sale of eggs by the dozen.</p></CardContent></Card>
                </div>
            </section>
        </FadeIn>

        <FadeIn>
            <section id="investment-tiers">
                <SectionHeader icon={Scale} title="Investment Tiers: Minimal vs. Optimal" />
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-stretch mt-8">
                     <div className="p-8 rounded-lg bg-background border border-border flex flex-col">
                        <h3 className="font-bold text-xl mb-4 flex items-center gap-3"><XCircle className="w-8 h-8 text-destructive" /> Minimal: ~$5,000</h3>
                        <p className="text-muted-foreground mb-4 flex-grow">This launches a small-scale operation with basic infrastructure. While it generates revenue, it limits efficiency and the ability to attract significant matching funds from government programs.</p>
                         <ul className="text-sm space-y-3 mt-6">
                            <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" /><span>Covers the cost of the initial flock and feed.</span></li>
                            <li className="flex items-start gap-3"><XCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" /><span>Relies on existing or makeshift infrastructure, limiting scale.</span></li>
                            <li className="flex items-start gap-3"><XCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" /><span>Ineligible for most matching grants that require robust infrastructure.</span></li>
                        </ul>
                    </div>
                     <div className="p-8 rounded-lg bg-primary/5 border-2 border-primary/20 shadow-lg flex flex-col">
                        <h3 className="font-bold text-xl mb-4 flex items-center gap-3"><Award className="w-8 h-8 text-primary" /> Optimal: $20,000+</h3>
                        <p className="text-foreground mb-4 flex-grow">An optimal investment funds robust, scalable infrastructure (e.g., automated systems, climate control). Most importantly, it positions the project to secure 1:1 matching funds from programs like the USDA's Value-Added Producer Grants.</p>
                         <ul className="text-sm space-y-3 mt-6">
                            <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" /><span>Enables construction of efficient, modern poultry housing.</span></li>
                            <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" /><span>Qualifies for matching grants, effectively doubling investment power.</span></li>
                            <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" /><span>Improves resilience against disease and weather, protecting the investment.</span></li>
                        </ul>
                    </div>
                </div>
            </section>
        </FadeIn>
        
        <FadeIn>
            <section id="use-of-funds">
                <SectionHeader icon={PieChart} title="Use of Funds (Optimal Investment)" subtitle="The financial plan is based on the Optimal Investment Tier of $20,000+ to qualify for matching grants and build a resilient operation."/>
                <div className="max-w-4xl mx-auto mt-8 overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-1/3">Category</TableHead>
                                <TableHead className="w-1/6">Allocation</TableHead>
                                <TableHead>Description</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {useOfFunds.map((item) => (
                                <TableRow key={item.item}>
                                    <TableCell className="font-medium">{item.item}</TableCell>
                                    <TableCell className="font-mono">{item.allocation}</TableCell>
                                    <TableCell>{item.description}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </section>
        </FadeIn>
        
        <FadeIn>
            <section id="financials">
                <SectionHeader icon={BarChart} title="Financial Projections" />
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <Card className="h-full">
                            <CardHeader>
                                <PackageCheck className="w-10 h-10 text-primary mb-2" />
                                <CardTitle className="font-headline text-2xl">Broiler Plan (Meat)</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div>
                                    <h4 className="font-bold flex items-center gap-2 mb-2"><BarChart/> Key Assumptions</h4>
                                    <div className="overflow-x-auto">
                                    <Table>
                                        <TableBody>
                                            {broilerPlanAssumptions.map((item) => (
                                                <TableRow key={item.metric}>
                                                    <TableCell className="font-medium">{item.metric}</TableCell>
                                                    <TableCell className="text-right">{item.value}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-bold flex items-center gap-2 mb-2"><Scale /> Expenses & Profitability</h4>
                                    <div className="overflow-x-auto">
                                     <Table>
                                        <TableBody>
                                            {broilerPlanExpenses.map((expense) => (
                                                <TableRow key={expense.item} className={expense.isTotal ? "font-bold bg-muted" : ""}>
                                                    <TableCell>{expense.item}</TableCell>
                                                    <TableCell className="text-right">{expense.cost}</TableCell>
                                                </TableRow>
                                            ))}
                                             <TableRow className="font-bold text-primary bg-primary/10">
                                                <TableCell>Net Annual Profit</TableCell>
                                                <TableCell className="text-right">$1,000</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="h-full">
                            <CardHeader>
                                 <Egg className="w-10 h-10 text-primary mb-2" />
                                <CardTitle className="font-headline text-2xl">Layer Plan (Eggs)</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div>
                                    <h4 className="font-bold flex items-center gap-2 mb-2"><BarChart/> Key Assumptions</h4>
                                    <div className="overflow-x-auto">
                                    <Table>
                                        <TableBody>
                                            {layerPlanAssumptions.map((item) => (
                                                <TableRow key={item.metric}>
                                                    <TableCell className="font-medium">{item.metric}</TableCell>
                                                    <TableCell className="text-right">{item.value}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-bold flex items-center gap-2 mb-2"><Scale /> Expenses & Profitability</h4>
                                    <div className="overflow-x-auto">
                                    <Table>
                                        <TableBody>
                                            {layerPlanExpenses.map((expense) => (
                                                <TableRow key={expense.item} className={expense.isTotal ? "font-bold bg-muted" : ""}>
                                                    <TableCell>{expense.item}</TableCell>
                                                    <TableCell className="text-right">{expense.cost}</TableCell>
                                                </TableRow>
                                            ))}
                                             <TableRow className="font-bold text-primary bg-primary/10">
                                                <TableCell>Net Annual Profit</TableCell>
                                                <TableCell className="text-right">$13,750</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                </div>
                 <Card className="mt-12">
                    <CardHeader>
                        <CardTitle className="font-headline text-2xl">Combined Operation Summary</CardTitle>
                    </CardHeader>
                     <CardContent>
                        <div className="overflow-x-auto">
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell className="font-medium">Total Gross Revenue</TableCell>
                                    <TableCell className="text-right font-mono">$68,250</TableCell>
                                </TableRow>
                                <TableRow className="font-bold">
                                    <TableCell>Total Net Profit</TableCell>
                                    <TableCell className="text-right font-mono text-primary text-lg">$14,750</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                        </div>
                    </CardContent>
                </Card>
            </section>
        </FadeIn>
        
        <FadeIn>
            <section id="processing">
                <SectionHeader icon={Construction} title="Value-Added Processing" subtitle="An on-site poultry processing setup allows for direct-to-consumer sales, ensuring freshness, adherence to Halal/Zabiha standards, and capturing higher profit margins." />
                <Card className="max-w-2xl mx-auto">
                    <CardHeader>
                        <CardTitle>Estimated Costs for a Minimal Processing Setup</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="overflow-x-auto">
                         <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Item</TableHead>
                                    <TableHead className="text-right">Estimated Cost</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {processingCosts.map(item => (
                                    <TableRow key={item.item}>
                                        <TableCell>{item.item}</TableCell>
                                        <TableCell className="text-right font-mono">{item.cost}</TableCell>
                                    </TableRow>
                                ))}
                                <TableRow className="font-bold bg-muted">
                                    <TableCell>Total Estimated Minimal Setup Cost</TableCell>
                                    <TableCell className="text-right font-mono">$3,700 - $8,500</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                        </div>
                    </CardContent>
                </Card>
            </section>
        </FadeIn>

        <FadeIn>
            <section id="risks">
                <SectionHeader icon={AlertTriangle} title="Risk & Mitigation" />
                <Card className="max-w-4xl mx-auto">
                    <CardContent className="p-0">
                         <div className="overflow-x-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Risk</TableHead>
                                        <TableHead>Mitigation Strategy</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {risks.map((item) => (
                                        <TableRow key={item.risk}>
                                            <TableCell className="font-medium">{item.risk}</TableCell>
                                            <TableCell>{item.mitigation}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                         </div>
                    </CardContent>
                </Card>
            </section>
        </FadeIn>

        <FadeIn>
             <Card className="max-w-4xl mx-auto text-center bg-background border-2 border-primary/20">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Return to the Ruminant Plan</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-6">Explore the alternative business model focused on the longer-term, high-value market of breeding goats and lambs.</p>
                    <Button asChild>
                        <Link href="/agriculture/alabama-livestock/plan-b">View Plan B: Goat & Lamb <ArrowRight className="ml-2 h-4 w-4"/></Link>
                    </Button>
                </CardContent>
            </Card>
        </FadeIn>

      </main>
    </div>
  );
}
