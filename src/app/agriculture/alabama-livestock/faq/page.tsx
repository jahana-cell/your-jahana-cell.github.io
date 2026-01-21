
'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";
import { FadeIn } from "@/components/fade-in";
import { HelpCircle, ArrowRight } from "lucide-react";
import { AgricultureNav } from "@/components/agriculture-nav";
import { Table, TableBody, TableCell, TableRow, TableHeader, TableHead } from "@/components/ui/table";
import { Check } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from 'next/link';

const faqItems = [
    {
        question: "What is GrowShare Capital, and how does it benefit our livestock program?",
        answer: (
            <div className="space-y-4">
                <p>GrowShare Capital provides the foundational business and financial framework that enables our agricultural partners to achieve operational excellence. Our model is designed to handle all non-farming complexities, allowing the farm team to focus exclusively on their primary objective: raising healthy livestock through best-in-class practices.</p>
                <h4 className="font-semibold text-foreground pt-2">Our Role & Value Proposition:</h4>
                <p>As an investment and management platform, GrowShare Capital de-risks agricultural ventures by providing a robust business structure. We manage the complete investment lifecycle, from capital acquisition to operational oversight and market expansion.</p>
                <h4 className="font-semibold text-foreground pt-2">Scope of Services:</h4>
                <ul className="space-y-3">
                    <li className="flex items-start gap-3"><Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" /><span><strong>Strategic Oversight & Governance:</strong> Offering formal investment structuring, data-driven program evaluation, and comprehensive investor relations. We ensure strategic alignment between capital partners and farm operations.</span></li>
                    <li className="flex items-start gap-3"><Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" /><span><strong>Capital Allocation & Infrastructure Development:</strong> Deploying capital through the Livestock Program to fund operations and investing in strategic infrastructure upgrades, such as on-site slaughterhouse enhancements, to improve efficiency and profitability.</span></li>
                    <li className="flex items-start gap-3"><Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" /><span><strong>Market Expansion & Commercialization:</strong> Executing go-to-market strategies, securing access to local commercial channels, and deploying a digital marketing apparatus to build a national customer base for direct-to-consumer sales. GrowShare Capital actively channels investment from a national network to support local project growth.</span></li>
                    <li className="flex items-start gap-3"><Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" /><span><strong>Equity & Ownership Structuring:</strong> Designing and facilitating pathways to ownership for farm operators through established federal programs (USDA), Community Development Financial Institutions (CDFIs), and other specialized financial platforms.</span></li>
                    <li className="flex items-start gap-3"><Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" /><span><strong>Operational & Financial Administration:</strong> Ensuring institutional-grade financial reporting, maintaining strict regulatory compliance, and implementing secure, scalable online payment and data management systems.</span></li>
                </ul>
            </div>
        )
    },
    {
        question: "Are we owners or shareholders of the livestock, or simply members of GrowShare Capital?",
        answer: (
            <div className="space-y-4">
                <p><strong>The short answer:</strong> You become a shareholder in the specific livestock venture, not a member of GrowShare Capital itself.</p>
                <p className="mt-4">When you invest, you become a shareholder in the specific livestock venture. Your shares represent a direct stake in the assets of that program (the livestock) and entitle you to a portion of the profits generated. GrowShare Capital is the separate entity that facilitates and manages the investment product.</p>
                <p className="mt-4">We welcome shareholders, and if you are interested, a separate opportunity to become a shareholder in GrowShare Capital can be discussed. However, your commitment to the livestock program is an important and valued first step.</p>
            </div>
        )
    },
    {
        question: "How are shares distributed among investors, GrowShare Capital, and Baraka Farm?",
        answer: (
            <div className="space-y-4">
                <p><strong>The short answer:</strong> Profits are distributed across all stakeholders, including the farm, working investors, non-working investors, GrowShare Capital, and the community.</p>
                <p className="mt-4">The net profit from our programs is distributed among our partners and stakeholders according to the following structure. "Working Investors" are defined as shareholders who contribute both capital and labor to the project.</p>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Stakeholder</TableHead>
                            <TableHead className="text-right">Profit Share</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">Baraka Farm LLC (Owner Mohammed Saleem)</TableCell>
                            <TableCell className="text-right font-mono">25%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">Working Investors</TableCell>
                            <TableCell className="text-right font-mono">25%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">GrowShare Capital</TableCell>
                            <TableCell className="text-right font-mono">25%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">Non-working Investors</TableCell>
                            <TableCell className="text-right font-mono">20%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">Masjid Donation</TableCell>
                            <TableCell className="text-right font-mono">5%</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                 <p className="text-xs text-muted-foreground pt-2">Note: This structure ensures that all parties, including the operational team, investors, and the community, share in the success of the venture.</p>
            </div>
        )
    },
    {
        question: "Do investors get their money back if the business doesn’t form or no purchases are made?",
        answer: (
            <div>
                <p className="font-bold text-lg mb-2">Yes.</p>
                <p>Investor funds are held in a dedicated account. If the project does not proceed to the operational stage (i.e., no livestock is purchased), the initial capital is returned to the investors. This ensures your investment is protected until the project is officially launched.</p>
            </div>
        )
    },
    {
        question: "What is the solution for labor contributions? If someone offers labor instead of money, what percentage do they receive?",
        answer: (
            <div>
                <p><strong>The short answer:</strong> Yes, we offer "sweat equity" arrangements for labor contributions, with ownership percentage determined on a case-by-case basis.</p>
                <p className="mt-4">We recognize that contributions can come in forms other than capital. We offer 'sweat equity' arrangements for individuals contributing labor. The percentage of ownership received is determined on a case-by-case basis, valued according to the skill set provided and the time committed, and is formalized in a separate agreement.</p>
            </div>
        )
    },
    {
        question: "How do we invest? Does GrowShare Capital have a business bank account?",
        answer: (
            <div className="space-y-4">
                <p><strong>Short Answer:</strong> Yes, we have a business bank account, and you can invest directly through our secure payment page.</p>
                <p>GrowShare Capital operates with a dedicated business bank account to manage all investor funds professionally and transparently. We offer several convenient and secure payment options.</p>
                <Button asChild className="mt-2">
                    <Link href="/agriculture/alabama-livestock/payment">
                        Go to Investment Page <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </div>
        )
    }
];

export default function AlabamaFAQPage() {
  return (
    <div className="bg-background">
      <section className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center text-white">
        <Image
          src="https://picsum.photos/seed/farm-fence/1200/800"
          alt="Question and Answer"
          fill
          sizes="100vw"
          className="z-0 object-cover"
          data-ai-hint="farm fence"
          priority
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="container mx-auto px-4 z-20 text-center">
            <FadeIn>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight font-headline mt-4 drop-shadow-md">
                Alabama Livestock Q&A
              </h1>
              <p className="mt-4 text-lg md:text-xl text-accent font-semibold drop-shadow-sm">Your Questions Answered</p>
            </FadeIn>
        </div>
      </section>

       <div className="py-12">
        <AgricultureNav />
      </div>

      <main className="container mx-auto px-4 pt-16 pb-16 md:pb-24">
        <Card className="max-w-3xl mx-auto shadow-lg border-primary/10">
            <CardHeader>
                <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <HelpCircle className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline text-3xl text-center">Frequently Asked Questions</CardTitle>
                <CardDescription className="text-center text-base">Find answers to common questions about the Alabama Livestock project.</CardDescription>
            </CardHeader>
            <CardContent>
                <Accordion type="multiple" className="w-full" defaultValue="item-0">
                    {faqItems.map((item, index) => (
                        <AccordionItem value={`item-${index}`} key={index}>
                            <AccordionTrigger className="text-left font-headline text-xl text-foreground hover:no-underline">
                                {item.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-base text-muted-foreground prose prose-sm max-w-none pt-2">
                                <div className="px-2">{item.answer}</div>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </CardContent>
        </Card>
      </main>
    </div>
  );
}
