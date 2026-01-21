'use client';

import { Suspense } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import InquiryForm from '@/components/inquiry-form'; 
import SocialIcons from '@/components/SocialIcons'; 

function ContactContent() {
  const searchParams = useSearchParams();
  const subject = searchParams.get('subject') || '';

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <div className="bg-[#FDFCFB] min-h-screen text-stone-900 selection:bg-stone-900 selection:text-white">
      
      {/* --- 1. HERO --- */}
      {/* Adjusted padding for mobile: pt-24 pb-16 instead of pt-32 pb-20 */}
      <section className="relative w-full pt-24 pb-16 md:pt-48 md:pb-32 px-6 md:px-12 border-b border-stone-200/60">
        <div className="container mx-auto max-w-[1800px]">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <span className="h-[1px] w-8 md:w-12 bg-[#D4AF37]"></span>
              <p className="text-[10px] md:text-xs tracking-[0.4em] uppercase font-bold text-stone-400">
                Contact
              </p>
            </div>
            
            {/* Adjusted font size for mobile: text-5xl instead of text-6xl */}
            <h1 className="text-5xl md:text-8xl font-serif leading-[0.95] md:leading-[0.9] text-stone-900 mb-6 md:mb-8">
              Start the <br /> <span className="italic text-stone-400">Conversation.</span>
            </h1>
            
            <p className="text-base md:text-xl font-light text-stone-600 leading-relaxed max-w-xl">
              We invite you to engage with our team regarding investments, strategic partnerships, and our vision for the future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- 2. MAIN CONTENT --- */}
      <main className="w-full">
        <div className="grid lg:grid-cols-12 min-h-[80vh]">
          
          {/* LEFT: Directory Sidebar */}
          {/* Adjusted padding: px-6 py-12 for mobile to reduce whitespace */}
          <div className="lg:col-span-4 bg-[#FDFCFB] px-6 py-12 md:p-16 lg:border-r border-stone-200/60 order-2 lg:order-1">
             <div className="lg:sticky lg:top-12 space-y-12 md:space-y-16">
                
                <h2 className="text-[10px] tracking-[0.4em] uppercase text-stone-400">
                  Directory
                </h2>

                <div className="space-y-10 md:space-y-12">
                  {/* Headquarters */}
                  <div className="group">
                    <h3 className="font-serif text-2xl mb-4 group-hover:text-[#D4AF37] transition-colors duration-500">Headquarters</h3>
                    <address className="not-italic text-stone-500 font-light leading-loose text-sm">
                      3622 Central Ave<br />
                      Memphis, TN 38111<br />
                      United States
                    </address>
                    <a href="https://maps.google.com/?q=3622+Central+Ave,Memphis,TN+38111" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-4 text-[10px] uppercase tracking-widest font-bold border-b border-transparent hover:border-black transition-all pb-0.5">
                      Get Directions <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>

                  {/* Communication */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">Phone</h3>
                      <a href="tel:+12144736888" className="font-serif text-xl hover:text-[#D4AF37] transition-colors">
                        +1 (214) 473-6888
                      </a>
                      <div className="mt-1">
                         <a href="https://wa.me/12144736888" target="_blank" rel="noopener noreferrer" className="text-xs text-stone-400 hover:text-stone-900 transition-colors">
                           Available via WhatsApp
                         </a>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">Email</h3>
                      {/* Added break-all for long emails on small screens */}
                      <a href="mailto:info@growsharecapital.com" className="font-serif text-xl hover:text-[#D4AF37] transition-colors break-all">
                        info@growsharecapital.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Social Footer */}
                <div className="pt-12 border-t border-stone-100">
                   <h3 className="text-[10px] tracking-[0.2em] uppercase text-stone-400 mb-6">Connect</h3>
                   <SocialIcons iconClassName="opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
                </div>
             </div>
          </div>

          {/* RIGHT: Inquiry Form */}
          {/* Order-1 ensures form is first on mobile if desired, or remove order classes to keep Directory first. Kept standard stacking here. */}
          <div className="lg:col-span-8 bg-white relative order-1 lg:order-2">
             <div className="w-full h-full px-6 py-16 md:p-24 lg:p-32">
                <div className="max-w-2xl mx-auto">
                   <h3 className="text-3xl font-serif mb-2">Send a Message</h3>
                   <p className="text-stone-500 font-light mb-8 md:mb-12">Please fill out the form below and our team will respond shortly.</p>
                   
                   <div className="bg-transparent">
                      <InquiryForm defaultSubject={subject} />
                   </div>
                </div>
             </div>
          </div>

        </div>
      </main>

      {/* --- 3. MAP IMAGE --- */}
      {/* Adjusted height: h-64 (256px) for mobile, h-[50vh] for desktop */}
      <section className="h-64 md:h-[50vh] w-full relative grayscale hover:grayscale-0 transition-all duration-[1.5s] ease-in-out">
         <Image 
           src="https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg" 
           alt="Map Location" 
           fill 
           className="object-cover opacity-90"
         />
         <div className="absolute inset-0 bg-[#FDFCFB]/10 pointer-events-none" />
         
         <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 bg-white/95 backdrop-blur-sm p-6 md:p-8 max-w-[calc(100%-3rem)] md:max-w-sm border border-stone-100 shadow-2xl">
            <MapPin className="h-5 w-5 md:h-6 md:w-6 text-[#D4AF37] mb-3 md:mb-4" />
            <p className="font-serif text-base md:text-lg text-stone-900">GrowShare Capital HQ</p>
            <p className="text-[10px] md:text-xs text-stone-500 mt-1 uppercase tracking-wider">Memphis, Tennessee</p>
         </div>
      </section>

    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={
        <div className="h-screen w-full flex items-center justify-center bg-[#FDFCFB]">
            <div className="w-px h-24 bg-stone-200 overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-full bg-stone-900 animate-slideDown" />
            </div>
        </div>
    }>
      <ContactContent />
    </Suspense>
  );
}