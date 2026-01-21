
'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, MapPin, Quote, ExternalLink, MessageCircle, ArrowRight } from 'lucide-react';
import QRCode from "react-qr-code";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const imageReveal = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } }
};

export default function Foundry55ClientPage() {
  const investmentLink = "/real-estate/foundry55/invest";
  
  // State for mobile check
  const [isMobile, setIsMobile] = useState(false);

  // Ref for the main container to target scroll progress
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Framer Motion hooks
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Effect to check for mobile on client-side
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);


  return (
    <div ref={containerRef} className="bg-[#F9F9F7] min-h-screen text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white pb-24 pt-[120px] lg:pt-[140px]">
      
      {/* --- NAV --- */}
      <div className="px-6 md:px-12 lg:px-24 mb-8">
        <Link href="/real-estate" className="inline-flex items-center gap-2 text-[10px] md:text-xs uppercase tracking-[0.2em] text-neutral-400 hover:text-black transition-colors">
          <ArrowLeft className="h-3 w-3 md:h-4 md:w-4" /> Back to Real Estate
        </Link>
      </div>

      {/* --- HEADER --- */}
      <header className="px-6 md:px-12 lg:px-24 pb-16 md:pb-24 max-w-[1600px] mx-auto">
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="border-b border-stone-300 pb-12 md:pb-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-8">
            <div className="max-w-3xl">
              <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-neutral-400 mb-4 md:mb-6">
                November 2025
              </p>
              <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif leading-[0.9] text-neutral-900 tracking-tight">
                FOUNDRY<span className="italic font-light text-neutral-500">55</span>
              </h1>
            </div>
            <div className="text-left md:text-right">
              <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-1">Curated By</p>
              <p className="text-lg md:text-xl font-serif italic text-neutral-800">Skyline DB3 Design + Build</p>
            </div>
          </div>
          <h2 className="text-xl md:text-3xl lg:text-4xl font-light text-neutral-600 max-w-3xl font-serif leading-tight">
            An Odyssey of Living and Spirit.
          </h2>
        </motion.div>
      </header>

      {/* --- VISION SECTION --- */}
      <section className="px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto mb-24 md:mb-40">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          <div className="lg:col-span-4 space-y-8 pt-4 lg:pt-8 order-2 lg:order-1">
            <span className="block w-12 h-[1px] bg-neutral-900"></span>
            <h3 className="text-lg md:text-xl font-bold uppercase tracking-[0.25em]">The Vision</h3>
            <p className="text-base md:text-lg leading-relaxed font-light text-neutral-600">
              Beyond the ordinary lies the exceptional. Along the I-55 corridor, a new landscape emerges—not merely a development, but a <span className="italic text-neutral-900">curated ecosystem of existence</span>. 
            </p>
            <p className="text-sm leading-loose text-neutral-500">
              Foundry55 represents the convergence of modern living, economic vitality, and spiritual sanctuary.
            </p>
          </div>
          
          <div className="lg:col-span-8 w-full order-1 lg:order-2">
            <motion.div variants={imageReveal} className="w-full bg-stone-200 shadow-sm">
              <Image 
                src="https://i.imgur.com/mfngWnM.jpeg" 
                alt="Aerial Render of Master Plan"
                width={2000}
                height={1500}
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* --- RESIDENCES SECTION --- */}
      <section className="bg-white py-24 md:py-40 px-6 md:px-12 lg:px-24 border-t border-stone-100">
        <div className="max-w-[1600px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16 md:mb-24">
            <h3 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-6">L&apos;Art de Vivre</h3>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-400">The Residences</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            <div className="space-y-12">
              <div className="prose prose-stone prose-lg">
                <p className="text-lg md:text-xl font-light leading-relaxed">
                  Situated amidst the industrial titans of the region—Nucor Steel and Big River Steel—Foundry55 answers the call for a refined, stable sanctuary.
                </p>
              </div>
              
              <div className="w-full bg-[#F5F5F4] p-4 border border-stone-100">
                 <Image 
                    src="https://i.imgur.com/fp0yVPB.png" 
                    alt="Strategic Location Map" 
                    width={1200}
                    height={900}
                    className="w-full h-auto"
                 />
              </div>
            </div>

            <div className="space-y-12 lg:pt-32">
               <motion.div variants={imageReveal} className="w-full bg-stone-100">
                  <Image 
                    src="https://i.imgur.com/YOY1e6t.jpeg" 
                    alt="Interior Sanctuary"
                    width={1600}
                    height={1200}
                    className="w-full h-auto"
                  />
               </motion.div>

               <div className="space-y-6 border-l border-neutral-900 pl-6 md:pl-8">
                  <h4 className="text-lg md:text-xl font-serif italic text-neutral-800">The Sanctuary of Comfort</h4>
                  <p className="text-sm text-neutral-600 leading-loose max-w-md">
                    We transcend the concept of the studio. Each suite is purpose-built with distinct zones for repose and gathering.
                  </p>
                  <div className="pt-6">
                    <p className="text-[9px] uppercase tracking-widest text-neutral-400 mb-1">Projected Annual NOI</p>
                    <p className="text-2xl md:text-3xl font-serif text-neutral-900">$770,640</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SANCTUARY SECTION (Dark) --- */}
      <section className="bg-[#121212] text-white py-24 md:py-40 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="lg:col-span-5 space-y-10 md:space-y-12">
              <span className="inline-block border border-white/20 px-4 py-2 text-[9px] uppercase tracking-[0.25em]">The Beacon</span>
              <h3 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-[1.1]">
                A Monument to <br /><span className="text-neutral-500 italic">The Eternal.</span>
              </h3>
              <p className="text-neutral-400 leading-relaxed font-light text-base md:text-lg">
                At the heart of the civic core stands the Community Masjid. A bridge between the American journey and timeless cultural heritage.
              </p>
            </motion.div>

            <div className="lg:col-span-7 space-y-8">
               <div className="w-full bg-neutral-900/50 border border-white/5 rounded-sm">
                  <Image 
                    src="https://i.imgur.com/72SBZZC.jpeg" 
                    alt="Mosque Exterior Rendering"
                    width={1920}
                    height={1080}
                    className="w-full h-auto"
                  />
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  
                  <div className="w-full bg-white overflow-hidden rounded-sm group cursor-pointer shadow-lg">
                     <Image 
                        src="https://i.imgur.com/cTaEI09.jpeg"
                        alt="Mosque Floor Plan"
                        width={5731}
                        height={3200}
                        className="w-full h-auto transition-transform duration-500 group-hover:scale-105" 
                     />
                  </div>

                  <div className="flex flex-col justify-center space-y-4 md:px-6">
                     <Quote className="text-neutral-700 h-6 w-6 md:h-8 md:w-8" />
                     <p className="text-sm md:text-base font-serif italic text-neutral-300 leading-relaxed">
                       &quot;It is a Markaz—a center of gravity. A place dedicated to the cultivation of the mind and spirit.&quot;
                     </p>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- ECOSYSTEM SECTION --- */}
      <section className="py-24 md:py-40 px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16 md:mb-24">
           <h3 className="text-4xl md:text-6xl font-serif mb-6">A Curated Ecosystem</h3>
           <p className="text-xs md:text-sm font-light uppercase tracking-[0.3em] text-neutral-500">The "Third Place"</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-8 lg:gap-16 border-t border-stone-200 pt-16">
           <div className="space-y-4 text-center md:text-left">
              <span className="text-3xl md:text-4xl font-serif text-stone-300">01</span>
              <h4 className="text-sm md:text-base font-bold uppercase tracking-widest">Connectivity</h4>
              <p className="text-sm text-neutral-600 leading-loose">Elegant pedestrian promenades weave the residences to the retail ateliers and the Mosque.</p>
           </div>
           <div className="space-y-4 text-center md:text-left">
              <span className="text-3xl md:text-4xl font-serif text-stone-300">02</span>
              <h4 className="text-sm md:text-base font-bold uppercase tracking-widest">Hospitality</h4>
              <p className="text-sm text-neutral-600 leading-loose">A duality of service featuring Microtel and La Quinta, alongside retail frontage.</p>
           </div>
           <div className="space-y-4 text-center md:text-left">
              <span className="text-3xl md:text-4xl font-serif text-stone-300">03</span>
              <h4 className="text-sm md:text-base font-bold uppercase tracking-widest">Heritage</h4>
              <p className="text-sm text-neutral-600 leading-loose">A commitment to Sadaqah Jariyah and Waqf, ensuring legacy.</p>
           </div>
        </div>

        <div className="mt-16 md:mt-24 w-full bg-stone-100 border border-stone-300/50">
           <Image 
              src="https://i.imgur.com/C2CSsqH.jpeg"
              alt="3D Site Plan"
              width={2000}
              height={1000}
              className="w-full h-auto"
           />
        </div>
      </section>

      {/* --- FOOTER / CTA --- */}
      <footer className="bg-white border-t border-stone-200 py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
           <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-8 md:mb-12 text-neutral-900">The Invitation</h2>
           <p className="text-base md:text-lg text-neutral-600 font-light leading-relaxed mb-12 md:mb-16">
             This is an opportunity to acquire a piece of the future. With entitlements secured and the vision crystallized, Foundry55 moves toward a delivery in late 2026.
           </p>
           
           <div className="flex flex-col items-center gap-10">
              
              <div className="bg-white p-4 border border-neutral-900 shadow-lg">
                 <div className="h-32 w-32 md:h-40 md:w-40 flex items-center justify-center">
                    <QRCode value={investmentLink} size={128} style={{ height: 'auto', maxWidth: '100%', width: '100%' }} />
                 </div>
              </div>

              <a 
                href={investmentLink} 
                className="group inline-flex items-center gap-4 bg-neutral-900 text-white px-8 py-4 text-xs uppercase tracking-[0.2em] font-medium border border-neutral-900 hover:bg-white hover:text-neutral-900 transition-all duration-500 shadow-xl"
              >
                 Enter Investment Portal
                 <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
              </a>
              
              <div className="space-y-6 mt-8 w-full flex flex-col items-center border-t border-stone-100 pt-10">
                 <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-neutral-900">Skyline DB3 Design + Build</p>
                 
                 <div className="flex flex-col gap-3 text-neutral-500 items-center">
                    <p className="text-xs md:text-sm flex items-center justify-center gap-2">
                        <MapPin className="h-3 w-3" /> Atelier: 3622 Central Ave, Memphis, TN 38111
                    </p>
                    
                    <a 
                      href="https://wa.me/12144736888" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="group flex items-center gap-3 border border-stone-200 px-6 py-3 text-xs uppercase tracking-[0.2em] font-medium text-neutral-600 hover:bg-[#25D366] hover:border-[#25D366] hover:text-white transition-all duration-500 mt-2"
                    >
                        <svg className="h-4 w-4 fill-current transition-colors" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                           <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                        <span>WhatsApp: +1 (214) 473-6888</span>
                    </a>
                 </div>
                 
                 <a href="mailto:skylinedb3.team@gmail.com" className="text-xs md:text-sm border-b border-neutral-300 pb-1 hover:border-black transition-colors inline-block mt-4">
                   skylinedb3.team@gmail.com
                 </a>
              </div>
           </div>
        </div>
      </footer>

    </div>
  );
}
