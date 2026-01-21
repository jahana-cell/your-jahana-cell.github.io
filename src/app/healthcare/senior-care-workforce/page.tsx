
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: "Senior Care Workforce | Healthcare",
  description: "Addressing the critical shortage in geriatric care.",
};

export default function SeniorCarePage() {
  return (
    <div className="min-h-screen bg-white text-black p-12 pt-32">
       <Link href="/healthcare" className="flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-400 hover:text-black mb-12">
         <ArrowLeft className="h-4 w-4" /> Back to Healthcare
      </Link>
      <h1 className="text-5xl font-serif mb-8">Senior Care Workforce</h1>
      <p className="text-xl font-light text-neutral-600 max-w-2xl">
        Developing training pipelines and staffing solutions to meet the exploding demand for senior care professionals in the US.
      </p>
    </div>
  );
}
