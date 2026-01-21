'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Building2, Wheat, HeartPulse, ShieldCheck, Globe } from "lucide-react";
import type { Story } from '@/app/news/stories-data'; 
import { formatInTimeZone } from 'date-fns-tz';
import { Timestamp, collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import LeadershipSection from '@/components/sections/leadership-section';
import OurPartners from '@/components/sections/our-partners';

// --- ANIMATION CONFIG ---
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } }
};

// --- LUXURY CONTENT CONFIG ---
const featuredInvestments = [
  {
    sector: "Strategic Real Estate",
    title: "Community Infrastructure",
    description: "Developing dignity-driven workforce housing and commercial hubs that anchor local economies.",
    image: "https://firebasestorage.googleapis.com/v0/b/growshare-capital.firebasestorage.app/o/Website%20Pictures%2FReal%20Estate.png?alt=media&token=04d512c0-b4f4-4e5f-807e-3bd69f93d8c9",
    link: "/real-estate",
    icon: Building2
  },
  {
    sector: "Sovereign Agriculture",
    title: "Food Security",
    description: "Acquiring and modernizing productive farmland to secure the domestic food supply chain.",
    image: "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?q=80&w=1080",
    link: "/agriculture",
    icon: Wheat
  },
  {
    sector: "Critical Healthcare",
    title: "Wellness Ecosystems",
    description: "Funding high-acuity medical facilities to bridge the care gap in underserved regions.",
    image: "https://firebasestorage.googleapis.com/v0/b/growshare-capital.firebasestorage.app/o/Website%20Pictures%2Fhealth%20care.png?alt=media&token=5c1e73a0-2ed8-4d6b-898a-e3fab6f77233",
    link: "/healthcare",
    icon: HeartPulse
  }
];

function FormattedDate({ dateValue }: { dateValue: string | Date | Timestamp | null | undefined }) {
  const [formattedDate, setFormattedDate] = useState('');
  useEffect(() => {
    if (!dateValue) {
      setFormattedDate('');
      return;
    }
    try {
      const date = dateValue instanceof Timestamp ? dateValue.toDate() : new Date(dateValue);
      setFormattedDate(formatInTimeZone(date, 'UTC', 'MMMM d, yyyy'));
    } catch (e) {
      setFormattedDate('Invalid Date');
    }
  }, [dateValue]);
  return <>{formattedDate}</>;
}

export default function HomeClientPage({ initialStories }: { initialStories: Story[] }) {
  const [recentStories, setRecentStories] = useState<Story[]>(initialStories);
  const [loading, setLoading] = useState(initialStories.length === 0);
  
  // Parallax hook (Only active on desktop to save mobile battery/performance)
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  useEffect(() => {
    if (initialStories.length > 0) {
      setRecentStories(initialStories);
      setLoading(false);
      return;
    }

    // Client-side rescue fetch
    const fetchStories = async () => {
      setLoading(true);
      try {
        const storiesCollection = collection(db, "stories");
        const q = query(storiesCollection, orderBy("date", "desc"), limit(3));
        const querySnapshot = await getDocs(q);
        
        const storiesData = querySnapshot.docs.map(doc => {
            const data = doc.data();
            const date = data.date instanceof Timestamp ? data.date.toDate().toISOString() : new Date().toISOString();
            return {
                id: doc.id,
                slug: doc.id,
                ...data,
                date,
            } as Story;
        });
        
        setRecentStories(storiesData);
      } catch (error) {
        console.error("Client-side fetch failed:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStories();
  }, [initialStories]);

  return (
    <div className="flex min-h-screen flex-col bg-[#F9F9F7] text-[#1a1a1a] font-sans selection:bg-[#1a1a1a] selection:text-[#F9F9F7]">
        <style jsx global>{`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&display=swap');
          .font-serif { font-family: 'Playfair Display', serif; }
          .font-sans { font-family: 'Montserrat', sans-serif; }
        `}</style>

        {/* --- 1. HERO SECTION --- */}
        <section className="relative w-full min-h-[90vh] md:min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden pt-20 pb-12">
            
            <motion.div 
                initial="hidden"
                animate="show"
                variants={staggerContainer}
                className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col items-center text-center"
            >
                {/* LOGO AREA */}
                <motion.div variants={fadeUp} className="mb-12 md:mb-16">
                    {/* Responsive Logo Size */}
                    <div className="relative w-[240px] h-[70px] md:w-[450px] md:h-[120px]">
                        <Image
                            src="https://firebasestorage.googleapis.com/v0/b/growshare-capital.firebasestorage.app/o/Logo%2FGrowshare%20Capital%20Transparent.png?alt=media&token=b53577e6-eb64-409d-aa7a-e9aa4fe01c49"
                            alt="GrowShare Capital"
                            fill
                            sizes="(max-width: 768px) 80vw, 500px"
                            className="object-contain"
                            priority
                        />
                    </div>
                </motion.div>

                {/* MAIN HEADLINE - Fluid Typography */}
                <motion.h1 variants={fadeUp} className="text-5xl sm:text-6xl md:text-8xl lg:text-[6.5rem] font-serif leading-[1.1] md:leading-[0.95] tracking-tight mb-8 md:mb-12 text-[#1a1a1a]">
                    The Architect of <br />
                    <span className="italic font-light text-neutral-400">American Resilience.</span>
                </motion.h1>

                {/* SUBTEXT */}
                <motion.div variants={fadeUp} className="flex flex-col items-center gap-6 md:gap-8 px-4">
                    <div className="h-[30px] md:h-[40px] w-[1px] bg-neutral-300"></div>
                    <p className="text-sm md:text-base font-light tracking-wide text-neutral-600 max-w-xl leading-relaxed">
                        <strong className="font-semibold text-neutral-900 uppercase tracking-widest text-[10px] md:text-xs block mb-3">Intelligent. Ethical. High-Yield.</strong>
                        Deploying strategic capital into the essential assets that sustain civilization: <span className="text-[#1a1a1a] font-medium border-b border-neutral-300 pb-0.5">Soil</span>, <span className="text-[#1a1a1a] font-medium border-b border-neutral-300 pb-0.5">Shelter</span>, and <span className="text-[#1a1a1a] font-medium border-b border-neutral-300 pb-0.5">Care</span>.
                    </p>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator - Hidden on Mobile to save space */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1.5 }}
                className="absolute bottom-10 right-10 hidden lg:flex flex-col items-center gap-4"
            >
                <span className="text-[9px] uppercase tracking-[0.3em] font-semibold [writing-mode:vertical-rl] text-neutral-400">Explore The Portfolio</span>
                <div className="h-16 w-[1px] bg-neutral-200"></div>
            </motion.div>
        </section>


        {/* --- 2. CORE THESIS (SECTORS) --- */}
        <section id="sectors" className="w-full py-20 md:py-32 bg-white">
            <div className="max-w-[1600px] mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 pb-6 border-b border-neutral-100">
                    <div>
                        <h2 className="text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-neutral-400 font-bold mb-3 md:mb-4">Investment Thesis</h2>
                        <p className="text-4xl md:text-6xl font-serif text-[#1a1a1a]">Tangible Assets</p>
                    </div>
                    <p className="text-sm text-neutral-500 max-w-xs text-left md:text-right mt-6 md:mt-0 font-light leading-relaxed">
                        We avoid speculation. We invest in the fundamental pillars of the American economy.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
                    {featuredInvestments.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="group block cursor-pointer"
                        >
                            <Link href={item.link}>
                                <div className="relative aspect-[3/4] overflow-hidden bg-[#F0F0F0] mb-6 md:mb-8">
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700 z-10" />
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        // Mobile: Full Color. Desktop: B&W -> Color on Hover
                                        className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105 md:saturate-0 md:group-hover:saturate-100"
                                    />
                                    <div className="absolute bottom-0 left-0 bg-white p-3 md:p-4 z-20">
                                        <item.icon className="w-5 h-5 text-neutral-900" strokeWidth={1.5} />
                                    </div>
                                </div>

                                <div className="space-y-3 md:space-y-4 pr-4">
                                    <span className="text-[9px] uppercase tracking-[0.2em] text-neutral-400 font-bold block">{item.sector}</span>
                                    <h3 className="text-2xl font-serif text-[#1a1a1a] group-hover:translate-x-2 transition-transform duration-500">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-neutral-500 font-light leading-relaxed border-l border-neutral-200 pl-4 group-hover:border-black transition-colors duration-500">
                                        {item.description}
                                    </p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>


        {/* --- 3. PHILOSOPHY --- */}
        <section className="w-full bg-[#111] text-white py-24 md:py-48 overflow-hidden relative">
            <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 items-center relative z-10">
                
                <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-neutral-500 font-bold mb-6 md:mb-8">Our Philosophy</h2>
                    <h3 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[0.95] mb-8 md:mb-12">
                        Beyond the <br/>
                        <span className="italic text-neutral-600">Quarter.</span>
                    </h3>
                    
                    <div className="space-y-8 md:space-y-10 max-w-lg">
                        <p className="text-base md:text-lg font-light text-neutral-400 leading-relaxed">
                            We do not chase market volatility. We invest in permanence. Our strategy creates intergenerational wealth by securing the tangible infrastructure—farmland, housing, and healthcare—that communities rely upon for survival and growth.
                        </p>
                        
                        {/* TRUST METRICS */}
                        <div className="grid grid-cols-2 gap-8 md:gap-12 pt-8 md:pt-12 border-t border-white/10">
                            <div>
                                <ShieldCheck className="w-6 h-6 md:w-8 md:h-8 text-neutral-600 mb-3 md:mb-4" strokeWidth={1} />
                                <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-neutral-400 block mb-1">Risk Management</span>
                                <span className="block text-lg md:text-xl font-serif text-white">Asset-Backed</span>
                            </div>
                            <div>
                                <Globe className="w-6 h-6 md:w-8 md:h-8 text-neutral-600 mb-3 md:mb-4" strokeWidth={1} />
                                <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-neutral-400 block mb-1">Focus Region</span>
                                <span className="block text-lg md:text-xl font-serif text-white">American South</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Image hides on small mobile or stacks below */}
                <motion.div className="relative h-[400px] md:h-[600px] w-full lg:w-[90%] lg:ml-auto mt-8 lg:mt-0">
                     <Image
                        src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1600"
                        alt="Meeting"
                        fill
                        sizes="(max-width: 1024px) 100vw, 45vw"
                        className="object-cover opacity-50 grayscale"
                     />
                     <div className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 w-24 h-24 md:w-40 md:h-40 border border-white/20" />
                </motion.div>
            </div>
        </section>


        {/* --- 4. THE JOURNAL --- */}
        <section className="w-full py-24 md:py-32 bg-[#F9F9F7]">
            <div className="max-w-[1600px] mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-baseline mb-16 md:mb-20">
                    <h2 className="text-4xl md:text-6xl font-serif text-[#1a1a1a] mb-6 md:mb-0">The Journal</h2>
                    <Link href="/news" className="group flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase font-bold text-neutral-400 hover:text-black transition-colors">
                        View All Reports <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12 md:gap-y-16">
                    {loading ? (
                        <p className="text-neutral-400 text-sm tracking-widest uppercase">Loading Journal...</p>
                    ) : recentStories.map((story, i) => (
                        <Link key={story.id} href={`/news/${story.slug}`} className="group block h-full">
                            <motion.article 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="flex flex-col h-full border-t border-neutral-200 pt-6 hover:border-black transition-colors duration-500"
                            >
                                <div className="flex justify-between items-center mb-4 md:mb-6">
                                    <span className="text-[9px] tracking-[0.2em] uppercase font-bold text-neutral-900 truncate max-w-[120px]">{story.category}</span>
                                    <span className="text-[9px] tracking-[0.1em] uppercase text-neutral-400">
                                        <FormattedDate dateValue={story.date} />
                                    </span>
                                </div>
                                
                                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100 mb-6 w-full md:grayscale md:group-hover:grayscale-0 transition-all duration-700">
                                    <Image
                                        src={story.image}
                                        alt={story.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover transform group-hover:scale-105 transition-transform duration-[1.5s]"
                                    />
                                </div>

                                <h3 className="text-xl md:text-2xl font-serif leading-tight text-[#1a1a1a] group-hover:underline underline-offset-4 decoration-1 decoration-neutral-300">
                                    {story.title}
                                </h3>
                            </motion.article>
                        </Link>
                    ))}
                    
                    {!loading && recentStories.length === 0 && (
                        <div className="col-span-3 py-12 text-center text-neutral-400 font-light italic">
                            Journal entries coming soon.
                        </div>
                    )}
                </div>
            </div>
        </section>


        {/* --- 5. PARTNERS & LEADERSHIP --- */}
        <div className="bg-white">
            <OurPartners />
            <div className="border-t border-neutral-100">
                <LeadershipSection />
            </div>
        </div>


        {/* --- 6. FOOTER CTA --- */}
        <section className="py-32 md:py-40 bg-[#1a1a1a] text-white text-center">
            <div className="container mx-auto px-6">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-5xl md:text-7xl font-serif mb-8 md:mb-12">Build a Legacy.</h2>
                    <p className="text-neutral-400 max-w-md mx-auto mb-10 md:mb-12 font-light leading-relaxed px-4">
                        Partner with us to deploy capital into high-yield, ethically compliant assets.
                    </p>
                    <Link href="/contact" className="inline-block relative group overflow-hidden px-10 py-4 md:px-12 md:py-5 bg-white text-black text-[10px] md:text-[11px] tracking-[0.3em] uppercase font-bold">
                        <span className="relative z-10 group-hover:text-white transition-colors duration-500">Inquire Now</span>
                        <div className="absolute inset-0 bg-neutral-800 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                    </Link>
                </motion.div>
            </div>
        </section>
    </div>
  );
}
