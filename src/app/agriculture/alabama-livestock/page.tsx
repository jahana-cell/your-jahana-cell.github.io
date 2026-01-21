
'use client';

import Image from "next/image";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, DollarSign, HelpCircle, 
  BookOpen, CheckCircle2, MapPin, 
  Users, Home, Sprout 
} from "lucide-react";
import { AgricultureNav } from "@/components/agriculture-nav"; // Assuming this exists

// --- LUXURY ANIMATION UTILITIES ---
const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
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

export default function AlabamaLivestockPage() {
  return (
    <div className="bg-white min-h-screen text-black selection:bg-black selection:text-white">
      
      {/* --- 1. HERO (Cinematic) --- */}
      <section className="relative w-full h-[85vh] flex items-center justify-center bg-black overflow-hidden">
        <ScaleIn>
            <Image
            src="https://images.unsplash.com/photo-1589922585952-b31ed31b2c92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600"
            alt="Alabama Livestock"
            fill
            className="object-cover object-center opacity-60 md:opacity-50"
            priority
            />
        </ScaleIn>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
        
        <div className="relative z-20 container mx-auto px-6 text-center">
            <FadeIn>
                <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 border border-white/20 bg-white/10 backdrop-blur-md rounded-full">
                    <MapPin className="w-3 h-3 text-white" />
                    <p className="text-white text-[10px] tracking-[0.2em] uppercase font-bold">
                        Birmingham, AL
                    </p>
                </div>
                
                <h1 className="text-4xl md:text-7xl lg:text-8xl font-serif text-white leading-tight mb-6">
                    Community<br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400">Resilience.</span>
                </h1>
                
                <p className="text-base md:text-xl text-neutral-300 font-light max-w-2xl mx-auto leading-relaxed mb-10">
                    A foundational project reshaping our connection with land, food systems, and ownership in America.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto">
                    <Link href="#investment" className="w-full bg-white text-black h-14 flex items-center justify-center text-[11px] tracking-[0.3em] uppercase font-bold hover:bg-neutral-200 transition-all rounded-sm shadow-lg">
                        View Investment
                    </Link>
                    <Link href="#overview" className="w-full border border-white/30 text-white h-14 flex items-center justify-center text-[11px] tracking-[0.3em] uppercase font-bold hover:bg-white hover:text-black transition-all rounded-sm">
                        Read Vision
                    </Link>
                </div>
            </FadeIn>
        </div>
      </section>

      {/* --- 2. OVERVIEW (Editorial Layout) --- */}
      <section id="overview" className="w-full py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                
                {/* Left: Narrative */}
                <div>
                    <FadeIn>
                        <h2 className="text-[11px] tracking-[0.4em] uppercase text-neutral-400 mb-6">The Initiative</h2>
                        <h3 className="text-3xl md:text-5xl font-serif leading-tight mb-8">
                            More than a Farm. <br/>A Future.
                        </h3>
                        <div className="space-y-6 text-neutral-500 font-light leading-relaxed text-lg">
                            <p>
                                Following a foundational meeting with Brother Selim, Dr. Aminuddin, and Ashif Jahan, we have begun structuring the livestock program on Brother Selim’s farm in Birmingham.
                            </p>
                            <p>
                                GrowShare Capital will lead the fundraising, with Khalui Farm LLC contributing <strong>$5,000 in seed support</strong>. Our intent is not for the initial stakeholders to remain the only ones, but to create a shared investment model for the wider community.
                            </p>
                        </div>
                    </FadeIn>
                </div>

                {/* Right: Objectives List */}
                <div className="bg-neutral-50 p-8 md:p-12 border border-neutral-100 rounded-sm">
                    <FadeIn delay={0.2}>
                        <h4 className="font-serif text-2xl mb-8">Core Objectives</h4>
                        <ul className="space-y-6">
                            <li className="flex gap-4 items-start group">
                                <Users className="w-6 h-6 text-black flex-shrink-0 mt-1" />
                                <div>
                                    <h5 className="font-bold text-sm uppercase tracking-wider mb-1">Community Investment</h5>
                                    <p className="text-sm text-neutral-500 font-light">Strengthening local financial power to ensure fair pricing and shared equity.</p>
                                </div>
                            </li>
                            <li className="flex gap-4 items-start group">
                                <Home className="w-6 h-6 text-black flex-shrink-0 mt-1" />
                                <div>
                                    <h5 className="font-bold text-sm uppercase tracking-wider mb-1">Co-Housing</h5>
                                    <p className="text-sm text-neutral-500 font-light">Developing affordable living to anchor community growth alongside the farm.</p>
                                </div>
                            </li>
                            <li className="flex gap-4 items-start group">
                                <Sprout className="w-6 h-6 text-black flex-shrink-0 mt-1" />
                                <div>
                                    <h5 className="font-bold text-sm uppercase tracking-wider mb-1">Replicable Model</h5>
                                    <p className="text-sm text-neutral-500 font-light">Expanding knowledge-sharing so this program can be cloned in other cities.</p>
                                </div>
                            </li>
                        </ul>
                    </FadeIn>
                </div>
            </div>
        </div>
      </section>

      {/* --- 3. RESOURCES (Grid of Action Cards) --- */}
      <section className="w-full py-20 md:py-32 bg-neutral-900 text-white">
        <div className="container mx-auto px-6 md:px-12">
            <FadeIn>
                <div className="text-center mb-16">
                    <h2 className="text-[11px] tracking-[0.4em] uppercase text-neutral-500 mb-4">Transparency</h2>
                    <p className="text-3xl md:text-5xl font-serif">Due Diligence Resources</p>
                </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Resource 1: Business Plan */}
                <FadeIn delay={0.1}>
                    <div className="group border border-white/10 p-10 hover:bg-white/5 transition-all duration-500 rounded-sm text-center md:text-left h-full flex flex-col justify-between">
                        <div>
                            <BookOpen className="w-10 h-10 text-white mb-6 mx-auto md:mx-0 opacity-80" />
                            <h3 className="text-2xl font-serif mb-3">Sheep &amp; Lamb Plan</h3>
                            <p className="text-neutral-400 font-light leading-relaxed mb-8">
                                A comprehensive blueprint for a 10-member LLC to establish a sustainable and profitable sheep farm. Includes financial models and operational strategy.
                            </p>
                        </div>
                        <Link href="/agriculture/alabama-livestock/operation-plan" className="inline-flex items-center justify-center md:justify-start gap-3 text-[11px] uppercase tracking-[0.2em] font-bold border-b border-white/30 pb-2 hover:border-white transition-all">
                            View Detailed Plan <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </FadeIn>

                {/* Resource 2: FAQ */}
                <FadeIn delay={0.2}>
                    <div className="group border border-white/10 p-10 hover:bg-white/5 transition-all duration-500 rounded-sm text-center md:text-left h-full flex flex-col justify-between">
                        <div>
                            <HelpCircle className="w-10 h-10 text-white mb-6 mx-auto md:mx-0 opacity-80" />
                            <h3 className="text-2xl font-serif mb-3">Project Q&amp;A</h3>
                            <p className="text-neutral-400 font-light leading-relaxed mb-8">
                                Answers to common questions regarding the land tenure, co-housing development timeline, and specific investment structures for this project.
                            </p>
                        </div>
                        <Link href="/agriculture/alabama-livestock/faq" className="inline-flex items-center justify-center md:justify-start gap-3 text-[11px] uppercase tracking-[0.2em] font-bold border-b border-white/30 pb-2 hover:border-white transition-all">
                            Read the Q&amp;A <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </FadeIn>
            </div>
        </div>
      </section>

      {/* --- 4. INVESTMENT CTA (Financial Terminal Style) --- */}
      <section id="investment" className="w-full py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6">
            <FadeIn>
                <div className="max-w-4xl mx-auto bg-neutral-50 border border-neutral-200 p-8 md:p-16 text-center rounded-sm shadow-sm">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white border border-neutral-200 rounded-full mb-8 shadow-sm">
                        <DollarSign className="w-8 h-8 text-black" />
                    </div>
                    
                    <h2 className="text-[11px] tracking-[0.4em] uppercase text-neutral-400 mb-6">Capital Call</h2>
                    <h3 className="text-3xl md:text-5xl font-serif mb-10">
                        Alabama Food System
                    </h3>

                    {/* Data Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-200 border border-neutral-200 mb-10 overflow-hidden rounded-sm">
                        <div className="bg-white p-6">
                            <p className="text-[10px] uppercase tracking-widest text-neutral-400 mb-2">Fundraising Goal</p>
                            <p className="text-3xl font-serif">$20,000</p>
                        </div>
                        <div className="bg-white p-6">
                            <p className="text-[10px] uppercase tracking-widest text-neutral-400 mb-2">Share Price</p>
                            <p className="text-3xl font-serif">$1,000</p>
                        </div>
                    </div>

                    <p className="text-neutral-500 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
                        Your investment directly supports the launch of poultry operations, providing capital for infrastructure and livestock. Join us in building a more resilient local food economy.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/agriculture/alabama-livestock/payment" className="w-full sm:w-auto bg-black text-white h-14 flex items-center justify-center px-10 text-[11px] tracking-[0.3em] uppercase font-bold hover:bg-neutral-800 transition-all rounded-sm shadow-lg">
                            Invest Now
                        </Link>
                        <Link href="/contact" className="w-full sm:w-auto border border-neutral-300 text-black h-14 flex items-center justify-center px-10 text-[11px] tracking-[0.3em] uppercase font-bold hover:bg-white transition-all rounded-sm">
                            Contact Team
                        </Link>
                    </div>
                </div>
            </FadeIn>
        </div>
      </section>

    </div>
  );
}
