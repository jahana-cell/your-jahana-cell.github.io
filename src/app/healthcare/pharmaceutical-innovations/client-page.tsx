
'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowLeft, FlaskConical, DollarSign, TrendingUp, ArrowRight,
  HeartHandshake, BrainCircuit, Users, Target, TestTube2, Microscope 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const valueProps = [
    {
        icon: TrendingUp,
        title: "High Alpha Potential",
        description: "Early-stage biotech offers the potential for exponential returns upon successful clinical trials and market approval."
    },
    {
        icon: HeartHandshake,
        title: "Solving Unmet Needs",
        description: "We target diseases with limited treatment options, creating immense value for patients and commanding strong market positioning."
    },
    {
        icon: BrainCircuit,
        title: "IP as a Core Asset",
        description: "Our investments are secured by robust intellectual property portfolios, creating a defensible moat."
    },
]

const investmentAreas = [
    {
        icon: TestTube2,
        title: "Novel Drug Discovery",
        description: "Backing first-in-class molecules and therapeutic approaches that fundamentally change treatment paradigms."
    },
    {
        icon: Microscope,
        title: "Advanced Diagnostics",
        description: "Funding technologies that enable earlier and more accurate disease detection, unlocking better patient outcomes."
    },
    {
        icon: FlaskConical,
        title: "Process Innovation",
        description: "Investing in manufacturing and discovery platforms (e.g., AI-driven drug discovery) that accelerate the R&D lifecycle."
    }
];

export default function PharmaceuticalInnovationsClientPage() {
    return (
        <div className="bg-white text-neutral-800 font-serif">
            
            {/* Hero Section */}
            <header className="relative h-screen w-full">
                <Image
                    src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070"
                    alt="Pharmaceutical Lab"
                    fill
                    className="object-cover"
                    priority
                    data-ai-hint="science lab"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-12 text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold leading-tight">The Science of Tomorrow</h1>
                        <p className="mt-4 max-w-2xl text-lg text-neutral-200">Our investment thesis for early-stage biotech, focusing on novel drug discovery, advanced diagnostics, and process innovation.</p>
                    </motion.div>
                </div>
            </header>
            
            <main className="py-24">
                <div className="container mx-auto max-w-5xl px-6">
                    
                    <div className="mb-16 text-center">
                         <Link href="/healthcare" className="text-sm uppercase tracking-widest text-neutral-500 hover:text-black transition-colors mb-4 inline-flex items-center gap-2">
                           <ArrowLeft size={16}/> Back to Healthcare
                         </Link>
                         <h2 className="text-4xl font-bold mt-2">Thesis: Next-Generation Medicine</h2>
                    </div>

                    <div className="prose prose-lg lg:prose-xl max-w-none mx-auto text-neutral-600">
                        <p className="lead">The future of human health will be written in the language of molecules, genes, and data. GrowShare Capital’s Pharmaceutical Innovations thesis is dedicated to funding the companies that are writing this future. We invest at the intersection of deep science and market opportunity, backing the breakthroughs that will define the next generation of medicine.</p>
                        
                        <blockquote className="border-l-4 border-primary bg-primary/5 p-6 rounded-r-lg">
                           We invest in the science that pushes boundaries, the technology that redefines possibility, and the teams that have the audacity to pursue both.
                        </blockquote>
                    </div>

                    <hr className="my-20" />

                    <section className="mb-20">
                        <h3 className="text-3xl font-bold text-center mb-12">The Case for Early-Stage Biotech</h3>
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

                    <hr className="my-20" />

                    <section className="text-center">
                        <Target className="w-12 h-12 text-primary mx-auto mb-4"/>
                        <h3 className="text-3xl font-bold mb-4">Our Ideal Partner</h3>
                        <p className="text-neutral-600 max-w-3xl mx-auto mb-8">
                            We look for Pre-Seed to Series B companies with a strong, patent-defensible scientific foundation, a leadership team with a proven track record in both research and commercialization, and a clear, capital-efficient path through clinical development.
                        </p>
                    </section>

                    <hr className="my-20" />

                    <section className="text-center bg-primary/5 p-12 rounded-2xl">
                        <DollarSign className="w-12 h-12 text-primary mx-auto mb-4"/>
                        <h3 className="text-3xl font-bold mb-4">Shape the Future of Medicine</h3>
                        <p className="text-neutral-600 max-w-3xl mx-auto mb-8">
                            If your company is pioneering the next therapeutic breakthrough, we want to hear from you. Connect with our life sciences team to discuss how we can help you accelerate your mission.
                        </p>
                        <Button asChild size="lg">
                            <Link href="/contact?subject=Pharmaceutical Innovations Inquiry">
                                Connect With Our Team <ArrowRight className="ml-2 w-4 h-4"/>
                            </Link>
                        </Button>
                    </section>

                </div>
            </main>
        </div>
    );
}
