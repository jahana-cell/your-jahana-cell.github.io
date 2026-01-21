
'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowLeft, Baby, DollarSign, TrendingUp, ArrowRight,
  HeartHandshake, BrainCircuit, Users, Target, Activity, Clock 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const valueProps = [
    {
        icon: TrendingUp,
        title: "High-Growth Market",
        description: "The global FemTech market is projected to reach $1.1 Trillion by 2027, with maternal health as a core driver."
    },
    {
        icon: HeartHandshake,
        title: "Profound Social Impact",
        description: "Investments directly contribute to reducing maternal mortality, improving infant health, and closing care gaps."
    },
    {
        icon: BrainCircuit,
        title: "Data & AI Integration",
        description: "Our portfolio companies leverage data to create personalized, predictive, and preventative care models."
    },
]

const investmentAreas = [
    {
        icon: Activity,
        title: "Remote Monitoring Platforms",
        description: "Wearables and at-home diagnostic tools for real-time tracking of maternal and fetal health."
    },
    {
        icon: Users,
        title: "Telehealth & Virtual Care",
        description: "On-demand access to lactation consultants, therapists, and postnatal support networks."
    },
    {
        icon: Clock,
        title: "AI-Powered Diagnostics",
        description: "Algorithms that predict risks like pre-eclampsia and pre-term labor, enabling early intervention."
    }
];

export default function MaternalHealthClientPage() {
    return (
        <div className="bg-white text-neutral-800 font-serif">
            
            {/* Hero Section */}
            <header className="relative h-screen w-full">
                <Image
                    src="https://images.unsplash.com/photo-1535914254981-b5012eebbd15?q=80&w=2070"
                    alt="Maternal Health"
                    fill
                    sizes="100vw"
                    className="object-cover"
                    priority
                    data-ai-hint="doctor pregnant"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-12 text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold leading-tight">Investing in Life's Beginning</h1>
                        <p className="mt-4 max-w-2xl text-lg text-neutral-200">A GrowShare Capital thesis on high-growth technology for prenatal, delivery, and postnatal care.</p>
                    </motion.div>
                </div>
            </header>
            
            <main className="py-24">
                <div className="container mx-auto max-w-5xl px-6">
                    
                    <div className="mb-16 text-center">
                         <Link href="/healthcare" className="text-sm uppercase tracking-widest text-neutral-500 hover:text-black transition-colors mb-4 inline-flex items-center gap-2">
                           <ArrowLeft size={16}/> Back to Healthcare
                         </Link>
                         <h2 className="text-4xl font-bold mt-2">Thesis: The Maternal Health Tech Revolution</h2>
                    </div>

                    <div className="prose prose-lg lg:prose-xl max-w-none mx-auto text-neutral-600">
                        <p className="lead">The journey of motherhood is one of life's most critical periods, yet it remains one of the most underserved by modern technology. GrowShare Capital has identified Maternal Health Technology as a cornerstone of our healthcare investment strategy. This sector represents a multi-billion dollar market opportunity characterized by legacy system inefficiencies, significant care gaps, and a deeply motivated consumer base.</p>
                        
                        <blockquote className="border-l-4 border-primary bg-primary/5 p-6 rounded-r-lg">
                           We are not just funding apps; we are investing in platforms that create healthier families, stronger communities, and a new generation of life.
                        </blockquote>
                    </div>

                    <hr className="my-20" />

                    <section className="mb-20">
                        <h3 className="text-3xl font-bold text-center mb-12">Why This Sector, Why Now?</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {valueProps.map((prop, i) => (
                                <div key={i} className="text-center">
                                    <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                        <prop.icon className="w-8 h-8 text-primary"/>
                                    </div>
                                    <h4 className="font-bold text-lg mb-2">{prop.title}</h4>
                                    <p className="text-sm text-neutral-500">{prop.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <hr className="my-20" />
                    
                    <section className="bg-neutral-900 text-white -mx-6 px-6 py-20 rounded-2xl">
                        <h3 className="text-3xl font-bold text-center mb-12">Core Investment Areas</h3>
                         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {investmentAreas.map((area, i) => (
                                <div key={i} className="p-6 border border-white/20 rounded-lg">
                                    <area.icon className="w-8 h-8 text-primary mb-4"/>
                                    <h4 className="font-bold text-lg mb-2">{area.title}</h4>
                                    <p className="text-sm text-neutral-400">{area.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                    
                     <div className="mt-12 text-center">
                        <Button asChild variant="outline">
                            <Link href="/healthcare/telemedicine/export-lab-equipment">
                                View Sample Business Plan: Lab Equipment Export <ArrowRight className="ml-2 w-4 h-4"/>
                            </Link>
                        </Button>
                    </div>

                    <hr className="my-20" />

                    <section className="text-center">
                        <Target className="w-12 h-12 text-primary mx-auto mb-4"/>
                        <h3 className="text-3xl font-bold mb-4">Our Ideal Partner</h3>
                        <p className="text-neutral-600 max-w-3xl mx-auto mb-8">
                            We seek early-stage companies (Seed to Series A) with a validated clinical need, a strong founding team combining medical and technical expertise, and a clear path to regulatory approval and reimbursement.
                        </p>
                    </section>

                    <hr className="my-20" />

                    <section className="text-center bg-primary/5 p-12 rounded-2xl">
                        <DollarSign className="w-12 h-12 text-primary mx-auto mb-4"/>
                        <h3 className="text-3xl font-bold mb-4">Join Our Thesis</h3>
                        <p className="text-neutral-600 max-w-3xl mx-auto mb-8">
                            If you are a founder building the future of maternal health or an investor passionate about this space, we invite you to connect with us.
                        </p>
                        <Button asChild size="lg">
                            <Link href="/contact?subject=Maternal Health Tech Inquiry">
                                Connect With Our Team <ArrowRight className="ml-2 w-4 h-4"/>
                            </Link>
                        </Button>
                    </section>

                </div>
            </main>
        </div>
    );
}
