
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: "The PLATFORM @ Brooks | Real Estate",
  description: "Workforce housing initiative in Whitehaven, TN.",
};

export default function PlatformBrooksPage() {
  return (
    <div className="min-h-screen bg-[#F9F9F7] text-neutral-900 p-12 pt-32">
       <Link href="/real-estate" className="flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-400 hover:text-black mb-12">
         <ArrowLeft className="h-4 w-4" /> Back to Projects
      </Link>
      <h1 className="text-5xl md:text-7xl font-serif mb-8">The PLATFORM @ Brooks</h1>
      <div className="max-w-xl space-y-6 text-lg font-light text-neutral-600">
        <p>
          A fully occupied workforce housing community in Whitehaven, designed to provide dignity and stability to local families.
        </p>
        <p><strong>Status:</strong> Fully Occupied</p>
        <p><strong>Location:</strong> Whitehaven, TN</p>
      </div>
    </div>
  );
}
