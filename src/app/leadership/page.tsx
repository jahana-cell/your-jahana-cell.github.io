'use client';

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import TeamHierarchy from "@/components/team-hierarchy"; 
import { cn } from "@/lib/utils";

export default function LeadershipPage() {
  // Fix: Explicitly type the ref for TypeScript
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax hook for the hero text
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div 
      ref={containerRef}
      // FIX: Added 'relative' here to satisfy the Framer Motion warning
      className="relative bg-[#FDFCFB] min-h-screen text-stone-900 selection:bg-stone-900 selection:text-white overflow-hidden"
    >
      
      {/* --- 1. HERO SECTION (Editorial Style) --- */}
      <section className="relative w-full h-[85vh] flex flex-col justify-end pb-24 px-6 md:px-12 border-b border-stone-200">
        <motion.div 
          style={{ y, opacity }}
          className="container mx-auto max-w-[1800px]"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Label / Chapter Number */}
            <div className="md:col-span-3">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center gap-4"
              >
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-stone-400">
                  01 / Governance
                </span>
                <div className="h-[1px] w-8 bg-stone-300" />
              </motion.div>
            </div>

            {/* Main Headline */}
            <div className="md:col-span-9">
              <motion.h1 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="text-6xl md:text-8xl lg:text-9xl font-serif tracking-tight leading-[0.9] mb-8"
              >
                Visionaries <br />
                <span className="italic text-stone-400">&</span> Stewards
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-lg md:text-xl font-light text-stone-500 max-w-xl leading-relaxed ml-auto md:mr-24"
              >
                Guiding our mission to build resilient communities and deliver sustainable wealth through uncompromising integrity and strategic foresight.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* --- 2. THE DIRECTORY (Team Hierarchy) --- */}
      <main className="relative z-10 bg-[#FDFCFB]">
        <div className="container mx-auto px-6 md:px-12 max-w-[1800px]">
          
          {/* Section Header */}
          <div className="py-12 md:py-20 border-b border-stone-200/60">
             <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-stone-400">
                  02 / The Structure
                </span>
                <p className="text-sm text-stone-500 max-w-xs text-right hidden md:block">
                  Scroll to explore the chain of command and departmental leadership.
                </p>
             </div>
          </div>

          {/* The Chart Component */}
          <div className="py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <TeamHierarchy />
            </motion.div>
          </div>

        </div>
      </main>

      {/* --- 3. ETHOS (Editorial Footer) --- */}
      <section className="py-32 md:py-48 bg-stone-100 border-t border-stone-200">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] tracking-[0.4em] uppercase text-stone-400 mb-8 block">
              Our Philosophy
            </span>
            <blockquote className="text-3xl md:text-5xl font-serif leading-snug text-stone-800 mb-10">
              &quot;True leadership is not about being in charge. It is about taking care of those in your charge.&quot;
            </blockquote>
            <div className="h-[1px] w-12 bg-stone-300 mx-auto" />
          </motion.div>
        </div>
      </section>

    </div>
  );
}