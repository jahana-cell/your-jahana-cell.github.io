
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: "887 S. Highland Hub | Real Estate",
  description: "Mixed-use development in Memphis, TN.",
};

export default function HighlandHubPage() {
  return (
    <div className="min-h-screen bg-[#F9F9F7] text-neutral-900 p-12 pt-32">
       <Link href="/real-estate" className="flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-400 hover:text-black mb-12">
         <ArrowLeft className="h-4 w-4" /> Back to Projects
      </Link>
      <h1 className="text-5xl md:text-7xl font-serif mb-8">887 S. Highland Hub</h1>
      <div className="max-w-xl space-y-6 text-lg font-light text-neutral-600">
        <p>
          Located in the heart of Memphis, this mixed-use acquisition represents a strategic entry into the university district corridor.
        </p>
        <p><strong>Status:</strong> Acquired</p>
        <p><strong>Location:</strong> Memphis, TN</p>
      </div>
    </div>
  );
}
