
'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowLeft, Monitor, DollarSign, TrendingUp, ArrowRight,
  HeartHandshake, BrainCircuit, Users, Target, Activity, Clock, Globe 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const valueProps = [
    {
        icon: TrendingUp,
        title: "Exponential Scalability",
        description: "Digital platforms transcend geographical boundaries, allowing for rapid, low-cost expansion into new markets."
    },
    {
        icon: HeartHandshake,
        title: "Improved Access & Equity",
        description: "Telemedicine democratizes healthcare, bringing specialist expertise to remote and underserved populations."
    },
    {
        icon: BrainCircuit,
        title: "Rich Data Ecosystems",
        description: "Digital health platforms generate valuable data that can be used to refine treatments, predict outbreaks, and improve public health."
    },
]

const investmentAreas = [
    {
        icon: Activity,
        title: "Virtual Consultation Platforms",
        description: "Secure, user-friendly platforms connecting patients with doctors, therapists, and specialists."
    },
    {
        icon: Users,
        title: "Remote Patient Monitoring (RPM)",
        description: "IoT devices and software that track chronic conditions and provide real-time data to clinicians."
    },
    {
        icon: Globe,
        title: "Global Trade & Supply Chain",
        description: "Ventures that facilitate the ethical export of medical equipment and pharmaceuticals to build healthcare capacity."
    }
];

export default function TelemedicineClientPage() {
    return (
        <div className="bg-white text-neutral-800 font-serif">
            
            {/* Hero Section */}
            <header className="relative h-screen w-full">
                <Image
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070"
                    alt="Telemedicine consultation"
                    fill
                    sizes="100vw"
                    className="object-cover"
                    priority
                    data-ai-hint="doctor video call"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-12 text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold leading-tight">Healthcare Without Borders</h1>
                        <p className="mt-4 max-w-2xl text-lg text-neutral-200">Our investment thesis for telemedicine, remote monitoring, AI-driven diagnostics, and global trade in medical goods.</p>
                    </motion.div>
                </div>
            </header>
            
            <main className="py-24">
                <div className="container mx-auto max-w-5xl px-6">
                    
                    <div className="mb-16 text-center">
                         <Link href="/healthcare" className="text-sm uppercase tracking-widest text-neutral-500 hover:text-black transition-colors mb-4 inline-flex items-center gap-2">
                           <ArrowLeft size={16}/> Back to Healthcare
                         </Link>
                         <h2 className="text-4xl font-bold mt-2">Thesis: Digital Health & Global Trade</h2>
                    </div>

                    <div className="prose prose-lg lg:prose-xl max-w-none mx-auto text-neutral-600">
                        <p className="lead">The future of healthcare is not confined to the walls of a hospital. GrowShare Capital is actively investing in the digital transformation of medicine, backing scalable platforms and strategic trade ventures that expand access, improve outcomes, and redefine the patient experience on a global scale.</p>
                        
                        <blockquote className="border-l-4 border-primary bg-primary/5 p-6 rounded-r-lg">
                           We are building a portfolio that addresses both the digital and physical supply chains of modern healthcare.
                        </blockquote>
                    </div>

                    <hr className="my-20" />

                    <section className="mb-20">
                        <h3 className="text-3xl font-bold text-center mb-12">The Digital Health Advantage</h3>
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
                            We seek growth-stage companies with a proven product-market fit, a clear monetization strategy, and a vision for international expansion. For our global trade ventures, we partner with established distributors and logistics experts with deep in-country networks.
                        </p>
                    </section>

                    <hr className="my-20" />

                    <section className="text-center bg-primary/5 p-12 rounded-2xl">
                        <DollarSign className="w-12 h-12 text-primary mx-auto mb-4"/>
                        <h3 className="text-3xl font-bold mb-4">Build a Global Health Network</h3>
                        <p className="text-neutral-600 max-w-3xl mx-auto mb-8">
                            Whether you're scaling a digital health platform or building a medical supply chain, we want to hear from you. Let's build the future of global healthcare together.
                        </p>
                        <Button asChild size="lg">
                            <Link href="/contact?subject=Digital Health Inquiry">
                                Connect With Our Team <ArrowRight className="ml-2 w-4 h-4"/>
                            </Link>
                        </Button>
                    </section>

                </div>
            </main>
        </div>
    );
}
