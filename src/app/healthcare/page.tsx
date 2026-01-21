
'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowRight, TestTube2, ShieldCheck, 
  BrainCircuit, Play 
} from 'lucide-react';
import { LazyVideo } from "@/components/lazy-video"; 
import { cn } from "@/lib/utils";

// --- MOCK DATA ---
const initiatives = [
  {
    title: "Global Rehab Initiative",
    category: "Infrastructure",
    description: "Developing rehabilitation centers in underserved global markets.",
    image: "https://images.unsplash.com/photo-1652650445101-3bb4f755b67c?q=80&w=1080",
    link: "/healthcare/global-rehab"
  },
  {
    title: "Pharmaceutical Innovations",
    category: "R&D",
    description: "Investing in new drugs and medical technologies.",
    image: "https://images.unsplash.com/photo-1698506455775-42635fdd16a2?q=80&w=1080",
    link: "/healthcare/pharmaceutical-innovations"
  },
  {
    title: "Digital Health & Trade",
    category: "Technology",
    description: "Scalable tech platforms expanding patient access globally.",
    image: "https://images.unsplash.com/photo-1705615791240-c35f4799863b?q=80&w=1080",
    link: "/healthcare/telemedicine"
  },
  {
    title: "Maternal Health Tech",
    category: "Specialized Care",
    description: "High-growth technology for prenatal and postnatal care.",
    image: "https://images.unsplash.com/photo-1535914254981-b5012eebbd15?q=80&w=1080",
    link: "/healthcare/maternal-health"
  },
  {
    title: "Senior Care Workforce",
    category: "Social Impact",
    description: "Building a skilled workforce for the aging population.",
    image: "https://images.pexels.com/photos/339620/pexels-photo-339620.jpeg",
    link: "/healthcare/senior-care-workforce"
  }
];

const impactStats = [
    { target: "15+", label: 'Clinics Funded' },
    { target: "50k+", label: 'Patients Served' },
    { target: "3", label: 'New Tech Launched' },
    { target: "25%", label: 'Care Gap Reduction' },
    { target: "500+", label: 'Jobs Created' }
];

export default function HealthcareClientPage() {
  return (
    <div className="bg-white min-h-screen text-black selection:bg-black selection:text-white">
      
      {/* --- 1. CINEMATIC HERO --- */}
      <section className="relative w-full h-[85vh] flex items-end pb-20">
        <Image 
          src="https://firebasestorage.googleapis.com/v0/b/growshare-capital.firebasestorage.app/o/Website%20Pictures%2Fhealth%20care.png?alt=media&token=5c1e73a0-2ed8-4d6b-898a-e3fab6f77233" 
          alt="Healthcare Hero" 
          fill
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
            <p className="text-white text-[11px] tracking-[0.4em] uppercase font-bold mb-6">
              Division: Healthcare
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[0.9]">
              The Future of<br />
              Global Wellness.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* --- 2. THESIS (Editorial Typography) --- */}
      <section className="w-full py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
             <div>
                <h2 className="text-[12px] tracking-[0.4em] uppercase text-neutral-400 mb-6">Investment Thesis</h2>
                <p className="text-3xl md:text-4xl font-serif leading-tight">
                  Bridging the gap between financial success and positive health outcomes.
                </p>
             </div>
             <div>
                <p className="text-lg font-light text-neutral-500 leading-relaxed">
                  GrowShare Capital targets investments that bridge critical gaps in the healthcare system, from funding innovative treatments to building accessible clinics in underserved communities. Our goal is to create a robust healthcare ecosystem that is both profitable and profoundly impactful.
                </p>
                <div className="mt-8 pt-8 border-t border-neutral-100">
                   <Link href="/contact" className="group inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase font-bold hover:opacity-60 transition-opacity">
                      Partner with us <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                   </Link>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- 3. FEATURED STORY (Split Layout) --- */}
      <section className="w-full border-y border-neutral-100">
        <div className="grid lg:grid-cols-2">
          {/* Image Side */}
          <div className="relative h-[60vh] lg:h-auto bg-neutral-100">
            <Image 
              src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=1080" 
              alt="Scientist"
              fill
              className="object-cover"
            />
          </div>
          
          {/* Content Side */}
          <div className="flex items-center p-12 lg:p-24 bg-neutral-50">
            <div className="space-y-8">
              <span className="inline-block px-3 py-1 border border-black text-[10px] tracking-[0.2em] uppercase font-bold">
                Spotlight Story
              </span>
              <h2 className="text-3xl md:text-5xl font-serif leading-tight">
                The Invisible Threat: A Physicist's Fight for Safer Implants
              </h2>
              <p className="text-neutral-500 font-light leading-relaxed max-w-md">
                Discover the pioneering work of Dr. Muhammad Shah Jahan, whose research into free radicals transformed the safety and longevity of orthopedic implants.
              </p>
              <Link 
                href="/news/the-invisible-threat-how-one-physicists-fight-against-free-radicals-revolutionized-orthopedic-implant-safety"
                className="group inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase font-bold border-b border-black pb-1"
              >
                Read Full Story <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. INITIATIVES (Editorial Grid) --- */}
      <section className="w-full py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex justify-between items-end mb-16 border-b border-neutral-100 pb-6">
             <h2 className="text-3xl md:text-4xl font-serif">Key Initiatives</h2>
             <span className="hidden md:block text-[10px] tracking-[0.2em] uppercase font-bold text-neutral-400">Portfolio</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
            {initiatives.map((item, index) => (
              <Link key={index} href={item.link} className="group cursor-pointer block">
                <div className="relative aspect-[3/4] overflow-hidden bg-neutral-200 mb-6">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                  />
                  <div className="absolute top-4 left-4">
                     <span className="bg-white/90 backdrop-blur text-[9px] tracking-[0.2em] uppercase px-3 py-2 font-bold">
                        {item.category}
                     </span>
                  </div>
                </div>
                <div className="space-y-3">
                   <h3 className="text-2xl font-serif group-hover:italic transition-all">{item.title}</h3>
                   <p className="text-sm text-neutral-500 font-light leading-relaxed line-clamp-2">
                     {item.description}
                   </p>
                   <span className="text-[10px] tracking-[0.2em] uppercase font-bold border-b border-transparent group-hover:border-black transition-colors inline-block pb-1 mt-2">
                     Explore
                   </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* --- 5. PROCESS (Minimalist Columns) --- */}
      <section className="w-full py-24 md:py-32 bg-black text-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-20">
            <h2 className="text-[12px] tracking-[0.4em] uppercase text-neutral-500 mb-4">Lifecycle</h2>
            <p className="text-3xl md:text-4xl font-serif max-w-2xl">The Innovation Pathway</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 lg:gap-20 border-t border-white/20 pt-12">
            {[
              { icon: TestTube2, title: "Discovery", desc: "Identifying early-stage biotechs with scientifically rigorous solutions for unmet needs." },
              { icon: ShieldCheck, title: "Validation", desc: "Providing capital and guidance to navigate clinical trials and regulatory approval." },
              { icon: BrainCircuit, title: "Scale", desc: "Facilitating market entry and M&A opportunities to deliver value to patients." }
            ].map((item, idx) => (
              <div key={idx} className="group">
                <div className="mb-6 flex items-center justify-between">
                   <span className="text-4xl font-serif text-white/30 group-hover:text-white transition-colors">0{idx + 1}</span>
                   <item.icon className="h-6 w-6 stroke-[1px] text-white/50" />
                </div>
                <h3 className="text-lg font-bold uppercase tracking-widest mb-4">{item.title}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 6. VIDEO (Clean Container) --- */}
      <section className="w-full py-24 md:py-32 bg-neutral-50">
         <div className="container mx-auto px-6 md:px-12 text-center mb-12">
            <h2 className="text-[12px] tracking-[0.4em] uppercase text-neutral-400 mb-6">Our Vision</h2>
            <h3 className="text-3xl md:text-4xl font-serif text-neutral-900">Building a Healthier Future</h3>
         </div>
         <div className="container mx-auto px-6 md:px-12 max-w-5xl">
            <div className="relative aspect-video w-full overflow-hidden bg-black shadow-2xl">
               {/* Note: Ensure LazyVideo styles are clean (no rounded corners) */}
               <LazyVideo src="https://www.youtube.com/embed/gD2hFOExxlg?si=1tnuJXcM-R7rkB0i" />
            </div>
         </div>
      </section>

      {/* --- 7. IMPACT STRIP --- */}
      <section className="w-full py-20 border-t border-neutral-100">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-12 text-center md:text-left">
            {impactStats.map((stat, i) => (
              <div key={i} className="space-y-2">
                <p className="text-4xl md:text-5xl font-serif text-black">{stat.target}</p>
                <p className="text-[9px] tracking-[0.25em] uppercase text-neutral-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 8. CTA --- */}
      <section className="py-32 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-serif mb-8">Invest in Wellness</h2>
          <Link href="/contact?subject=Healthcare Inquiry" className="inline-block text-[11px] tracking-[0.3em] uppercase font-bold border-b border-black pb-2 hover:opacity-50 transition-opacity">
            Contact Healthcare Team
          </Link>
        </div>
      </section>
    </div>
  );
}
