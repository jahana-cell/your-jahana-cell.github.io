
      
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Globe, Ship, HardHat, Stethoscope, 
  ShieldCheck, Zap, Handshake, TrendingUp, CheckCircle2 
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from '@/lib/utils';

export default function GlobalTradePage() {
    return (
        <div className="bg-white min-h-screen text-black selection:bg-black selection:text-white">
            
            {/* --- 1. HERO (Responsive Height & Text) --- */}
            <header className="relative w-full h-[75vh] md:h-[85vh] flex items-center justify-center bg-black overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070" 
                    alt="Global Trade"
                    fill
                    sizes="100vw"
                    className="object-cover opacity-60"
                    priority
                />
                <div className="relative z-10 container mx-auto px-6 text-center">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="flex flex-col items-center"
                    >
                        <p className="text-white text-[10px] md:text-[11px] tracking-[0.4em] uppercase font-bold mb-4 md:mb-6">
                            Global Trade Solutions
                        </p>
                        <h1 className="text-4xl md:text-7xl lg:text-8xl font-serif text-white leading-tight md:leading-none mb-6 md:mb-8">
                            Strategic Trading.<br/>Resilient Growth.
                        </h1>
                        <p className="text-base md:text-xl text-white/80 font-light max-w-2xl mx-auto leading-relaxed">
                            Unlocking growth in high-demand sectors by bridging the gap between global manufacturers and critical markets.
                        </p>
                    </motion.div>
                </div>
            </header>

            {/* --- 2. MISSION --- */}
            <section className="w-full py-20 md:py-32 border-b border-neutral-100">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                        <div>
                            <h2 className="text-[12px] tracking-[0.4em] uppercase text-neutral-400 mb-6">Our Core Philosophy</h2>
                            <h3 className="text-3xl md:text-5xl font-serif leading-tight">
                                Profit with Purpose.
                            </h3>
                        </div>
                        <div className="space-y-8">
                            <p className="text-lg font-light text-neutral-500 leading-relaxed">
                                We believe the most sustainable growth is achieved by investing in the foundational pillars of society. Our trading venture executes the GrowShare Capital philosophy by focusing on <strong>Healthcare</strong> and <strong>Infrastructure</strong>—the "Foundations of Life."
                            </p>
                            
                            {/* Mobile Grid for Icons */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                                <div className="space-y-2 bg-neutral-50 p-4 rounded-sm">
                                    <ShieldCheck className="w-6 h-6 text-black" />
                                    <h4 className="text-sm font-bold uppercase tracking-wider">Quality Assurance</h4>
                                    <p className="text-xs text-neutral-500">Meticulous vetting & compliance checks.</p>
                                </div>
                                <div className="space-y-2 bg-neutral-50 p-4 rounded-sm">
                                    <Zap className="w-6 h-6 text-black" />
                                    <h4 className="text-sm font-bold uppercase tracking-wider">Logistics Speed</h4>
                                    <p className="text-xs text-neutral-500">Strategic local stocking & rapid delivery.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 3. VALUE CHAIN (Swipeable on Mobile) --- */}
            <section className="w-full py-20 md:py-32 bg-neutral-50">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="text-center mb-16 md:mb-20">
                        <h2 className="text-[12px] tracking-[0.4em] uppercase text-neutral-400 mb-4">The Value Chain</h2>
                        <p className="text-3xl md:text-5xl font-serif">End-to-End Service Model</p>
                    </div>

                    {/* Desktop View: Grid */}
                    <div className="hidden md:grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Manufacturers / OEMs", desc: "Trusted market-entry partner representing brands with integrity." },
                            { title: "Importer / Master Dealer", desc: "Managing customs & compliance for a seamless importation process." },
                            { title: "Regional Distribution", desc: "Empowering local networks with inventory and efficient delivery." },
                            { title: "Value-Adding Integrators", desc: "Equipping contractors with technical expertise for execution." },
                            { title: "End Customers", desc: "Direct partner to hospitals & government entities." },
                            { title: "After-Sales Service", desc: "Guaranteed long-term value via maintenance & warranty support." }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-8 border border-neutral-100 group hover:border-black transition-colors">
                                <span className="text-4xl font-serif text-neutral-200 group-hover:text-black transition-colors mb-4 block">0{i+1}</span>
                                <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                                <p className="text-sm text-neutral-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Mobile View: Horizontal Scroll (Snap) */}
                    <div className="md:hidden flex overflow-x-auto gap-4 pb-8 snap-x snap-mandatory -mx-6 px-6 no-scrollbar">
                        {[
                            { title: "Manufacturers / OEMs", desc: "Trusted market-entry partner representing brands with integrity." },
                            { title: "Importer / Master Dealer", desc: "Managing customs & compliance for a seamless importation process." },
                            { title: "Regional Distribution", desc: "Empowering local networks with inventory and efficient delivery." },
                            { title: "Integrators", desc: "Equipping contractors with technical expertise for execution." },
                            { title: "End Customers", desc: "Direct partner to hospitals & government entities." },
                            { title: "After-Sales", desc: "Guaranteed long-term value via maintenance & warranty support." }
                        ].map((item, i) => (
                            <div key={i} className="min-w-[85vw] snap-center bg-white p-6 border border-neutral-200 rounded-sm">
                                <span className="text-3xl font-serif text-neutral-200 mb-4 block">0{i+1}</span>
                                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                                <p className="text-sm text-neutral-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- 4. SECTORS (Responsive Tabs) --- */}
            <section className="w-full py-20 md:py-32 bg-black text-white">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="mb-12 md:mb-16">
                        <h2 className="text-[12px] tracking-[0.4em] uppercase text-neutral-500 mb-4">Core Expertise</h2>
                        <p className="text-3xl md:text-5xl font-serif">Foundational Markets</p>
                    </div>

                    <Tabs defaultValue="construction" className="w-full">
                        {/* Tabs List: Stacks vertically on mobile, horizontal on desktop */}
                        <TabsList className="bg-transparent border-l md:border-l-0 md:border-b border-white/20 w-full flex flex-col md:flex-row justify-start items-start h-auto p-0 mb-12">
                            <TabsTrigger 
                                value="construction" 
                                className="text-white/40 data-[state=active]:text-white data-[state=active]:bg-transparent 
                                           border-l-2 md:border-l-0 md:border-b-2 border-transparent data-[state=active]:border-white 
                                           text-xl md:text-2xl font-serif py-3 md:py-4 px-4 md:px-0 rounded-none w-full md:w-auto text-left justify-start transition-all"
                            >
                                Construction Products
                            </TabsTrigger>
                            <TabsTrigger 
                                value="medical" 
                                className="text-white/40 data-[state=active]:text-white data-[state=active]:bg-transparent 
                                           border-l-2 md:border-l-0 md:border-b-2 border-transparent data-[state=active]:border-white 
                                           text-xl md:text-2xl font-serif py-3 md:py-4 px-4 md:px-0 rounded-none w-full md:w-auto text-left justify-start transition-all md:ml-8"
                            >
                                Medical Products
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="construction" className="mt-0">
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                <div className="space-y-8">
                                    <p className="text-lg text-neutral-400 font-light">
                                        The backbone of development. We deliver value by focusing on key drivers for contractors, consultants, and project owners.
                                    </p>
                                    <ul className="space-y-4">
                                        {[
                                            "Specification Influence: Partnering with engineers.",
                                            "Pipeline Intelligence: Anticipating needs early.",
                                            "Logistical Strength: Reliable local stock.",
                                            "Credit Solutions: Flexible payment options.",
                                            "Training: On-site workshops for crews."
                                        ].map((item, i) => (
                                            <li key={i} className="flex gap-4 items-start">
                                                <HardHat className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                                                <span className="text-sm text-neutral-300">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="relative aspect-video md:aspect-square bg-neutral-800 border border-white/10 p-8 flex items-center justify-center">
                                    <HardHat className="w-24 h-24 md:w-32 md:h-32 text-neutral-700" />
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="medical" className="mt-0">
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                <div className="space-y-8">
                                    <p className="text-lg text-neutral-400 font-light">
                                        Advancing global wellness. Operating within highly regulated sectors requires technical expertise and regulatory diligence.
                                    </p>
                                    <ul className="space-y-4">
                                        {[
                                            "Regulatory Navigation: Managing certifications.",
                                            "Installation: Turnkey setup and staff training.",
                                            "Service Contracts: Local technicians.",
                                            "Financing Models: Leasing and rental options.",
                                            "Clinical Relationships: Driving adoption."
                                        ].map((item, i) => (
                                            <li key={i} className="flex gap-4 items-start">
                                                <Stethoscope className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                                                <span className="text-sm text-neutral-300">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="relative aspect-video md:aspect-square bg-neutral-800 border border-white/10 p-8 flex items-center justify-center">
                                    <Stethoscope className="w-24 h-24 md:w-32 md:h-32 text-neutral-700" />
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </section>

            {/* --- 5. MARKETS (Stacked on Mobile) --- */}
            <section className="w-full py-20 md:py-32">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="text-center mb-16 md:mb-20">
                        <h2 className="text-[12px] tracking-[0.4em] uppercase text-neutral-400 mb-4">Focus Regions</h2>
                        <p className="text-3xl md:text-5xl font-serif">Strategic Markets</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                        {/* Algeria */}
                        <div className="bg-neutral-50 p-8 md:p-10 border border-neutral-100">
                            <div className="flex items-center gap-4 mb-6">
                                <Globe className="w-6 h-6" />
                                <h3 className="text-2xl font-serif">Algeria</h3>
                            </div>
                            <p className="text-sm text-neutral-500 mb-8 leading-relaxed">
                                We are the technical and logistics backbone for construction materials and a turnkey integrator for hospital equipment.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex gap-3 text-sm font-bold items-center"><CheckCircle2 className="w-4 h-4 text-black flex-shrink-0"/> Partner with EPC Contractors</li>
                                <li className="flex gap-3 text-sm font-bold items-center"><CheckCircle2 className="w-4 h-4 text-black flex-shrink-0"/> Ministry of Health Registration</li>
                                <li className="flex gap-3 text-sm font-bold items-center"><CheckCircle2 className="w-4 h-4 text-black flex-shrink-0"/> In-Country Service Techs</li>
                            </ul>
                        </div>

                        {/* Bangladesh */}
                        <div className="bg-neutral-50 p-8 md:p-10 border border-neutral-100">
                            <div className="flex items-center gap-4 mb-6">
                                <Ship className="w-6 h-6" />
                                <h3 className="text-2xl font-serif">Bangladesh</h3>
                            </div>
                            <p className="text-sm text-neutral-500 mb-8 leading-relaxed">
                                Reducing project delays for contractors and helping hospitals deliver affordable care through bundled solutions.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex gap-3 text-sm font-bold items-center"><CheckCircle2 className="w-4 h-4 text-black flex-shrink-0"/> Stock Hubs in Dhaka/Chattogram</li>
                                <li className="flex gap-3 text-sm font-bold items-center"><CheckCircle2 className="w-4 h-4 text-black flex-shrink-0"/> "Clinic Start-Up" Kits</li>
                                <li className="flex gap-3 text-sm font-bold items-center"><CheckCircle2 className="w-4 h-4 text-black flex-shrink-0"/> Engineering Training</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 6. CTA --- */}
            <section className="py-24 md:py-32 text-center bg-white border-t border-neutral-100">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-5xl font-serif mb-6 md:mb-8">Partner for Growth</h2>
                    <p className="text-neutral-500 max-w-2xl mx-auto mb-10 font-light">
                        Our integrated model is ready to de-risk your market entry and accelerate your success.
                    </p>
                    <Link href="/contact?subject=Trade Inquiry" className="inline-block text-[11px] tracking-[0.3em] uppercase font-bold border-b border-black pb-2 hover:opacity-50 transition-opacity">
                        Contact Trade Desk
                    </Link>
                </div>
            </section>
        </div>
    );
}
