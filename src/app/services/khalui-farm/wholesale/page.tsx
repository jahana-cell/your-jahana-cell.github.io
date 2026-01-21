'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Utensils, BadgeCheck, Scale, ChefHat, Download, ScrollText } from 'lucide-react';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

export default function WholesalePage() {
    return (
        <div className="bg-[#0B0C0B] text-[#E8E8E3] min-h-screen font-sans selection:bg-[#D4AF37]/30 selection:text-white overflow-x-hidden">
             <style dangerouslySetInnerHTML={{ __html: `
                @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Manrope:wght@200;300;400;500;600&display=swap');
                .font-serif { font-family: 'Cinzel', serif; }
                .font-sans { font-family: 'Manrope', sans-serif; }
                body > header, body > footer, body > nav { display: none !important; }
            `}} />

            {/* --- BACKGROUND TEXTURES --- */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay"></div>
                 <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[120px]"></div>
                 <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#141F14] rounded-full blur-[100px] opacity-50"></div>
            </div>

            {/* --- HEADER --- */}
            <header className="fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-12 md:py-8 flex justify-between items-center pointer-events-none">
                 <a href="/agriculture/khalui-farm" className="pointer-events-auto group inline-flex items-center gap-4 text-white/60 hover:text-[#D4AF37] transition-all">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-black/20 backdrop-blur-md group-hover:border-[#D4AF37] group-hover:scale-105 transition-all duration-500">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-300" />
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 hidden md:block">
                        Return to Farm
                    </span>
                </a>

                <button className="pointer-events-auto group flex items-center gap-3 px-6 py-3 border border-white/10 bg-white/5 backdrop-blur-sm rounded-sm hover:border-[#D4AF37]/50 transition-all duration-500">
                    <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-neutral-300 group-hover:text-white">Wholesale Sheet</span>
                    <Download className="w-3 h-3 text-[#D4AF37]" />
                </button>
            </header>

            {/* --- MAIN CONTENT --- */}
            <main className="relative z-10 pt-40 pb-24 px-6 md:px-12 max-w-6xl mx-auto">
                <motion.div initial="hidden" animate="visible" variants={fadeUp}>
                    
                    {/* HERO SECTION */}
                    <div className="text-center mb-24 relative">
                        <div className="flex justify-center mb-8">
                             <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent"></div>
                        </div>
                        <div className="inline-flex items-center gap-3 border border-[#D4AF37]/20 px-4 py-2 rounded-full mb-8 bg-[#141F14]/40 backdrop-blur-md">
                            <Scale className="w-3 h-3 text-[#D4AF37]" />
                            <span className="text-[#D4AF37] text-[9px] font-bold uppercase tracking-[0.3em]">Culinary & Bulk</span>
                        </div>
                        <h1 className="font-serif text-5xl md:text-7xl mb-8 leading-tight text-white tracking-tight">
                            Heritage <br/> <span className="italic text-neutral-500">Livestock.</span>
                        </h1>
                        <p className="text-neutral-400 text-sm md:text-lg font-light leading-loose max-w-2xl mx-auto">
                            Pasture-raised Lamb and Heritage Poultry, processed in USDA-inspected facilities. 
                            Curated for restaurant partnerships and family reserves.
                        </p>
                    </div>

                    {/* PRODUCT CARDS */}
                    <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-8 md:gap-12 mb-24">
                        
                        {/* CARD 1: LAMB */}
                        <motion.div variants={fadeUp} className="group relative bg-[#141F14]/80 border border-white/5 hover:border-[#D4AF37]/30 p-10 md:p-12 rounded-sm overflow-hidden transition-all duration-700 hover:shadow-2xl hover:shadow-[#D4AF37]/5">
                             {/* Hover Glow */}
                             <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-[80px] group-hover:bg-[#D4AF37]/10 transition-colors duration-700"></div>
                             
                             <div className="relative z-10">
                                 <div className="flex justify-between items-start mb-8">
                                     <div>
                                         <h2 className="font-serif text-3xl text-white mb-2">Pasture-Raised Lamb</h2>
                                         <p className="text-[#D4AF37] text-[9px] uppercase tracking-[0.2em] font-bold">Whole • Half • Custom Cuts</p>
                                     </div>
                                     <BadgeCheck className="w-6 h-6 text-[#D4AF37] opacity-60 group-hover:opacity-100 transition-opacity" />
                                 </div>

                                 <div className="space-y-4 mb-12 border-l border-white/10 pl-6">
                                    {["Grass-fed, grain-finished option", "USDA Processed & Vacuum Sealed", "Hormone & Antibiotic Free"].map((item, i) => (
                                        <div key={i} className="flex gap-4 items-center group/item">
                                            <div className="w-1 h-1 bg-[#D4AF37] rounded-full opacity-50 group-hover/item:scale-150 transition-transform"></div>
                                            <span className="text-neutral-400 text-xs md:text-sm font-light uppercase tracking-wide group-hover/item:text-neutral-200 transition-colors">{item}</span>
                                        </div>
                                    ))}
                                 </div>

                                 {/* Menu Style Pricing */}
                                 <div className="space-y-4 pt-8 border-t border-white/5">
                                     <div className="flex items-baseline justify-between w-full">
                                         <span className="font-serif text-lg text-white">Whole Lamb</span>
                                         <span className="flex-grow border-b border-white/10 mx-4 border-dotted opacity-30"></span>
                                         <span className="font-sans text-sm text-[#D4AF37]">$9.50 / lb (hanging)</span>
                                     </div>
                                     <div className="flex items-baseline justify-between w-full">
                                         <span className="font-serif text-lg text-white">Chops (Retail)</span>
                                         <span className="flex-grow border-b border-white/10 mx-4 border-dotted opacity-30"></span>
                                         <span className="font-sans text-sm text-[#D4AF37]">$24.00 / lb</span>
                                     </div>
                                 </div>
                                 
                                 {/* Hover Action */}
                                 <div className="mt-8 overflow-hidden h-0 group-hover:h-auto group-hover:mt-10 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                     <a href="https://wa.me/12144736888" className="inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-white border-b border-[#D4AF37] pb-1 hover:text-[#D4AF37] transition-colors">
                                         Reserve Allocation <ArrowLeft className="w-3 h-3 rotate-180" />
                                     </a>
                                 </div>
                             </div>
                        </motion.div>

                        {/* CARD 2: CHICKEN */}
                        <motion.div variants={fadeUp} className="group relative bg-[#141F14]/80 border border-white/5 hover:border-[#D4AF37]/30 p-10 md:p-12 rounded-sm overflow-hidden transition-all duration-700 hover:shadow-2xl hover:shadow-[#D4AF37]/5">
                             <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-[80px] group-hover:bg-[#D4AF37]/10 transition-colors duration-700"></div>

                             <div className="relative z-10">
                                 <div className="flex justify-between items-start mb-8">
                                     <div>
                                         <h2 className="font-serif text-3xl text-white mb-2">Heritage Poultry</h2>
                                         <p className="text-[#D4AF37] text-[9px] uppercase tracking-[0.2em] font-bold">Whole Birds • Seasonal</p>
                                     </div>
                                     <BadgeCheck className="w-6 h-6 text-[#D4AF37] opacity-60 group-hover:opacity-100 transition-opacity" />
                                 </div>

                                 <div className="space-y-4 mb-12 border-l border-white/10 pl-6">
                                    {["Free-range on pasture", "Slow-growth heritage breeds", "Air-chilled processing"].map((item, i) => (
                                        <div key={i} className="flex gap-4 items-center group/item">
                                            <div className="w-1 h-1 bg-[#D4AF37] rounded-full opacity-50 group-hover/item:scale-150 transition-transform"></div>
                                            <span className="text-neutral-400 text-xs md:text-sm font-light uppercase tracking-wide group-hover/item:text-neutral-200 transition-colors">{item}</span>
                                        </div>
                                    ))}
                                 </div>

                                 {/* Menu Style Pricing */}
                                 <div className="space-y-4 pt-8 border-t border-white/5">
                                     <div className="flex items-baseline justify-between w-full">
                                         <span className="font-serif text-lg text-white">Whole Bird</span>
                                         <span className="flex-grow border-b border-white/10 mx-4 border-dotted opacity-30"></span>
                                         <span className="font-sans text-sm text-[#D4AF37]">$6.50 / lb</span>
                                     </div>
                                     <div className="flex items-baseline justify-between w-full">
                                         <span className="font-serif text-lg text-white">Wholesale (10+)</span>
                                         <span className="flex-grow border-b border-white/10 mx-4 border-dotted opacity-30"></span>
                                         <span className="font-sans text-sm italic text-neutral-500">Inquire for Pricing</span>
                                     </div>
                                 </div>

                                 {/* Hover Action */}
                                 <div className="mt-8 overflow-hidden h-0 group-hover:h-auto group-hover:mt-10 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                     <a href="https://wa.me/12144736888" className="inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-white border-b border-[#D4AF37] pb-1 hover:text-[#D4AF37] transition-colors">
                                         Reserve Allocation <ArrowLeft className="w-3 h-3 rotate-180" />
                                     </a>
                                 </div>
                             </div>
                        </motion.div>
                    </motion.div>

                    {/* FORM CTA (EDITORIAL STYLE) */}
                    <div className="relative bg-[#F9F9F7] text-[#141F14] p-12 md:p-24 rounded-sm text-center shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
                        {/* Decorative Background */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-[#D4AF37]"></div>
                        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-[80px]"></div>
                        
                        <div className="relative z-10 flex flex-col items-center">
                            <ChefHat className="w-10 h-10 mb-6 text-[#141F14] opacity-80" />
                            <h3 className="font-serif text-3xl md:text-5xl mb-6">Chef & Restaurant Partners</h3>
                            <p className="text-neutral-600 mb-10 max-w-lg mx-auto font-light leading-relaxed">
                                We offer consistent supply agreements and "nose-to-tail" exclusives for local chefs. 
                                <br/><span className="italic font-serif text-[#141F14]">Contact us to schedule a tasting.</span>
                            </p>
                            
                            <a href="https://wa.me/12144736888" className="group relative inline-flex items-center gap-4 px-10 py-5 bg-[#141F14] text-white text-[10px] font-bold uppercase tracking-[0.25em] overflow-hidden hover:bg-[#D4AF37] transition-colors duration-500">
                                <span className="relative z-10 group-hover:text-[#141F14] transition-colors duration-500">Open Wholesale Account</span>
                                <ScrollText className="w-4 h-4 text-[#D4AF37] group-hover:text-[#141F14] transition-colors duration-500 relative z-10" />
                            </a>
                        </div>
                    </div>

                </motion.div>
            </main>

            {/* --- MINIMAL FOOTER --- */}
            <footer className="py-12 text-center border-t border-white/5">
                <p className="text-[9px] uppercase tracking-[0.2em] text-neutral-500 font-sans">
                    © {new Date().getFullYear()} Khalui Farm. All Rights Reserved.
                </p>
            </footer>
        </div>
    );
}