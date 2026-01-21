
'use client';

import Image from "next/image";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, TrendingUp, PieChart, 
  CheckCircle2, Wheat, ArrowUpRight, 
  Lock, ChevronDown 
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// --- LUXURY ANIMATION UTILITIES ---
const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay: delay, ease: [0.21, 0.47, 0.32, 0.98] }}
  >
    {children}
  </motion.div>
);

const ScaleIn = ({ children }: { children: React.ReactNode }) => (
    <motion.div
      initial={{ scale: 1.05, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, margin: "0px" }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="h-full w-full"
    >
      {children}
    </motion.div>
  );

export default function LivestockClientPage() {
  return (
    <div className="bg-white min-h-screen text-black selection:bg-black selection:text-white">
      
      {/* --- 1. HERO --- */}
      <section className="relative w-full h-[85vh] flex items-center justify-center bg-black overflow-hidden">
        <motion.div 
            className="absolute inset-0 z-0"
            initial={{ scale: 1.0 }}
            animate={{ scale: 1.1 }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
        >
            <Image
            src="https://images.unsplash.com/photo-1761839257961-4dce65b72d99?q=80&w=2232&auto=format&fit=crop"
            alt="Livestock Asset Class"
            fill
            sizes="100vw"
            className="object-cover object-center opacity-60 md:opacity-50"
            priority
            />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
        <div className="relative z-20 container mx-auto px-6 text-center">
            <FadeIn>
                <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 border border-green-500/30 bg-green-900/40 backdrop-blur-md rounded-full">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <p className="text-green-400 text-[10px] tracking-[0.2em] uppercase font-bold">Phase 1: Open</p>
                </div>
                <h1 className="text-4xl md:text-7xl lg:text-8xl font-serif text-white leading-tight mb-6">
                    Asset-Backed<br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400">Yield Generation.</span>
                </h1>
                <p className="text-base md:text-xl text-neutral-300 font-light max-w-2xl mx-auto leading-relaxed mb-10">
                    A secure alternative investment vehicle. Capitalize on the resilience of the food supply chain with tangible biological assets.
                </p>
                
                {/* FUNDING PROGRESS */}
                <div className="max-w-md mx-auto mb-10">
                    <div className="flex justify-between text-[10px] uppercase tracking-widest text-neutral-400 mb-2">
                        <span>Phase 1 Allocation</span>
                        <span>65% Filled</span>
                    </div>
                    <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 w-[65%]" />
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto">
                    <Link href="/agriculture/livestock/invest" className="w-full bg-white text-black h-14 flex items-center justify-center text-[11px] tracking-[0.3em] uppercase font-bold hover:bg-neutral-200 transition-all rounded-sm shadow-lg">Invest Now</Link>
                    <Link href="#financials" className="w-full bg-neutral-900 border border-neutral-800 text-white h-14 flex items-center justify-center text-[11px] tracking-[0.3em] uppercase font-bold hover:bg-black transition-all rounded-sm shadow-lg">View Structure</Link>
                </div>
            </FadeIn>
        </div>
      </section>

      {/* --- 2. METRICS BAR --- */}
      <div className="w-full bg-neutral-900 border-b border-white/10">
          <div className="container mx-auto px-4 md:px-6">
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10 border-x border-white/10">
                  <div className="text-center py-4 px-2 border-b border-white/10 md:border-b-0"><p className="text-[9px] uppercase tracking-widest text-neutral-400 mb-1">Structure</p><p className="text-base md:text-2xl font-serif text-green-400">Profit Share</p></div>
                  <div className="text-center py-4 px-2 border-b border-white/10 md:border-b-0"><p className="text-[9px] uppercase tracking-widest text-neutral-400 mb-1">Term</p><p className="text-base md:text-3xl font-serif text-white">2 Years</p></div>
                  <div className="text-center py-4 px-2"><p className="text-[9px] uppercase tracking-widest text-neutral-400 mb-1">Entry</p><p className="text-base md:text-3xl font-serif text-white">$1k</p></div>
                  <div className="text-center py-4 px-2"><p className="text-[9px] uppercase tracking-widest text-neutral-400 mb-1">Security</p><p className="text-base md:text-2xl font-serif text-white">Insured</p></div>
              </div>
          </div>
      </div>

      {/* --- 3. MARKET ANALYSIS --- */}
      <section className="w-full py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div className="order-1">
                    <FadeIn>
                        <h2 className="text-[11px] tracking-[0.4em] uppercase text-neutral-400 mb-6">Market Analysis</h2>
                        <h3 className="text-3xl md:text-5xl font-serif leading-tight mb-8">Why Livestock?</h3>
                        <div className="space-y-8">
                            <div className="flex gap-4"><TrendingUp className="w-6 h-6 text-black flex-shrink-0 mt-1" /><div><h4 className="text-base font-bold mb-1">Inflation Hedge</h4><p className="text-sm text-neutral-500 font-light leading-relaxed">Food prices historically outpace inflation. Owning production protects purchasing power.</p></div></div>
                            <div className="flex gap-4"><PieChart className="w-6 h-6 text-black flex-shrink-0 mt-1" /><div><h4 className="text-base font-bold mb-1">Uncorrelated Asset</h4><p className="text-sm text-neutral-500 font-light leading-relaxed">Biological growth occurs independently of stock market volatility or interest rates.</p></div></div>
                            <div className="flex gap-4"><ShieldCheck className="w-6 h-6 text-black flex-shrink-0 mt-1" /><div><h4 className="text-base font-bold mb-1">Tangible Security</h4><p className="text-sm text-neutral-500 font-light leading-relaxed">Backed by physical livestock—real assets with intrinsic market value, not derivatives.</p></div></div>
                        </div>
                    </FadeIn>
                </div>
                <div className="order-2">
                    <FadeIn delay={0.2}>
                        <div className="relative aspect-video md:aspect-[4/5] bg-neutral-100 border border-neutral-100 overflow-hidden">
                            <Image 
                                src="https://images.unsplash.com/photo-1590249426516-4ac3a513c4cd?q=80&w=1740&auto=format&fit=crop"
                                alt="Risk Management"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                data-ai-hint="farm field"
                            />
                        </div>
                    </FadeIn>
                </div>
            </div>
        </div>
      </section>

      {/* --- 4. MID-PAGE VISUAL BREAK --- */}
      <section className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center bg-neutral-900 overflow-hidden">
        <ScaleIn>
            <Image
               src="https://images.unsplash.com/photo-1546552615-f8861d1aa798?q=80&w=2400&auto=format&fit=crop" 
               alt="Premium Livestock Asset"
               fill
               sizes="100vw"
               className="object-cover object-center opacity-90"
            />
        </ScaleIn>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-6 z-20">
           <FadeIn delay={0.3}>
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold mb-6 text-white/80">The Asset Class</p>
                <h3 className="text-3xl md:text-5xl font-serif text-white drop-shadow-lg leading-tight">
                    Tangible.<br/>Biological Value.
                </h3>
           </FadeIn>
        </div>
      </section>

      {/* --- 5. RETURN STRUCTURE --- */}
      <section id="financials" className="w-full py-20 md:py-32 bg-neutral-50 border-y border-neutral-100">
        <div className="container mx-auto px-6 md:px-12">
            <FadeIn>
                <div className="text-center mb-12 md:mb-20">
                    <h2 className="text-[11px] tracking-[0.4em] uppercase text-neutral-400 mb-4">The Deal</h2>
                    <p className="text-3xl md:text-5xl font-serif">Dual-Stream Returns</p>
                </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <FadeIn delay={0.1}>
                    <div className="bg-white p-8 md:p-10 border border-neutral-200 text-center relative overflow-hidden group hover:border-black transition-colors duration-500 rounded-sm h-full">
                        <div className="inline-flex p-4 bg-neutral-100 rounded-full mb-6 group-hover:bg-black group-hover:text-white transition-colors"><Wheat className="w-6 h-6 md:w-8 md:h-8" /></div>
                        <p className="text-[10px] uppercase tracking-widest text-neutral-400 mb-2">Asset Yield</p>
                        <p className="text-2xl md:text-3xl font-serif mb-4">1 Animal / Year</p>
                        <p className="text-sm text-neutral-500 leading-relaxed px-2">Receive 1 goat or sheep per share annually. Investors may choose live pickup or processed meat delivery.</p>
                    </div>
                </FadeIn>
                <FadeIn delay={0.2}>
                    <div className="bg-white p-8 md:p-10 border border-neutral-200 text-center relative overflow-hidden group hover:border-black transition-colors duration-500 rounded-sm h-full">
                        <div className="inline-flex p-4 bg-neutral-100 rounded-full mb-6 group-hover:bg-black group-hover:text-white transition-colors"><ArrowUpRight className="w-6 h-6 md:w-8 md:h-8" /></div>
                        <p className="text-[10px] uppercase tracking-widest text-neutral-400 mb-2">Financial Yield</p>
                        <p className="text-2xl md:text-3xl font-serif mb-4">Profit Share</p>
                        <p className="text-sm text-neutral-500 leading-relaxed px-2">A proportional share of the net profit from herd sales is distributed to investors annually.</p>
                    </div>
                </FadeIn>
            </div>
            <FadeIn delay={0.3}>
                <div className="mt-8 text-center px-4"><p className="text-[10px] md:text-xs text-neutral-400 max-w-xl mx-auto leading-relaxed">*This structure aligns investor interests with farm performance. Returns are distributed annually over the 2-year term.</p></div>
            </FadeIn>
        </div>
      </section>

      {/* --- 6. RISK MITIGATION & FAQ (Strictly Business) --- */}
      <section className="w-full py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                <div className="order-1">
                    <FadeIn>
                        <h2 className="text-[11px] tracking-[0.4em] uppercase text-neutral-400 mb-6">Security</h2>
                        <h3 className="text-3xl md:text-5xl font-serif mb-6">Capital Preservation.</h3>
                        <p className="text-neutral-500 font-light leading-relaxed mb-8">We treat capital preservation as the priority. Our structure creates multiple layers of safety.</p>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><div><h4 className="text-sm font-bold uppercase tracking-wider">Fully Insured Assets</h4><p className="text-xs md:text-sm text-neutral-500 mt-1 font-light">Livestock is insured against mortality, theft, and natural disasters.</p></div></li>
                            <li className="flex items-start gap-4"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><div><h4 className="text-sm font-bold uppercase tracking-wider">Pre-Agreed Offtake</h4><p className="text-xs md:text-sm text-neutral-500 mt-1 font-light">Sales contracts are negotiated in advance with local distributors.</p></div></li>
                        </ul>
                    </FadeIn>
                </div>
                
                {/* Investor FAQ */}
                <div className="order-2 bg-neutral-50 p-6 md:p-8 rounded-sm border border-neutral-100">
                    <FadeIn delay={0.2}>
                        <h4 className="font-serif text-xl mb-6">Common Questions</h4>
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-sm font-bold">How is my investment secured?</AccordionTrigger>
                                <AccordionContent className="text-neutral-500 font-light text-sm">
                                    Your capital is backed by physical biological assets (livestock) which are fully insured. Unlike equities, your principal exists as tangible property.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger className="text-sm font-bold">When are returns distributed?</AccordionTrigger>
                                <AccordionContent className="text-neutral-500 font-light text-sm">
                                    Returns (both the physical animal share and profit dividends) are calculated and distributed annually at the end of each production cycle.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger className="text-sm font-bold">Can I visit the farm?</AccordionTrigger>
                                <AccordionContent className="text-neutral-500 font-light text-sm">
                                    Yes. We encourage transparency. Partners may schedule visits to see operations and their assets firsthand.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </FadeIn>
                </div>
            </div>
        </div>
      </section>

      {/* --- 7. CTA --- */}
      <section className="py-20 md:py-32 bg-neutral-900 text-white text-center">
        <div className="container mx-auto px-6">
            <FadeIn>
                <div className="max-w-3xl mx-auto border border-white/10 p-8 md:p-12 bg-white/5 backdrop-blur-sm rounded-sm">
                    <h2 className="text-3xl md:text-5xl font-serif mb-6">Deploy Capital</h2>
                    <p className="text-neutral-400 font-light text-base md:text-lg mb-10">Phase 1 is currently open. Secure your allocation in this asset-backed tranche.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/agriculture/livestock/invest" className="w-full sm:w-auto bg-white text-black h-14 flex items-center justify-center px-10 text-[11px] tracking-[0.3em] uppercase font-bold hover:bg-neutral-200 transition-all rounded-sm">Start Investment</Link>
                        <Link href="/contact?subject=Livestock Inquiry" className="w-full sm:w-auto border border-white text-white h-14 flex items-center justify-center px-10 text-[11px] tracking-[0.3em] uppercase font-bold hover:bg-white hover:text-black transition-all rounded-sm">Request Info</Link>
                    </div>
                    <div className="mt-10 pt-6 border-t border-white/10 text-center"><p className="text-[9px] text-neutral-500 uppercase tracking-wide leading-relaxed">Disclaimer: This is a private investment offering and is not SEC-registered. All participants share risk and return based on agricultural performance. No fixed income or guaranteed ROI is offered.</p></div>
                </div>
            </FadeIn>
        </div>
      </section>
    </div>
  );
}
