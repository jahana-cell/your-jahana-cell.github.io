
'use client';

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  ArrowLeft, BrainCircuit, Users, TrendingUp, 
  ShieldCheck, Handshake, MessageSquare, DollarSign, Target, 
  CheckCircle2, ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

// --- DATA ---
const valueProps = [
    {
        icon: TrendingUp,
        title: "Scalability & Efficiency",
        description: "AI handles routine check-ins, allowing a single clinician to manage a larger patient caseload and driving down operational costs."
    },
    {
        icon: ShieldCheck,
        title: "Improved Outcomes",
        description: "Continuous AI engagement leads to higher patient compliance, faster recovery times, and significantly lower relapse rates."
    },
    {
        icon: Handshake,
        title: "Data-Driven Insights",
        description: "Generating anonymized data on treatment efficacy—a valuable asset for refining clinical protocols and predictive care."
    },
];

const modelLayers = [
    {
        icon: MessageSquare,
        title: "Patient Interaction",
        subtitle: "Layer 01",
        description: "An AI Co-Pilot & Virtual Coach facilitate journaling, mood tracking, and adaptive conversations."
    },
    {
        icon: BrainCircuit,
        title: "Data Collection",
        subtitle: "Layer 02",
        description: "Aggregates behavioral and physical data into concise, actionable therapist dashboards in real-time."
    },
    {
        icon: Users,
        title: "Clinical Integration",
        subtitle: "Layer 03",
        description: "Provides therapists with summarized reports, risk alerts, and clear KPIs for outcome tracking."
    }
];

const phases = [
    { phase: "01", title: "Bangladesh & Southeast Asia", desc: "Leveraging local healthcare expertise to establish the pilot infrastructure." },
    { phase: "02", title: "Middle East & North Africa", desc: "Scaling into the high-growth private healthcare sector in MENA." },
    { phase: "03", title: "Sub-Saharan Africa", desc: "Targeting Public-Private Partnerships (PPPs) with national health systems." }
];

// --- ANIMATION COMPONENTS ---
const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export default function GlobalRehabClientPage() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });
    
    // Parallax effect
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    return (
        <div ref={containerRef} className="bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
            
            {/* --- HERO SECTION --- */}
            <header className="relative h-[85vh] w-full overflow-hidden flex items-end pb-20">
                <motion.div style={{ y }} className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070"
                        alt="Digital Health"
                        fill
                        sizes="100vw"
                        className="object-cover"
                        priority
                        data-ai-hint="doctor tablet"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                </motion.div>

                <div className="container mx-auto px-6 md:px-12 relative z-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="max-w-4xl"
                    >
                        <Link href="/healthcare" className="group inline-flex items-center gap-2 text-white/70 text-xs tracking-[0.2em] uppercase font-bold mb-8 hover:text-white transition-colors">
                            <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform"/> Back to Healthcare
                        </Link>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[0.95]">
                            The Future of <br/>
                            <span className="italic text-white/90">Recovery.</span>
                        </h1>
                        <p className="mt-8 max-w-xl text-lg md:text-xl text-white/80 font-light leading-relaxed">
                            An AI-Integrated Model for Psychotherapy and Physical Rehabilitation. Scalable, data-driven, and human-centric.
                        </p>
                    </motion.div>
                </div>
            </header>
            
            <main className="pb-24">
                
                {/* --- INTRO & THESIS --- */}
                <section className="py-24 md:py-32">
                    <div className="container mx-auto px-6 md:px-12">
                        <div className="grid lg:grid-cols-12 gap-12 items-start">
                             <div className="lg:col-span-4">
                                <FadeIn>
                                    <h2 className="text-xs tracking-[0.4em] uppercase text-muted-foreground font-bold mb-4">The Initiative</h2>
                                    <h3 className="text-3xl md:text-4xl font-serif text-foreground">A New Standard for Care.</h3>
                                </FadeIn>
                             </div>
                             <div className="lg:col-span-8">
                                <FadeIn delay={0.2}>
                                    <p className="text-xl md:text-2xl font-serif leading-relaxed text-foreground/90">
                                        The Global Rehab Initiative is a multi-phase investment thesis to develop and scale AI-augmented rehabilitation service centers in key global markets. 
                                    </p>
                                    <p className="mt-6 text-lg text-muted-foreground font-light leading-relaxed">
                                        By integrating an AI Co-Pilot into the traditional therapy model, we dramatically improve clinical efficiency, enhance patient outcomes, and create a highly scalable, profitable business model.
                                    </p>
                                    
                                    <div className="mt-12 p-8 border border-primary/20 bg-primary/5 rounded-none relative">
                                        <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                                        <p className="text-lg md:text-xl font-serif italic text-foreground/80">
                                            "The digital therapeutics market is projected to reach <span className="text-primary font-bold not-italic">$56 billion</span> by 2027. Our model targets a significant portion of this growth by focusing on the underserved rehabilitation sector."
                                        </p>
                                    </div>
                                </FadeIn>
                             </div>
                        </div>
                    </div>
                </section>

                <Separator className="opacity-50 max-w-[90vw] mx-auto" />

                {/* --- VALUE PROPS --- */}
                <section className="py-24 md:py-32 bg-background">
                    <div className="container mx-auto px-6 md:px-12">
                        <FadeIn>
                            <div className="text-center max-w-3xl mx-auto mb-20">
                                <h2 className="text-xs tracking-[0.4em] uppercase text-muted-foreground font-bold mb-4">Why It Works</h2>
                                <h3 className="text-3xl md:text-5xl font-serif text-foreground">The Investor Value Proposition</h3>
                            </div>
                        </FadeIn>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
                            {valueProps.map((prop, i) => (
                                <FadeIn key={i} delay={i * 0.1}>
                                    <div className="group text-center">
                                        <div className="mx-auto w-16 h-16 rounded-full border border-border flex items-center justify-center mb-6 group-hover:border-primary group-hover:bg-primary/5 transition-all duration-500">
                                            <prop.icon className="w-6 h-6 text-foreground group-hover:text-primary transition-colors"/>
                                        </div>
                                        <h4 className="font-serif text-xl mb-3 text-foreground">{prop.title}</h4>
                                        <p className="text-sm text-muted-foreground leading-relaxed font-light">{prop.description}</p>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </section>
                
                {/* --- TECH STACK (Dark Mode) --- */}
                <section className="py-24 md:py-32 bg-foreground text-background">
                    <div className="container mx-auto px-6 md:px-12">
                         <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/20 pb-8">
                             <FadeIn>
                                 <h2 className="text-xs tracking-[0.4em] uppercase text-background/60 font-bold mb-4">Architecture</h2>
                                 <h3 className="text-3xl md:text-5xl font-serif text-background">The 3-Layer Stack</h3>
                             </FadeIn>
                         </div>

                         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {modelLayers.map((layer, i) => (
                                <FadeIn key={i} delay={i * 0.2}>
                                    <div className="h-full p-8 border border-white/10 hover:border-white/30 transition-colors duration-300 bg-white/5 flex flex-col">
                                        <div className="flex justify-between items-start mb-6">
                                            <layer.icon className="w-8 h-8 text-background/80"/>
                                            <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-background/40">{layer.subtitle}</span>
                                        </div>
                                        <h4 className="font-serif text-2xl mb-3 text-background">{layer.title}</h4>
                                        <p className="text-sm text-background/60 leading-relaxed font-light mt-auto">{layer.description}</p>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- ROLLOUT STRATEGY --- */}
                <section className="py-24 md:py-32">
                    <div className="container mx-auto px-6 md:px-12">
                        <div className="max-w-4xl mx-auto">
                            <FadeIn>
                                <div className="text-center mb-16">
                                    <Target className="w-10 h-10 text-primary mx-auto mb-6 stroke-[1px]" />
                                    <h2 className="text-3xl md:text-5xl font-serif mb-6">Phased Global Rollout</h2>
                                    <p className="text-muted-foreground font-light max-w-2xl mx-auto">
                                        Our expansion strategy prioritizes markets with high demand, favorable regulatory environments, and strong local partnerships.
                                    </p>
                                </div>
                            </FadeIn>

                            <div className="space-y-4">
                                {phases.map((item, index) => (
                                    <FadeIn key={index} delay={index * 0.1}>
                                        <div className="flex items-center gap-6 p-6 border-b border-border hover:bg-muted/30 transition-colors group">
                                            <span className="text-3xl md:text-4xl font-serif text-muted-foreground/30 group-hover:text-primary transition-colors">{item.phase}</span>
                                            <div>
                                                <h4 className="text-lg md:text-xl font-serif font-medium">{item.title}</h4>
                                                <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                                            </div>
                                            <CheckCircle2 className="w-5 h-5 text-primary/0 group-hover:text-primary ml-auto transition-all" />
                                        </div>
                                    </FadeIn>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- THE ASK --- */}
                <section className="py-20">
                    <div className="container mx-auto px-6 md:px-12">
                        <FadeIn>
                            <div className="bg-muted/30 border border-border p-12 md:p-20 text-center max-w-5xl mx-auto relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
                                
                                <DollarSign className="w-12 h-12 text-foreground mx-auto mb-6 stroke-[1px]"/>
                                <h3 className="text-xs tracking-[0.4em] uppercase text-muted-foreground font-bold mb-4">Investment Opportunity</h3>
                                <h2 className="text-4xl md:text-6xl font-serif mb-8 text-foreground">The Ask: Seed Funding</h2>
                                
                                <p className="text-lg md:text-xl text-muted-foreground font-light max-w-3xl mx-auto mb-10 leading-relaxed">
                                    We are seeking <strong className="text-foreground font-semibold">$1.2M in seed funding</strong> to launch our first flagship rehabilitation center in Bangladesh, finalize the AI platform for regional deployment, and secure initial operational contracts.
                                </p>
                                
                                <Button asChild size="lg" className="rounded-none px-8 py-6 text-base uppercase tracking-widest font-bold">
                                    <Link href="/contact?subject=Global Rehab Initiative Inquiry">
                                        Inquire About Investment
                                    </Link>
                                </Button>
                            </div>
                        </FadeIn>
                    </div>
                </section>

            </main>
        </div>
    );
}
