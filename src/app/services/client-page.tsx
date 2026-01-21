'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Landmark, UserCog, Award, 
  Stamp, ClipboardList, Route, Database, 
  Wrench, Construction, Sprout, Globe, MapPin, ShieldCheck, Utensils
} from 'lucide-react';
import { ServicesNav } from '@/components/services-nav';
import { cn } from '@/lib/utils';

// --- TEXTURE ASSET ---
const TEXTURE_URL = "https://www.transparenttextures.com/patterns/cream-paper.png";

// --- ANIMATION WRAPPER ---
const Reveal = ({ children, delay = 0, width = "100%" }: { children: React.ReactNode, delay?: number, width?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1.0, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{ width }}
    >
      {children}
    </motion.div>
  );
};

// --- DATA ---
const adminServices = [
  { title: 'Accounting', description: 'Financial oversight & metrics.', link: '/services/accounting', icon: Landmark },
  { title: 'Admin Dashboard', description: 'Centralized document control.', link: '/services/admin', icon: UserCog },
  { title: 'Certificate Generator', description: 'Investor partnership records.', link: '/services/certificate', icon: Award },
  { title: 'Digital Notary', description: 'Secure timestamped verification.', link: '/services/notary', icon: Stamp },
  { title: 'Meeting Agendas', description: 'Board & team planning.', link: '/services/agendas', icon: ClipboardList },
  { title: 'IT Roadmap', description: 'Strategic technical vision.', link: '/services/roadmap', icon: Route },
  { title: 'Database Tools', description: 'Manual sync operations.', link: '/seed-db', icon: Database }
];

export default function ServicesClientPage() {
  return (
    <div className="bg-[#FAF9F6] min-h-screen text-[#1a1a1a] selection:bg-[#1a1a1a] selection:text-white relative">
      
      {/* GLOBAL STYLES & TEXTURE */}
      <style dangerouslySetInnerHTML={{ __html: `
        .grain-overlay {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background-image: url(${TEXTURE_URL});
            opacity: 0.3; pointer-events: none; z-index: 30; mix-blend-mode: multiply;
        }
      `}} />
      <div className="grain-overlay" />

      {/* --- 1. HERO (Typographic / No Image) --- */}
      <section className="relative w-full pt-40 pb-20 md:pt-48 md:pb-32 px-6 md:px-12 flex flex-col items-center justify-center bg-[#FAF9F6]">
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            >
                {/* Decorative Top Line */}
                <div className="w-[1px] h-16 bg-[#1a1a1a]/20 mx-auto mb-8" />

                <p className="text-[#8C7B75] text-[10px] md:text-xs tracking-[0.4em] uppercase font-bold mb-8">
                  The Portfolio
                </p>
                
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-[#1a1a1a] leading-[0.85] mb-10 tracking-tight">
                  Our Services
                </h1>
                
                <p className="text-lg md:text-xl font-light text-[#594A47] max-w-xl mx-auto leading-relaxed">
                  Professional design, construction, and training services tailored to build resilient communities and sustainable value.
                </p>
            </motion.div>
        </div>
      </section>
      
      {/* NAV BAR */}
      <div className="sticky top-0 z-40 bg-[#FAF9F6]/90 backdrop-blur-md border-y border-[#1a1a1a]/5 py-2">
        <div className="overflow-x-auto no-scrollbar">
            <div className="flex justify-center min-w-max px-4">
                <ServicesNav />
            </div>
        </div>
      </div>

      <main className="w-full relative z-10">
        
        {/* --- 2. SKYLINE DB3 (Design) --- */}
        <section className="grid lg:grid-cols-2 min-h-[85vh] border-b border-[#1a1a1a]/5">
            <div className="relative h-[50vh] lg:h-full group overflow-hidden bg-[#EAE5DE]">
                <Image
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070"
                    alt="SkylineDB3"
                    fill
                    className="object-cover transition-transform duration-[1.5s] group-hover:scale-105 grayscale-[20%]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700" />
                <div className="absolute bottom-12 left-12">
                     <div className="bg-white/90 backdrop-blur p-4 inline-block">
                        <span className="font-serif text-2xl tracking-tight">Skyline<span className="font-bold">DB3</span></span>
                     </div>
                </div>
            </div>

            <div className="flex items-center p-12 lg:p-24 bg-[#FAF9F6]">
                <Reveal>
                    <div className="flex items-center gap-4 text-[#8C7B75] mb-8">
                        <Construction className="w-5 h-5 stroke-[1.5px]" />
                        <span className="text-[10px] tracking-[0.2em] uppercase font-bold">Architecture & Build</span>
                    </div>
                    
                    <h2 className="text-4xl md:text-6xl font-serif leading-[0.95] text-[#1a1a1a] mb-8">
                        SkylineDB3<br />Design & Build
                    </h2>
                    
                    <p className="text-base md:text-lg font-light text-[#594A47] leading-loose max-w-md mb-12">
                        Our subsidiary, SkylineDB3, brings ambitious projects to life through innovative architectural design and master planning. From conceptual sketches to 3D visualization and final construction.
                    </p>

                    <Link href="/services/skylinedb3" className="group inline-flex items-center gap-4 text-[11px] tracking-[0.3em] uppercase font-bold text-[#1a1a1a] hover:text-[#C6A87C] transition-colors">
                        Explore Portfolio <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </Reveal>
            </div>
        </section>

        {/* --- 3. FARM TRAINING (Reversed Layout) --- */}
        <section className="grid lg:grid-cols-2 min-h-[85vh] border-b border-[#1a1a1a]/5">
             <div className="flex items-center p-12 lg:p-24 bg-[#FAF9F6] order-2 lg:order-1">
                <Reveal>
                    <div className="flex items-center gap-4 text-[#8C7B75] mb-8">
                        <Sprout className="w-5 h-5 stroke-[1.5px]" />
                        <span className="text-[10px] tracking-[0.2em] uppercase font-bold">Education</span>
                    </div>
                    
                    <h2 className="text-4xl md:text-6xl font-serif leading-[0.95] text-[#1a1a1a] mb-8">
                        Farm & Garden<br />Training
                    </h2>
                    
                    <p className="text-base md:text-lg font-light text-[#594A47] leading-loose max-w-md mb-12">
                        Master the art of sustainable agriculture. We offer hands-on training in greenhouse management, beekeeping, and organic gardening to empower local communities.
                    </p>

                    <Link href="/services/training" className="group inline-flex items-center gap-4 text-[11px] tracking-[0.3em] uppercase font-bold text-[#1a1a1a] hover:text-[#C6A87C] transition-colors">
                        Book a Session <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </Reveal>
            </div>

            <div className="relative h-[50vh] lg:h-full group overflow-hidden bg-[#EAE5DE] order-1 lg:order-2">
                <Image
                    src="https://images.unsplash.com/photo-1492496913980-501348b61469?q=80&w=1080"
                    alt="Farm Training"
                    fill
                    className="object-cover transition-transform duration-[1.5s] group-hover:scale-105 grayscale-[20%]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700" />
            </div>
        </section>
        
        {/* --- 4. KHALUI FARM --- */}
        <section className="grid lg:grid-cols-2 min-h-[85vh] border-b border-[#1a1a1a]/5">
            <div className="relative h-[50vh] lg:h-full group overflow-hidden bg-[#EAE5DE]">
                <Image
                     src="https://images.unsplash.com/photo-1592079927431-3f8ced0dacc6?q=80&w=1200"
                    alt="Khalui Farm"
                    fill
                    className="object-cover transition-transform duration-[1.5s] group-hover:scale-105 grayscale-[20%]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700" />
            </div>

            <div className="flex items-center p-12 lg:p-24 bg-[#FAF9F6]">
                <Reveal>
                    <div className="flex items-center gap-4 text-[#8C7B75] mb-8">
                         <ShieldCheck className="w-5 h-5 stroke-[1.5px]" />
                        <span className="text-[10px] tracking-[0.2em] uppercase font-bold">USDA Certified Organic</span>
                    </div>
                    
                    <h2 className="text-4xl md:text-6xl font-serif leading-[0.95] text-[#1a1a1a] mb-8">
                        Khalui Farm
                    </h2>
                    
                    <p className="text-base md:text-lg font-light text-[#594A47] leading-loose max-w-md mb-12">
                        The cornerstone of our agricultural portfolio. A USDA Certified Organic operation pioneering regenerative urban farming, CSA memberships, and farm-to-table partnerships.
                    </p>

                    <Link href="/services/khalui-farm" className="group inline-flex items-center gap-4 text-[11px] tracking-[0.3em] uppercase font-bold text-[#1a1a1a] hover:text-[#C6A87C] transition-colors">
                        Visit The Farm <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </Reveal>
            </div>
        </section>
        
        {/* --- 5. SAFURA'S BAKERY --- */}
        <section className="grid lg:grid-cols-2 min-h-[85vh] border-b border-[#1a1a1a]/5">
             <div className="flex items-center p-12 lg:p-24 bg-[#F9F1F0] order-2 lg:order-1">
                <Reveal>
                    <div className="flex items-center gap-4 text-[#D4A59A] mb-8">
                        <Utensils className="w-5 h-5 stroke-[1.5px]" />
                        <span className="text-[10px] tracking-[0.2em] uppercase font-bold">Artisan Confectionery</span>
                    </div>
                    
                    <h2 className="text-4xl md:text-6xl font-serif leading-[0.95] text-[#2C1810] mb-8">
                        Safura's Bakery
                    </h2>
                    
                    <p className="text-base md:text-lg font-light text-[#5D4037] leading-loose max-w-md mb-12">
                        Bespoke wedding cakes, delicate confections, and artisanal desserts. Elevating your most cherished moments with a signature touch.
                    </p>

                    <Link href="/services/safuras-bakery" className="group inline-flex items-center gap-4 text-[11px] tracking-[0.3em] uppercase font-bold text-[#2C1810] hover:text-[#D4A59A] transition-colors">
                        Explore Confections <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </Reveal>
            </div>

            <div className="relative h-[50vh] lg:h-full group overflow-hidden bg-[#2C1810] order-1 lg:order-2">
                <Image
                    src="https://i.imgur.com/klLlEA4.jpeg"
                    alt="Safura's Bakery"
                    fill
                    className="object-cover transition-transform duration-[1.5s] group-hover:scale-105 opacity-90"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/50 via-transparent to-transparent" />
            </div>
        </section>


        {/* --- 6. GLOBAL TRADE --- */}
        <section className="grid lg:grid-cols-2 min-h-[85vh] border-b border-[#1a1a1a]/5">
            <div className="relative h-[50vh] lg:h-full group overflow-hidden bg-[#1a1a1a]">
                <Image
                    src="https://images.unsplash.com/photo-1554769944-3138b076c38a?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Global Trade"
                    fill
                    className="object-cover transition-transform duration-[1.5s] group-hover:scale-105 opacity-80"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/30" />
            </div>

            <div className="flex items-center p-12 lg:p-24 bg-[#FAF9F6]">
                <Reveal>
                    <div className="flex items-center gap-4 text-[#8C7B75] mb-8">
                        <Globe className="w-5 h-5 stroke-[1.5px]" />
                        <span className="text-[10px] tracking-[0.2em] uppercase font-bold">Logistics & Supply</span>
                    </div>
                    
                    <h2 className="text-4xl md:text-6xl font-serif leading-[0.95] text-[#1a1a1a] mb-8">
                        Global Trade<br />Solutions
                    </h2>
                    
                    <p className="text-base md:text-lg font-light text-[#594A47] leading-loose max-w-md mb-12">
                        Bridging the gap between world-class manufacturers and high-growth markets. We de-risk procurement and supply chains for critical infrastructure and healthcare projects.
                    </p>

                    <Link href="/services/global-trade" className="group inline-flex items-center gap-4 text-[11px] tracking-[0.3em] uppercase font-bold text-[#1a1a1a] hover:text-[#C6A87C] transition-colors">
                        View Trade Network <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </Reveal>
            </div>
        </section>

        {/* --- 7. ADMIN TOOLKIT --- */}
        <section className="w-full py-24 md:py-32 bg-white">
            <div className="container mx-auto px-6 md:px-12">
                <Reveal width="100%">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 border-b border-[#1a1a1a]/10 pb-8">
                        <div>
                            <h3 className="text-[10px] tracking-[0.2em] uppercase text-[#8C7B75] mb-4 font-bold">Internal Tools</h3>
                            <h2 className="text-3xl md:text-5xl font-serif text-[#1a1a1a]">Admin Portal</h2>
                        </div>
                        <div className="flex items-center gap-3 text-[#1a1a1a]/50 mt-6 md:mt-0">
                            <Wrench className="w-4 h-4" />
                            <span className="text-[10px] tracking-[0.2em] uppercase font-bold">Secure Access</span>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {adminServices.map((service, idx) => (
                            <Link 
                                key={service.title} 
                                href={service.link}
                                className="group block p-10 border border-[#1a1a1a]/5 hover:border-[#1a1a1a]/20 transition-all duration-500 bg-[#FAF9F6] hover:bg-white hover:shadow-xl hover:-translate-y-1"
                            >
                                <div className="mb-8 flex justify-between items-start">
                                    <service.icon className="w-8 h-8 stroke-[1px] text-[#8C7B75] group-hover:text-[#1a1a1a] transition-colors" />
                                    <ArrowRight className="w-4 h-4 text-[#1a1a1a]/20 group-hover:text-[#1a1a1a] -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                </div>
                                <h3 className="text-xl font-serif text-[#1a1a1a] mb-3">{service.title}</h3>
                                <p className="text-sm font-light text-[#594A47] group-hover:text-[#1a1a1a]/80 transition-colors">
                                    {service.description}
                                </p>
                            </Link>
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>

      </main>
    </div>
  );
}
