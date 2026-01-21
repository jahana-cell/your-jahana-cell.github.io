
'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowRight, ShieldCheck, Sun, Droplets, MapPin 
} from 'lucide-react';
import { cn } from "@/lib/utils";

// --- MOCK DATA ---
const initiatives = [
  {
    title: "Ghee Manufacturing",
    category: "Value-Added",
    description: "Producing high-quality dairy products for local and export markets.",
    image: "https://images.unsplash.com/photo-1573812461383-e5f8b759d12e?q=80&w=1080",
    link: "/agriculture/ghee-manufacturing"
  },
  {
    title: "Meat Processing",
    category: "Supply Chain",
    description: "Ethically sourced meat processing ensuring a resilient American food system.",
    image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?q=80&w=1080",
    link: null
  },
  {
    title: "Agri-Entrepreneurship",
    category: "Incubation",
    description: "Funding the next generation of American food innovators.",
    image: "https://images.unsplash.com/photo-1744726010540-bf318d4a691f?q=80&w=1080",
    link: null
  },
  {
    title: "Vertical Farming",
    category: "Technology",
    description: "Investing in high-yield, small-footprint urban agriculture tech.",
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=1080",
    link: null
  }
];

const impactStats = [
    { target: "15+", label: 'Farms Supported' },
    { target: "50k+", label: 'Lbs Produced' },
    { target: "100%", label: 'USDA Certified' },
    { target: "25+", label: 'Jobs Created' },
    { target: "3", label: 'States Active' }
];

export default function AgricultureClientPage() {
  return (
    <div className="bg-white min-h-screen text-black selection:bg-black selection:text-white">
      
      {/* --- 1. CINEMATIC HERO (Mobile Optimized) --- */}
      <section className="relative w-full h-[85vh] flex items-end pb-12 md:pb-20">
        <Image 
           src="https://images.pexels.com/photos/3013440/pexels-photo-3013440.jpeg" 
           alt="Agriculture Hero" 
           fill
           sizes="100vw"
           className="z-0 object-cover"
           priority
        />
        <div className="absolute inset-0 bg-black/30 z-10" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-20">
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             className="max-w-5xl"
          >
            <p className="text-white text-[10px] md:text-[11px] tracking-[0.4em] uppercase font-bold mb-4 md:mb-6">
              Division: Agriculture
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[0.9]">
              Cultivating<br />
              The Future of America.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* --- 2. THESIS (Mobile Stack) --- */}
      <section className="w-full py-20 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
             <div>
                <h2 className="text-[12px] tracking-[0.4em] uppercase text-neutral-400 mb-6">Our Mission</h2>
                <p className="text-3xl md:text-4xl font-serif leading-tight">
                  High-yield investments in America's food sovereignty.
                </p>
             </div>
             <div>
                <p className="text-lg font-light text-neutral-500 leading-relaxed">
                  We partner with American farmers and entrepreneurs to build resilient, profitable food systems. By connecting investors directly to the source, we create sustainable returns while ensuring food security for our communities.
                </p>
                <div className="mt-8 pt-8 border-t border-neutral-100">
                   <Link href="/contact" className="group inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase font-bold hover:opacity-60 transition-opacity">
                      Join the movement <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                   </Link>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- 3. FEATURED INVESTMENT (Livestock) --- */}
      <section className="w-full border-y border-neutral-100">
        <div className="grid lg:grid-cols-2">
          {/* Content Side (First on Mobile) */}
          <div className="flex items-center p-8 md:p-12 lg:p-24 bg-neutral-50 order-2 lg:order-1">
            <div className="space-y-6 md:space-y-8">
              <span className="inline-block px-3 py-1 border border-black text-[10px] tracking-[0.2em] uppercase font-bold">
                Featured Investment
              </span>
              <h2 className="text-3xl md:text-5xl font-serif leading-tight">
                Community Livestock Program
              </h2>
              <p className="text-neutral-500 font-light leading-relaxed max-w-md">
                Our asset-backed investment program connects investors directly with sustainable livestock farming, offering tangible returns and a stake in a resilient American food economy.
              </p>
              
              <div className="pt-6">
                <Link 
                     href="/agriculture/livestock" 
                    className="group inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase font-bold border-b border-black pb-1"
                >
                    View Opportunity <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
          {/* Image Side */}
          <div className="relative h-[60vh] lg:h-auto bg-neutral-200 order-1 lg:order-2">
            <Image 
               src="https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=1600" 
               alt="Livestock"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* --- 4. KHALUI FARM SPOTLIGHT (linking to services) --- */}
      <section className="w-full py-20 md:py-32 bg-white" id="khalui-farm">
        <div className="container mx-auto px-6 md:px-12">
            
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 pb-8 border-b border-neutral-100">
                <div>
                    <h2 className="text-[12px] tracking-[0.4em] uppercase text-neutral-400 mb-4">Flagship Operation</h2>
                    <h3 className="text-4xl md:text-6xl font-serif">Khalui Farm</h3>
                </div>
                <div className="flex items-center gap-2 mt-4 md:mt-0">
                    <MapPin className="h-4 w-4 text-neutral-400" />
                    <span className="text-[11px] tracking-[0.2em] uppercase font-bold text-neutral-500">Memphis, Tennessee</span>
                </div>
            </div>

            {/* Content Grid */}
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
                
                {/* Left: Business Highlights */}
                <div className="lg:col-span-5 space-y-8 md:space-y-12 order-2 lg:order-1">
                    <div className="space-y-6">
                        <p className="text-xl font-light text-black leading-relaxed">
                            Khalui Farm is the cornerstone of our agricultural services, pioneering regenerative urban farming in America.
                        </p>
                        <div className="flex items-center gap-4 bg-emerald-50 text-emerald-800 p-4 rounded-md border border-emerald-200">
                           <ShieldCheck className="h-8 w-8 flex-shrink-0" />
                           <p className="text-sm font-semibold">
                              A fully USDA Certified Organic operation, offering farm training, CSA memberships, and wholesale produce.
                           </p>
                        </div>
                        <p className="text-neutral-500 font-light leading-relaxed">
                            Situated in Memphis, Khalui Farm operates as an educational hub and a proof-of-concept for scalable, sustainable urban agriculture, now part of our Services division.
                        </p>
                    </div>

                    <Link href="/khaluifarm" className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white hover:bg-neutral-800 transition-all text-[10px] tracking-[0.3em] uppercase w-full md:w-auto justify-center md:justify-start">
                        Explore Farm Services <ArrowRight className="h-3 w-3" />
                    </Link>
                </div>

                {/* Right: Immersive Imagery */}
                <div className="lg:col-span-7 relative h-[400px] lg:h-[600px] bg-neutral-100 overflow-hidden order-1 lg:order-2">
                     <Image 
                        src="https://images.unsplash.com/photo-1592079927431-3f8ced0dacc6?q=80&w=1200"
                        alt="Khalui Farm Operations"
                        fill
                        sizes="(max-width: 1024px) 100vw, 58vw"
                        className="object-cover"
                    />
                    <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur p-6 max-w-xs border border-white/50">
                        <p className="text-[9px] tracking-[0.2em] uppercase text-neutral-500 mb-2">Production</p>
                        <p className="text-2xl font-serif text-black">Seasonal Organic Produce & Herbs</p>
                    </div>
                </div>
            </div>
         </div>
      </section>

      {/* --- 5. ALABAMA PROJECT (Black Section) --- */}
      <section className="w-full py-20 md:py-32 bg-black text-white">
        <div className="container mx-auto px-6 md:px-12">
           <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="relative aspect-[4/5] bg-neutral-800 order-1 h-[60vh] lg:h-auto">
                 <Image 
                    src="https://images.unsplash.com/photo-1589922585952-b31ed31b2c92?q=80&w=1080" 
                    alt="Alabama Project"
                   fill
                   sizes="(max-width: 1024px) 100vw, 50vw"
                   className="object-cover opacity-90"
                 />
              </div>
              <div className="order-2">
                 <h2 className="text-[12px] tracking-[0.4em] uppercase text-neutral-500 mb-6">Expansion</h2>
                 <h3 className="text-4xl md:text-5xl font-serif mb-8">Alabama Livestock & Co-Housing</h3>
                 <p className="text-neutral-400 font-light leading-relaxed mb-10 text-lg">
                   A foundational American project in Birmingham, AL combining poultry operations with resilient community housing. This initiative represents the intersection of food security and living security.
                 </p>
                 <Link href="/agriculture/alabama-livestock" className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 hover:bg-white hover:text-black transition-all text-[10px] tracking-[0.3em] uppercase">
                     Invest Now <ArrowRight className="h-3 w-3" />
                 </Link>
              </div>
           </div>
        </div>
      </section>

      {/* --- 6. SAVOIR-FAIRE (Mobile Stack) --- */}
      <section className="w-full py-20 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
             <div className="lg:col-span-5 relative aspect-[3/4] bg-neutral-100 order-1 lg:order-1">
                <Image 
                    src="https://picsum.photos/seed/101/800/1000" // Replace with real image
                    alt="Brittney Sessoms"
                   fill
                   sizes="(max-width: 1024px) 100vw, 42vw"
                   className="object-cover"
                />
             </div>
             <div className="lg:col-span-7 lg:pl-12 order-2 lg:order-2">
                <h2 className="text-[12px] tracking-[0.4em] uppercase text-neutral-400 mb-6">Savoir-Faire</h2>
                <h3 className="text-4xl md:text-5xl font-serif mb-8">The Hands That Feed America</h3>
                <p className="text-neutral-500 font-light leading-relaxed mb-6">
                   We believe that strong partnerships are the bedrock of a resilient food system. We highlight the expertise of local leaders who turn our investments into nourishment.
                </p>
                <div className="bg-neutral-50 p-8 border-l-2 border-black">
                   <h4 className="text-xl font-serif mb-1">Brittney Sessoms</h4>
                   <p className="text-[10px] tracking-[0.2em] uppercase text-neutral-400">Founder, Charlotte & Pickens</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- 7. OTHER INITIATIVES (Responsive Grid) --- */}
      <section className="w-full py-20 md:py-32 border-t border-neutral-100">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex justify-between items-end mb-12 md:mb-16 pb-6">
             <h2 className="text-3xl md:text-4xl font-serif">More Initiatives</h2>
             <span className="hidden md:block text-[10px] tracking-[0.2em] uppercase font-bold text-neutral-400">Portfolio</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {initiatives.map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-neutral-200 mb-6">
                  {item.image && (
                    <Image 
                         src={item.image} 
                         alt={item.title} 
                         fill 
                         sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                     />
                  )}
                  <div className="absolute top-4 left-4">
                     <span className="bg-white/90 backdrop-blur text-[9px] tracking-[0.2em] uppercase px-3 py-2 font-bold">
                        {item.category}
                     </span>
                  </div>
                </div>
                <div className="space-y-3 px-2 md:px-0">
                   <h3 className="text-xl font-serif group-hover:italic transition-all">{item.title}</h3>
                   <p className="text-xs text-neutral-500 font-light leading-relaxed line-clamp-2">
                     {item.description}
                   </p>
                   {item.link && (
                       <Link href={item.link} className="text-[10px] tracking-[0.2em] uppercase font-bold border-b border-transparent group-hover:border-black transition-colors inline-block pb-1 mt-2">
                         Explore
                       </Link>
                   )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 8. IMPACT & CTA --- */}
      <section className="w-full py-20 bg-neutral-900 text-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-12 text-center">
            {impactStats.map((stat, i) => (
              <div key={i} className="space-y-2">
                <p className="text-4xl md:text-5xl font-serif">{stat.target}</p>
                <p className="text-[9px] tracking-[0.25em] uppercase text-neutral-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-serif mb-8">Invest in American Food Sovereignty</h2>
          <Link href="/contact?subject=Agriculture Inquiry" className="inline-block text-[11px] tracking-[0.3em] uppercase font-bold border-b border-black pb-2 hover:opacity-50 transition-opacity">
            Contact Agriculture
          </Link>
        </div>
      </section>
    </div>
  );
}
