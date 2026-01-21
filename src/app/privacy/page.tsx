'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText, ArrowRight, Scale, Server } from 'lucide-react';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function PrivacyPolicyPage() {
    return (
        <div className="bg-[#F4F4F2] text-[#141F14] min-h-screen font-sans selection:bg-[#D4AF37]/30 selection:text-[#141F14]">
             <style dangerouslySetInnerHTML={{ __html: `
                @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Manrope:wght@200;300;400;500;600&display=swap');
                .font-serif { font-family: 'Cinzel', serif; }
                .font-sans { font-family: 'Manrope', sans-serif; }
                body > header, body > footer, body > nav { display: none !important; }
                
                /* Custom Prose Styling for Luxury Look */
                .luxury-prose h2 { font-family: 'Cinzel', serif; font-size: 1.5rem; margin-top: 3rem; margin-bottom: 1.5rem; color: #141F14; border-bottom: 1px solid rgba(20,31,20,0.1); padding-bottom: 0.5rem; }
                .luxury-prose h3 { font-family: 'Manrope', sans-serif; font-weight: 700; font-size: 1.1rem; margin-top: 2rem; margin-bottom: 1rem; color: #141F14; letter-spacing: 0.05em; text-transform: uppercase; }
                .luxury-prose p { margin-bottom: 1.5rem; line-height: 1.8; color: #525252; font-weight: 300; }
                .luxury-prose ul { list-style: none; padding-left: 0; margin-bottom: 2rem; }
                .luxury-prose li { position: relative; padding-left: 1.5rem; margin-bottom: 1rem; line-height: 1.6; color: #525252; font-weight: 300; }
                .luxury-prose li::before { content: ''; position: absolute; left: 0; top: 0.6em; width: 6px; height: 6px; background-color: #D4AF37; border-radius: 50%; }
                .luxury-prose strong { color: #141F14; font-weight: 600; }
                .luxury-prose a { color: #141F14; text-decoration: none; border-bottom: 1px solid #D4AF37; transition: all 0.3s; }
                .luxury-prose a:hover { color: #D4AF37; border-bottom-color: transparent; }
            `}} />

            {/* --- BACKGROUND TEXTURE --- */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-40 mix-blend-multiply"></div>
                 <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[100px]"></div>
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
                        <Shield className="w-8 h-8 text-[#D4AF37]" />
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-4xl md:text-6xl font-serif leading-tight mb-8 text-[#141F14]"
                    >
                        Data Protection <br/> <span className="italic text-neutral-400">& Privacy Policy</span>
                    </motion.h1>
                    
                    <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-sm font-sans uppercase tracking-[0.2em] text-neutral-500"
                    >
                        <span className="flex items-center gap-2">
                            <Scale className="w-4 h-4 text-[#D4AF37]" /> Compliance
                        </span>
                        <span className="hidden md:block text-[#D4AF37]">•</span>
                        <span>Effective: November 1, 2025</span>
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
                                    {["Information Collection", "Data Usage", "Data Sharing", "Security Protocols", "Your Rights", "Contact Information"].map((item, i) => (
                                        <a key={i} href={`#section-${i + 1}`} className="block text-sm text-neutral-400 hover:text-[#141F14] transition-colors font-light">
                                            {i + 1}. {item}
                                        </a>
                                    ))}
                                </nav>
                                <div className="mt-12 bg-white p-6 border border-[#141F14]/5 shadow-lg shadow-[#141F14]/5">
                                    <Lock className="w-6 h-6 text-[#D4AF37] mb-3" />
                                    <p className="text-xs text-neutral-500 leading-relaxed font-light">
                                        Your data is encrypted using 256-bit SSL technology.
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
                                    GrowShare Capital ("we," "us," or "our") is dedicated to the sanctity of your privacy. Trust is the currency of our business, and we are transparent about how we collect, safeguard, and utilize your personal and financial information.
                                </p>
                            </div>

                            <section id="section-1">
                                <h2>1. Information We Collect</h2>
                                <p>To provide our investment services and maintain compliance with financial regulations, we collect specific categories of data:</p>
                                
                                <h3>A. Identity Data</h3>
                                <p>Information provided directly by you during onboarding or inquiry, including full legal name, government-issued identification (for KYC compliance), date of birth, and contact details.</p>

                                <h3>B. Financial Data</h3>
                                <p>Bank account details, accreditation status, income verification documents, and transaction history related to your investments with GrowShare Capital.</p>

                                <h3>C. Technical Data</h3>
                                <p>Internet Protocol (IP) address, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</p>
                            </section>

                            <section id="section-2">
                                <h2>2. How We Use Your Information</h2>
                                <p>We utilize your data solely for legitimate business purposes and legal compliance:</p>
                                <ul>
                                    <li><strong>Service Execution:</strong> To process investment transactions, manage your portfolio, and provide customer support.</li>
                                    <li><strong>Regulatory Compliance:</strong> To comply with SEC regulations, Anti-Money Laundering (AML) laws, and Know Your Customer (KYC) requirements.</li>
                                    <li><strong>Communication:</strong> To send you administrative information, market updates, and opportunities relevant to your investment profile.</li>
                                    <li><strong>Security:</strong> To detect, prevent, and address technical issues or fraudulent activities.</li>
                                </ul>
                            </section>

                            <section id="section-3">
                                <h2>3. Information Sharing & Disclosure</h2>
                                <p>We maintain a strict policy regarding your data. We do not sell, trade, or rent your personal identification information to others. Disclosure occurs only under these specific circumstances:</p>
                                <ul>
                                    <li><strong>Trusted Service Providers:</strong> We engage third-party companies (e.g., custodian banks, payment processors like Stripe, legal counsel) who are contractually obligated to keep your information confidential and secure.</li>
                                    <li><strong>Legal Obligations:</strong> We may disclose your information if compelled by law, court order, or governmental regulation.</li>
                                    <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, client data may be transferred as a business asset, subject to confidentiality agreements.</li>
                                </ul>
                            </section>

                            <section id="section-4">
                                <h2>4. Data Security</h2>
                                <p>
                                    We employ bank-grade security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. This includes:
                                </p>
                                <ul>
                                    <li>Encryption of data in transit (SSL/TLS) and at rest.</li>
                                    <li>Multi-factor authentication (MFA) for administrative access.</li>
                                    <li>Regular security audits and vulnerability assessments.</li>
                                </ul>
                                <p>While we strive for absolute security, no method of transmission over the Internet is 100% infallible. We utilize industry best practices to minimize risk.</p>
                            </section>

                            <section id="section-5">
                                <h2>5. Your Rights & Choices</h2>
                                <p>Depending on your jurisdiction, you have the right to:</p>
                                <ul>
                                    <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
                                    <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data.</li>
                                    <li><strong>Deletion:</strong> Request deletion of your personal data, subject to our legal retention requirements (e.g., financial record-keeping laws).</li>
                                    <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time via the link in our emails.</li>
                                </ul>
                            </section>

                            <section id="section-6">
                                <h2>6. Contact Us</h2>
                                <p>If you have questions regarding this Privacy Policy or wish to exercise your data rights, please contact our Compliance Officer.</p>
                                
                                <div className="mt-8 p-8 bg-white border border-[#141F14]/10 flex flex-col md:flex-row gap-8 items-start">
                                    <div className="w-12 h-12 rounded-full bg-[#141F14] flex items-center justify-center shrink-0">
                                        <FileText className="w-5 h-5 text-[#D4AF37]" />
                                    </div>
                                    <div>
                                        <h5 className="font-serif text-xl text-[#141F14] mb-2">GrowShare Capital</h5>
                                        <p className="text-sm text-neutral-500 mb-4 uppercase tracking-widest font-bold">Data Compliance Office</p>
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