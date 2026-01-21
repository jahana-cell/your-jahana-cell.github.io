
'use client';

import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, Download, DraftingCompass, 
  Layers, Construction, ArrowUpRight, MapPin 
} from 'lucide-react';
import { motion } from "framer-motion";
import { storiesData } from '@/app/news/stories-data';

// --- DATA ---
const projects = [
  {
    title: "887 S. Highland Hub",
    location: "Memphis, TN",
    status: "Acquired",
    image: "https://i.pinimg.com/736x/c8/4a/fd/c84afd2564d5fc045936a5b1f25f2944.jpg",
    link: "/real-estate/highland-hub" 
  },
  {
    title: "Foundry55 Apartments",
    location: "Blythville, AR",
    status: "Under Construction",
    image: "https://i.imgur.com/Lyfqp5G.jpeg",
    link: "/real-estate/foundry55" 
  },
  {
    title: "The PLATFORM @ Brooks",
    location: "Whitehaven, TN",
    status: "Fully Occupied",
    image: "https://i.imgur.com/yOzfw4N.jpeg",
    link: "/real-estate/platform-brooks" 
  }
];

const financialProjections = [
    { year: "Year 1", properties: 500, avgRent: "$1,800", netYield: "6.2%" },
    { year: "Year 3", properties: 1200, avgRent: "$1,950", netYield: "7.5%" },
    { year: "Year 5", properties: 2500, avgRent: "$2,100", netYield: "8.0%" },
];

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function RealEstateClientPage() {
  const safeStories = storiesData || [];
  const allStories = safeStories.map(story => ({
    ...story,
    id: story.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    slug: story.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
  }));
  const reitStory = allStories.find(story => story.title.includes("REIT"));
  const crowdfundingStory = allStories.find(story => story.title.includes("Crowdfunding"));

  return (
    // Changed background to a luxury "Stone" color (bg-stone-50)
    <div className="bg-[#F9F9F7] min-h-screen text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white">
      
      {/* --- HERO SECTION --- */}
      <section className="relative w-full h-[85vh] flex flex-col justify-end pb-24 px-6 md:px-12">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://firebasestorage.googleapis.com/v0/b/growshare-capital.firebasestorage.app/o/Website%20Pictures%2FReal%20Estate.png?alt=media&token=04d512c0-b4f4-4e5f-807e-3bd69f93d8c9" 
            alt="Real Estate Hero" 
            fill
            sizes="100vw"
            className="object-cover brightness-[0.70]"
            priority
          />
        </div>
        
        <div className="relative z-10 max-w-6xl">
           <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif text-white leading-[0.9] tracking-tight mb-8">
             Building American Value.<br />
             Building Community.
           </h1>
           <div className="h-[1px] w-24 bg-white/50 mb-6"></div>
           <p className="text-white text-xs tracking-[0.3em] uppercase font-bold">
             Growshare Capital &bull; American Real Estate Division
           </p>
        </div>
      </section>

      {/* --- CROWDFUNDING (Clean Editorial Look) --- */}
      <section className="py-24 md:py-32 px-6 md:px-12 border-b border-stone-200">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">
             <div className="flex-1 space-y-10">
                <span className="inline-block border border-neutral-900 px-4 py-2 text-[10px] uppercase tracking-widest font-bold">
                  Coming Soon
                </span>
                <h2 className="text-4xl md:text-6xl font-serif leading-none">
                  The Crowdfunding <br /> Initiative.
                </h2>
                <p className="text-lg md:text-xl font-light text-neutral-600 max-w-md leading-relaxed">
                  Direct investment in American community revitalization. A new era of accessibility with a minimum entry of just $5,000.
                </p>
                
                <div className="flex gap-12 pt-4">
                   <div>
                      <p className="text-3xl md:text-4xl font-serif">12-18%</p>
                      <p className="text-[10px] uppercase tracking-widest text-neutral-400 mt-1">Target Return</p>
                   </div>
                   <div>
                      <p className="text-3xl md:text-4xl font-serif">Impact</p>
                      <p className="text-[10px] uppercase tracking-widest text-neutral-400 mt-1">Social Focus</p>
                   </div>
                </div>
             </div>
             
             <div className="flex-1 w-full">
                <div className="relative aspect-[4/5] bg-stone-200">
                  <Image 
                    src="https://firebasestorage.googleapis.com/v0/b/growshare-capital.firebasestorage.app/o/Website%20Pictures%2Fcrowdsource%20real%20estate.png?alt=media&token=a2107e9d-21c0-45ea-ab49-939ab172174b" 
                    alt="Crowdfunding" 
                    fill 
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover" 
                  />
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- NEW PROJECTS SECTION (MAGAZINE STYLE) --- */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-white">
        <div className="container mx-auto">
          <div className="flex justify-between items-end mb-16 md:mb-24">
             <h2 className="text-4xl md:text-5xl font-serif">Selected Works</h2>
             <Link href="/contact" className="hidden md:block text-xs uppercase tracking-widest font-bold border-b border-neutral-900 pb-1">
               View All Projects
             </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {projects.map((project, index) => (
              <Link 
                key={index} 
                href={project.link} 
                className="block group cursor-pointer"
              >
                {/* Image Card - Sharp corners, standard aspect ratio */}
                <div className="relative aspect-[3/4] bg-stone-100 mb-6 overflow-hidden border border-stone-100">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                  
                  {/* Status Tag - Absolute Positioning */}
                  <div className="absolute top-0 left-0 bg-white px-4 py-3 border-b border-r border-stone-100 z-10">
                     <span className="text-[9px] uppercase tracking-widest font-bold">
                       {project.status}
                     </span>
                  </div>
                  
                  {/* Arrow Icon - Visible by default */}
                  <div className="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow-sm z-10">
                     <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>

                {/* Typography */}
                <div className="space-y-2">
                   <div className="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-neutral-400">
                      <MapPin className="h-3 w-3" /> {project.location}
                   </div>
                   <h3 className="text-2xl font-serif text-neutral-900 group-hover:underline underline-offset-4 decoration-1 decoration-neutral-300">
                      {project.title}
                   </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROCESS (Minimalist) --- */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-[#F9F9F7]">
        <div className="container mx-auto">
           <p className="text-xs uppercase tracking-[0.4em] text-neutral-400 mb-12 text-center">Methodology</p>
           <div className="grid md:grid-cols-3 gap-16 text-center">
              {[
                { icon: DraftingCompass, title: "Design", desc: "Innovative architecture tailored for American community living." },
                { icon: Layers, title: "Develop", desc: "Rigorous planning ensuring long-term financial viability and growth." },
                { icon: Construction, title: "Construct", desc: "Seamless execution through integrated delivery." }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center space-y-6">
                   <div className="h-16 w-16 border border-neutral-200 rounded-full flex items-center justify-center">
                      <item.icon className="h-6 w-6 stroke-1" />
                   </div>
                   <h3 className="text-lg font-serif">{item.title}</h3>
                   <p className="text-sm text-neutral-500 max-w-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* --- REIT (Dark Mode Luxury) --- */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-[#1a1a1a] text-white">
        <div className="container mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24">
           <div>
              <h2 className="text-[10px] uppercase tracking-[0.4em] text-neutral-500 mb-8">Investment Vehicle</h2>
              <h3 className="text-5xl md:text-7xl font-serif mb-8 text-[#EAEAEA]">American SFR REIT</h3>
              <p className="text-neutral-400 text-lg font-light leading-loose max-w-md mb-12">
                An American Single-Family Rental (SFR) REIT designed to deliver stable, inflation-resilient income.
              </p>
              {reitStory?.slug && (
                 <Link href={`/news/${reitStory.slug}`} className="text-xs uppercase tracking-widest border-b border-white/30 pb-2 hover:border-white hover:text-white text-neutral-400 transition-all">
                    Download Whitepaper
                 </Link>
              )}
           </div>

           <div className="space-y-8">
              {financialProjections.map((row, i) => (
                 <div key={i} className="flex justify-between items-end border-b border-white/10 pb-6">
                    <div>
                       <p className="text-xl font-serif mb-1">{row.year}</p>
                       <p className="text-[10px] uppercase tracking-widest text-neutral-500">{row.properties} Units</p>
                    </div>
                    <div className="text-right">
                       <p className="text-3xl font-serif">{row.netYield}</p>
                       <p className="text-[10px] uppercase tracking-widest text-neutral-500">Net Yield</p>
                    </div>
                 </div>
              ))}
           </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-32 md:py-40 px-6 text-center bg-white">
         <h2 className="text-4xl md:text-6xl font-serif mb-12">Invest in America's Future.</h2>
         <Link href="/contact" className="inline-block border border-neutral-900 px-8 py-4 text-xs uppercase tracking-[0.2em] font-bold hover:bg-neutral-900 hover:text-white transition-all">
            Contact Investment Team
         </Link>
      </section>

    </div>
  );
}
