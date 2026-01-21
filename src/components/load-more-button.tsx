
"use client";

import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function LoadMoreButton({ onClick, isLoading }: { onClick: () => void, isLoading: boolean }) {
  return (
    <div className="flex justify-center mt-24 mb-20">
      <button
        onClick={onClick}
        disabled={isLoading}
        className="group relative px-12 py-4 overflow-hidden border border-neutral-200 bg-white transition-all duration-500 hover:border-black disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {/* The Animated Background Fill */}
        <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.22, 1, 0.36, 1]" />
        
        {/* The Button Text */}
        <span className={cn(
            "relative text-[11px] tracking-[0.4em] uppercase font-light text-black group-hover:text-white transition-colors duration-500 flex items-center gap-2",
            isLoading && "text-neutral-400 group-hover:text-neutral-400"
        )}>
          {isLoading && <Loader2 className="w-4 h-4 animate-spin"/>}
          {isLoading ? "Loading..." : "Load More"}
        </span>
      </button>
    </div>
  );
}
