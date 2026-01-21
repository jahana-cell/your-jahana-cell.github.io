
'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";
import { Stethoscope, Activity, ShieldCheck, HeartPulse, UserCheck, TestTube2, ArrowRight, FlaskConical, Laptop, Baby, Users, BrainCircuit } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { FadeIn } from "@/components/fade-in";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { LazyVideo } from "@/components/lazy-video";

const initiatives = [
  {
    title: "Global Rehab Initiative",
    description: "Funding a multi-phase initiative to develop rehabilitation and healthcare service centers in key global locations, targeting an underserved market.",
    icon: Stethoscope,
    image: "https://images.unsplash.com/photo-1652650445101-3bb4f755b67c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxOHx8Z2xvYmFsJTIwcmVoYWJ8ZW58MHx8fHwxNzU3MTg3NTkyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    aiHint: "doctor patient",
    link: "/healthcare/global-rehab"
  },
  {
    title: "Pharmaceutical Innovations",
    description: "Investing in the R&D of new drugs and medical technologies to capture value in emerging healthcare markets.",
    icon: TestTube2,
    image: "https://images.unsplash.com/photo-1698506455775-42635fdd16a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxQaGFybWFjZXV0aWNhbCUyMElubm92YXRpb25zfGVufDB8fHx8fDE3NTcxODc2NjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    aiHint: "science lab",
    link: "/healthcare/pharmaceutical-innovations"
  },
  {
    title: "Digital Health & Global Trade",
    description: "Backing scalable tech platforms and strategic export ventures to expand patient access and build healthcare infrastructure.",
    icon: Laptop,
    image: "https://images.unsplash.com/photo-1705615791240-c35f4799863b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxNnx8RGlnaXRhbCUyMEhlYWx0aHxlbnwwfHx8fDE3NTcxODc3Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    aiHint: "video call doctor",
    link: "/healthcare/telemedicine"
  },
  {
    title: "Maternal Health Tech",
    description: "A dedicated investment thesis to support high-growth technology for prenatal, delivery, and postnatal care.",
    icon: Baby,
    image: "https://images.unsplash.com/photo-1535914254981-b5012eebbd15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxoZWFsdGh8ZW58MHx8fHwxNzU3MTg3ODMyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    aiHint: "pregnant woman doctor",
    link: "/healthcare/maternal-health"
  },
  {
    title: "Senior Care Workforce",
    description: "Partnering with nonprofits to build a skilled senior care workforce, creating jobs and community impact.",
    icon: Users,
    image: "https://images.pexels.com/photos/339620/pexels-photo-339620.jpeg",
    aiHint: "senior care",
    link: "/healthcare/senior-care-workforce"
  }
];

const impactStats = [
    { target: 15, suffix: '+', label: 'Clinics Funded' },
    { target: 50000, suffix: '+', label: 'Patients Served Annually' },
    { target: 3, suffix: '', label: 'New Technologies Launched' },
    { target: 25, suffix: '%', label: 'Reduction in Care Gaps' },
    { target: 500, suffix: '+', label: 'Healthcare Jobs Created' }
];

export default function HealthcareClientPage() {
  return (
    <div className="bg-background">
       <section className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center text-white">
        <Image 
          src="https://firebasestorage.googleapis.com/v0/b/growshare-capital.firebasestorage.app/o/Website%20Pictures%2Fhealth%20care.png?alt=media&token=5c1e73a0-2ed8-4d6b-898a-e3fab6f77233" 
          alt="Healthcare & Pharmaceuticals" 
          fill
          sizes="100vw"
          className="z-0 object-cover"
          data-ai-hint="medical collage"
          priority
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <FadeIn className="container mx-auto px-4 z-20 text-center">
          <h1 className="text-4xl md:text-6xl font-headline font-bold">
            Investing in the Future of Wellness
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
            We fund high-growth ventures that close critical care gaps, drive innovation, and build healthier, more resilient communities.
          </p>
        </FadeIn>
      </section>

      <section className="w-full py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Our Investment Thesis for Healthcare</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We believe financial success and positive health outcomes are intrinsically linked. GrowShare Capital targets investments that bridge critical gaps in the healthcare system, from funding innovative treatments to building accessible clinics in underserved communities. Our goal is to create a robust healthcare ecosystem that is both profitable and profoundly impactful.
            </p>
          </div>
        </div>
      </section>

       <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <FadeIn>
            <Card className="max-w-5xl mx-auto overflow-hidden shadow-2xl border-primary/20">
              <div className="grid md:grid-cols-2 items-center">
                <div className="p-8 md:p-12 order-2 md:order-1">
                  <h3 className="font-semibold uppercase tracking-wider text-primary mb-2">Featured Story</h3>
                  <h4 className="text-2xl lg:text-3xl font-headline font-bold">The Invisible Threat: A Physicist's Fight for Safer Implants</h4>
                  <p className="mt-4 text-muted-foreground">
                    Discover the pioneering work of Dr. Muhammad Shah Jahan, whose research into free radicals transformed the safety and longevity of orthopedic implants, preventing countless revision surgeries.
                  </p>
                  <Button asChild className="mt-6">
                    <Link href="/news/the-invisible-threat-how-one-physicists-fight-against-free-radicals-revolutionized-orthopedic-implant-safety">
                      Read the Full Story <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="relative w-full h-64 md:h-full min-h-[300px] order-1 md:order-2 group">
                  <Image src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxwaHlzaWNpc3R8ZW58MHx8fHwxNzYxOTI0MjM3fDA&ixlib=rb-4.1.0&q=80&w=1080" alt="Scientist in a laboratory" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-300 group-hover:scale-105" data-ai-hint="scientist laboratory"/>
                </div>
              </div>
            </Card>
          </FadeIn>
        </div>
      </section>

       <section className="w-full py-20 md:py-28 bg-muted/50">
            <div className="container mx-auto px-4">
                <FadeIn className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-headline font-bold">An Introduction to Our Healthcare Vision</h2>
                    <p className="mt-4 text-lg max-w-3xl mx-auto text-muted-foreground">
                        Discover how we are building a healthier future through strategic, impact-driven investments.
                    </p>
                </FadeIn>
                <FadeIn>
                    <Card className="max-w-4xl mx-auto overflow-hidden shadow-xl border md:aspect-[16/7]">
                        <LazyVideo src="https://www.youtube.com/embed/gD2hFOExxlg?si=1tnuJXcM-R7rkB0i" />
                    </Card>
                </FadeIn>
            </div>
      </section>
      
      <section id="savoir-faire" className="w-full py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">The Innovation Lifecycle</h2>
            <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
              Our process for identifying, funding, and scaling transformative healthcare ventures.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
              <FadeIn>
                <TestTube2 className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold font-headline">1. Research & Discovery</h3>
                <p className="text-muted-foreground mt-2">We identify early-stage biotechs and digital health companies with scientifically rigorous, first-in-class solutions for unmet medical needs.</p>
              </FadeIn>
              <FadeIn>
                <ShieldCheck className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold font-headline">2. Strategic Investment & Trials</h3>
                <p className="text-muted-foreground mt-2">We provide capital and strategic guidance to help companies navigate clinical trials, regulatory approval, and IP protection.</p>
              </FadeIn>
              <FadeIn>
                <BrainCircuit className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold font-headline">3. Market Entry & Growth</h3>
                <p className="text-muted-foreground mt-2">We leverage our network to facilitate market entry, M&A opportunities, and long-term growth, delivering value to patients and investors.</p>
              </FadeIn>
          </div>
        </div>
      </section>

      <section className="w-full py-20 md:py-28 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Our Healthcare Investment Initiatives</h2>
             <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
                From global rehabilitation projects to cutting-edge R&D, we are committed to funding the next wave of healthcare innovation.
              </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {initiatives.map((item, index) => (
              <FadeIn key={index}>
                <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full group">
                   <div className="relative w-full h-48">
                    <Image src={item.image} alt={item.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-300 group-hover:scale-105" data-ai-hint={item.aiHint}/>
                  </div>
                  <CardHeader className="flex-grow">
                      <div className="bg-primary/10 p-3 rounded-full inline-block mb-4">
                         <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="font-headline text-2xl mt-0 mb-2">{item.title}</CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                   <CardContent>
                     <Button asChild variant="link" className="p-0 h-auto text-primary group-hover:underline">
                        <Link href={item.link}>
                            Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                   </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      
      <section id="impact" className="py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <p className="font-semibold text-primary font-headline">OUR IMPACT</p>
            <h3 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2 font-headline">Investing in Community Wellness</h3>
            <p className="max-w-3xl mx-auto mt-4 text-base md:text-lg text-muted-foreground">Our healthcare investments are measured by the health outcomes we improve, the care gaps we close, and the communities we strengthen.</p>
          </FadeIn>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8">
            {impactStats.map((stat, index) => (
              <FadeIn key={stat.label}>
                <div className="bg-card p-4 md:p-6 rounded-2xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 h-full flex flex-col justify-center">
                  <AnimatedCounter duration={3500} target={stat.target} suffix={stat.suffix} className="text-3xl md:text-4xl font-extrabold text-primary" />
                  <p className="mt-2 text-muted-foreground font-medium text-sm md:text-base">{stat.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      
      <section className="w-full pt-8 pb-16 bg-background" id="inquire">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
             <Card className="max-w-2xl mx-auto">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">Have Questions?</CardTitle>
                  <CardDescription>Contact us to learn more about our healthcare investment thesis and discuss partnership opportunities.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild>
                    <Link href="/contact?subject=Healthcare Inquiry">Contact Us</Link>
                  </Button>
                </CardContent>
             </Card>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
