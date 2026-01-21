// src/app/news/[slug]/client-page.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Tag, Loader2, Quote, TrendingUp, Building2, Download, Mail } from 'lucide-react';
import { format } from 'date-fns';
import { doc, getDoc, collection, query, where, getDocs, Timestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import type { Story } from '@/app/news/stories-data';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

// --- Re-usable Responsive Component for the Press Release ---

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const RyanKelleyPressReleasePage = () => {
  const currentDate = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  return (
    <main className={`min-h-screen bg-[#FFFCF5] text-stone-900 font-sans overflow-x-hidden selection:bg-[#D4AF37] selection:text-white`}>
      
      <div 
          className="fixed inset-0 z-0 opacity-[0.04] pointer-events-none"
          style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0 C20 0 0 20 0 50 C0 80 20 100 50 100 C80 100 100 80 100 50 C100 20 80 0 50 0 Z M50 95 C25 95 5 75 5 50 C5 25 25 5 50 5 C75 5 95 25 95 50 C95 75 75 95 50 95 Z' fill='none' stroke='%23D4AF37' stroke-width='0.5'/%3E%3Cpath d='M50 10 C30 10 10 30 10 50 C10 70 30 90 50 90 C70 90 90 70 90 50 C90 30 70 10 50 10 Z' fill='none' stroke='%23AA771C' stroke-width='0.5'/%3E%3C/svg%3E")`,
              backgroundSize: '120px 120px'
          }}
      />

      <article className="relative z-10 max-w-4xl mx-auto px-6 py-12 md:py-24">
        
        <motion.header 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16 md:mb-24 border-b border-[#D4AF37]/30 pb-12"
        >
          <div className="inline-block px-4 py-1 border border-[#D4AF37] mb-6">
              <p className="text-[#D4AF37] font-bold tracking-[0.25em] uppercase text-xs font-sans">
                For Immediate Release
              </p>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold font-serif leading-[1.1] mb-8 text-stone-900 drop-shadow-sm">
            GrowShare Capital Appoints <br />
            <span className="text-[#D4AF37] italic">Ryan Kelley</span> <br />
            to Lead Operations & Strategy
          </h1>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8">
              <Button className="bg-[#D4AF37] hover:bg-[#b49021] text-white font-sans tracking-widest text-xs px-8 rounded-none h-12">
                  <Download className="w-4 h-4 mr-2" /> Download Press Kit
              </Button>
              <div className="h-px w-12 bg-stone-300 md:hidden" />
              <div className="text-stone-500 font-serif italic text-lg">
                Memphis, TN &mdash; {currentDate}
              </div>
          </div>
        </motion.header>


        <div className="font-serif text-lg md:text-xl leading-loose text-stone-800 space-y-8">
            
            <motion.section 
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="first-letter:text-7xl first-letter:font-serif first-letter:text-[#D4AF37] first-letter:float-left first-letter:mr-3 first-letter:mt-[-10px]">
                <strong className="font-bold text-stone-900 font-serif text-sm tracking-widest uppercase mr-2">Memphis, TN —</strong>
                GrowShare Capital has appointed Ryan Kelley to its leadership team. This strategic move reinforces the operational backbone supporting the firm’s growing investment portfolio. Kelley enters the role with a resume that merges technical execution with the capital formation skills needed for impact-driven development.
              </p>
            </motion.section>

            <motion.div 
               variants={fadeInUp}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               className="bg-white p-8 md:p-10 border-l-4 border-[#D4AF37] shadow-sm my-12"
            >
                <div className="flex items-start gap-4">
                    <TrendingUp className="w-8 h-8 text-[#D4AF37] shrink-0 mt-1" />
                    <div>
                        <h3 className="font-serif text-xl font-bold mb-2">Revenue Strategy Overhaul</h3>
                        <p className="text-stone-600 mb-4">
                            During his tenure as Director of Operations & Development for Dar Un Noor School in Atlanta, Kelley established partnerships that netted nearly <strong className="text-stone-900">$500,000</strong> in restricted capital.
                        </p>
                        <div className="bg-[#F9F5EB] p-4 inline-block">
                            <p className="font-serif text-2xl font-bold text-[#D4AF37]">+25% <span className="text-xs text-stone-500 font-sans tracking-wide font-normal ml-2">JUMP IN REVENUE RELIABILITY</span></p>
                        </div>
                    </div>
                </div>
            </motion.div>

            <motion.section 
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
                <p>
                    Kelley’s background also covers high-stakes capital projects and governance. He was instrumental in the Global Village Project securing <strong className="text-stone-900 font-bold">$5 million</strong> in New Markets Tax Credits. Additionally, he helped drive a $1 million statewide campaign for CAIR Georgia. These projects prove he can handle rigid compliance demands without losing sight of the broader organizational vision.
                </p>
            </motion.section>

             <motion.div 
               variants={fadeInUp}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               className="bg-white p-8 md:p-10 border-r-4 border-[#D4AF37] shadow-sm my-12 text-right"
            >
                <div className="flex flex-col items-end gap-4">
                    <Building2 className="w-8 h-8 text-[#D4AF37] shrink-0" />
                    <div>
                        <h3 className="font-serif text-xl font-bold mb-2">Asset Management & Tech</h3>
                        <p className="text-stone-600 mb-4">
                           In the asset management sector, Kelley managed readiness workflows for a residential real estate portfolio valued at <strong className="text-stone-900">$250 million</strong> during his time with RESICAP.
                        </p>
                        <p className="text-sm italic text-stone-500">
                            He combines this asset management experience with technical expertise, having previously led data governance and system integration strategies for companies in the FinTech and MedTech industries.
                        </p>
                    </div>
                </div>
            </motion.div>

            <motion.section 
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
                <p>
                    At GrowShare Capital, Kelley will oversee the intersection of fundraising, operations, and technology. His charge is to construct a sturdy operational framework for investments in housing, agriculture, and healthcare.
                </p>
            </motion.section>
        </div>


        <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="my-20 relative text-center px-4"
        >
            <Quote className="absolute top-0 left-0 w-12 h-12 text-[#D4AF37]/20" />
            <blockquote className="font-serif text-2xl md:text-4xl font-bold leading-normal text-stone-900 mx-auto max-w-2xl">
                “Ryan knows how to execute complicated strategies, which allows us to grow without losing sight of the communities we serve.”
            </blockquote>
            <Quote className="absolute bottom-0 right-0 w-12 h-12 text-[#D4AF37]/20 rotate-180" />
            <cite className="block mt-6 font-sans text-xs tracking-widest uppercase text-[#D4AF37] not-italic font-bold">
                — Ashif Jahan, MBA
            </cite>
        </motion.div>

        <div className="flex justify-center items-center gap-2 mb-20 opacity-40">
            <div className="h-px w-8 bg-stone-900"></div>
            <span className="font-serif font-bold text-xl text-stone-900">###</span>
            <div className="h-px w-8 bg-stone-900"></div>
        </div>


        <motion.footer 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-stone-900 text-[#FFFCF5] p-10 md:p-16"
        >
            <div className="grid md:grid-cols-2 gap-12">
                
                <div>
                    <h4 className="font-serif text-[#D4AF37] text-lg font-bold mb-6 border-b border-[#D4AF37]/30 pb-2 inline-block">
                        About GrowShare Capital
                    </h4>
                    <p className="font-serif text-stone-300 leading-relaxed opacity-90">
                        GrowShare Capital is an investment and development platform that links institutional investors with community projects. The firm funds and builds initiatives in housing, agriculture, healthcare, and business development. The priority is on ethical finance and creating lasting economic strength for communities.
                    </p>
                </div>

                <div className="md:border-l md:border-stone-700 md:pl-12 flex flex-col justify-between">
                    <div>
                        <h4 className="font-serif text-[#D4AF37] text-lg font-bold mb-6 border-b border-[#D4AF37]/30 pb-2 inline-block">
                            Media Contact
                        </h4>
                        <div className="font-sans text-sm tracking-wide text-stone-300 space-y-4">
                            <div>
                                <p className="text-stone-500 text-xs uppercase tracking-widest mb-1">Director & Chief Executive Officer</p>
                                <p className="text-white font-bold text-lg">Ashif Jahan, MBA</p>
                            </div>
                            <div>
                                <p className="text-stone-500 text-xs uppercase tracking-widest mb-1">Email</p>
                                <a href="mailto:press@growsharecapital.com" className="text-white hover:text-[#D4AF37] transition-colors border-b border-white/20 pb-0.5">
                                    press@growsharecapital.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </motion.footer>

      </article>
    </main>
  );
}


export default function NewsArticleClientPage({ 
  initialStory, 
  slug 
}: { 
  initialStory: Story | null, 
  slug: string 
}) {
  const [story, setStory] = useState<Story | null>(initialStory);
  const [loading, setLoading] = useState(!initialStory);
  const [error, setError] = useState(false);

  // 1. CLIENT-SIDE FETCH (Rescue Mission)
  useEffect(() => {
    if (initialStory) return; 

    const fetchClientSide = async () => {
      setLoading(true);
      const cleanSlug = decodeURIComponent(slug).trim();
      
      try {
        let foundData: any = null;
        let foundId = cleanSlug;

        const docRef = doc(db, "stories", cleanSlug);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
           foundData = docSnap.data();
           foundId = docSnap.id;
        } else {
           const q = query(collection(db, "stories"), where("slug", "==", cleanSlug));
           const qSnap = await getDocs(q);
           if (!qSnap.empty) {
             foundData = qSnap.docs[0].data();
             foundId = qSnap.docs[0].id;
           }
        }

        if (foundData) {
          const dateStr = foundData.date instanceof Timestamp 
            ? foundData.date.toDate().toISOString() 
            : new Date().toISOString();

          setStory({
            id: foundId,
            slug: foundData.slug || foundId,
            ...foundData,
            date: dateStr
          } as Story);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchClientSide();
  }, [initialStory, slug]);

  // 2. TAB TITLE FIX (Update "Loading..." to actual Title)
  useEffect(() => {
    if (story?.title) {
      document.title = `${story.title} | GrowShare Capital`;
    }
  }, [story]);

  // --- LOADING STATE ---
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <Loader2 className="w-8 h-8 animate-spin text-neutral-400" />
      </div>
    );
  }

  // --- ERROR STATE ---
  if (!story || error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center bg-neutral-50">
        <h1 className="text-3xl font-serif mb-4 text-neutral-900">Article Not Found</h1>
        <Link href="/news" className="text-amber-700 hover:text-amber-900 uppercase tracking-widest text-xs font-bold border-b border-amber-700 pb-1">
            Return to Newsroom
        </Link>
      </div>
    );
  }
  
  // --- CONDITIONAL RENDER ---
  if (story.slug === 'growshare-capital-appoints-ryan-kelley-to-lead-operations-strategy') {
    return <RyanKelleyPressReleasePage />;
  }


  // --- DEFAULT SUCCESS STATE ---
  return (
    <article className="min-h-screen bg-white pb-20">
      <div className="relative w-full h-[50vh] md:h-[60vh] bg-neutral-900">
        <Image 
          src={story.image} 
          alt={story.title}
          fill
          sizes="100vw"
          className="object-cover opacity-80"
          style={{ objectPosition: story.imagePosition || 'center' }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 max-w-[1200px] mx-auto">
          <Link href="/news" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 text-[10px] uppercase tracking-widest transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to News
          </Link>
          <div className="flex items-center gap-4 mb-4 text-amber-400 text-xs font-bold tracking-widest uppercase">
            <span className="flex items-center gap-2"><Tag className="w-3 h-3" /> {story.category}</span>
            <span className="flex items-center gap-2"><Calendar className="w-3 h-3" /> {format(new Date(story.date), 'MMMM d, yyyy')}</span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white leading-tight max-w-4xl">
            {story.title}
          </h1>
        </div>
      </div>

      <div className="max-w-[800px] mx-auto px-6 py-16 md:py-24">
        <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed font-serif italic mb-12 border-l-4 border-amber-600 pl-6">
          {story.description}
        </p>
        
        <div 
          className="prose prose-lg prose-neutral max-w-none font-light"
          dangerouslySetInnerHTML={{ __html: story.content || story.summary || '' }}
        />
      </div>
    </article>
  );
}
