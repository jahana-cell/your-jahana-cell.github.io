
'use client';

import { FadeIn } from "@/components/fade-in";
import { RoadmapTimeline } from "@/components/roadmap-timeline";
import { pillar1Items, pillar2Items } from "@/lib/constants";
import Image from "next/image";
import { useAuth } from "@/context/auth-context";
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';
import { useEffect } from 'react';

export default function RoadmapPage() {
  const { user, loading: authLoading, isMember } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!authLoading && !isMember) {
      router.push('/login?redirect=/services/roadmap');
    }
  }, [user, authLoading, isMember, router]);

  if (authLoading || !isMember) {
    return (
      <div className="flex h-screen items-center justify-center bg-muted/50">
          <div className="flex items-center gap-3 text-lg">
              <Loader2 className="h-6 w-6 animate-spin" />
              <p>Verifying access...</p>
          </div>
      </div>
    );
  }

  return (
    <div className="bg-background">
      <section className="relative w-full h-[40vh] min-h-[300px] flex items-center justify-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxzdHJhdGVneXxlbnwwfHx8fDE3NTc4ODkyNTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Strategic IT Roadmap"
          fill
          className="z-0 object-cover"
          data-ai-hint="strategy meeting"
          priority
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="container mx-auto px-4 z-20 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight font-headline mt-4 drop-shadow-md">
              Strategic IT Roadmap 2025
            </h1>
            <p className="mt-4 text-lg md:text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto drop-shadow-sm">
              An overview of our digital strategy, covering our planned digital presence and marketing initiatives.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/50 w-full">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-x-12 max-w-6xl mx-auto">
            <div className="space-y-12">
              <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
                Pillar 1: Digital Presence
              </h3>
              <RoadmapTimeline items={pillar1Items} />
            </div>
            <div className="space-y-12 mt-12 md:mt-0">
              <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
                Pillar 2: Digital Marketing
              </h3>
              <RoadmapTimeline items={pillar2Items} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
