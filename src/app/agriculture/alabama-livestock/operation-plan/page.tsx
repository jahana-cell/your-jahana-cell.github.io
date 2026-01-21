
'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, TableCaption, TableFooter } from "@/components/ui/table";
import { FadeIn } from "@/components/fade-in";
import { BarChart, Scale, Users, FileText, DollarSign, TrendingUp, CheckCircle, XCircle, Award, Zap, Leaf, Anchor, ArrowRight, ShieldCheck, Target, Lightbulb, PieChart, AlertTriangle, HardHat, ChevronsRight, Milestone, Briefcase, Handshake, ShoppingCart, Tv, Newspaper, Construction, Dog, Syringe, ClipboardCheck, Calendar, Wallet, Landmark as LandmarkIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin } from 'lucide-react';
import { Landmark } from "lucide-react";
import { AgricultureNav } from "@/components/agriculture-nav";

const SectionHeader = ({ icon: Icon, title, subtitle }: { icon: any, title: string, subtitle?: string }) => (
    <div className="mb-8 text-center">
        <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
            <Icon className="w-10 h-10 text-primary" />
        </div>
        <h2 className="text-3xl md:text-4xl font-headline font-bold">{title}</h2>
        {subtitle && <p className="mt-2 text-lg text-muted-foreground max-w-3xl mx-auto">{subtitle}</p>}
    </div>
);

const llcFormationCosts = [
    { item: "Name Reservation", cost: "$28" },
    { item: "Certificate of Formation", cost: "$200" },
    { item: "Initial Business Privilege Tax", cost: "$100" },
    { item: "Legal Consultation (optional but recommended)", cost: "$500 - $1,500" },
];
const totalLlcCost = 28 + 200 + 100;

const lawyerStartupCosts = [
    { item: "Initial Consultation & LLC Formation", cost: "$500 - $1,200" },
    { item: "Drafting Custom Operating Agreement (10 members)", cost: "$2,500 - $5,000+" },
    { item: "Land Purchase or Lease Agreement Review", cost: "$750 - $1,500" },
];

const cpaStartupCosts = [
    { item: "Business Structure & Tax Consultation", cost: "$400 - $800" },
    { item: "Accounting System Setup (e.g., QuickBooks)", cost: "$500 - $1,000" },
];

const cpaAnnualCosts = [
    { item: "Annual Tax Preparation (Form 1065 & K-1s)", cost: "$1,200 - $2,500" },
    { item: "Quarterly Bookkeeping Review & Tax Planning", cost: "$600 - $1,500" },
];

const starterFlock = [
    { item: "48 Quality Ewes", price: "$350/head", total: "$16,800" },
    { item: "2 Quality Rams", price: "$600/head", total: "$1,200" },
];
const totalLivestockCost = 16800 + 1200;

const infraCosts = [
    { item: "Woven Wire Fencing", cost: "$5 - $10 / foot installed" },
    { item: "Well Drilling", cost: "$5,000 - $15,000+" },
    { item: "Handling System (Corral, Chute)", cost: "$2,500 - $6,000" },
    { item: "Used Tractor with Loader", cost: "$15,000 - $40,000" },
    { item: "Used Bush Hog/Mower", cost: "$1,500 - $4,000" },
    { item: "Used Livestock Trailer", cost: "$3,000 - $8,000" },
];

const initialInvestmentPurchase = [
    { item: "LLC Formation", cost: 400 },
    { item: "Land Purchase (30 acres)", cost: 120000 },
    { item: "Livestock (50-head flock)", cost: 18000 },
    { item: "Fencing (Perimeter & Cross)", cost: 20000 },
    { item: "Handling System", cost: 4000 },
    { item: "Used Tractor & Mower", cost: 22000 },
    { item: "Used Livestock Trailer", cost: 5000 },
    { item: "Water System Installation", cost: 6000 },
    { item: "Initial Hay and Feed", cost: 3000 },
];
const totalInitialInvestmentPurchase = initialInvestmentPurchase.reduce((acc, item) => acc + item.cost, 0);
const investmentPerMemberPurchase = totalInitialInvestmentPurchase / 10;

const initialInvestmentLease = [
    { item: "LLC Formation", cost: 400 },
    { item: "Land Lease (First Year, 30 acres)", cost: 720 },
    { item: "Livestock (50-head flock)", cost: 18000 },
    { item: "Fencing (Perimeter & Cross)", cost: 20000 },
    { item: "Handling System", cost: 4000 },
    { item: "Used Tractor & Mower", cost: 22000 },
    { item: "Used Livestock Trailer", cost: 5000 },
    { item: "Water System Installation", cost: 6000 },
    { item: "Initial Hay and Feed", cost: 3000 },
];
const totalInitialInvestmentLease = initialInvestmentLease.reduce((acc, item) => acc + item.cost, 0);
const investmentPerMemberLease = totalInitialInvestmentLease / 10;


const annualOperatingCosts = [
    { item: "Hay", cost: "$2,500" },
    { item: "Supplemental Feed & Minerals", cost: "$5,500" },
    { item: "Veterinary Care", cost: "$2,500" },
    { item: "Land Lease", cost: "$720" },
    { item: "Insurance", cost: "$1,500" },
    { item: "Fuel & Maintenance", cost: "$2,000" },
    { item: "Marketing/Sales", cost: "$1,000" },
    { item: "Utilities", cost: "$800" },
    { item: "Miscellaneous", cost: "$1,000" },
];
const totalAnnualOperatingCosts = annualOperatingCosts.reduce((acc, item) => acc + parseFloat(item.cost.replace('$', '').replace(',', '')), 0);

const marketingCosts = [
    { item: "Basic Website with E-commerce", cost: "$250 - $500 / year" },
    { item: "Logo Design", cost: "$50 - $300" },
    { item: "Business Cards & Brochures", cost: "$100 - $200" },
    { item: "Farmers' Market Kit (Canopy, Banner)", cost: "$200 - $400" },
    { item: "Farmers' Market Stall Fees", cost: "$25 - $50 / day" },
];

const processingCosts = [
    { item: "Harvest Fee (Kill Fee)", cost: "$75 - $125 / head" },
    { item: "Basic Cut & Wrap Fee", cost: "$1.10 - $1.50 / lb hanging weight" },
    { item: "Vacuum Sealing (add-on)", cost: "$0.10 - $0.25 / lb" },
    { item: "Sausage Making (add-on)", cost: "$2.00 - $4.00 / lb" },
    { item: "On-Farm Chest Freezer (20-25 cu ft)", cost: "$800 - $1,200" },
];

const riskCosts = [
    { item: "Livestock Guardian Dog (Puppy)", cost: "$800 - $1,500" },
    { item: "General Farm Liability Insurance", cost: "$800 - $2,000 / year" },
    { item: "Veterinary Emergency Fund (Recommended)", cost: "$1,000 - $2,500" },
];

const healthCosts = [
    { item: "Scrapie Tags", cost: "$1.50 - $2.50 / tag" },
    { item: "Tag Applicator Tool", cost: "$25 - $40" },
    { item: "Veterinary Farm Call Fee", cost: "$85 - $150 / visit" },
    { item: "CD&T Vaccine", cost: "$0.75 - $1.50 / dose" },
];

const savedCosts = [
    { item: "LLC Formation & Legal Fees", saved: "$4,000 - $8,000" },
    { item: "CPA & Accounting Setup", saved: "$900 - $1,800" },
    { item: "Website, Logo & Marketing Materials", saved: "$500 - $1,500" },
];


export default function SheepAndLambPlanPage() {
  return (
    <div className="bg-muted/50">
        <header className="bg-background py-10">
            <div className="container mx-auto px-4 text-center">
                <p className="font-semibold text-primary">DETAILED BUSINESS PLAN</p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight font-headline mt-2">
                    Launching a Thriving Sheep &amp; Lamb Operation in Alabama
                </h1>
                <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                    A comprehensive guide for a 10-member LLC to establish a successful and sustainable sheep farm.
                </p>
            </div>
        </header>

      <main className="container mx-auto px-4 py-16 md:py-24 space-y-20">
        <div className="max-w-5xl mx-auto -mt-12">
            <AgricultureNav />
        </div>

        <FadeIn>
            <section id="growshare-advantage">
                <Card className="max-w-4xl mx-auto bg-primary/5 border-primary/20 shadow-xl">
                    <CardHeader>
                        <SectionHeader icon={Handshake} title="The GrowShare Capital Advantage: Your Strategic Partner" />
                        <CardDescription className="text-center text-lg -mt-4">
                            This plan details the steps to start from scratch. However, by partnering with GrowShare Capital, you bypass many complexities and costs by leveraging our existing infrastructure.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="grid md:grid-cols-2 gap-8">
                        <div className="flex items-start gap-4">
                            <div className="bg-background p-3 rounded-lg mt-1 shadow">
                                <Wallet className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg">Save on Startup Costs</h4>
                                <p className="text-sm text-muted-foreground">Operate under the GrowShare Capital LLC, eliminating the need and cost of forming your own legal entity, drafting complex operating agreements, and securing separate legal and CPA services.</p>
                            </div>
                        </div>
                         <div className="flex items-start gap-4">
                            <div className="bg-background p-3 rounded-lg mt-1 shadow">
                                <Tv className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg">Instant Marketing & Branding</h4>
                                <p className="text-sm text-muted-foreground">Leverage our established brand, professional website, and marketing strategies. We provide professionally designed flyers, social media promotion, and a built-in audience from day one.</p>
                            </div>
                        </div>
                         <div className="flex items-start gap-4">
                            <div className="bg-background p-3 rounded-lg mt-1 shadow">
                                <LandmarkIcon className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg">Streamlined Access to Financing</h4>
                                <p className="text-sm text-muted-foreground">Leverage our established relationships and expertise to navigate and secure specialized agricultural financing, including loans from Alabama Farm Credit, USDA FSA programs, and value-added producer grants.</p>
                            </div>
                        </div>
                        <div className="md:col-span-2">
                             <Card className="bg-background">
                                <CardHeader>
                                    <CardTitle>Estimated Startup Savings</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="overflow-x-auto">
                                        <Table>
                                            <TableBody>
                                                {savedCosts.map((item) => (
                                                    <TableRow key={item.item}>
                                                        <TableCell className="font-medium">{item.item}</TableCell>
                                                        <TableCell className="text-right font-mono">{item.saved}</TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                            <TableFooter>
                                                <TableRow className="font-bold text-lg bg-green-50 text-green-700">
                                                    <TableCell>Total Potential Savings</TableCell>
                                                    <TableCell className="text-right font-mono">$5,400 - $11,300</TableCell>
                                                </TableRow>
                                            </TableFooter>
                                        </Table>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </CardContent>
                    <CardFooter className="text-center block pt-6">
                        <p className="text-sm text-muted-foreground">Focus on what you do best—raising healthy livestock—while we handle the corporate and marketing complexities.</p>
                    </CardFooter>
                </Card>
            </section>
        </FadeIn>
        
        <FadeIn>
            <section id="business-structure">
                <SectionHeader icon={Briefcase} title="Business Structure: A 10-Member Agricultural LLC" subtitle="An LLC offers personal liability protection and management flexibility, making it ideal for this venture." />
                <div className="max-w-4xl mx-auto space-y-8">
                    <Card>
                        <CardHeader><CardTitle>A. Forming the LLC in Alabama</CardTitle></CardHeader>
                        <CardContent>
                             <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                <li><strong>Name Reservation:</strong> The first step is to choose a unique name for your LLC and reserve it with the Alabama Secretary of State. The reservation fee is approximately $28 online.</li>
                                <li><strong>Certificate of Formation:</strong> File the Certificate of Formation with the Alabama Secretary of State. The filing fee is $200. This document officially creates your LLC.</li>
                                <li><strong>Registered Agent:</strong> You must appoint a registered agent in Alabama to receive legal documents. This can be one of the members or a professional service.</li>
                                <li><strong>Federal Employer Identification Number (EIN):</strong> Obtain a free EIN from the IRS. This is essential for tax purposes, opening a business bank account, and hiring employees.</li>
                                <li><strong>Business Privilege Tax:</strong> Alabama imposes a Business Privilege Tax. An initial return is due within 2.5 months of formation. The minimum tax is $100.</li>
                            </ul>
                        </CardContent>
                         <CardFooter>
                            <p className="text-sm text-muted-foreground"><strong>Estimated Cost of LLC Formation:</strong> Approximately $350 - $500, including filing fees and the initial Business Privilege Tax.</p>
                         </CardFooter>
                    </Card>
                     <Card>
                        <CardHeader><CardTitle>B. The Operating Agreement: The Blueprint for Your 10-Member LLC</CardTitle></CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground mb-4">A comprehensive operating agreement is crucial for a 10-member LLC to prevent future disputes and outline the operational framework. Key provisions must include:</p>
                             <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                <li>Member Contributions and Ownership: Clearly define the initial capital contribution of each of the 10 members and their corresponding ownership percentages.</li>
                                <li>Profit and Loss Distribution: Detail how profits and losses will be allocated among the members. This can be based on ownership percentage or other agreed-upon metrics.</li>
                                <li>Management Structure: Specify whether the LLC will be member-managed (all 10 members have a say in daily operations) or manager-managed (a smaller group or an individual is elected to manage the farm).</li>
                                <li>Voting Rights: Establish the voting power of each member, typically proportional to their ownership interest.</li>
                                <li>Roles and Responsibilities: Clearly outline the specific duties and responsibilities of each member (e.g., animal care, financial management, marketing) to ensure accountability.</li>
                                <li>Buy-Sell Agreement: Include provisions for what happens if a member wants to leave the LLC, passes away, or becomes disabled. This will dictate how their ownership interest is valued and transferred.</li>
                                <li>Dispute Resolution: Outline a process for resolving disagreements among members, such as mediation or arbitration.</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </FadeIn>
        
        <FadeIn>
            <section id="professional-services">
                <SectionHeader icon={LandmarkIcon} title="Professional Services: Legal & Accounting" subtitle="This is an investment in setting up your business correctly and protecting all 10 members from future liability and disputes." />
                <div className="max-w-4xl mx-auto space-y-8">
                     <Card>
                        <CardHeader><CardTitle>Lawyer Expenses</CardTitle></CardHeader>
                        <CardContent className="space-y-6">
                            <div>
                                <h4 className="font-bold">Startup / One-Time Costs</h4>
                                <p className="text-sm text-muted-foreground mb-2">For a 10-member LLC, using online templates is extremely risky. A lawyer specializing in business formation is essential.</p>
                                <div className="overflow-x-auto">
                                    <Table>
                                        <TableBody>
                                            {lawyerStartupCosts.map(item => (
                                                <TableRow key={item.item}>
                                                    <TableCell className="font-medium">{item.item}</TableCell>
                                                    <TableCell className="text-right font-mono">{item.cost}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                        <TableFooter>
                                            <TableRow className="font-bold"><TableCell>Total Estimated Startup Legal Fees</TableCell><TableCell className="text-right font-mono">$3,750 - $7,700</TableCell></TableRow>
                                        </TableFooter>
                                    </Table>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-bold">Ongoing / Annual Costs</h4>
                                <p className="text-sm text-muted-foreground">Budget for a few hours of legal consultation per year for contract reviews and general counsel.</p>
                                <p className="font-semibold mt-2">Estimated Annual Budget: <span className="font-mono">$500 - $1,000</span></p>
                            </div>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader><CardTitle>CPA (Certified Public Accountant) Expenses</CardTitle></CardHeader>
                        <CardContent className="space-y-6">
                           <div>
                                <h4 className="font-bold">Startup / One-Time Costs</h4>
                                <p className="text-sm text-muted-foreground mb-2">A CPA with agricultural experience can be invaluable for setting up your finances correctly.</p>
                                <div className="overflow-x-auto">
                                    <Table>
                                        <TableBody>
                                            {cpaStartupCosts.map(item => (
                                                <TableRow key={item.item}>
                                                    <TableCell className="font-medium">{item.item}</TableCell>
                                                    <TableCell className="text-right font-mono">{item.cost}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                        <TableFooter>
                                            <TableRow className="font-bold"><TableCell>Total Estimated Startup CPA Fees</TableCell><TableCell className="text-right font-mono">$900 - $1,800</TableCell></TableRow>
                                        </TableFooter>
                                    </Table>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-bold">Ongoing / Annual Costs</h4>
                                <p className="text-sm text-muted-foreground mb-2">This includes preparing the LLC's partnership tax return (Form 1065) and issuing Schedule K-1s to all 10 members.</p>
                                <div className="overflow-x-auto">
                                <Table>
                                    <TableBody>
                                        {cpaAnnualCosts.map(item => (
                                            <TableRow key={item.item}>
                                                <TableCell className="font-medium">{item.item}</TableCell>
                                                <TableCell className="text-right font-mono">{item.cost}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                    <TableFooter>
                                        <TableRow className="font-bold"><TableCell>Total Estimated Annual CPA Fees</TableCell><TableCell className="text-right font-mono">$1,800 - $4,000</TableCell></TableRow>
                                    </TableFooter>
                                </Table>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                     <Card className="bg-primary/5 border-primary/20">
                        <CardHeader><CardTitle>Budget Summary & Recommendation</CardTitle></CardHeader>
                        <CardContent className="prose prose-base max-w-none text-muted-foreground">
                            <p>For accurate financial projections, it is essential to budget for professional services. We recommend the following allocations:</p>
                            <ul>
                                <li><strong>Initial Investment Costs:</strong> Allocate <strong>$4,650 - $9,500</strong> for "Professional Services" to cover both legal and CPA startup fees.</li>
                                <li><strong>Annual Operating Costs:</strong> Budget <strong>$2,300 - $5,000</strong> for "Legal &amp; Accounting" to cover ongoing compliance and advisory needs.</li>
                            </ul>
                            <p className="mt-4"><strong>Strategic Recommendation:</strong> To ensure the best fit and manage costs, the LLC should interview at least two law firms and two CPA firms. Inquire about their experience with agricultural businesses and multi-member LLCs, and seek flat-fee arrangements for startup services where possible.</p>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </FadeIn>
        
        <FadeIn>
            <section id="land-acquisition">
                <SectionHeader icon={MapPin} title="Acquiring the Farm: Land Purchase or Lease" subtitle="The land is your single largest investment. While state averages are a starting point, the 'actual price' depends on location, quality, and existing infrastructure."/>
                <div className="max-w-4xl mx-auto space-y-8">
                     <Card>
                        <CardHeader><CardTitle>Factors That Determine the 'Actual Price'</CardTitle></CardHeader>
                        <CardContent className="prose prose-base max-w-none text-muted-foreground">
                           <p>The state average for pastureland is a useful benchmark, but the price for a suitable farm varies significantly. As of October 2, 2025, several key factors influence the final cost:</p>
                            <ul>
                                <li><strong>Location:</strong> Proximity to suburban areas like Hoover, Birmingham, or Huntsville dramatically increases the price. Land in more rural counties will be more affordable.</li>
                                <li><strong>Water Access:</strong> This is non-negotiable for livestock. A property with a year-round creek, a large pond, or county water access is worth significantly more than dry land requiring a well (an additional $8,000 - $15,000+ cost).</li>
                                <li><strong>Fencing:</strong> This is the second most critical factor. A property with existing, sheep-quality (woven wire) fencing is immensely more valuable than one with no fencing or just barbed wire, which can cost thousands per acre to install.</li>
                                <li><strong>Infrastructure:</strong> The presence of a barn for hay storage, on-site electricity, a good internal road system, and handling pens will all add to the per-acre cost.</li>
                            </ul>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader><CardTitle>Realistic Price Scenarios for a 20-40 Acre Sheep Farm</CardTitle></CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground mb-4">For a 50-ewe flock, you will need between 20 and 40 acres to allow for proper pasture rotation and future growth. Here are three realistic scenarios for what you might find and what the "actual price" would look like.</p>
                            <div className="space-y-6">
                                <div>
                                    <h4 className="font-bold text-lg">Scenario 1: "The Blank Slate" - Raw Pastureland</h4>
                                    <p className="text-muted-foreground text-sm">Description: Open pastureland, may have an old barbed-wire perimeter fence (unsuitable for sheep), no internal fences, no barn, and water may be from a small pond or require drilling a well. Access might be via a dirt road.</p>
                                    <p className="mt-2"><strong>Typical Price Range:</strong> $2,500 - $3,200 per acre.</p>
                                    <p><strong>Total Purchase Price (30 acres @ $2,900/acre):</strong> $87,000</p>
                                    <p className="text-destructive font-semibold"><strong>Hidden Costs:</strong> You would immediately need to spend an additional $40,000 - $70,000+ on essential infrastructure like sheep-proof fencing, running water lines, building a basic barn/shelter, and establishing handling pens.</p>
                                </div>
                                <div className="border-t pt-6">
                                    <h4 className="font-bold text-lg">Scenario 2: "The Good Foundation" - Partially Improved Farmland (Most Likely Target)</h4>
                                    <p className="text-muted-foreground text-sm">Description: A former small cattle farm with a decent perimeter fence (may need some repairs), a pond or county water access, an older but functional barn, and power on the property. It will likely lack the cross-fencing needed for rotational grazing.</p>
                                    <p className="mt-2"><strong>Typical Price Range:</strong> $3,300 - $4,800 per acre.</p>
                                    <p><strong>Total Purchase Price (30 acres @ $4,000/acre):</strong> $120,000</p>
                                    <p className="text-orange-600 font-semibold"><strong>Follow-Up Costs:</strong> Your initial costs will be lower. You might spend $15,000 - $25,000 on necessary upgrades like adding cross-fencing, updating the water system for sheep, and building a specific handling area.</p>
                                </div>
                                <div className="border-t pt-6">
                                    <h4 className="font-bold text-lg">Scenario 3: "The Turnkey Farm" - Ready-to-Go Operation</h4>
                                    <p className="text-muted-foreground text-sm">Description: A property set up specifically for small ruminants. It features excellent woven wire fencing, established rotational grazing paddocks, automatic waterers, a solid barn with lambing pens, and a well-maintained handling facility.</p>
                                    <p className="mt-2"><strong>Typical Price Range:</strong> $5,000 - $7,500+ per acre.</p>
                                    <p><strong>Total Purchase Price (30 acres @ $6,000/acre):</strong> $180,000</p>
                                    <p className="text-green-600 font-semibold"><strong>Follow-Up Costs:</strong> Minimal. Your initial costs would be focused on livestock and operating expenses, not major infrastructure projects.</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                     <Card className="bg-primary/5 border-primary/20">
                        <CardHeader><CardTitle>Conclusion and Recommendation</CardTitle></CardHeader>
                        <CardContent className="prose prose-base max-w-none text-muted-foreground">
                           <p>A realistic budget for a functional 30-acre property is <strong>$105,000 to $135,000</strong>. Actively searching listings on sites like LandWatch and consulting with a local farm real estate agent is essential. For a new venture, leasing is a highly cost-effective strategy to minimize initial capital outlay.</p>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </FadeIn>

        <FadeIn>
            <section id="acreage-analysis">
                <SectionHeader icon={Scale} title="Acreage Analysis: Minimum vs. Optimal" subtitle="Finding the right balance between initial land cost and long-term operational efficiency is a critical decision for your business plan."/>
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-start">
                     <Card>
                        <CardHeader>
                            <CardTitle>Minimum Acreage: 12 Acres</CardTitle>
                            <CardDescription>An intensive management model with little room for error.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <h4 className="font-bold">How it Breaks Down:</h4>
                                <ul className="list-disc list-inside text-muted-foreground text-sm mt-2">
                                    <li><strong>10 acres Grazing Area:</strong> High-density (5 ewes/acre) requiring intensive rotational grazing.</li>
                                    <li><strong>1 acre Sacrifice Area:</strong> Essential pen for feeding hay during wet periods to protect pastures.</li>
                                    <li><strong>1 acre Infrastructure Area:</strong> Space for barn, handling systems, and storage.</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold">The Reality:</h4>
                                 <ul className="list-disc list-inside text-muted-foreground text-sm mt-2">
                                     <li>High management workload.</li>
                                     <li>Higher annual feed costs due to less pasture recovery.</li>
                                     <li>Higher risk from drought or disease.</li>
                                     <li>No room for flock expansion.</li>
                                 </ul>
                            </div>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader>
                            <CardTitle>Optimal Acreage: 25-40 Acres</CardTitle>
                            <CardDescription>A resilient and sustainable model for long-term profitability.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                             <div>
                                <h4 className="font-bold">How it Provides Value:</h4>
                                <ul className="list-disc list-inside text-muted-foreground text-sm mt-2">
                                    <li><strong>Generous Pasture Rotation:</strong> Low stocking density (2 ewes/acre) allows for long pasture rest periods, improving animal health and reducing vet bills.</li>
                                    <li><strong>Ability to Make Hay:</strong> Dedicated fields to produce your own hay, drastically reducing operating costs.</li>
                                    <li><strong>Flexibility & Biosecurity:</strong> Space for quarantine pastures and backup grazing during droughts.</li>
                                    <li><strong>Room for Growth:</strong> Easily scale the flock to 75-100 ewes without buying more land.</li>
                                </ul>
                            </div>
                             <div>
                                <h4 className="font-bold">The Reality:</h4>
                                 <ul className="list-disc list-inside text-muted-foreground text-sm mt-2">
                                     <li>Moderate and more forgiving management.</li>
                                     <li>Lower annual feed costs.</li>
                                     <li>Lower animal health risks.</li>
                                     <li>Excellent scalability.</li>
                                 </ul>
                            </div>
                        </CardContent>
                    </Card>
                     <Card className="md:col-span-2 bg-primary/5 border-primary/20">
                        <CardHeader>
                            <CardTitle>Final Recommendation</CardTitle>
                        </CardHeader>
                        <CardContent className="prose prose-base max-w-none text-muted-foreground">
                            <p>While a 12-acre farm is theoretically possible, it represents a high-stakes battle against overgrazing. For a robust and financially sound business plan, the <strong>optimal target is 25+ acres.</strong></p>
                            <p>The higher initial land investment will pay for itself multiple times over through lower feed costs, better animal health, and the ability to grow the operation. This likely means searching for land 30-60 minutes outside of Hoover to find parcels of this size at an affordable agricultural price.</p>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </FadeIn>

        <FadeIn>
            <section id="livestock-selection">
                <SectionHeader icon={Users} title="Livestock Selection and Initial Investment" subtitle="Hair sheep breeds like Katahdin and Dorper are highly recommended for Alabama's climate due to their hardiness and heat resistance."/>
                 <div className="max-w-4xl mx-auto">
                    <Card>
                        <CardHeader><CardTitle>Sample Starter Flock Budget (50-Head Flock)</CardTitle></CardHeader>
                        <CardContent>
                            <div className="overflow-x-auto">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Item</TableHead>
                                            <TableHead>Price per Head</TableHead>
                                            <TableHead className="text-right">Total Cost</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {starterFlock.map(item => (
                                            <TableRow key={item.item}>
                                                <TableCell>{item.item}</TableCell>
                                                <TableCell>{item.price}</TableCell>
                                                <TableCell className="text-right font-mono">{item.total}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                    <TableFooter>
                                        <TableRow className="font-bold bg-muted text-lg">
                                            <TableCell colSpan={2}>Total Estimated Livestock Cost</TableCell>
                                            <TableCell className="text-right font-mono">${totalLivestockCost.toLocaleString()}</TableCell>
                                        </TableRow>
                                    </TableFooter>
                                </Table>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </FadeIn>

        <FadeIn>
            <section id="infrastructure">
                <SectionHeader icon={Construction} title="Farm Infrastructure and Equipment" subtitle="Setting up your farm is a major upfront cost. Buying used equipment can significantly reduce this initial investment."/>
                <div className="max-w-4xl mx-auto">
                     <Card>
                        <CardHeader><CardTitle>Essential Infrastructure &amp; Equipment Costs</CardTitle></CardHeader>
                        <CardContent>
                             <div className="overflow-x-auto">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Item</TableHead>
                                            <TableHead className="text-right">Estimated Cost Range (Used)</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {infraCosts.map(item => (
                                            <TableRow key={item.item}>
                                                <TableCell>{item.item}</TableCell>
                                                <TableCell className="text-right font-mono">{item.cost}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </FadeIn>

        <FadeIn>
            <section id="marketing-sales">
                <SectionHeader icon={ShoppingCart} title="Detailed Marketing and Sales Strategy" subtitle="This section moves from 'what' to 'how much,' outlining how you will price your products to ensure profitability."/>
                 <div className="max-w-4xl mx-auto space-y-8">
                    <Card>
                        <CardHeader><CardTitle>Marketing Startup Costs</CardTitle></CardHeader>
                        <CardContent>
                            <div className="overflow-x-auto">
                            <Table>
                                <TableBody>
                                {marketingCosts.map(item => (
                                    <TableRow key={item.item}>
                                        <TableCell>{item.item}</TableCell>
                                        <TableCell className="text-right font-mono">{item.cost}</TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader><CardTitle>Product Pricing Strategy: Whole Lamb Share Example</CardTitle></CardHeader>
                        <CardContent>
                            <p className="mb-4 text-muted-foreground">This example is based on a 100 lb live weight lamb, yielding 50 lbs hanging weight and approximately 37.5 lbs of take-home meat.</p>
                            <h4 className="font-bold">Pricing Model: Based on Hanging Weight</h4>
                            <p className="text-sm text-muted-foreground mb-2">The customer pays the farm for the meat based on hanging weight, and pays the processor separately. This is the most common and transparent method for direct-to-consumer sales.</p>
                            <ol className="list-decimal list-inside space-y-1">
                                <li>Your price to customer: <strong>$8.00/lb hanging weight</strong>.</li>
                                <li>Customer pays you (50 lbs x $8.00): <strong>$400.00</strong></li>
                                <li>Estimated processing cost (paid to processor): <strong>~$147.50</strong></li>
                                <li>Total customer cost: <strong>~$547.50</strong></li>
                                <li>Final price per pound of take-home meat: <strong>~$14.60/lb</strong></li>
                            </ol>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader><CardTitle>Revenue Potential for Other Channels</CardTitle></CardHeader>
                        <CardContent>
                            <div className="overflow-x-auto">
                             <Table>
                                <TableBody>
                                    <TableRow><TableCell><strong>Individual Cuts at Market</strong></TableCell><TableCell className="text-right"><strong>$600 - $750</strong> total revenue per lamb</TableCell></TableRow>
                                    <TableRow><TableCell><strong>Livestock Auction (Live Weight)</strong></TableCell><TableCell className="text-right"><strong>$220 - $280</strong> per 100 lb lamb</TableCell></TableRow>
                                    <TableRow><TableCell><strong>Breeding Stock</strong></TableCell><TableCell className="text-right"><strong>$500 - $1,200+</strong> per animal</TableCell></TableRow>
                                </TableBody>
                            </Table>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </FadeIn>
        
        <FadeIn>
            <section id="processing-plan">
                <SectionHeader icon={ChevronsRight} title="Meat Processing Plan" />
                <Card className="max-w-4xl mx-auto">
                    <CardHeader><CardTitle>Typical Processing Costs in Alabama (late 2025)</CardTitle></CardHeader>
                    <CardContent>
                        <div className="overflow-x-auto">
                        <Table>
                            <TableBody>
                            {processingCosts.map(item => (
                                <TableRow key={item.item}>
                                    <TableCell>{item.item}</TableCell>
                                    <TableCell className="text-right font-mono">{item.cost}</TableCell>
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
            <section id="risk-management">
                <SectionHeader icon={ShieldCheck} title="Risk Management Plan" />
                 <Card className="max-w-4xl mx-auto">
                    <CardHeader><CardTitle>Associated Costs for Mitigation</CardTitle></CardHeader>
                    <CardContent>
                        <div className="overflow-x-auto">
                        <Table>
                            <TableBody>
                            {riskCosts.map(item => (
                                <TableRow key={item.item}>
                                    <TableCell>{item.item}</TableCell>
                                    <TableCell className="text-right font-mono">{item.cost}</TableCell>
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
            <section id="regulatory-health">
                <SectionHeader icon={ClipboardCheck} title="Regulatory Compliance and Flock Health" />
                <Card className="max-w-4xl mx-auto">
                    <CardHeader><CardTitle>Associated Costs for Health &amp; Compliance</CardTitle></CardHeader>
                    <CardContent>
                        <div className="overflow-x-auto">
                        <Table>
                            <TableBody>
                            {healthCosts.map(item => (
                                <TableRow key={item.item}>
                                    <TableCell>{item.item}</TableCell>
                                    <TableCell className="text-right font-mono">{item.cost}</TableCell>
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
            <section id="financials">
                <SectionHeader icon={BarChart} title="Financial Projections: Two Startup Scenarios" subtitle="A simplified projection for a 50-ewe operation, comparing models with land purchase vs. land lease." />
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-start">
                     <Card>
                        <CardHeader><CardTitle>A. Initial Investment Breakdown (with Land Purchase)</CardTitle></CardHeader>
                        <CardContent>
                            <div className="overflow-x-auto">
                             <Table>
                                <TableBody>
                                    {initialInvestmentPurchase.map(item => (
                                        <TableRow key={item.item}>
                                            <TableCell>{item.item}</TableCell>
                                            <TableCell className="text-right font-mono">${item.cost.toLocaleString()}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                                <TableFooter>
                                    <TableRow className="font-bold text-lg"><TableCell>Total Estimated Initial Investment</TableCell><TableCell className="text-right font-mono">${totalInitialInvestmentPurchase.toLocaleString()}</TableCell></TableRow>
                                    <TableRow className="font-bold text-lg bg-primary/10 text-primary"><TableCell>Investment per Member (10 Members)</TableCell><TableCell className="text-right font-mono">${investmentPerMemberPurchase.toLocaleString()}</TableCell></TableRow>
                                </TableFooter>
                            </Table>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader><CardTitle>B. Initial Investment Breakdown (with Land Lease)</CardTitle></CardHeader>
                        <CardContent>
                            <div className="overflow-x-auto">
                             <Table>
                                <TableBody>
                                    {initialInvestmentLease.map(item => (
                                        <TableRow key={item.item}>
                                            <TableCell>{item.item}</TableCell>
                                            <TableCell className="text-right font-mono">${item.cost.toLocaleString()}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                                <TableFooter>
                                    <TableRow className="font-bold text-lg"><TableCell>Total Estimated Initial Investment</TableCell><TableCell className="text-right font-mono">${totalInitialInvestmentLease.toLocaleString()}</TableCell></TableRow>
                                    <TableRow className="font-bold text-lg bg-primary/10 text-primary"><TableCell>Investment per Member (10 Members)</TableCell><TableCell className="text-right font-mono">${investmentPerMemberLease.toLocaleString()}</TableCell></TableRow>
                                </TableFooter>
                            </Table>
                            </div>
                        </CardContent>
                    </Card>
                     <Card className="md:col-span-2">
                        <CardHeader><CardTitle>C. Projected Annual Operating Costs (50-Ewe Flock on Leased Land)</CardTitle></CardHeader>
                        <CardContent>
                            <div className="overflow-x-auto">
                            <Table>
                                <TableBody>
                                    {annualOperatingCosts.map(item => (
                                        <TableRow key={item.item}>
                                            <TableCell>{item.item}</TableCell>
                                            <TableCell className="text-right font-mono">{item.cost}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                                <TableFooter>
                                    <TableRow className="font-bold text-lg"><TableCell>Total Estimated Annual Costs</TableCell><TableCell className="text-right font-mono">${totalAnnualOperatingCosts.toLocaleString()}</TableCell></TableRow>
                                </TableFooter>
                            </Table>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </FadeIn>

         <FadeIn>
            <section id="flock-calendar">
                <SectionHeader icon={Calendar} title="Detailed Annual Flock Management Calendar" />
                <Card className="max-w-4xl mx-auto">
                    <CardHeader><CardTitle>Budgeting Notes by Season</CardTitle></CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <h4 className="font-bold">Jan-Feb (Lambing Season)</h4>
                            <p className="text-muted-foreground">Budget <strong>$300 - $500</strong> for lambing supplies: milk replacer, heat lamps, and potential vet assistance.</p>
                        </div>
                        <div>
                            <h4 className="font-bold">May-June (Weaning)</h4>
                            <p className="text-muted-foreground">Feed costs rise as you supplement lambs for market growth.</p>
                        </div>
                        <div>
                            <h4 className="font-bold">July-Aug (Market Time)</h4>
                            <p className="text-muted-foreground">Budget for processing fees and marketing expenses (e.g., farmers' market fees).</p>
                        </div>
                        <div>
                            <h4 className="font-bold">Sept-Oct (Breeding Season)</h4>
                            <p className="text-muted-foreground">Ideal time to invest in a new, high-quality ram. Budget <strong>$700+</strong> for this periodic investment.</p>
                        </div>
                        <div>
                            <h4 className="font-bold">Nov-Dec (Gestation)</h4>
                            <p className="text-muted-foreground">Hay and supplemental feed are the primary expenses. Ensure winter hay supply is purchased.</p>
                        </div>
                    </CardContent>
                </Card>
            </section>
        </FadeIn>
        
        <FadeIn>
            <section id="financing">
                <SectionHeader icon={DollarSign} title="Financing and Resources"/>
                <div className="prose prose-lg max-w-3xl mx-auto text-muted-foreground">
                    <p><strong>Alabama Farm Credit &amp; Alabama Ag Credit:</strong> These institutions offer specialized loan programs for young, beginning, and small farmers.</p>
                    <p><strong>USDA Farm Service Agency (FSA):</strong> The FSA provides a variety of loan programs for beginning farmers, including direct and guaranteed loans.</p>
                    <p><strong>Grants:</strong> Grants for specific conservation practices or value-added producer initiatives may be available through the USDA's NRCS or the Alabama Department of Agriculture and Industries.</p>
                </div>
            </section>
        </FadeIn>

        <FadeIn>
            <section id="conclusion" className="text-center">
                 <Card className="max-w-4xl mx-auto bg-background border-2 border-primary/20">
                    <CardHeader>
                        <SectionHeader icon={Award} title="Conclusion: A Path to Success"/>
                    </CardHeader>
                    <CardContent>
                        <p className="prose prose-lg max-w-3xl mx-auto text-muted-foreground">Starting a sheep and lamb farm in Alabama as a 10-member LLC is a significant undertaking that requires meticulous planning, substantial capital, and a unified commitment. By establishing a solid legal foundation, developing a comprehensive operating agreement, and carefully managing finances, your LLC can build a thriving and profitable agricultural enterprise.</p>
                    </CardContent>
                    <CardFooter className="flex-col gap-2">
                        <p className="text-sm text-muted-foreground">It is highly recommended to consult with a lawyer and a CPA for formation and financial planning.</p>
                         <Button asChild>
                            <Link href="/agriculture/alabama-livestock">Back to Alabama Livestock Overview</Link>
                        </Button>
                    </CardFooter>
                 </Card>
            </section>
        </FadeIn>

      </main>
    </div>
  );
}
