"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function CategoryFilter({ categories = [], activeCategory, onCategoryChange }: { categories: string[], activeCategory: string, onCategoryChange: (category: string) => void }) {
  return (
    <div className="w-full border-b border-neutral-100 mb-12 overflow-x-auto no-scrollbar">
      <div className="flex justify-center min-w-max px-6">
        <nav className="flex gap-8 md:gap-12 py-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={cn(
                "relative text-[10px] md:text-[11px] tracking-[0.3em] uppercase transition-colors duration-300 pb-2",
                activeCategory === cat ? "text-black font-semibold" : "text-neutral-400 hover:text-black"
              )}
            >
              {cat}
              {activeCategory === cat && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-black"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
