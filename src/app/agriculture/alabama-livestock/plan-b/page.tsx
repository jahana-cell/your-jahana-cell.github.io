'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, TableCaption } from "@/components/ui/table";
import { FadeIn } from "@/components/fade-in";
import { BarChart, Scale, Users, FileText, DollarSign, TrendingUp, CheckCircle, XCircle, Award, Zap, Leaf, Anchor, ArrowRight, ShieldCheck, Target, Lightbulb, PieChart, AlertTriangle, HardHat, ChevronsRight, Milestone, Briefcase, Handshake, ShoppingCart, Tv, Newspaper, Construction } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const useOfFunds = [
    { item: "High-Quality Breeding Stock", allocation: "30%", description: "Acquiring genetically superior, resilient animals to ensure rapid and healthy herd growth." },
    { item: "Infrastructure (Fencing, Shelters, Water)", allocation: "40%", description: "Building robust, secure, and efficient infrastructure to protect assets and streamline operations." },
    { item: "Operational Runway (Feed, Vet, Labor)", allocation: "20%", description: "Covering the initial operational costs for the first 6-9 months to ensure a smooth launch." },
    { item: "Value-Added Processing Setup", allocation: "10%", description: "Initial investment in equipment for on-site processing to capture higher margins." },
];

const financialProjections = [
  { year: 1, sold: 20, monthlyRevenue: "$267", annualRevenue: "$3,200", netProfit: "$200" },
  { year: 2, sold: 22, monthlyRevenue: "$293", annualRevenue: "$3,520", netProfit: "$520" },
  { year: 3, sold: 25, monthlyRevenue: "$333", annualRevenue: "$4,000", netProfit: "$800" },
];


const swotItems = {
  strengths: [
    { title: "High-Value Niche Market", description: "Goat and lamb command premium prices." },
    { title: "Hardiness & Adaptability", description: "Small ruminants are resilient and can thrive on diverse forage." },
    { title: "Multiple Revenue Streams", description: "Meat, breeding stock, and potentially fiber/hides." },
    { title: "Community-Investor Model", description: "Creates built-in demand and brand loyalty."}
  ],
  weaknesses: [
    { title: "Slower Growth Cycle", description: "Longer time to market compared to poultry." },
    { title: "Parasite Management", description: "Requires diligent health and pasture management." },
    { title: "Initial Capital Needs", description: "Infrastructure like fencing is a significant upfront cost." }
  ],
  opportunities: [
    { title: "Value-Added Processing", description: "On-site facility to capture higher margins." },
    { title: "Government Grants", description: "Access to USDA and local grants for small producers." },
    { title: "Agritourism", description: "Farm-gate sales and experiences to build the brand." }
  ],
  threats: [
    { title: "Predation", description: "Requires investment in protective measures (fencing, guard animals)." },
    { title: "Regulatory Hurdles", description: "Navigating processing and sales regulations can be complex." },
    { title: "Input Price Fluctuation", description: "Feed and veterinary costs can vary." }
  ]
};

const processingCosts = [
    { item: "Small Concrete Slab (8x10 ft)", cost: "$800 - $1,500" },
    { item: "Stainless Steel Sink", cost: "$400 - $800" },
    { item: "2 Stainless Steel Tables", cost: "$600 - $1,200" },
    { item: "Band Saw for Meat", cost: "$1,000 - $2,000" },
    { item: "Shade/Roof Structure", cost: "$500 - $1,500" },
    { item: "Plumbing & Electrical Hookup", cost: "$700 - $1,500" },
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


export default function PlanBPage() {
  return (
    <div className="bg-muted/50">
        <header className="bg-background py-10">
            <div className="container mx-auto px-4 text-center">
                <p className="font-semibold text-primary">BUSINESS PLAN: MODEL B</p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight font-headline mt-2">
                    Goat & Lamb Breeding Program
                </h1>
                <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                    A community-focused, sustainable model for breeding and selling small ruminants to high-value niche markets.
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
                    <p>This business plan outlines a comprehensive strategy for launching <strong>"Artisan Meats Collective,"</strong> a livestock breeding program focused on goats and sheep. The venture will commence with a foundational herd of 10 goats and 15 sheep, with the primary objective of scaling to a sustainable herd of 50 animals through managed breeding. The core of our model is selling high-quality, ethically-raised animals and meat directly to the community at fair market prices.</p>
                    <p>Artisan Meats Collective addresses persistent inefficiencies in the local meat supply chain, namely the high reliance on imports and the lack of fresh, locally-sourced options for goat and lamb. Our solution is a community-centric, direct-to-consumer model that ensures profitability, promotes food security, and builds a loyal customer base through an investment-driven approach. By integrating value-added processing, we aim to capture the full value chain, from pasture to plate.</p>
                </div>
            </section>
        </FadeIn>
        
        <FadeIn>
            <section id="market-overview">
                <SectionHeader icon={Target} title="Market Overview and Pain Points" subtitle="The U.S. market for goat and lamb meat is characterized by a significant supply deficit, creating clear opportunities for local producers."/>
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 text-base">
                    <Card><CardContent className="p-6"><strong>Limited Availability:</strong> Consumers seeking fresh (never frozen) goat and lamb often have few options outside of specialty butchers, which are not accessible in all areas.</CardContent></Card>
                    <Card><CardContent className="p-6"><strong>Lack of Transparency:</strong> The conventional meat supply chain is opaque. Consumers have little information about where their meat comes from or how the animals were raised.</CardContent></Card>
                    <Card><CardContent className="p-6"><strong>Price Inefficiency:</strong> A long supply chain with multiple middlemen inflates the final price for consumers.</CardContent></Card>
                    <Card><CardContent className="p-6"><strong>Barriers for Niche Markets:</strong> Consumers requiring specific processing standards, such as Halal/Zabiha, face challenges in finding reliable, certified local suppliers.</CardContent></Card>
                </div>
            </section>
        </FadeIn>

        <FadeIn>
            <section id="opportunity">
                <SectionHeader icon={Lightbulb} title="The Opportunity" subtitle="Structural inefficiencies in the market present a multi-pronged opportunity for a local, agile producer like Artisan Meats Collective."/>
                 <div className="max-w-5xl mx-auto">
                    <Card className="border-border bg-transparent shadow-none">
                        <CardContent className="p-4 md:p-6 grid md:grid-cols-2 gap-8 items-stretch">
                            <div className="p-6 rounded-lg bg-background/50 border flex flex-col">
                                <h3 className="font-bold text-xl mb-2 flex items-center gap-3"><Users /> Meeting Unmet Niche Demand</h3>
                                <p className="text-muted-foreground flex-grow">Directly serving ethnic and gourmet markets that are currently underserved and willing to pay a premium.</p>
                            </div>
                            <div className="p-6 rounded-lg bg-background/50 border flex flex-col">
                                <h3 className="font-bold text-xl mb-2 flex items-center gap-3"><Leaf/> Capturing the "Local Food" Movement</h3>
                                <p className="text-muted-foreground flex-grow">Tapping into the powerful consumer trend of supporting local, sustainable, and ethical agriculture.</p>
                            </div>
                            <div className="p-6 rounded-lg bg-background/50 border flex flex-col">
                                <h3 className="font-bold text-xl mb-2 flex items-center gap-3"><Handshake /> Building a Resilient D2C Model</h3>
                                <p className="text-muted-foreground flex-grow">Insulating the business from commodity market volatility by establishing direct relationships with a loyal customer base.</p>
                            </div>
                            <div className="p-6 rounded-lg bg-background/50 border flex flex-col">
                                <h3 className="font-bold text-xl mb-2 flex items-center gap-3"><TrendingUp /> Expanding Community Investment</h3>
                                <p className="text-muted-foreground flex-grow">Offering a tangible, local investment opportunity for community members who wish to participate in their local food system.</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </FadeIn>

        <FadeIn>
            <section id="solution">
                <SectionHeader icon={Award} title="Our Solution: Artisan Meats Collective" subtitle="Our model provides a one-stop, transparent solution for sourcing high-quality lamb and goat meat, built on three core pillars."/>
                <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 text-center mt-8">
                    <Card className="flex flex-col h-full bg-background border">
                        <CardHeader>
                            <Users className="h-10 w-10 text-primary mx-auto mb-3"/>
                            <h3 className="font-bold text-xl">Community-Centric Breeding</h3>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-muted-foreground">Our investors are our customers, creating a powerful cycle of support, loyalty, and guaranteed demand.</p>
                        </CardContent>
                    </Card>
                    <Card className="flex flex-col h-full bg-background border">
                        <CardHeader>
                            <DollarSign className="h-10 w-10 text-primary mx-auto mb-3"/>
                            <h3 className="font-bold text-xl">Direct-to-Consumer Sales</h3>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-muted-foreground">By eliminating intermediaries, we offer superior products at fair, stable prices while retaining higher profit margins.</p>
                        </CardContent>
                    </Card>
                    <Card className="flex flex-col h-full bg-background border">
                        <CardHeader>
                            <HardHat className="h-10 w-10 text-primary mx-auto mb-3"/>
                            <h3 className="font-bold text-xl">Value-Added Processing</h3>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-muted-foreground">An on-site facility allows for custom cuts, adherence to Halal standards, and complete quality control.</p>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </FadeIn>

        <FadeIn>
            <section id="competitors">
                <SectionHeader icon={ChevronsRight} title="Competitive Landscape"/>
                <div className="max-w-4xl mx-auto overflow-hidden border rounded-lg">
                    <Table>
                        <TableHeader>
                            <TableRow><TableHead>Competitor Type</TableHead><TableHead>Strengths</TableHead><TableHead>Weaknesses</TableHead><TableHead>How We Compete</TableHead></TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow><TableCell className="font-medium">Large Commercial Producers</TableCell><TableCell>Scale, efficiency, low cost</TableCell><TableCell>Opaque supply chain, frozen product</TableCell><TableCell>On freshness, quality, transparency, and community connection.</TableCell></TableRow>
                            <TableRow><TableCell className="font-medium">Other Local Small Farms</TableCell><TableCell>Similar local appeal</TableCell><TableCell>Lack processing, inconsistent supply</TableCell><TableCell>We offer a more professional, reliable supply with value-added processing.</TableCell></TableRow>
                            <TableRow><TableCell className="font-medium">Imported Meat (Retail)</TableCell><TableCell>Widely available, consistent</TableCell><TableCell>Frozen, long transit, untraceable origin</TableCell><TableCell>Our product is fresh, local, and ethically-raised, appealing to discerning buyers.</TableCell></TableRow>
                        </TableBody>
                    </Table>
                </div>
            </section>
        </FadeIn>
        
        <FadeIn>
             <section id="swot">
                <SectionHeader icon={ShieldCheck} title="SWOT Analysis" subtitle="A strategic overview of our operation's internal strengths and weaknesses, alongside external opportunities and threats." />
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <Card className="bg-green-50 border-green-200"><CardHeader><h3 className="font-bold text-xl text-green-800 flex items-center gap-3"><Zap />Strengths</h3></CardHeader><CardContent className="space-y-4">{swotItems.strengths.map(item => (<div key={item.title}><h4 className="font-semibold text-foreground">{item.title}</h4><p className="text-sm text-green-900/80">{item.description}</p></div>))}</CardContent></Card>
                    <Card className="bg-orange-50 border-orange-200"><CardHeader><h3 className="font-bold text-xl text-orange-800 flex items-center gap-3"><Anchor />Weaknesses</h3></CardHeader><CardContent className="space-y-4">{swotItems.weaknesses.map(item => (<div key={item.title}><h4 className="font-semibold text-foreground">{item.title}</h4><p className="text-sm text-orange-900/80">{item.description}</p></div>))}</CardContent></Card>
                    <Card className="bg-blue-50 border-blue-200"><CardHeader><h3 className="font-bold text-xl text-blue-800 flex items-center gap-3"><Leaf />Opportunities</h3></CardHeader><CardContent className="space-y-4">{swotItems.opportunities.map(item => (<div key={item.title}><h4 className="font-semibold text-foreground">{item.title}</h4><p className="text-sm text-blue-900/80">{item.description}</p></div>))}</CardContent></Card>
                    <Card className="bg-red-50 border-red-200"><CardHeader><h3 className="font-bold text-xl text-red-800 flex items-center gap-3"><AlertTriangle />Threats</h3></CardHeader><CardContent className="space-y-4">{swotItems.threats.map(item => (<div key={item.title}><h4 className="font-semibold text-foreground">{item.title}</h4><p className="text-sm text-red-900/80">{item.description}</p></div>))}</CardContent></Card>
                </div>
            </section>
        </FadeIn>
        
        <FadeIn>
            <section id="processing">
                <SectionHeader icon={Construction} title="Value-Added Processing" subtitle="An on-site processing facility is a key strategic advantage, allowing for higher profit margins, complete quality control, and the ability to serve niche markets." />
                <Card className="max-w-2xl mx-auto">
                    <CardHeader>
                        <CardTitle>Estimated Costs for a Minimal Slaughterhouse Setup</CardTitle>
                        <CardDescription>To process one sheep or goat at a time.</CardDescription>
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
                                {processingCosts.map(item => (
                                    <TableRow key={item.item}>
                                        <TableCell>{item.item}</TableCell>
                                        <TableCell className="text-right font-mono">{item.cost}</TableCell>
                                    </TableRow>
                                ))}
                                <TableRow className="font-bold bg-muted">
                                    <TableCell>Total Estimated Minimal Setup Cost</TableCell>
                                    <TableCell className="text-right font-mono">$4,000 - $8,500</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                         <p className="text-xs text-muted-foreground mt-4">These estimates are for a basic, functional setup. Costs can vary based on materials, labor, and specific equipment choices. This initial investment allows for immediate value-added processing, with the ability to scale as the operation grows.</p>
                    </CardContent>
                </Card>
            </section>
        </FadeIn>

        <FadeIn>
            <section id="marketing">
                <SectionHeader icon={ShoppingCart} title="Marketing Strategy" subtitle="Our marketing strategy is split between offline community-building (60%) and targeted online engagement (40%)."/>
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                    <Card><CardHeader><CardTitle className="flex items-center gap-3"><Tv/>Offline Marketing</CardTitle></CardHeader><CardContent><ul className="list-disc list-inside space-y-2"><li><strong>Farmers' Markets:</strong> Build face-to-face relationships and offer samples.</li><li><strong>Partnerships:</strong> Collaborate with local chefs, restaurants, and ethnic grocery stores.</li><li><strong>Event Sponsorship:</strong> Increase brand visibility at community events and food festivals.</li><li><strong>Farm Open Days:</strong> Host "Sponsor-a-Lamb" days and farm tours to build transparency.</li></ul></CardContent></Card>
                    <Card><CardHeader><CardTitle className="flex items-center gap-3"><Newspaper/>Online Marketing</CardTitle></CardHeader><CardContent><ul className="list-disc list-inside space-y-2"><li><strong>Social Media:</strong> Showcase daily farm life on Instagram and Facebook.</li><li><strong>Content Marketing:</strong> Maintain a blog with articles on sustainable farming and recipes.</li><li><strong>Email Marketing:</strong> Build an email list for product announcements and pre-orders.</li><li><strong>Local SEO:</strong> Optimize our website to appear in local searches for "lamb near me."</li></ul></CardContent></Card>
                </div>
            </section>
        </FadeIn>
        
        <FadeIn>
            <section id="roadmap">
                <SectionHeader icon={Milestone} title="Roadmap for Launch & Growth"/>
                <div className="max-w-2xl mx-auto space-y-4">
                    <Card><CardHeader><CardTitle>Phase 1 (Q1-Q2): Foundation & Infrastructure</CardTitle></CardHeader><CardContent><ul className="list-disc list-inside text-muted-foreground space-y-1"><li>Secure optimal-tier funding ($50,000+).</li><li>Acquire initial high-quality breeding stock.</li><li>Build out critical infrastructure (fencing, shelters, water).</li><li>Establish legal entity and obtain necessary permits.</li></ul></CardContent></Card>
                    <Card><CardHeader><CardTitle>Phase 2 (Q3-Q4): First Breeding Cycle & Market Entry</CardTitle></CardHeader><CardContent><ul className="list-disc list-inside text-muted-foreground space-y-1"><li>Initiate first managed breeding cycle.</li><li>Launch pre-launch marketing campaigns and build a waitlist.</li><li>Begin construction of the value-added processing facility.</li><li>Establish presence at one key local farmers' market.</li></ul></CardContent></Card>
                    <Card><CardHeader><CardTitle>Phase 3 (Year 2): Scaling Operations</CardTitle></CardHeader><CardContent><ul className="list-disc list-inside text-muted-foreground space-y-1"><li>First wave of offspring reach market weight.</li><li>Launch direct-to-consumer sales (whole, half, custom cuts).</li><li>Herd grows toward the target of 50 breeding animals.</li><li>Expand to more markets and establish restaurant partnerships.</li></ul></CardContent></Card>
                    <Card><CardHeader><CardTitle>Phase 4 (Year 3): Profitability & Diversification</CardTitle></CardHeader><CardContent><ul className="list-disc list-inside text-muted-foreground space-y-1"><li>Achieve stable production from a mature herd.</li><li>Reach profitability as outlined in financial projections.</li><li>Explore diversification into selling breeding stock.</li></ul></CardContent></Card>
                </div>
            </section>
        </FadeIn>

        <FadeIn>
            <section id="management">
                <SectionHeader icon={Briefcase} title="Management Plan"/>
                <div className="prose prose-lg max-w-3xl mx-auto text-muted-foreground">
                    <p>The success of the operation will depend on a team with expertise in livestock management, business operations, and marketing. Initially, the founding members will cover these roles, with a plan to hire specialized help as the operation scales. Key expertise required includes veterinary science, sustainable pasture management, direct-to-consumer marketing, and financial management.</p>
                </div>
            </section>
        </FadeIn>

        <FadeIn>
            <section id="revenue-streams">
                <SectionHeader icon={Scale} title="Revenue Streams"/>
                <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
                    <Card><CardHeader><CardTitle>Direct Meat Sales</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Sales of processed and packaged lamb and goat meat (by the cut, whole, or half animal) to consumers.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle>Live Animal Sales</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Sales to individuals or other farms for cultural events or personal breeding programs.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle>Breeding Stock Sales</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Sales of high-quality, genetically superior ewes, does, rams, and bucks to other producers.</p></CardContent></Card>
                </div>
            </section>
        </FadeIn>

        <FadeIn>
            <section id="use-of-funds">
                <SectionHeader icon={PieChart} title="Financial Plan & Use of Funds" subtitle="The financial plan is based on the Optimal Investment Tier of $50,000+ to ensure a resilient and scalable launch."/>
                <div className="max-w-4xl mx-auto mt-8 overflow-hidden border rounded-lg">
                    <Table>
                        <TableHeader><TableRow><TableHead className="w-1/3">Category</TableHead><TableHead className="w-1/6">Allocation</TableHead><TableHead>Description</TableHead></TableRow></TableHeader>
                        <TableBody>
                            {useOfFunds.map((item) => (
                                <TableRow key={item.item}><TableCell className="font-medium">{item.item}</TableCell><TableCell className="font-mono">{item.allocation}</TableCell><TableCell>{item.description}</TableCell></TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </section>
        </FadeIn>

        <FadeIn>
            <section id="financials">
                <SectionHeader icon={BarChart} title="Financial Projections" subtitle="Projected revenue and profit over the first three years, assuming a stable herd of 50 breeding animals is established after the initial growth period."/>
                <Card className="max-w-3xl mx-auto bg-primary/5 border-primary/10">
                    <CardContent className="p-6">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Year</TableHead>
                                    <TableHead>Animals Sold</TableHead>
                                    <TableHead>Monthly Rev.</TableHead>
                                    <TableHead>Annual Rev.</TableHead>
                                    <TableHead className="text-right">Net Profit</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {financialProjections.map((row) => (
                                    <TableRow key={row.year}>
                                        <TableCell className="font-bold">{row.year}</TableCell>
                                        <TableCell>{row.sold}</TableCell>
                                        <TableCell>{row.monthlyRevenue}</TableCell>
                                        <TableCell>{row.annualRevenue}</TableCell>
                                        <TableCell className="text-right font-bold text-primary text-lg">{row.netProfit}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                            <TableCaption className="text-left p-4">
                                Assumptions: Projections are based on an average market price of $160/animal. Net profit accounts for estimated annual costs of feed, veterinary care, and basic operational overhead. These figures do not include initial capital expenditures.
                            </TableCaption>
                        </Table>
                    </CardContent>
                </Card>
            </section>
        </FadeIn>

        <FadeIn>
             <Card className="max-w-4xl mx-auto text-center bg-background border-2 border-primary/20">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Ready to Explore the Alternative?</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-6">View the poultry-focused business plan for a model with a faster ROI and different operational dynamics.</p>
                    <Button asChild>
                        <Link href="/agriculture/alabama-livestock/plan-c">View Plan C: Poultry <ArrowRight className="ml-2 h-4 w-4"/></Link>
                    </Button>
                </CardContent>
            </Card>
        </FadeIn>
      </main>
    </div>
  );
}
