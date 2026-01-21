
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: "Hach Analytics Bangladesh | Business Plan",
  description: "A lean, low-overhead model for exporting Hach water quality testing equipment.",
};

export default function ExportLabPage() {
  return (
    <div className="min-h-screen bg-white text-black p-12 pt-24">
      <Link href="/healthcare" className="flex items-center gap-2 text-sm text-neutral-500 hover:text-black mb-8">
         <ArrowLeft className="h-4 w-4" /> Back to Healthcare
      </Link>
      <h1 className="text-4xl font-serif mb-6">Hach Analytics Bangladesh</h1>
      <p className="text-neutral-600 max-w-2xl">
        A strategic initiative to export high-precision water quality testing equipment to the high-demand market in Bangladesh. 
        <br/><br/>
        <strong>Status:</strong> Business Plan Development
      </p>
    </div>
  );
}
