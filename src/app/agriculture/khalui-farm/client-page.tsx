'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X as XIcon, Menu, Sprout, MapPin, 
  ArrowRight, ArrowLeft, Leaf, Sun, Droplets,
  CheckCircle2, XCircle, FileText, Download,
  Calendar, ShoppingBasket, Phone, PlayCircle,
  AlertCircle, ChevronDown, Utensils, Scissors, Package, ThermometerSnowflake, ChefHat
} from 'lucide-react';

/**
 * UTILITY: cn
 */
function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}

// --- ASSETS ---
const HERO_VIDEO_URL = "https://videos.pexels.com/video-files/2835334/2835334-hd_1920_1080_30fps.mp4"; 
const LOGO_URL = "https://firebasestorage.googleapis.com/v0/b/growshare-capital.firebasestorage.app/o/Logo%2FKhaluifarm.jpg?alt=media&token=fbb45db4-aae0-495f-9106-7deabc3f7ef1";
const LOGO_TEXT = "KHALUI FARM";

// --- FULL IMAGE DATA ---
const GALLERY_IMAGES = [
    { src: "https://i.imgur.com/VVE13xC.jpeg", alt: "Indoor Farming", caption: "Vertical Efficiency" },
    { src: "https://i.imgur.com/ufp6pnm.jpeg", alt: "Fresh Lettuce", caption: "Peak Nutrient Density" },
    { src: "https://i.imgur.com/PrM4TQi.jpeg", alt: "Vertical Systems", caption: "Smart Agriculture" },
    { src: "https://i.imgur.com/Rkq5sfm.jpeg", alt: "Farmer at Work", caption: "Hand-Harvested Care" },
    { src: "https://i.imgur.com/1mkRbF9.jpeg", alt: "Seedlings", caption: "Heritage Genetics" },
    { src: "https://i.imgur.com/mzlzoTR.jpeg", alt: "Hydroponics", caption: "Resource Conservation" },
    { src: "https://i.imgur.com/QeimBTp.jpeg", alt: "Harvesting", caption: "Daily Harvest" },
    { src: "https://i.imgur.com/X9xlTcg.jpeg", alt: "Inspection", caption: "Quality Control" },
    { src: "https://i.imgur.com/WKb9n8E.jpeg", alt: "Greenhouse", caption: "Controlled Environment" },
    { src: "https://i.imgur.com/mIvmYLo.jpeg", alt: "Agri-Tech", caption: "Innovation" },
    { src: "https://i.imgur.com/ZXKSygO.jpeg", alt: "Leaf Detail", caption: "Pristine Greens" },
    { src: "https://i.imgur.com/MgMHHUU.jpeg", alt: "Sprouting", caption: "New Life" },
];

// --- CONFIGURATION ---
const WHATSAPP_NUMBER = "12144736888"; 
const WHATSAPP_MSG = "Hello Khalui Farm Team, I am interested in CSA, Lamb, or Poultry opportunities.";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MSG)}`;

// --- ANIMATION ---
const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] } }
};

// --- COMPONENTS ---

function FloatingInquiriesButton() {
    return (
        <div className="fixed bottom-8 right-6 z-[60] group">
            <div className="absolute bottom-3 right-16 bg-[#F4F4F2] text-[#141F14] text-[10px] uppercase tracking-[0.2em] px-4 py-2 rounded-sm border border-[#141F14]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-xl font-sans">
                Partnership Inquiry
            </div>
            <a 
                href={WHATSAPP_LINK} 
                target="_blank" 
                rel="noopener noreferrer"
                className={cn(
                    "relative flex items-center justify-center w-14 h-14 rounded-full transition-all duration-500 ease-out",
                    "bg-[#F4F4F2]/90 backdrop-blur-md border border-[#D4AF37]/50",
                    "shadow-[0_8px_30px_rgba(20,31,20,0.15)]",
                    "hover:scale-110 hover:border-[#D4AF37] hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]",
                    "active:scale-95"
                )}
            >
                <span className="absolute top-0 right-0 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#D4AF37] border-2 border-[#F4F4F2]"></span>
                </span>
                <Sprout className="w-6 h-6 text-[#141F14] group-hover:text-[#D4AF37] transition-colors duration-300" />
            </a>
        </div>
    );
}

const FAQItem = ({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) => (
    <div className="border-b border-[#141F14]/10">
        <button onClick={onClick} className="w-full py-6 flex justify-between items-center text-left group">
            <span className="text-sm md:text-base font-serif text-[#141F14] group-hover:text-[#D4AF37] transition-colors">{question}</span>
            <ChevronDown className={cn("w-4 h-4 text-[#141F14]/40 transition-transform duration-300", isOpen ? "rotate-180" : "")} />
        </button>
        <AnimatePresence>
            {isOpen && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                    <p className="pb-6 text-xs md:text-sm text-neutral-500 font-sans leading-relaxed pr-8">{answer}</p>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
);

export default function KhaluiFarmClientPage() {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    return (
        <div className="bg-[#F4F4F2] text-[#141F14] selection:bg-[#D4AF37]/30 selection:text-[#141F14] min-h-screen overflow-x-hidden font-sans m-0 p-0 border-none">
            {/* Structural Styles */}
            <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Manrope:wght@200;300;400;500;600&display=swap" rel="stylesheet" />
            <style dangerouslySetInnerHTML={{ __html: `
                html, body { 
                    background-color: #F4F4F2 !important; 
                    margin: 0 !important; 
                    padding: 0 !important; 
                    border: none !important;
                    overscroll-behavior: none; 
                }
                .font-serif { font-family: 'Cinzel', serif; }
                .font-sans { font-family: 'Manrope', sans-serif; }
                ::-webkit-scrollbar { width: 4px; }
                ::-webkit-scrollbar-track { background: #F4F4F2; }
                ::-webkit-scrollbar-thumb { background: rgba(20, 31, 20, 0.2); border-radius: 10px; }
                body > header, body > footer, body > nav { display: none !important; }
                #khalui-wrapper { position: relative; z-index: 1; background: #F4F4F2; width: 100%; }
            `}} />

            <div id="khalui-wrapper">
                <FloatingInquiriesButton />

                {/* --- HEADER (CLEAN - LOGO IN HERO) --- */}
                <div className="fixed top-0 left-0 right-0 z-50 p-6 md:p-12 flex justify-end items-start pointer-events-none">
                     {/* Empty for clean look */}
                </div>

                {/* --- 1. HERO SECTION --- */}
                <section className="relative min-h-[100svh] flex flex-col justify-end pt-32 pb-20 md:pb-32 px-6 md:px-12 border-b border-[#141F14]/10 overflow-hidden">
                    <div className="absolute inset-0 z-0 pointer-events-none bg-[#F4F4F2]">
                         <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-30 scale-105 saturate-0 contrast-125">
                            <source src={HERO_VIDEO_URL} type="video/mp4" />
                        </video>
                        {/* Light Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#F4F4F2] via-[#F4F4F2]/50 to-transparent" />
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-multiply"></div>
                    </div>

                    <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col min-h-[100svh]">
                        
                        {/* BRAND HEADER - LOGO IN FRONT OF TITLE */}
                        <motion.div 
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className="pt-10 pb-20 md:pt-16 md:pb-24 flex justify-center items-center gap-6 md:gap-8"
                        >
                            {/* Logo Image */}
                            <div className="relative w-16 h-16 md:w-24 md:h-24 shrink-0">
                                <img 
                                    src={LOGO_URL} 
                                    alt="Khalui Farm Logo" 
                                    className="w-full h-full object-contain mix-blend-multiply filter sepia-[0.3] contrast-125" 
                                />
                            </div>
                            
                            {/* Title Text */}
                            <h1 className="font-serif text-3xl md:text-5xl tracking-[0.2em] text-[#141F14] border-b-2 border-[#D4AF37]/50 pb-2">
                                {LOGO_TEXT}
                            </h1>
                        </motion.div>

                        <div className="flex-grow" />

                        {/* NAV & INTRO */}
                        <div className="mb-10 text-left flex justify-between items-end">
                            <a href="/" className="group inline-flex items-center gap-3 md:gap-4 text-[#141F14]/60 hover:text-[#141F14] transition-all duration-500">
                                <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full border border-[#141F14]/10 bg-white/40 backdrop-blur-xl group-hover:border-[#D4AF37]/50 transition-all">
                                    <ArrowLeft className="w-3 h-3 md:w-4 md:h-4 group-hover:-translate-x-1 transition-transform text-[#141F14]" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[6px] md:text-[7px] uppercase tracking-[0.4em] font-bold text-[#D4AF37] mb-0.5 font-sans">Return</span>
                                    <span className="text-[9px] md:text-[10px] uppercase tracking-[0.25em] font-medium font-sans">GrowShare Home</span>
                                </div>
                            </a>
                        </div>

                        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="text-left">
                            <div className="flex items-center gap-4 mb-6 md:mb-8">
                                <div className="h-[1px] w-10 md:w-12 bg-[#D4AF37]"></div>
                                <span className="text-[#D4AF37] text-[9px] md:text-[10px] font-bold uppercase tracking-[0.4em] md:tracking-[0.5em] font-sans">
                                    Memphis, Tennessee
                                </span>
                            </div>
                            
                            <h2 className="font-serif text-4xl md:text-8xl font-medium leading-[1.1] md:leading-[1] mb-8 tracking-tight text-[#141F14]">
                                USDA Certified <br/> 
                                <span className="italic text-[#D4AF37] font-light">Sovereignty.</span>
                            </h2>
                            <p className="text-neutral-600 text-base md:text-2xl font-light leading-relaxed max-w-xl mb-12 border-l border-[#D4AF37]/40 pl-6 md:pl-8 font-sans">
                                Reclaiming agriculture through regenerative practices. <strong>USDA Certified Organic produce</strong>, pasture-raised lamb, and heritage poultry raised with integrity in the heart of the city.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-4 md:gap-8">
                                <a href="#produce" className="group inline-flex justify-center items-center gap-4 bg-[#141F14] text-white px-8 py-4 md:px-12 md:py-6 rounded-sm text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#D4AF37] transition-all duration-700 w-full sm:w-auto font-sans shadow-xl shadow-[#141F14]/10">
                                    View Harvest
                                    <Leaf className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
                                </a>
                                <a href="#method" className="group inline-flex justify-center items-center gap-4 bg-transparent border border-[#141F14]/20 text-[#141F14] px-8 py-4 md:px-12 md:py-6 rounded-sm text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white/50 transition-all duration-700 w-full sm:w-auto font-sans">
                                    Our Standards
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* --- 2. THE STANDARD --- */}
                <section id="method" className="py-24 md:py-40 px-6 bg-white">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16 md:mb-24 px-4">
                            <h2 className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-500 mb-4 md:mb-6 font-sans">The Standard</h2>
                            <h3 className="font-serif text-3xl md:text-6xl text-[#141F14] italic leading-tight">Taste The Truth.</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative text-left">
                            <div className="p-8 md:p-16 border border-neutral-200 rounded-sm bg-[#F9F9F7] relative overflow-hidden group">
                                <h4 className="text-xl md:text-2xl font-serif text-neutral-500 mb-8 md:mb-12 flex items-center gap-3 md:gap-4">
                                    <XCircle className="text-red-800/50 w-5 h-5 md:w-6 md:h-6" /> Industrial Ag
                                </h4>
                                <ul className="space-y-6 md:space-y-10 relative z-10 font-sans text-left text-neutral-600">
                                    <li className="flex gap-4 md:gap-6">
                                        <AlertCircle className="shrink-0 w-5 h-5 text-red-800/30" />
                                        <p className="text-xs md:text-base leading-relaxed font-light">Harvested weeks early for transport, losing vital nutrients.</p>
                                    </li>
                                    <li className="flex gap-4 md:gap-6">
                                        <AlertCircle className="shrink-0 w-5 h-5 text-red-800/30" />
                                        <p className="text-xs md:text-base leading-relaxed font-light">Heavy use of synthetic pesticides and herbicides.</p>
                                    </li>
                                    <li className="flex gap-4 md:gap-6">
                                        <AlertCircle className="shrink-0 w-5 h-5 text-red-800/30" />
                                        <p className="text-xs md:text-base leading-relaxed font-light">Average travel distance: 1,500 miles.</p>
                                    </li>
                                    <li className="flex gap-4 md:gap-6">
                                        <AlertCircle className="shrink-0 w-5 h-5 text-red-800/30" />
                                        <p className="text-xs md:text-base leading-relaxed font-light">Animals confined in high-stress feedlots (CAFOs).</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="p-8 md:p-16 border border-[#D4AF37]/20 rounded-sm bg-[#141F14] text-white relative overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.2)] text-left">
                                <h4 className="text-2xl font-serif text-white mb-8 md:mb-12 flex items-center gap-3 md:gap-4 font-bold uppercase tracking-tight text-left">
                                    <CheckCircle2 className="text-[#D4AF37] w-5 h-5 md:w-6 md:h-6" /> Khalui Method
                                </h4>
                                <ul className="space-y-6 md:space-y-10 relative z-10 font-sans text-left text-white/90">
                                    <li className="flex gap-4 md:gap-6">
                                        <Sun className="shrink-0 w-5 h-5 md:w-6 md:h-6 text-[#D4AF37]/80" />
                                        <div>
                                            <strong className="block text-[#E8E8E3] font-serif text-base md:text-lg mb-1">Peak Ripeness</strong>
                                            <p className="text-xs md:text-sm leading-relaxed font-light text-neutral-400">Harvested within 24 hours of delivery for maximum flavor.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4 md:gap-6">
                                        <Leaf className="shrink-0 w-5 h-5 md:w-6 md:h-6 text-[#D4AF37]/80" />
                                        <div>
                                            <strong className="block text-[#E8E8E3] font-serif text-base md:text-lg mb-1">Beyond Organic</strong>
                                            <p className="text-xs md:text-sm leading-relaxed font-light text-neutral-400">Regenerative soil practices that sequester carbon.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4 md:gap-6">
                                        <MapPin className="shrink-0 w-5 h-5 md:w-6 md:h-6 text-[#D4AF37]/80" />
                                        <div>
                                            <strong className="block text-[#E8E8E3] font-serif text-base md:text-lg mb-1">Zero Mile</strong>
                                            <p className="text-xs md:text-sm leading-relaxed font-light text-neutral-400">Grown right here in Memphis. Farm to fork in minutes.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4 md:gap-6">
                                        <CheckCircle2 className="shrink-0 w-5 h-5 md:w-6 md:h-6 text-[#D4AF37]/80" />
                                        <div>
                                            <strong className="block text-[#E8E8E3] font-serif text-base md:text-lg mb-1">Ethical Livestock</strong>
                                            <p className="text-xs md:text-sm leading-relaxed font-light text-neutral-400">Free-range Sheep, Lamb, and Chicken on rotation.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- 3. [NEW] PASTURE TO POT PROCESS (Deep Green Theme) --- */}
                <section id="process" className="py-24 md:py-40 px-6 bg-[#1A2E1A] text-[#E8E8E3] relative overflow-hidden">
                    {/* Texture Overlay for organic feel */}
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-10 mix-blend-overlay"></div>
                    
                    <div className="max-w-6xl mx-auto relative z-10">
                        <div className="text-center mb-20 md:mb-28">
                             <p className="text-[#D4AF37] text-[9px] md:text-[10px] font-bold uppercase tracking-[0.5em] mb-6 font-sans">Transparency</p>
                             <h2 className="font-serif text-3xl md:text-6xl text-white italic leading-tight">From Pasture to Pot.</h2>
                             <p className="text-neutral-400 font-light max-w-xl mx-auto text-sm md:text-lg leading-relaxed mt-6 font-sans">
                                 We honor the life of the animal through a rigorous, ethical, and sanitary process.
                             </p>
                        </div>

                        <div className="relative">
                            {/* Vertical Line for Desktop */}
                            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#D4AF37]/20 -translate-x-1/2"></div>

                            <div className="space-y-16 md:space-y-24">
                                {[
                                    { step: "01", title: "Pasture Raised", desc: "Animals roam freely on organic pastures, eating a natural diet.", icon: Sun },
                                    { step: "02", title: "Zabiha Harvest", desc: "Ethical hand-slaughter following strict Zabiha guidelines for spiritual & physical purity.", icon: CheckCircle2 },
                                    { step: "03", title: "Clean Processing", desc: "Immediate skin removal and cleaning to ensure hygiene standards.", icon: Droplets },
                                    { step: "04", title: "Cold Chain", desc: "Rapid cooling and temperature-controlled storage to lock in freshness.", icon: ThermometerSnowflake },
                                    { step: "05", title: "Artisan Cut", desc: "Expert butchery into specific cuts (whole, half, or custom).", icon: Scissors },
                                    { step: "06", title: "Vacuum Seal", desc: "Professional packaging to maintain quality during transport.", icon: Package },
                                    { step: "07", title: "Culinary Ready", desc: "Delivered ready for your pot, grill, or oven.", icon: ChefHat },
                                ].map((item, i) => (
                                    <div key={i} className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                                        <div className="flex-1 text-center md:text-right">
                                            {/* Text Content - Alignment flips based on row */}
                                            <div className={i % 2 !== 0 ? 'md:text-left' : ''}>
                                                 <h3 className="font-serif text-2xl md:text-3xl text-white mb-2">{item.title}</h3>
                                                 <p className="text-neutral-400 text-sm font-sans font-light leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                        
                                        {/* Center Icon Node */}
                                        <div className="relative z-10 shrink-0 w-16 h-16 rounded-full bg-[#0B0C0B] border border-[#D4AF37] flex items-center justify-center shadow-lg shadow-black/40">
                                            <item.icon className="w-6 h-6 text-[#D4AF37]" />
                                            <span className="absolute -top-3 bg-[#1A2E1A] px-2 text-[9px] text-[#D4AF37] font-bold tracking-widest">{item.step}</span>
                                        </div>

                                        <div className="flex-1 hidden md:block"></div> {/* Spacer */}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- 4. GALLERY (VISUAL CHRONICLE) --- */}
                <section id="produce" className="py-24 md:py-40 px-6 bg-white border-t border-[#141F14]/5">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                            <div className="max-w-lg">
                                <h2 className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.4em] text-[#D4AF37] mb-6">Visual Chronicle</h2>
                                <h3 className="font-serif text-3xl md:text-5xl text-[#141F14] leading-tight">Authentic Cultivation.</h3>
                            </div>
                            <div className="flex gap-4">
                                <a href={WHATSAPP_LINK} className="text-[10px] uppercase tracking-[0.2em] border-b border-[#D4AF37] pb-1 hover:text-[#D4AF37] transition-colors text-[#141F14]">Request Catalog</a>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {GALLERY_IMAGES.map((img, i) => (
                                <div key={i} className={`relative aspect-[4/5] group overflow-hidden bg-neutral-100 ${i % 2 !== 0 ? 'md:mt-12' : ''}`}>
                                    <img 
                                        src={img.src} 
                                        alt={img.alt} 
                                        className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105" 
                                    />
                                    <div className="absolute inset-0 bg-[#141F14]/10 group-hover:bg-transparent transition-colors duration-500"></div>
                                    <div className="absolute bottom-6 left-6 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                                        <span className="bg-[#141F14]/90 backdrop-blur-md px-4 py-2 text-[9px] uppercase tracking-[0.2em] text-white border border-white/10">
                                            {img.caption}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- 5. CSA MEMBERSHIP OFFER --- */}
                <section id="csa" className="py-24 md:py-40 px-6 bg-[#141F14] text-[#E8E8E3]">
                    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
                        <div className="flex-1 space-y-10">
                            <div className="inline-flex items-center gap-3 border border-[#D4AF37]/30 px-4 py-2 rounded-full">
                                <div className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></div>
                                <span className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37]">Limited Availability</span>
                            </div>
                            <h2 className="font-serif text-4xl md:text-6xl text-white leading-tight">The Reserve Membership.</h2>
                            <p className="text-neutral-400 font-sans leading-loose font-light">
                                Secure your family's food sovereignty. Our CSA (Community Supported Agriculture) membership guarantees you a weekly share of our premium harvest—hand-selected, peak-ripeness produce, eggs, and priority access to livestock.
                            </p>
                            <ul className="space-y-4">
                                {["Weekly Seasonal Box", "Priority Lamb & Poultry", "Invites to Farm Dinners", "Direct Farmer Connection"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 text-sm font-light">
                                        <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <a href={WHATSAPP_LINK} className="inline-block bg-[#D4AF37] text-[#141F14] px-10 py-5 rounded-sm text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white transition-colors duration-500">
                                Apply for Membership
                            </a>
                        </div>
                        <div className="flex-1 w-full relative">
                            <div className="absolute inset-0 bg-[#D4AF37]/10 blur-3xl rounded-full"></div>
                            <div className="relative aspect-[4/5] bg-neutral-900 border border-white/10 p-8 flex flex-col justify-center items-center text-center">
                                <ShoppingBasket className="w-16 h-16 text-[#D4AF37] mb-8 opacity-80" />
                                <h3 className="font-serif text-2xl text-white mb-2">Weekly Harvest</h3>
                                <p className="text-xs text-neutral-500 uppercase tracking-widest mb-8">Starting at $45 / Week</p>
                                <p className="text-sm text-neutral-400 font-light italic leading-relaxed">"The difference in taste is undeniable. It's not just food; it's a connection to the land we live on."</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- 6. LEAD MAGNETS --- */}
                <section className="py-24 md:py-40 px-6 bg-[#F4F4F2]">
                    <div className="max-w-4xl mx-auto bg-white border border-[#141F14]/5 p-8 md:p-20 rounded-sm relative overflow-hidden shadow-lg shadow-[#141F14]/5">
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#D4AF37]/5 rounded-full blur-[120px]"></div>

                        <div className="relative z-10 text-center">
                            <div className="mb-16">
                                <h2 className="font-serif text-3xl md:text-6xl text-[#141F14] mb-6 leading-tight">Seasonal Availability.</h2>
                                <p className="text-neutral-500 font-light max-w-lg mx-auto text-sm md:text-base leading-loose font-sans">
                                    Don't miss out on peak harvest. Download our seasonal guide to plan your menu or family meals.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                                <div className="bg-[#F9F9F7] border border-[#141F14]/5 p-8 flex flex-col gap-6 hover:border-[#D4AF37]/40 transition-all duration-500 group cursor-pointer">
                                    <div className="flex justify-between items-start">
                                        <Calendar className="w-6 h-6 text-[#D4AF37] opacity-80" />
                                        <span className="text-[8px] bg-[#D4AF37]/10 text-[#D4AF37] px-2 py-1 rounded-sm uppercase tracking-widest font-bold font-sans">PDF</span>
                                    </div>
                                    <div>
                                        <h4 className="text-[#141F14] font-serif text-xl mb-2 group-hover:text-[#D4AF37] transition-colors">Harvest Calendar</h4>
                                        <button className="text-[9px] uppercase tracking-[0.2em] text-[#141F14] flex items-center gap-3 group-hover:gap-5 transition-all font-bold border-b border-[#141F14]/10 pb-2 w-fit">
                                            Download <ArrowRight size={12} className="text-[#D4AF37]"/>
                                        </button>
                                    </div>
                                </div>
                                <div className="bg-[#F9F9F7] border border-[#141F14]/5 p-8 flex flex-col gap-6 hover:border-[#D4AF37]/40 transition-all duration-500 group cursor-pointer">
                                    <div className="flex justify-between items-start">
                                        <ShoppingBasket className="w-6 h-6 text-[#D4AF37] opacity-80" />
                                        <span className="text-[8px] bg-[#D4AF37]/10 text-[#D4AF37] px-2 py-1 rounded-sm uppercase tracking-widest font-bold font-sans">CATALOG</span>
                                    </div>
                                    <div>
                                        <h4 className="text-[#141F14] font-serif text-xl mb-2 group-hover:text-[#D4AF37] transition-colors">Wholesale Meat</h4>
                                        <button className="text-[9px] uppercase tracking-[0.2em] text-[#141F14] flex items-center gap-3 group-hover:gap-5 transition-all font-bold border-b border-[#141F14]/10 pb-2 w-fit">
                                            Request Access <ArrowRight size={12} className="text-[#D4AF37]"/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- 7. FAQ (OBJECTION HANDLING) --- */}
                <section className="py-24 px-6 max-w-3xl mx-auto">
                    <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-400 mb-10 text-center">Common Inquiries</h2>
                    <div className="space-y-2">
                        <FAQItem 
                            question="Do you deliver to residential addresses?"
                            answer="Yes, our CSA members receive weekly doorstep delivery within the Memphis metro area. We also have designated pickup points."
                            isOpen={openFAQ === 0} onClick={() => setOpenFAQ(openFAQ === 0 ? null : 0)}
                        />
                         <FAQItem 
                            question="Is your meat USDA certified?"
                            answer="Absolutely. All our lamb and poultry is processed in USDA-inspected facilities to ensure the highest safety and quality standards."
                            isOpen={openFAQ === 1} onClick={() => setOpenFAQ(openFAQ === 1 ? null : 1)}
                        />
                         <FAQItem 
                            question="How can restaurants partner with Khalui?"
                            answer="We offer exclusive wholesale accounts for local chefs, providing priority access to seasonal crops and whole-animal orders."
                            isOpen={openFAQ === 2} onClick={() => setOpenFAQ(openFAQ === 2 ? null : 2)}
                        />
                    </div>
                </section>

                {/* --- 8. FOOTER --- */}
                <footer className="py-24 md:py-48 px-6 md:px-8 bg-[#0B0C0B] relative z-10 border-t border-white/5 text-white">
                    <div className="max-w-2xl mx-auto text-center">
                        <div className="w-[1px] h-16 bg-gradient-to-b from-[#D4AF37] to-transparent mx-auto mb-12"></div>
                        <h2 className="font-serif text-4xl md:text-7xl mb-10 italic">Taste the Difference.</h2>
                        <div className="flex flex-col gap-4 md:gap-6 max-w-sm mx-auto w-full px-4">
                            <a 
                                href={WHATSAPP_LINK} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="group relative overflow-hidden bg-[#D4AF37] text-black py-4 md:py-5 rounded-sm font-bold text-[10px] md:text-[11px] uppercase tracking-[0.2em] transition-all duration-500"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-3 font-sans">
                                    <Phone className="w-4 h-4" />
                                    Contact Farm
                                </span>
                            </a>
                        </div>
                        <div className="mt-24 border-t border-white/5 pt-12 text-neutral-500 text-[9px] uppercase tracking-[0.2em] font-sans flex flex-col gap-6">
                             <div className="flex items-center justify-center gap-2">
                                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                                <span>Memphis, TN</span>
                             </div>
                             <span>© {new Date().getFullYear()} KHALUI FARM</span>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}