'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ScrollText, Gavel, Scale, AlertTriangle, ArrowRight, FileCheck } from 'lucide-react';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function TermsOfServicePage() {
    return (
        <div className="bg-[#F4F4F2] text-[#141F14] min-h-screen font-sans selection:bg-[#D4AF37]/30 selection:text-[#141F14]">
             <style dangerouslySetInnerHTML={{ __html: `
                @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Manrope:wght@200;300;400;500;600&display=swap');
                .font-serif { font-family: 'Cinzel', serif; }
                .font-sans { font-family: 'Manrope', sans-serif; }
                body > header, body > footer, body > nav { display: none !important; }
                
                /* Custom Prose Styling */
                .luxury-prose h2 { font-family: 'Cinzel', serif; font-size: 1.5rem; margin-top: 3rem; margin-bottom: 1.5rem; color: #141F14; border-bottom: 1px solid rgba(20,31,20,0.1); padding-bottom: 0.5rem; }
                .luxury-prose h3 { font-family: 'Manrope', sans-serif; font-weight: 700; font-size: 1.1rem; margin-top: 2rem; margin-bottom: 1rem; color: #141F14; letter-spacing: 0.05em; text-transform: uppercase; }
                .luxury-prose p { margin-bottom: 1.5rem; line-height: 1.8; color: #525252; font-weight: 300; }
                .luxury-prose ul { list-style: none; padding-left: 0; margin-bottom: 2rem; }
                .luxury-prose li { position: relative; padding-left: 1.5rem; margin-bottom: 1rem; line-height: 1.6; color: #525252; font-weight: 300; }
                .luxury-prose li::before { content: ''; position: absolute; left: 0; top: 0.6em; width: 6px; height: 6px; background-color: #D4AF37; border-radius: 50%; }
                .luxury-prose strong { color: #141F14; font-weight: 600; }
            `}} />

            {/* --- BACKGROUND TEXTURE --- */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-40 mix-blend-multiply"></div>
                 <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[100px]"></div>
            </div>

            {/* --- HERO SECTION --- */}
            <section className="relative w-full pt-40 pb-20 md:pt-48 md:pb-24 px-6 md:px-12 border-b border-[#141F14]/5 bg-white">
                <div className="container mx-auto max-w-4xl text-center relative z-10">
                    <motion.div 
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="inline-flex items-center justify-center w-20 h-20 rounded-full border border-[#D4AF37]/30 bg-[#F9F9F7] mb-10 shadow-lg shadow-[#141F14]/5"
                    >
                        <ScrollText className="w-8 h-8 text-[#D4AF37]" />
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-4xl md:text-6xl font-serif leading-tight mb-8 text-[#141F14]"
                    >
                        Terms of Service <br/> <span className="italic text-neutral-400">& Conditions</span>
                    </motion.h1>
                    
                    <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-sm font-sans uppercase tracking-[0.2em] text-neutral-500"
                    >
                        <span className="flex items-center gap-2">
                            <Gavel className="w-4 h-4 text-[#D4AF37]" /> Legal Agreement
                        </span>
                        <span className="hidden md:block text-[#D4AF37]">•</span>
                        <span>Last Updated: November 1, 2025</span>
                    </motion.div>
                </div>
            </section>

            {/* --- CONTENT LAYOUT --- */}
            <main className="w-full py-20 md:py-32 px-6 md:px-12 relative z-10">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex flex-col lg:flex-row gap-16">
                        
                        {/* LEFT: TABLE OF CONTENTS (Sticky) */}
                        <aside className="hidden lg:block w-64 shrink-0">
                            <div className="sticky top-32">
                                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37] mb-6">Contents</h4>
                                <nav className="space-y-4 border-l border-[#141F14]/10 pl-4">
                                    {["Agreement to Terms", "User Responsibilities", "Investment Risks", "Intellectual Property", "Liability Limits", "Governing Law", "Contact"].map((item, i) => (
                                        <a key={i} href={`#section-${i + 1}`} className="block text-sm text-neutral-400 hover:text-[#141F14] transition-colors font-light">
                                            {i + 1}. {item}
                                        </a>
                                    ))}
                                </nav>
                                <div className="mt-12 bg-white p-6 border border-[#141F14]/5 shadow-lg shadow-[#141F14]/5">
                                    <Scale className="w-6 h-6 text-[#D4AF37] mb-3" />
                                    <p className="text-xs text-neutral-500 leading-relaxed font-light">
                                        These terms constitute a legally binding agreement between you and GrowShare Capital.
                                    </p>
                                </div>
                            </div>
                        </aside>

                        {/* RIGHT: POLICY TEXT */}
                        <motion.div 
                            initial="hidden" 
                            animate="visible" 
                            variants={fadeUp} 
                            className="flex-1 luxury-prose"
                        >
                            <div className="text-lg md:text-xl font-light text-[#141F14] leading-relaxed mb-16 border-l-2 border-[#D4AF37] pl-6 md:pl-8">
                                <p className="mb-0">
                                   Welcome to GrowShare Capital. By accessing our platform, utilizing our investment services, or purchasing our agricultural products, you agree to be bound by these Terms of Service ("Terms") and our Privacy Policy.
                                </p>
                            </div>

                            <section id="section-1">
                                <h2>1. Agreement to Terms</h2>
                                <p>Please read these Terms carefully before using our services. By accessing or using any part of the site, you agree to be bound by these Terms. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services.</p>
                                <p>We reserve the right to update, change, or replace any part of these Terms by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes.</p>
                            </section>

                            <section id="section-2">
                                <h2>2. User Responsibilities & Conduct</h2>
                                <p>When creating an account or engaging with our platform, you agree to:</p>
                                <ul>
                                    <li>Provide accurate, current, and complete information during the registration process.</li>
                                    <li>Maintain the security of your password and accept all risks of unauthorized access to your account.</li>
                                    <li>Not use the Service for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction.</li>
                                </ul>
                            </section>

                            <section id="section-3">
                                <h2>3. Investment & Risk Disclaimers</h2>
                                <div className="bg-[#F9F9F7] border border-[#D4AF37]/30 p-6 mb-6 rounded-sm">
                                    <div className="flex gap-3 mb-2">
                                        <AlertTriangle className="w-5 h-5 text-[#D4AF37]" />
                                        <h3 className="!mt-0 !mb-0 text-sm">Risk Disclosure</h3>
                                    </div>
                                    <p className="text-xs !mb-0 text-neutral-500">
                                        Investing in agricultural assets and private equity involves a high degree of risk, including the potential loss of principal.
                                    </p>
                                </div>
                                <p>GrowShare Capital is not a registered broker-dealer or investment advisor. Content on this site is for informational purposes only and does not constitute financial advice.</p>
                                <ul>
                                    <li><strong>No Guarantee:</strong> Past performance of agricultural yields or livestock markets is not indicative of future results.</li>
                                    <li><strong>Accreditation:</strong> Certain investment opportunities are restricted to "Accredited Investors" as defined by the U.S. Securities and Exchange Commission (SEC).</li>
                                    <li><strong>Liquidity:</strong> Investments in private agriculture are generally illiquid and may require a long-term holding period.</li>
                                </ul>
                            </section>

                            <section id="section-4">
                                <h2>4. Intellectual Property</h2>
                                <p>The content, features, and functionality of the GrowShare Capital platform—including but not limited to text, graphics, logos, images, and software—are the exclusive property of GrowShare Capital and are protected by international copyright, trademark, and other intellectual property laws.</p>
                            </section>
                            
                            <section id="section-5">
                                <h2>5. Limitation of Liability</h2>
                                <p>In no event shall GrowShare Capital, nor our directors, officers, employees, affiliates, agents, contractors, interns, suppliers, service providers, or licensors be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind.</p>
                                <p>This includes, without limitation, lost profits, lost revenue, lost savings, loss of data, replacement costs, or any similar damages, whether based in contract, tort (including negligence), strict liability or otherwise, arising from your use of any of the service.</p>
                            </section>
                            
                            <section id="section-6">
                                <h2>6. Governing Law</h2>
                                <p>These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of the State of Tennessee, United States, without regard to its conflict of law provisions.</p>
                            </section>

                            <section id="section-7">
                                <h2>7. Contact Information</h2>
                                <p>Questions about the Terms of Service should be sent to us at:</p>
                                
                                <div className="mt-8 p-8 bg-white border border-[#141F14]/10 flex flex-col md:flex-row gap-8 items-start">
                                    <div className="w-12 h-12 rounded-full bg-[#141F14] flex items-center justify-center shrink-0">
                                        <FileCheck className="w-5 h-5 text-[#D4AF37]" />
                                    </div>
                                    <div>
                                        <h5 className="font-serif text-xl text-[#141F14] mb-2">GrowShare Capital</h5>
                                        <p className="text-sm text-neutral-500 mb-4 uppercase tracking-widest font-bold">Legal Department</p>
                                        <address className="not-italic text-neutral-600 font-light mb-6">
                                            3622 Central Ave<br />
                                            Memphis, TN 38111<br />
                                            United States
                                        </address>
                                        <a href="mailto:info@growsharecapital.com" className="inline-flex items-center gap-2 text-[#D4AF37] font-bold text-xs uppercase tracking-[0.2em] border-b border-[#D4AF37] pb-1 hover:text-[#141F14] hover:border-[#141F14] transition-all">
                                            info@growsharecapital.com <ArrowRight className="w-3 h-3" />
                                        </a>
                                    </div>
                                </div>
                            </section>

                        </motion.div>
                    </div>
                </div>
            </main>

            {/* --- FOOTER --- */}
            <footer className="py-12 border-t border-[#141F14]/5 text-center">
                 <p className="text-[9px] uppercase tracking-[0.2em] text-neutral-400 font-sans">
                    EST. 2022  •  © 2026 GrowShare Capital. All Rights Reserved.
                </p>
            </footer>
        </div>
    );
}