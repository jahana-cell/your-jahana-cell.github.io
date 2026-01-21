'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, MapPin, Phone, Star, Truck, ChefHat, Instagram, Heart, Leaf
} from 'lucide-react';

/**
 * UTILITY: cn
 */
function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}

// --- ASSETS ---
const HERO_IMAGE = "https://i.imgur.com/klLlEA4.jpeg"; 
const CHEF_IMAGE = "https://images.unsplash.com/photo-1586985289906-406988974504?q=80&w=1200"; 
const CHEF_LOGO_URL = "https://i.imgur.com/Lbaf37e.png";
const TEXTURE_URL = "https://www.transparenttextures.com/patterns/cream-paper.png"; 

// *** SPLASH SCREEN IMAGE ***
const PRELOADER_LOGO_URL = "https://i.imgur.com/UnpE6SG.png"; 

// --- PALETTE ---
const COLORS = {
    bgBlush: "#FDF2F4",   
    bgWarm: "#F8EBE8",    
    textDark: "#5D4037",  
    sage: "#849275",      
    gold: "#D49A8F",      
};

// --- DATA: CURATED SELECTIONS ---

// 1. HERO COLLECTION (Bridal)
const FEATURED_COLLECTION = {
    title: 'The Bridal Edit',
    price: 'Commission Only',
    desc: 'Bespoke multi-tiered architectural centerpieces with hand-piped lace. The crown jewel of your celebration.',
    img: 'https://images.pexels.com/photos/18565655/pexels-photo-18565655.jpeg'
};

// 2. MICHELIN MENU GRID
const BOUTIQUE_CATEGORIES = [
    { 
        title: 'Celebration Cakes', 
        detail: 'Madagascan Vanilla • Swiss Buttercream',
        price: 'From $85', 
        // Pink Cake
        img: 'https://images.unsplash.com/photo-1627834377411-8da5f4f09de8?q=80&w=800' 
    },
    { 
        title: 'Artisan Cupcakes', 
        detail: 'Hand-Piped Florals • 24k Gold',
        price: '$55 / Dozen', 
        // Floral Cupcakes
        img: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=800' 
    },
    { 
        title: 'Floral Macarons', 
        detail: 'Almond Flour • Rose Ganache',
        price: '$45 Box', 
        // Pink Macarons
        img: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?q=80&w=800' 
    },
    { 
        title: 'Sculpted Artistry', 
        detail: 'Fondant Work • Sugar Paste',
        price: 'Custom Quote', 
        // Textured Cake
        img: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636?q=80&w=800' 
    },
    { 
        title: 'Dessert Tables', 
        detail: 'Curated Spread • Full Styling',
        price: 'From $500', 
        // Table Spread
        img: 'https://images.unsplash.com/photo-1506459225024-1428097a7e18?q=80&w=800' 
    },
    { 
        title: 'Gift Sets', 
        detail: 'Signature Box • Silk Ribbon',
        price: '$65 Set', 
        // UPDATED: New Gift Set Image
        img: 'https://images.pexels.com/photos/7783240/pexels-photo-7783240.jpeg' 
    }
];

const BRAND_NAME = "SAFURA'S";
const WHATSAPP_LINK = "https://wa.me/12144736888"; 

// --- ANIMATION COMPONENTS ---

const Reveal = ({ children, delay = 0, width = "fit-content" }: { children: React.ReactNode, delay?: number, width?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }} 
      transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{ width }}
    >
      {children}
    </motion.div>
  );
};

// Mobile-Optimized Parallax Image
const ParallaxImage = ({ src, alt, className }: { src: string, alt: string, className?: string }) => {
    return (
        <div className={cn("overflow-hidden bg-[#EBE2DF] relative", className)}>
            <motion.img 
                src={src} 
                alt={alt}
                initial={{ scale: 1.15 }}
                whileInView={{ scale: 1 }}
                viewport={{ margin: "-10%" }}
                transition={{ duration: 1.8, ease: "easeOut" }}
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#5D4037]/10 mix-blend-overlay pointer-events-none"></div>
        </div>
    );
};

function SectionHeading({ subtitle, title, align = "center", dark = false }: { subtitle: string, title: string, align?: 'center' | 'left', dark?: boolean }) {
    return (
        <Reveal width="100%">
            <div className={cn("mb-10 md:mb-20 px-4", align === "center" ? "text-center" : "text-left")}>
                <div className={cn("inline-flex items-center gap-3 mb-4", align === "center" ? "justify-center" : "justify-start")}>
                    <span className={cn("h-[1px] w-8", dark ? "bg-[#FDF2F4]/40" : "bg-[#849275]/40")}></span>
                    <span className={cn(
                        "block text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] font-sans",
                        dark ? "text-[#FDF2F4]/80" : "text-[#849275]" 
                    )}>
                        {subtitle}
                    </span>
                    <span className={cn("h-[1px] w-8", dark ? "bg-[#FDF2F4]/40" : "bg-[#849275]/40")}></span>
                </div>
                <h2 className={cn(
                    "font-serif text-[2.5rem] md:text-6xl lg:text-7xl leading-[1.1]",
                    dark ? "text-[#FDF2F4]" : "text-[#5D4037]"
                )}>
                    {title}
                </h2>
            </div>
        </Reveal>
    );
}

// --- MAIN PAGE COMPONENT ---

export default function SafuraLuxuryPage() {
    const { scrollYProgress } = useScroll();
    const yHero = useTransform(scrollYProgress, [0, 1], ['0%', '20%']); 
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => {
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    return (
        <div className="bg-[#FDF2F4] text-[#5D4037] min-h-screen font-sans selection:bg-[#D49A8F] selection:text-[#FFFFFF] relative overflow-x-hidden">
            
            {/* Fonts */}
            <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Pinyon+Script&family=Montserrat:wght@200;300;400;500;600&display=swap" rel="stylesheet" />
            
            <style dangerouslySetInnerHTML={{ __html: `
                html { scroll-behavior: smooth; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
                body > header, body > footer, body > nav, #main-header, #site-footer { display: none !important; }
                .font-serif { font-family: 'Cormorant Garamond', serif; }
                .font-script { font-family: 'Pinyon Script', cursive; }
                .font-sans { font-family: 'Montserrat', sans-serif; }
                @keyframes slowSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                .animate-slow-spin { animation: slowSpin 40s linear infinite; }
                /* Floating Orbs Animation */
                @keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-20px); } 100% { transform: translateY(0px); } }
                .animate-float-slow { animation: float 6s ease-in-out infinite; }
                .animate-float-fast { animation: float 4s ease-in-out infinite; }
            `}} />
            
            {/* Film Grain */}
            <div 
                className="fixed inset-0 pointer-events-none z-50 opacity-[0.2] mix-blend-multiply"
                style={{ backgroundImage: `url(${TEXTURE_URL})` }}
            />

            {/* --- HERO SECTION --- */}
            <section className="relative h-[100svh] w-full overflow-hidden flex items-center justify-center supports-[height:100dvh]:h-[100dvh]">
                
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#D49A8F]/20 rounded-full blur-[80px] animate-float-slow mix-blend-screen pointer-events-none" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FFD6D0]/10 rounded-full blur-[100px] animate-float-fast mix-blend-screen pointer-events-none" />

                <motion.div 
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                    className="absolute top-0 w-full z-50 bg-[#FDF2F4]/95 backdrop-blur-md py-3 px-4 border-b border-[#D49A8F]/20"
                >
                    <div className="flex flex-col md:flex-row justify-center items-center gap-1 md:gap-6 text-[#5D4037]">
                        <span className="font-serif italic text-sm tracking-wide text-center">
                            Complimentary Concierge Delivery
                        </span>
                        <span className="hidden md:block h-3 w-[1px] bg-[#D49A8F]"></span>
                        <span className="font-sans text-[9px] uppercase tracking-[0.25em] font-medium opacity-80 text-center">
                            Exclusive to Hoover & Birmingham
                        </span>
                    </div>
                </motion.div>
                
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="absolute top-24 left-6 z-40"
                >
                    <a href="/services" className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/30 text-white hover:bg-[#FDF2F4] hover:text-[#5D4037] transition-all duration-500 bg-[#5D4037]/20 backdrop-blur-sm">
                        <ArrowLeft size={16} />
                    </a>
                </motion.div>

                <motion.div style={{ y: isMobile ? 0 : yHero }} className="absolute inset-0 z-0">
                    <img src={HERO_IMAGE} alt="Hero" className="w-full h-full object-cover brightness-[0.7] contrast-[1.1]" />
                    <div className="absolute inset-0 bg-[#5D4037]/20 mix-blend-overlay" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#FDF2F4] via-transparent to-black/10" />
                </motion.div>
                
                <div className="relative z-10 text-center px-4 w-full max-w-5xl pt-16">
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 1.5, ease: "easeOut" }}
                    >
                        <div className="flex items-center justify-center gap-4 md:gap-6 mb-4 md:mb-8">
                            <div className="h-[1px] bg-[#FDF2F4] w-8 md:w-20 opacity-80 shadow-sm" />
                            <p className="text-[#FDF2F4] text-[9px] md:text-xs tracking-[0.35em] uppercase font-sans font-semibold drop-shadow-md">
                                Est. 2024 • Hoover, AL
                            </p>
                            <div className="h-[1px] bg-[#FDF2F4] w-8 md:w-20 opacity-80 shadow-sm" />
                        </div>
                        
                        <h1 className="text-[#FFF0F3] font-serif text-[3.8rem] sm:text-[5rem] md:text-[7.5rem] lg:text-[9rem] leading-[0.9] tracking-tight font-normal mb-6 md:mb-10 drop-shadow-xl">
                            SAFURA'S
                        </h1>

                        <p className="font-script text-[#FFD6D0] text-[2.8rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[6rem] leading-[1] mb-12 md:mb-16 drop-shadow-lg">
                            Atelier & Bakery
                        </p>
                        
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8 px-8 md:px-0">
                            <a href="#collections" className="w-full sm:w-auto px-10 py-5 bg-[#D49A8F] text-white uppercase tracking-[0.2em] text-[10px] md:text-[11px] font-bold font-sans hover:-translate-y-1 transition-all duration-300 shadow-xl rounded-sm">
                                View Collection
                            </a>
                            <a href="#contact" className="w-full sm:w-auto px-10 py-5 bg-[#FFD6D0] border-[1px] border-[#FFD6D0] text-[#5D4037] uppercase tracking-[0.2em] text-[10px] md:text-[11px] font-bold font-sans hover:-translate-y-1 transition-all duration-300 backdrop-blur-[2px] rounded-sm">
                                Custom Inquiry
                            </a>
                        </div>
                    </motion.div>
                </div>

                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 1 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                >
                    <div className="w-[1px] h-12 bg-gradient-to-b from-[#5D4037]/30 to-transparent"></div>
                </motion.div>
            </section>

            {/* --- PHILOSOPHY SECTION --- */}
            <section id="our-story" className="py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
                    <div className="w-full lg:col-span-5 order-1 lg:order-1">
                       <Reveal width="100%">
                            <div className="aspect-[4/5] relative mx-auto max-w-sm lg:max-w-none">
                                <div className="absolute -top-4 -left-4 w-full h-full border-[0.5px] border-[#849275]/40 z-0" />
                                <ParallaxImage src={CHEF_IMAGE} alt="Safura Signature Cake" className="relative z-10 w-full h-full grayscale-[10%] sepia-[15%]" />
                            </div>
                       </Reveal>
                    </div>

                    <div className="w-full lg:col-span-7 order-2 lg:order-2 text-center lg:text-left">
                        <Reveal delay={0.2} width="100%">
                            <h2 className="font-serif text-[2.8rem] md:text-7xl text-[#5D4037] leading-[1.05] mb-6">
                                Pure Butter. <br/> 
                                Rich Cocoa. <br/>
                                <span className="italic text-[#849275]">Unforgettable Memories.</span>
                            </h2>
                            <div className="h-[1px] w-16 bg-[#849275] mb-8 mx-auto lg:mx-0"></div>
                            <p className="font-sans text-[#8D6E63] text-sm md:text-base leading-loose max-w-xl mx-auto lg:mx-0 font-light mb-10 tracking-wide">
                                Safura's is a boutique bakery specializing in the art of chocolate and floral design. 
                                We don't just bake cakes; we sculpt flavor using premium Belgian cocoa and locally sourced botanicals to create moments of pure joy.
                            </p>
                            <div className="grid grid-cols-2 gap-6 text-left max-w-md mx-auto lg:mx-0">
                                <div className="border-l-[1px] border-[#849275]/50 pl-5">
                                    <h4 className="font-serif text-xl md:text-2xl text-[#5D4037] mb-1">Small Batch</h4>
                                    <p className="text-[10px] text-[#849275] uppercase tracking-wider">Baked fresh 24hrs prior</p>
                                </div>
                                <div className="border-l-[1px] border-[#849275]/50 pl-5">
                                    <h4 className="font-serif text-xl md:text-2xl text-[#5D4037] mb-1">Hand Piped</h4>
                                    <p className="text-[10px] text-[#849275] uppercase tracking-wider">No molds, just artistry</p>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* --- THE ARTISTRY --- */}
            <section id="the-artist" className="py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto bg-white relative overflow-hidden rounded-[2rem] shadow-[0_20px_60px_rgba(212,154,143,0.15)]">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#FDF2F4] rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-32 items-center relative z-10">
                    <Reveal width="100%">
                        <div className="relative flex justify-center items-center p-8 md:p-12 rounded-full border border-[#F7EBE8] aspect-square max-w-[280px] md:max-w-md mx-auto bg-[#FDF2F4]">
                            <div className="absolute inset-4 md:inset-8 rounded-full border border-[#D49A8F]/30 border-dashed animate-slow-spin pointer-events-none" />
                            <motion.img 
                                src={CHEF_LOGO_URL} 
                                alt="Chef Artistry Logo"
                                className="w-full h-full object-contain relative z-10 p-2 md:p-4 drop-shadow-md"
                                initial={{ scale: 0.9, opacity: 0, rotate: -10 }}
                                whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
                                transition={{ duration: 1.2, ease: "easeOut" }}
                            />
                        </div>
                    </Reveal>

                    <div className="text-center lg:text-left">
                        <SectionHeading subtitle="The Hand" title="Edible Sculptures" align={isMobile ? "center" : "left"} />
                        <Reveal delay={0.2} width="100%">
                            <h3 className="font-serif text-2xl md:text-4xl text-[#5D4037] mb-6 italic leading-tight px-4 lg:px-0">
                                "Where culinary mastery <br className="hidden md:block"/> meets fine art."
                            </h3>
                            <p className="font-sans text-[#8D6E63] text-sm md:text-base leading-loose mb-8 font-light tracking-wide max-w-xl mx-auto lg:mx-0">
                                Every Safura's creation is more than a dessert; it is a canvas. Our chef applies techniques borrowed from classical sculpture—hand-piping intricate lace, sculpting botanicals petal by petal, and applying edible gold leaf with precision.
                            </p>
                            
                            <div className="inline-flex items-center gap-3 text-[#D49A8F] border-b border-[#D49A8F]/30 pb-2 mx-auto lg:mx-0">
                                <ChefHat size={20} strokeWidth={1} />
                                <span className="text-[10px] uppercase tracking-[0.25em] font-bold font-sans">Master Chef Signature</span>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* --- CURATED SELECTIONS (Gallery Style: Image ABOVE Text) --- */}
            <section id="collections" className="py-24 md:py-40 bg-[#F7EBE8] px-6 md:px-12">
                <div className="max-w-[1400px] mx-auto">
                    <SectionHeading subtitle="The Atelier" title="Curated Selections" />
                    
                    {/* 1. HERO COLLECTION (Bridal Edit) - Image Top, Text Bottom */}
                    <Reveal width="100%">
                        <div className="flex flex-col group cursor-pointer mb-20">
                            {/* Image Container */}
                            <div className="relative w-full aspect-[4/5] md:aspect-[21/9] overflow-hidden bg-white shadow-xl rounded-sm mb-8 border-[8px] border-white">
                                <img 
                                    src={FEATURED_COLLECTION.img} 
                                    alt={FEATURED_COLLECTION.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[3000ms] ease-out group-hover:scale-105"
                                />
                            </div>
                            
                            {/* Text Container Below */}
                            <div className="text-center w-full px-4">
                                <span className="inline-block px-3 py-1 mb-4 text-[9px] font-bold tracking-[0.2em] text-[#FDF2F4] bg-[#5D4037] uppercase rounded-sm shadow-sm">Signature Commission</span>
                                <h3 className="font-serif text-4xl md:text-6xl text-[#5D4037] mb-3">{FEATURED_COLLECTION.title}</h3>
                                <p className="font-sans text-[#8D6E63] text-sm md:text-lg font-light tracking-wide max-w-xl mx-auto">{FEATURED_COLLECTION.desc}</p>
                            </div>
                        </div>
                    </Reveal>

                    {/* 2. THE MENU GRID (Visible Images & Michelin Text) */}
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-12 md:gap-x-12 md:gap-y-24">
                        {BOUTIQUE_CATEGORIES.map((item, i) => (
                            <Reveal key={i} delay={i * 0.1} width="100%">
                                <div className="group cursor-pointer flex flex-col h-full">
                                    {/* Image: Tall Portrait, Permanent Visibility, No Overlay tricks */}
                                    <div className="relative aspect-[4/5] mb-6 overflow-hidden bg-white shadow-md rounded-sm border-[4px] border-white">
                                        <img 
                                            src={item.img} 
                                            alt={item.title}
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-110"
                                        />
                                    </div>
                                    
                                    {/* Text: Elegant Michelin Layout */}
                                    <div className="text-center px-1">
                                        <h3 className="font-serif text-lg md:text-2xl text-[#5D4037] mb-2 group-hover:text-[#D49A8F] transition-colors">{item.title}</h3>
                                        <div className="flex items-center justify-center gap-2 mb-2 opacity-70">
                                            <span className="h-[1px] w-3 bg-[#849275]"></span>
                                            <p className="font-sans text-[8px] md:text-[9px] text-[#849275] uppercase tracking-[0.2em] font-bold">{item.detail}</p>
                                            <span className="h-[1px] w-3 bg-[#849275]"></span>
                                        </div>
                                        <span className="block font-serif text-xs md:text-sm text-[#8D6E63] italic mt-1">{item.price}</span>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- THE EXPERIENCE --- */}
            <section id="the-process" className="py-24 md:py-40 px-6 md:px-12 bg-[#4E342E] text-[#FDF2F4]">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16 lg:gap-32">
                        <div className="order-1">
                            <SectionHeading subtitle="Service" title="The Experience" align="left" dark />
                            <div className="space-y-12 mt-8 md:mt-16">
                                {[
                                    { icon: Star, title: "01. Consultation", text: "We discuss your vision via WhatsApp or phone to curate the perfect flavor profile." },
                                    { icon: Heart, title: "02. The Bake", text: "We use premium dark chocolate and European butter. No preservatives, ever." },
                                    { icon: Truck, title: "03. Delivery", text: "White-glove delivery to Hoover & Birmingham. We ensure it arrives pristine." }
                                ].map((step, idx) => (
                                    <Reveal key={idx} delay={idx * 0.1}>
                                        <div className="flex gap-6 group">
                                            <div className="flex-shrink-0 w-12 h-12 rounded-full border-[1px] border-[#FDF2F4]/20 flex items-center justify-center text-[#849275] transition-all duration-700">
                                                <step.icon size={20} strokeWidth={1} />
                                            </div>
                                            <div>
                                                <h4 className="font-serif text-xl md:text-2xl mb-2 text-[#FDF2F4]">{step.title}</h4>
                                                <p className="text-[#FDF2F4]/70 font-sans text-sm font-light leading-relaxed max-w-xs tracking-wide">
                                                    {step.text}
                                                </p>
                                            </div>
                                        </div>
                                    </Reveal>
                                ))}
                            </div>
                        </div>
                        <div className="relative mt-8 lg:mt-0 order-2">
                            <div className="absolute -inset-4 border-[1px] border-[#FDF2F4]/10 z-0" />
                            <ParallaxImage 
                                src="https://images.unsplash.com/photo-1519340333755-56e9c1d04579?q=80&w=1200" 
                                alt="Safura's Luxury Detail"
                                className="h-[450px] md:h-[650px] w-full z-10 relative opacity-90 rounded-sm" 
                            />
                            <motion.div 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 1 }}
                                className="absolute -bottom-8 -left-4 md:-bottom-12 md:-left-12 z-20 bg-[#FDF2F4] p-8 md:p-12 max-w-[85%] md:max-w-sm shadow-2xl rounded-sm"
                            >
                                <p className="font-serif italic text-2xl md:text-4xl text-[#5D4037] leading-tight">
                                    "Luxury is in each detail."
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- FOOTER --- */}
            <section id="contact" className="relative bg-white pt-24 pb-16 px-6 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#FDF2F4] rounded-full blur-[120px] pointer-events-none" />
                <div className="relative max-w-5xl mx-auto text-center z-10">
                    <Reveal>
                        <h2 className="font-serif text-5xl md:text-8xl text-[#5D4037] mb-8">Let's Celebrate.</h2>
                        <p className="font-sans text-[#8D6E63] mb-16 max-w-md mx-auto leading-loose text-sm md:text-base tracking-wide">
                            Ready to commission your centerpiece? <br/>
                            We accept a limited number of bookings per month.
                        </p>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 mb-16 relative">
                            <div className="text-center group cursor-default">
                                <div className="flex justify-center mb-4 text-[#D49A8F]">
                                     <MapPin size={24} strokeWidth={1} />
                                </div>
                                <h3 className="font-serif text-3xl md:text-4xl text-[#5D4037] italic mb-2">Hoover, AL</h3>
                                <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#8D6E63]">Our Studio</p>
                            </div>
                            <div className="hidden md:block w-[1px] h-20 bg-[#D49A8F]/30"></div>
                            <div className="text-center group cursor-default">
                                <div className="flex justify-center mb-4 text-[#D49A8F]">
                                     <Truck size={24} strokeWidth={1} />
                                </div>
                                <h3 className="font-serif text-3xl md:text-4xl text-[#5D4037] italic mb-2">Concierge</h3>
                                <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#8D6E63]">Complimentary Delivery</p>
                            </div>
                        </div>
                        <div className="flex justify-center gap-10 mb-16">
                            <a href="#" className="w-14 h-14 rounded-full border border-[#D49A8F]/20 flex items-center justify-center transition-all duration-500 text-[#5D4037] hover:bg-[#D49A8F] hover:text-white"><Instagram size={20} strokeWidth={1.5}/></a>
                            <a href={WHATSAPP_LINK} className="w-14 h-14 rounded-full border border-[#D49A8F]/20 flex items-center justify-center transition-all duration-500 text-[#5D4037] hover:bg-[#D49A8F] hover:text-white"><Phone size={20} strokeWidth={1.5}/></a>
                        </div>
                        <div className="h-[1px] w-full bg-[#5D4037]/5 mb-10" />
                        <div className="flex flex-col items-center gap-3">
                            <p className="text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-[#8D6E63]/70 font-sans">
                                © 2026 {BRAND_NAME}. ALL RIGHTS RESERVED.
                            </p>
                            <div className="flex items-baseline justify-center gap-2 text-[#D49A8F]">
                                <span className="font-serif italic text-lg">A</span>
                                <span className="font-sans font-bold text-[9px] tracking-[0.2em] uppercase">Growshare Capital</span>
                                <span className="font-serif italic text-lg">Company</span>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>
        </div>
    );
}