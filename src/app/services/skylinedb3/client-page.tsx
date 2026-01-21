'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, ArrowLeft, ArrowRight,
  CheckCircle2, XCircle, FileText, TrendingUp,
  Users, ShieldCheck, Clock, PlayCircle
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// --- UTILITIES ---
function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}

// --- ASSETS ---
const LOGO_URL = "https://firebasestorage.googleapis.com/v0/b/growshare-capital.firebasestorage.app/o/Logo%2FSBD.png?alt=media&token=07ed4301-023d-42fa-9f69-2f3b789c8406";
const HERO_VIDEO_MOBILE = "https://firebasestorage.googleapis.com/v0/b/growshare-capital.firebasestorage.app/o/website%20videos%2FSkyline%20Mobile%20Version.mp4?alt=media&token=b716a6e9-7fdd-4b34-96a1-ac538f8ed080";

// --- CONFIG ---
const WHATSAPP_NUMBER = "12144736888"; 
const WHATSAPP_MSG = "Hello Skyline Team, I am interested in discussing a project.";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MSG)}`;

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] } }
};

// --- SUB-COMPONENTS ---
const WhatsAppIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
);

function FloatingInquiriesButton() {
    return (
        <div className="fixed bottom-8 right-6 z-[60] group">
            <div className="absolute bottom-3 right-16 bg-[#F9F9F7] text-amber-800 text-[10px] uppercase tracking-[0.2em] px-4 py-2 rounded-sm border border-amber-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-xl font-sans">
                Consultation
            </div>
            <a 
                href={WHATSAPP_LINK} 
                target="_blank" 
                rel="noopener noreferrer"
                className={cn(
                    "relative flex items-center justify-center w-14 h-14 rounded-full transition-all duration-500 ease-out",
                    "bg-[#F9F9F7] backdrop-blur-md border border-neutral-200",
                    "shadow-[0_8px_30px_rgba(0,0,0,0.12)]",
                    "hover:scale-110 hover:border-amber-600/50 hover:shadow-[0_0_30px_rgba(217,119,6,0.2)]",
                    "active:scale-95"
                )}
                aria-label="Inquiries via WhatsApp"
            >
                <span className="absolute top-0 right-0 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-600 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-600 border-2 border-[#F9F9F7]"></span>
                </span>
                <WhatsAppIcon className="w-7 h-7 text-neutral-900 group-hover:text-amber-700 transition-colors duration-300" />
            </a>
        </div>
    );
}

// --- MAIN CLIENT COMPONENT ---
export default function SkylineClientPage() {
    return (
        <div className="bg-[#F9F9F7] text-neutral-900 selection:bg-amber-100 selection:text-amber-900 min-h-screen overflow-x-hidden font-sans m-0 p-0 border-none">
            <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet" />
            <style dangerouslySetInnerHTML={{ __html: `
                html, body { background-color: #F9F9F7 !important; margin: 0 !important; padding: 0 !important; border: none !important; overscroll-behavior: none; }
                .font-serif { font-family: 'Playfair Display', serif; }
                .font-sans { font-family: 'Poppins', sans-serif; }
                ::-webkit-scrollbar { width: 4px; }
                ::-webkit-scrollbar-track { background: #F9F9F7; }
                ::-webkit-scrollbar-thumb { background: rgba(180, 83, 9, 0.3); border-radius: 10px; }
                body > header, body > footer, body > nav { display: none !important; }
                #skylinedb-main-wrapper { position: relative; z-index: 1; background: #F9F9F7; width: 100%; }
            `}} />

            <div id="skylinedb-main-wrapper" className="relative z-10 w-full bg-[#F9F9F7] min-h-screen">
                <FloatingInquiriesButton />

                {/* HERO */}
                <section className="relative min-h-[100svh] flex flex-col justify-end pt-12 pb-20 md:pb-32 px-6 md:px-12 border-b border-neutral-200 overflow-hidden">
                    <div className="absolute inset-0 z-0 pointer-events-none bg-[#F9F9F7]">
                         <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-10 scale-105 saturate-0 contrast-125">
                            <source src={HERO_VIDEO_MOBILE} type="video/mp4" />
                        </video>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#F9F9F7] via-[#F9F9F7]/60 to-transparent" />
                    </div>

                    <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col min-h-[100svh]">
                        {/* Logo Left Aligned */}
                        <motion.div 
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className="pt-10 pb-20 md:pt-16 md:pb-28 flex justify-start"
                        >
                            <div className="relative w-48 h-16 md:w-72 md:h-24">
                                <Image src={LOGO_URL} alt="Skyline Design + Build" width={288} height={96} className="w-full h-full object-contain mix-blend-multiply opacity-90" />
                            </div>
                        </motion.div>

                        <div className="flex-grow" />

                        {/* Return Link */}
                        <div className="mb-10 text-left">
                            <a href="/services" className="group inline-flex items-center gap-3 md:gap-4 text-neutral-500 hover:text-black transition-all duration-500">
                                <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border border-black/10 bg-white/40 backdrop-blur-xl group-hover:border-amber-600/50 transition-all">
                                    <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-x-1 transition-transform text-neutral-800" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-bold text-amber-700/80 mb-0.5 font-sans">Return</span>
                                    <span className="text-[11px] md:text-[12px] uppercase tracking-[0.2em] font-medium font-sans text-neutral-900">Back to Services</span>
                                </div>
                            </a>
                        </div>

                        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="text-left">
                            <p className="text-amber-800 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mb-6 md:mb-8 font-sans">
                                Est. 2000 • Memphis
                            </p>
                            <div className="flex items-center gap-4 mb-6 md:mb-8">
                                <div className="h-[1px] w-10 md:w-12 bg-amber-700/60"></div>
                                <span className="text-amber-700 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.4em] md:tracking-[0.5em] font-sans">American Design + Build</span>
                            </div>
                            <h1 className="font-serif text-4xl md:text-8xl font-medium leading-[1.1] md:leading-[1] mb-6 md:mb-8 tracking-tight text-neutral-900">
                                We don't just build. <br/> 
                                <span className="italic text-amber-800/80 font-light">We guarantee vision.</span>
                            </h1>
                            <p className="text-neutral-600 text-base md:text-2xl font-light leading-relaxed max-w-xl mb-10 md:mb-12 border-l border-amber-800/20 pl-6 md:pl-8 font-sans">
                                Eliminating construction friction through single-source accountability. High-yield communities delivered with absolute certainty.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 md:gap-8">
                                <a href="#case-study" className="group inline-flex justify-center items-center gap-4 bg-neutral-900 text-white px-8 py-4 md:px-12 md:py-6 rounded-sm text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-amber-800 transition-all duration-700 w-full sm:w-auto font-sans shadow-xl shadow-black/5">
                                    View Project Film <PlayCircle className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
                                </a>
                                <a href="#method" className="group inline-flex justify-center items-center gap-4 bg-transparent border border-neutral-300 text-neutral-900 px-8 py-4 md:px-12 md:py-6 rounded-sm text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white/50 transition-all duration-700 w-full sm:w-auto font-sans">
                                    Our Methodology
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* CASE STUDY */}
                <section id="case-study" className="py-20 md:py-40 px-6 bg-white">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6 md:gap-8 text-left">
                            <div className="max-w-2xl text-left">
                                <h2 className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.4em] text-amber-800 mb-4 md:mb-6 italic font-sans text-left">Visual Case Study</h2>
                                <h3 className="font-serif text-3xl md:text-6xl text-neutral-900 leading-tight text-left">Foundry55: <br className="hidden md:block"/> Industrial Living.</h3>
                            </div>
                            <p className="text-neutral-600 font-light max-w-md text-sm md:text-base leading-relaxed md:leading-loose border-l border-neutral-300 pl-6 text-left font-sans">
                                A master-planned community in Blytheville, AR. Integrated delivery ensuring vision integrity and ROI from Day 1.
                            </p>
                        </div>
                        <div className="relative group overflow-hidden rounded-sm border border-neutral-200 shadow-2xl bg-black">
                            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 to-transparent pointer-events-none"></div>
                            <div className="relative aspect-video w-full">
                                <iframe className="w-full h-full grayscale-[10%] group-hover:grayscale-0 transition-all duration-1000" src="https://www.youtube.com/embed/73BgFHMrnCo?modestbranding=1&rel=0&autoplay=0&controls=1" title="Foundry55 Project Showcase" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                </section>

                {/* STATS */}
                <section className="py-16 md:py-32 border-y border-neutral-200 bg-[#F4F4F2]">
                    <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
                        {[{ val: "30%", label: "Faster Delivery" }, { val: "0", label: "Change Orders" }, { val: "100%", label: "Design Accuracy" }, { val: "50+", label: "Audit Points" }].map((stat, i) => (
                            <div key={i} className="space-y-2 md:space-y-4 group">
                                <h3 className="text-2xl md:text-7xl font-serif text-neutral-900 group-hover:text-amber-800 transition-all duration-700 ease-out">{stat.val}</h3>
                                <p className="text-[8px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] text-neutral-500 font-bold group-hover:text-neutral-800 transition-colors font-sans text-center">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* METHODOLOGY */}
                <section id="method" className="py-20 md:py-40 px-6 bg-white">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16 md:mb-24 px-4">
                            <h2 className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-500 mb-4 md:mb-6 font-sans text-center">The Skyline Model</h2>
                            <h3 className="font-serif text-3xl md:text-6xl text-neutral-900 italic leading-tight text-center">Profit Through Precision.</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative text-left">
                            <div className="p-8 md:p-16 border border-neutral-200 rounded-sm bg-[#F9F9F7] relative overflow-hidden group text-left">
                                <h4 className="text-xl md:text-2xl font-serif text-neutral-800 mb-8 md:mb-12 flex items-center gap-3 md:gap-4"><XCircle className="text-red-800/60 w-5 h-5 md:w-6 md:h-6" /> Conventional Silos</h4>
                                <ul className="space-y-6 md:space-y-10 relative z-10 font-sans text-left">
                                    {["Architectural design disconnected from real-world cost.", "Extractive change orders during construction phase.", "Multiple liability points creating project risk."].map((item, i) => (
                                        <li key={i} className="flex gap-4 md:gap-6 text-neutral-600">
                                            <div className="mt-2 w-1 h-1 rounded-full bg-red-800/40 shrink-0"></div>
                                            <p className="text-xs md:text-base leading-relaxed font-light italic">{item}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="p-8 md:p-16 border border-amber-800/20 rounded-sm bg-[#121212] text-white relative overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)] text-left">
                                <div className="absolute top-0 left-0 w-full h-[1px] md:h-[2px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent"></div>
                                <h4 className="text-2xl font-serif text-white mb-8 md:mb-12 flex items-center gap-3 md:gap-4 font-bold uppercase tracking-tight text-left"><CheckCircle2 className="text-amber-500 w-5 h-5 md:w-6 md:h-6" /> Single Source</h4>
                                <ul className="space-y-6 md:space-y-10 relative z-10 font-sans text-left">
                                    <li className="flex gap-4 text-white"><Users className="shrink-0 w-5 h-5 md:w-6 md:h-6 text-amber-500/80" /><div><strong className="block text-amber-100 font-serif text-base md:text-lg mb-1 italic">Vertical Integration</strong><p className="text-xs md:text-sm leading-relaxed font-light text-neutral-400">Total control from entitlement to final inspection.</p></div></li>
                                    <li className="flex gap-4 text-white"><ShieldCheck className="shrink-0 w-5 h-5 md:w-6 md:h-6 text-amber-500/80" /><div><strong className="block text-amber-100 font-serif text-base md:text-lg mb-1 italic">Guaranteed Maximum</strong><p className="text-xs md:text-sm leading-relaxed font-light text-neutral-400">Established costs defined during design, not construction.</p></div></li>
                                    <li className="flex gap-4 text-white"><Clock className="shrink-0 w-5 h-5 md:w-6 md:h-6 text-amber-500/80" /><div><strong className="block text-amber-100 font-serif text-base md:text-lg mb-1 italic">Compressed Delivery</strong><p className="text-xs md:text-sm leading-relaxed font-light text-neutral-400">Overlapping workflows reduce time-to-market by months.</p></div></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ASSET TOOLKIT */}
                <section id="resources" className="py-20 md:py-40 px-6 bg-[#F4F4F2]">
                    <div className="max-w-5xl mx-auto bg-white border border-neutral-200 p-8 md:p-24 rounded-sm relative overflow-hidden shadow-sm">
                        <div className="relative z-10 text-center">
                            <div className="mb-12 md:mb-20 px-4">
                                <p className="text-amber-800 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.5em] mb-4 md:mb-6 font-sans text-center">Developer Intel</p>
                                <h2 className="font-serif text-3xl md:text-7xl text-neutral-900 mb-6 md:mb-8 leading-tight text-center">Secure Proprietary Data.</h2>
                                <p className="text-neutral-500 font-light max-w-xl mx-auto text-sm md:text-lg leading-relaxed md:leading-loose px-4 text-center font-sans">
                                    Technical frameworks we use to evaluate community feasibility and regional construction indexes.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 text-left">
                                <a href="/services/skylinedb3/feasibility-blueprint" className="bg-[#F9F9F7] border border-neutral-200 p-6 md:p-10 flex flex-col gap-6 md:gap-8 hover:border-amber-800/40 transition-all duration-[700ms] group cursor-pointer relative overflow-hidden text-left block">
                                    <div className="flex justify-between items-start"><div className="bg-white p-3 md:p-4 rounded-sm text-amber-800 border border-neutral-100"><FileText size={24} className="md:w-7 md:h-7" strokeWidth={1} /></div><span className="text-[8px] md:text-[9px] bg-amber-100/50 text-amber-800 px-2 py-1 md:px-3 md:py-1.5 rounded-sm uppercase tracking-widest font-bold font-sans text-center">PDF GUIDE</span></div>
                                    <div className="text-left"><h4 className="text-neutral-900 font-serif text-xl md:text-2xl mb-2 md:mb-4 group-hover:text-amber-900 transition-colors italic leading-tight text-left">Feasibility Blueprint</h4><p className="text-xs md:text-sm text-neutral-500 mb-6 md:mb-8 leading-relaxed font-light font-sans text-left">Evaluating land value against regional industrial zoning restrictions.</p><div className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] text-neutral-900 flex items-center gap-3 md:gap-4 group-hover:gap-6 transition-all duration-500 font-bold border-b border-black/20 pb-2 w-fit font-sans">View Blueprint <ArrowRight size={12} className="text-amber-800"/></div></div>
                                </a>
                                <a href="/services/skylinedb3/market-index-report" className="bg-[#F9F9F7] border border-neutral-200 p-6 md:p-10 flex flex-col gap-6 md:gap-8 hover:border-amber-800/40 transition-all duration-[700ms] group cursor-pointer relative overflow-hidden text-left block">
                                    <div className="flex justify-between items-start"><div className="bg-white p-3 md:p-4 rounded-sm text-amber-800 border border-neutral-100"><TrendingUp size={24} className="md:w-7 md:h-7" strokeWidth={1} /></div><span className="text-[8px] md:text-[9px] bg-amber-100/50 text-amber-800 px-2 py-1 md:px-3 md:py-1.5 rounded-sm uppercase tracking-widest font-bold font-sans text-center">2026 DATA</span></div>
                                    <div className="text-left"><h4 className="text-neutral-900 font-serif text-xl md:text-2xl mb-2 md:mb-4 group-hover:text-amber-900 transition-colors italic leading-tight text-left">Market Index Report</h4><p className="text-xs md:text-sm text-neutral-500 mb-6 md:mb-8 leading-relaxed font-light font-sans text-left">Real-time cost analysis for regional workforce housing across the Delta.</p><div className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] text-neutral-900 flex items-center gap-3 md:gap-4 group-hover:gap-6 transition-all duration-500 font-bold border-b border-black/20 pb-2 w-fit font-sans">View Report <ArrowRight size={12} className="text-amber-800"/></div></div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                
                {/* FOOTER */}
                <footer id="contact" className="py-24 md:py-48 px-6 md:px-8 bg-white relative z-10 border-t border-neutral-200">
                    <div className="max-w-2xl mx-auto text-center">
                        <div className="w-[1px] h-12 md:h-20 bg-gradient-to-b from-amber-800 to-transparent mx-auto mb-10 md:mb-16"></div>
                        <h2 className="font-serif text-4xl md:text-8xl mb-10 md:mb-12 text-black italic leading-tight text-center">Build Certainty.</h2>
                        <p className="text-neutral-500 mb-12 md:mb-16 font-light leading-relaxed md:leading-loose text-sm md:text-xl tracking-wide max-w-lg mx-auto px-4 text-center font-sans">
                            Eliminate the variables. Connect with our development team for a feasibility review of your next vision.
                        </p>
                        <div className="flex flex-col gap-4 md:gap-6 max-w-sm mx-auto w-full px-4 text-center">
                            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden bg-black text-white py-4 md:py-6 rounded-sm font-bold text-[10px] md:text-[11px] uppercase tracking-[0.2em] md:tracking-[0.3em] transition-all duration-500 pointer-events-auto font-sans">
                                <span className="relative z-10 flex items-center justify-center gap-3 md:gap-4 font-sans text-center"><WhatsAppIcon className="w-4 h-4 md:w-5 md:h-5" /> Priority Consultation</span>
                                <div className="absolute inset-0 bg-amber-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-[700ms] ease-out"></div>
                            </a>
                            <a href="mailto:skylinedb3.team@gmail.com" className="w-full flex items-center justify-center gap-3 md:gap-4 bg-transparent border border-black/10 text-black py-4 md:py-6 rounded-sm font-bold text-[10px] md:text-[11px] uppercase tracking-[0.2em] md:tracking-[0.3em] hover:border-amber-800/50 hover:bg-black/5 transition-all duration-700 pointer-events-auto font-sans">Direct Email</a>
                        </div>
                        <div className="mt-24 md:mt-32 pt-12 md:pt-16 border-t border-black/5 text-neutral-600 text-[9px] md:text-[10px] uppercase tracking-[0.4em] flex flex-col gap-8 md:gap-12 px-4 font-sans text-center">
                            <div className="flex flex-col items-center justify-center gap-4 md:gap-6 text-center">
                                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-neutral-800" />
                                <span className="font-medium max-w-xs leading-relaxed text-center font-sans">3622 Central Avenue, Memphis, TN 38111</span>
                            </div>
                            <div className="flex flex-col gap-4 md:gap-6 text-center">
                                 <div className="flex flex-col gap-2">
                                    <span className="font-bold tracking-[0.6em] text-black">SKYLINE DESIGN + BUILD</span>
                                    <span className="text-[8px] md:text-[9px] text-amber-900/60 font-serif italic tracking-widest lowercase">
                                        A <span className="uppercase not-italic font-sans font-bold">GrowShare Capital</span> Company
                                    </span>
                                 </div>
                                 <span className="opacity-40">Est. 2000 • © {new Date().getFullYear()} All Rights Reserved.</span>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}
