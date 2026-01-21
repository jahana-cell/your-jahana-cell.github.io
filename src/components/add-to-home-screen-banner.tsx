'use client';

import { useState, useEffect } from 'react';
import { X, Share, PlusSquare } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export function AddToHomeScreenBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 1. Detect iOS devices
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
    
    // 2. Detect if already in standalone mode (PWA installed)
    const isInStandaloneMode = ('standalone' in window.navigator) && (window.navigator as any).standalone;
    
    // 3. Check "Cool-down" logic (7 days)
    const lastDismissed = localStorage.getItem('addToHomeScreenDismissed');
    const now = new Date().getTime();
    const sevenDaysInMs = 7 * 24 * 60 * 60 * 1000;
    
    const isInCoolDown = lastDismissed && (now - parseInt(lastDismissed) < sevenDaysInMs);

    // Show only if iOS, not installed, and not in cool-down
    if (isIOS && !isInStandaloneMode && !isInCoolDown) {
      // 4. "Polite Delay" - Wait 5 seconds before showing
      const timer = setTimeout(() => setIsVisible(true), 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    localStorage.setItem('addToHomeScreenDismissed', new Date().getTime().toString());
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-6 left-4 right-4 z-[100] md:hidden"
        >
          {/* LUXURY STYLING */}
          <div className="bg-[#050505]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-5 shadow-[0_20px_50px_-12px_rgba(0,0,0,1)] ring-1 ring-amber-500/20 relative overflow-hidden">
            
            {/* Decorative Shine Effect */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent"></div>

            {/* Close Button */}
            <button
              onClick={handleDismiss}
              className="absolute top-3 right-3 text-neutral-500 hover:text-white p-2 transition-colors active:scale-90"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Dismiss</span>
            </button>

            <div className="flex gap-5 items-start">
              {/* Logo Box */}
              <div className="shrink-0 relative w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center overflow-hidden shadow-inner">
                 <Image 
                    src="https://firebasestorage.googleapis.com/v0/b/growshare-capital.firebasestorage.app/o/Logo%2FOnly%20G%20Transparent.png?alt=media&token=e35d5de0-d3b2-4f43-8af3-d93ff2435b13" 
                    alt="GrowShare Logo" 
                    width={36} 
                    height={36}
                    className="object-contain"
                 />
              </div>

              {/* Text Content */}
              <div className="flex-1 space-y-1">
                {/* Updated Title */}
                <h3 className="text-white font-serif text-base leading-none pt-1 tracking-wide">
                  Add to Home Screen
                </h3>
                <p className="text-neutral-400 text-[11px] font-light leading-relaxed pr-6">
                  Install GrowShare for the premium mobile experience.
                </p>
                
                {/* Visual Instructions */}
                <div className="flex flex-wrap items-center gap-2 pt-3">
                    <div className="flex items-center gap-1.5 text-xs text-neutral-300 font-medium bg-white/5 px-2 py-1 rounded-md border border-white/5">
                        <span>Tap</span>
                        <Share className="h-3 w-3 text-blue-400" />
                    </div>
                    <div className="h-[1px] w-2 bg-neutral-700"></div>
                    {/* Updated Instruction Button */}
                    <div className="flex items-center gap-1.5 text-xs text-amber-100 font-medium bg-white/10 px-2 py-1 rounded-md border border-amber-500/30">
                        <span>Add to Home Screen</span>
                        <PlusSquare className="h-3 w-3 text-amber-500" />
                    </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
