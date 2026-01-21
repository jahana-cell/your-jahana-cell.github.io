'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Sun, CloudRain, Snowflake, Wind, Sprout, Download, Calendar } from 'lucide-react';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const SEASONS = [
    {
        name: "Spring",
        months: "March — May",
        icon: CloudRain,
        description: "The awakening of the soil. Crisp greens and early roots.",
        crops: ["Strawberries", "Asparagus", "Radishes", "Spinach", "Sugar Snap Peas", "Butter Lettuce", "Green Onions", "Fresh Herbs"]
    },
    {
        name: "Summer",
        months: "June — August",
        icon: Sun,
        description: "The peak of the Delta heat. Vibrant colors and robust flavors.",
        crops: ["Heirloom Tomatoes", "Sweet Peppers", "Cucumbers", "Melons", "Sweet Corn", "Okra", "Eggplant", "Genovese Basil"]
    },
    {
        name: "Autumn",
        months: "September — November",
        icon: Wind,
        description: "The cooling harvest. Hearty starches and savory leaves.",
        crops: ["Pumpkins", "Sweet Potatoes", "Winter Squash", "Apples", "Curly Kale", "Turnips", "Gold Beets", "Collards"]
    },
    {
        name: "Winter",
        months: "December — February",
        icon: Snowflake,
        description: "The dormant resilience. Concentrated sugars and frost-sweetened crops.",
        crops: ["Rainbow Carrots", "Napa Cabbage", "Lacinato Kale", "Winter Spinach", "Butternut Squash", "Microgreens", "Oyster Mushrooms", "Garlic"]
    }
];

export default function HarvestCalendarPage() {
    return (
        <div className="bg-[#F4F4F2] text-[#141F14] min-h-screen font-sans selection:bg-[#D4AF37]/30 selection:text-[#141F14] overflow-x-hidden">
             <style dangerouslySetInnerHTML={{ __html: `
                @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Manrope:wght@200;300;400;500;600&display=swap');
                .font-serif { font-family: 'Cinzel', serif; }
                .font-sans { font-family: 'Manrope', sans-serif; }
                body > header, body > footer, body > nav { display: none !important; }
            `}} />

            {/* --- BACKGROUND TEXTURES --- */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 mix-blend-multiply"></div>
                 <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[100px]"></div>
                 <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#141F14]/5 rounded-full blur-[100px]"></div>
            </div>

            {/* --- HEADER --- */}
            <header className="fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-12 md:py-8 flex justify-between items-center pointer-events-none">
                 {/* Back Button */}
                 <a href="/agriculture/khalui-farm" className="pointer-events-auto group inline-flex items-center gap-4 text-[#141F14] transition-all">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full border border-[#141F14]/10 bg-[#F4F4F2]/80 backdrop-blur-md group-hover:border-[#D4AF37] group-hover:scale-105 transition-all duration-500 shadow-lg shadow-[#141F14]/5">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-300" />
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 hidden md:block">
                        Return to Farm
                    </span>
                </a>

                {/* Optional: Download Badge */}
                <button className="pointer-events-auto group flex items-center gap-3 px-6 py-3 bg-[#141F14] text-[#F4F4F2] rounded-sm shadow-xl hover:bg-[#D4AF37] hover:text-[#141F14] transition-all duration-500">
                    <span className="text-[9px] uppercase tracking-[0.2em] font-bold">Download PDF</span>
                    <Download className="w-3 h-3" />
                </button>
            </header>

            {/* --- MAIN CONTENT --- */}
            <main className="relative z-10 pt-40 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
                <motion.div initial="hidden" animate="visible" variants={fadeUp}>
                    
                    {/* TITLE SECTION */}
                    <div className="text-center mb-24 md:mb-32 relative">
                        <div className="flex justify-center mb-6">
                            <div className="w-[1px] h-20 bg-[#D4AF37]/50"></div>
                        </div>
                        <div className="inline-flex items-center gap-3 border border-[#D4AF37]/30 px-5 py-2 rounded-full mb-8 bg-white/50 backdrop-blur-sm">
                            <Calendar className="w-3 h-3 text-[#D4AF37]" />
                            <span className="text-[#D4AF37] text-[9px] font-bold uppercase tracking-[0.3em]">Seasonal Guide</span>
                        </div>
                        <h1 className="font-serif text-5xl md:text-8xl mb-8 text-[#141F14] leading-[0.9] tracking-tight">
                            The Living <br/> <span className="italic text-[#141F14]/40">Calendar.</span>
                        </h1>
                        <p className="text-neutral-500 text-sm md:text-lg font-light leading-loose max-w-xl mx-auto border-t border-[#141F14]/10 pt-8 mt-8">
                            Our growing cycle follows the ancient rhythm of the Memphis Delta. <br className="hidden md:block" />
                            A manifest of what to expect in your CSA box throughout the year.
                        </p>
                    </div>

                    {/* SEASONS GRID */}
                    <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
                        {SEASONS.map((season, i) => (
                            <motion.div 
                                variants={fadeUp} 
                                key={i} 
                                className="bg-white border border-[#141F14]/5 p-8 md:p-12 relative overflow-hidden group hover:border-[#D4AF37]/30 transition-all duration-700 shadow-sm hover:shadow-2xl hover:shadow-[#D4AF37]/5"
                            >
                                {/* Hover Effect Background */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 rounded-bl-full translate-x-16 -translate-y-16 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700 ease-out"></div>

                                {/* Header */}
                                <div className="relative z-10 flex justify-between items-start mb-10 border-b border-[#141F14]/5 pb-8">
                                    <div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="text-[9px] uppercase tracking-[0.2em] text-[#D4AF37] font-bold bg-[#141F14] px-2 py-1 text-white">
                                                {season.months}
                                            </span>
                                        </div>
                                        <h3 className="font-serif text-3xl md:text-4xl text-[#141F14] mt-4">{season.name}</h3>
                                        <p className="text-xs text-neutral-400 font-light mt-2 italic font-serif">{season.description}</p>
                                    </div>
                                    <div className="w-12 h-12 rounded-full bg-[#F9F9F7] flex items-center justify-center group-hover:bg-[#D4AF37] transition-colors duration-500">
                                        <season.icon className="w-5 h-5 text-[#141F14]/40 group-hover:text-white transition-colors duration-500" />
                                    </div>
                                </div>

                                {/* Crop List */}
                                <div className="relative z-10 grid grid-cols-2 gap-y-4 gap-x-8">
                                    {season.crops.map((crop, j) => (
                                        <div key={j} className="flex items-center gap-3 group/item">
                                            <div className="w-1 h-1 bg-[#D4AF37] rotate-45 group-hover/item:scale-150 transition-transform duration-300"></div>
                                            <span className="text-xs md:text-sm text-neutral-600 font-light tracking-wide uppercase group-hover/item:text-[#141F14] transition-colors">
                                                {crop}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* CTA SECTION */}
                    <div className="mt-24 md:mt-40 relative">
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="w-[80%] h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"></div>
                        </div>

                        <div className="bg-[#141F14] text-white p-12 md:p-24 relative overflow-hidden text-center shadow-2xl shadow-black/20">
                            {/* Texture Overlay */}
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-10 mix-blend-overlay"></div>
                            
                            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
                                <Sprout className="w-12 h-12 text-[#D4AF37] mx-auto opacity-80" />
                                
                                <h2 className="font-serif text-4xl md:text-6xl leading-tight">
                                    Secure Your Share <br/> of the Harvest.
                                </h2>
                                
                                <p className="text-neutral-400 font-light leading-loose text-sm md:text-base">
                                    Our CSA membership guarantees you a weekly curated box of this premium seasonal produce, harvested within 24 hours of delivery.
                                </p>
                                
                                <div className="pt-8">
                                    <a 
                                        href="https://wa.me/12144736888" 
                                        className="inline-block bg-[#D4AF37] text-[#141F14] px-10 py-5 text-[10px] font-bold uppercase tracking-[0.25em] hover:bg-white transition-all duration-500 border border-transparent hover:border-[#D4AF37]"
                                    >
                                        Inquire About Membership
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </motion.div>
            </main>

            {/* --- MINIMAL FOOTER --- */}
            <footer className="py-12 text-center border-t border-[#141F14]/5">
                <p className="text-[9px] uppercase tracking-[0.2em] text-neutral-400 font-sans">
                    © {new Date().getFullYear()} Khalui Farm. All Rights Reserved.
                </p>
            </footer>
        </div>
    );
}