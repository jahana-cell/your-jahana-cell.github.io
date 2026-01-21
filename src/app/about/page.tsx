'use client';

import { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { 
  expansionStrategyItems, 
  coreValues, 
  investmentPhilosophy, 
  companyTimeline 
} from "@/lib/constants";

export default function AboutPage() {
    const [activeStrategy, setActiveStrategy] = useState(expansionStrategyItems[0]);

    return (
        <div className="bg-white min-h-screen text-black selection:bg-black selection:text-white">
            
            {/* --- 1. HERO --- */}
            <section className="relative w-full h-[60vh] flex items-center justify-center bg-neutral-50">
                <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-[11px] tracking-[0.4em] uppercase font-bold mb-6 text-neutral-400">
                            Our Story
                        </p>
                        <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-8">
                            Purpose-Driven American Private Equity.
                        </h1>
                        <p className="text-xl font-light text-neutral-500 leading-relaxed max-w-2xl mx-auto">
                            We are an American investment platform building resilient communities through intelligent, ethical, and high-yield investments.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* --- 2. FOUNDING STORY (Logo Fixed) --- */}
            <section id="founding-story" className="w-full border-y border-neutral-100">
                <div className="grid lg:grid-cols-2 min-h-[80vh]">
                    {/* Image Side - Fixed Clarity */}
                    <div className="relative bg-neutral-50 order-2 lg:order-1 h-[50vh] lg:h-auto flex items-center justify-center p-12 overflow-hidden">
                         {/* REMOVED 'opacity-10'. Added 'p-12' for nice spacing around the logo */}
                         <div className="relative w-full h-full p-8 md:p-16"> 
                            <Image
                                src="https://firebasestorage.googleapis.com/v0/b/growshare-capital.firebasestorage.app/o/Logo%2FGrowshare%20Capital%20Transparent.png?alt=media&token=b53577e6-eb64-409d-aa7a-e9aa4fe01c49"
                                alt="GrowShare Monogram"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-contain" 
                                priority
                            />
                         </div>
                    </div>
                    
                    {/* Text Side */}
                    <div className="flex items-center p-12 lg:p-24 order-1 lg:order-2 bg-white">
                        <div className="space-y-10">
                            <h2 className="text-[12px] tracking-[0.4em] uppercase text-neutral-400">Origin</h2>
                            <h3 className="text-4xl md:text-5xl font-serif leading-tight">
                                Bridging the Gap.
                            </h3>
                            <div className="space-y-6 text-neutral-500 font-light leading-relaxed text-lg">
                                <p>
                                    GrowShare Capital was founded by a team of seasoned executives with decades of experience in finance, real estate development, and corporate strategy. We saw a critical gap in the American market: traditional private equity often overlooked community impact.
                                </p>
                                <p>
                                    We created GrowShare to bridge that gap. Our mission is to prove that high-yield, principled investing is not only possible but is the most effective way to build resilient, prosperous American communities for the long term.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 3. THE ATELIER (Gallery Matte Style - No Crop) --- */}
            <section className="w-full py-24 md:py-32">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="mb-12 md:mb-20 max-w-2xl">
                        <h2 className="text-[12px] tracking-[0.4em] uppercase text-neutral-400 mb-4">The Atelier</h2>
                        <p className="text-3xl md:text-4xl font-serif leading-tight mb-6">
                            Dedication in Every Detail.
                        </p>
                        <p className="text-lg font-light text-neutral-500 leading-relaxed">
                            From the boardroom to the site visits, our team is hands-on.
                        </p>
                    </div>

                    {/* === MOBILE VIEW: Carousel with 'Contain' === */}
                    <div className="block md:hidden">
                        <div className="flex overflow-x-auto gap-4 pb-8 snap-x snap-mandatory -mx-6 px-6 no-scrollbar">
                            {[
                                { src: "https://i.imgur.com/E5sgG8k.jpeg", alt: "Team" },
                                { src: "https://i.imgur.com/ltVswqz.jpeg", alt: "Executive" },
                                { src: "https://i.imgur.com/NFJSDkA.jpeg", alt: "Collab" },
                                { src: "https://i.imgur.com/zhT82As.jpeg", alt: "Planning" },
                                { src: "https://i.imgur.com/fqd0FsC.jpeg", alt: "Strategy" }
                            ].map((img, i) => (
                                <div key={i} className="min-w-[85vw] snap-center relative aspect-[3/4] bg-neutral-100/50 rounded-sm overflow-hidden border border-neutral-100">
                                    <Image 
                                        src={img.src} 
                                        alt={img.alt} 
                                        fill 
                                        className="object-contain" 
                                        sizes="85vw"
                                    />
                                </div>
                            ))}
                        </div>
                        <p className="text-[10px] tracking-[0.2em] uppercase text-neutral-300 text-center animate-pulse">
                            Swipe Gallery &rarr;
                        </p>
                    </div>

                    {/* === DESKTOP VIEW: Mosaic with 'Contain' === */}
                    <div className="hidden md:grid grid-cols-12 gap-4 h-[85vh]">
                        <div className="col-span-4 row-span-2 relative bg-neutral-50 border border-neutral-100 group">
                            <Image 
                                src="https://i.imgur.com/E5sgG8k.jpeg" 
                                alt="Team Discussion" 
                                fill 
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-contain p-4 grayscale group-hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                        <div className="col-span-5 relative bg-neutral-50 border border-neutral-100 group">
                            <Image 
                                src="https://i.imgur.com/zhT82As.jpeg" 
                                alt="Site Planning" 
                                fill 
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 42vw"
                                className="object-contain p-4 grayscale group-hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                        <div className="col-span-3 relative bg-neutral-50 border border-neutral-100 group">
                            <Image 
                                src="https://i.imgur.com/ltVswqz.jpeg" 
                                alt="Executive Focus" 
                                fill 
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                className="object-contain p-4 grayscale group-hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                        <div className="col-span-3 relative bg-neutral-50 border border-neutral-100 group">
                            <Image 
                                src="https://i.imgur.com/NFJSDkA.jpeg" 
                                alt="Collaboration" 
                                fill 
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                className="object-contain p-4 grayscale group-hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                        <div className="col-span-5 relative bg-neutral-50 border border-neutral-100 group">
                            <Image 
                                src="https://i.imgur.com/fqd0FsC.jpeg" 
                                alt="Strategic Meeting" 
                                fill 
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 42vw"
                                className="object-contain p-4 grayscale group-hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 4. CORE VALUES --- */}
            <section id="core-values" className="w-full py-24 md:py-32 bg-neutral-50">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="text-center mb-20">
                        <h2 className="text-[12px] tracking-[0.4em] uppercase text-neutral-400 mb-4">Ethos</h2>
                        <p className="text-3xl md:text-4xl font-serif">Guiding Principles</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pt-12">
                        {coreValues.map((value, index) => (
                            <div key={index} className="space-y-4 group">
                                <div className="text-4xl font-serif text-neutral-300 group-hover:text-black transition-colors">
                                    0{index + 1}
                                </div>
                                <h3 className="text-lg font-bold uppercase tracking-widest">{value.title}</h3>
                                <p className="text-sm text-neutral-500 leading-relaxed font-light">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- 5. STRATEGY --- */}
            <section id="strategy" className="w-full py-24 md:py-32">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
                        <div className="lg:col-span-4 space-y-8">
                            <div>
                                <h2 className="text-[12px] tracking-[0.4em] uppercase text-neutral-400 mb-4">Strategy</h2>
                                <p className="text-3xl md:text-4xl font-serif">The Framework</p>
                            </div>
                            <div className="space-y-2">
                                {expansionStrategyItems.map((item) => (
                                    <button
                                        key={item.slug}
                                        onClick={() => setActiveStrategy(item)}
                                        className={cn(
                                            "w-full text-left py-4 px-6 text-[10px] tracking-[0.2em] uppercase font-bold border-l-2 transition-all duration-300",
                                            activeStrategy.slug === item.slug
                                                ? "border-black text-black bg-neutral-50"
                                                : "border-transparent text-neutral-400 hover:text-black hover:border-neutral-300"
                                        )}
                                    >
                                        {item.title}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="lg:col-span-8">
                             <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeStrategy.slug}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.4 }}
                                    className="bg-neutral-50 p-12 h-full min-h-[400px] flex flex-col justify-center border border-neutral-100"
                                >
                                    <h3 className="text-2xl font-serif mb-6">{activeStrategy.title}</h3>
                                    <p className="text-neutral-500 font-light leading-relaxed text-lg">
                                        {activeStrategy.content}
                                    </p>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 6. TIMELINE --- */}
            <section id="timeline" className="w-full py-24 md:py-32">
                <div className="container mx-auto px-6 md:px-12 max-w-4xl">
                    <div className="text-center mb-20">
                        <h2 className="text-[12px] tracking-[0.4em] uppercase text-neutral-400 mb-4">Milestones</h2>
                        <p className="text-3xl md:text-4xl font-serif">Our Journey</p>
                    </div>

                    <div className="relative border-l border-neutral-200 ml-6 md:ml-1/2 space-y-16">
                        {companyTimeline.map((item, index) => (
                            <div key={index} className="relative pl-12">
                                <div className="absolute -left-[5px] top-2 w-[9px] h-[9px] bg-black rounded-full ring-4 ring-white" />
                                <div className="space-y-2">
                                    <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-neutral-400">
                                        {item.year}
                                    </span>
                                    <h3 className="text-xl font-serif">{item.event}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- 7. PHILOSOPHY --- */}
            <section id="philosophy" className="w-full py-24 md:py-32 bg-black text-white">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="text-center mb-20">
                        <h2 className="text-[12px] tracking-[0.4em] uppercase text-neutral-500 mb-4">Philosophy</h2>
                        <p className="text-3xl md:text-4xl font-serif">Investment Criteria</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12 border-t border-white/20 pt-12">
                         {investmentPhilosophy.map((item, index) => (
                            <div key={index} className="space-y-4">
                                <item.icon className="h-6 w-6 stroke-[1px] text-white/50" />
                                <h3 className="text-lg font-bold uppercase tracking-widest">{item.title}</h3>
                                <p className="text-sm text-neutral-400 leading-relaxed font-light">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- 8. CTA --- */}
            <section className="py-32 text-center bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-5xl font-serif mb-8">Meet the Leadership</h2>
                    <p className="text-neutral-500 max-w-2xl mx-auto mb-10 font-light">
                        Our leadership team combines decades of experience in finance, real estate, and strategic development.
                    </p>
                    <Link href="/leadership" className="inline-block text-[11px] tracking-[0.3em] uppercase font-bold border-b border-black pb-2 hover:opacity-50 transition-opacity">
                        View Team Profile
                    </Link>
                </div>
            </section>
        </div>
    );
}
