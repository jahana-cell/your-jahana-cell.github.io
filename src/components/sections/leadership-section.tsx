
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, X } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import { teamMembers } from "@/lib/team-data"; 
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

// --- DATA ---
const TIER_1_LEADERSHIP = teamMembers.filter(m => m.category === "Founder & Director").sort((a, b) => {
    if (a.name.includes("Aminuddin")) return -1;
    if (b.name.includes("Aminuddin")) return 1;
    if (a.name.includes("Ashif")) return -1;
    if (b.name.includes("Ashif")) return 1;
    return a.name.localeCompare(b.name);
});

const TIER_3_ADVISOR_CATEGORIES = ["Investment Leadership", "Marketing Leadership"];
const TIER_3_ADVISORS = teamMembers.filter(m => TIER_3_ADVISOR_CATEGORIES.includes(m.category));

const TIER_2_DIRECTORS = teamMembers.filter(m => 
    m.category === "Executive Leadership" &&
    !TIER_1_LEADERSHIP.some(founder => founder.name === m.name) &&
    !TIER_3_ADVISORS.some(advisor => advisor.name === m.name)
);


// --- THE "LUXURY ROW" COMPONENT (Responsive) ---
const MemberRow = ({ member, size = "md", onClick }: { member: any, size?: "lg" | "md", onClick: (data: any) => void }) => {
  const hasBio = member.bio && member.bio.trim().length > 0;

  return (
    <div 
      onClick={() => hasBio && onClick(member)}
      className={cn(
        "group relative w-full border-b border-neutral-200 cursor-pointer flex items-center justify-between transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
        "hover:bg-neutral-50/50 md:hover:pl-6 active:bg-neutral-100",
        size === "lg" ? "py-6 md:py-12" : "py-5 md:py-6"
      )}
    >
      <div className="flex items-center gap-5 md:gap-12 w-full pr-4">
        {/* IMAGE */}
        <div className={cn(
          "relative shrink-0 overflow-hidden bg-neutral-100 rounded-none shadow-sm",
          size === "lg" ? "w-16 h-20 md:w-28 md:h-36" : "w-12 h-16 md:w-16 md:h-24"
        )}>
            <Image 
                src={member.image} 
                alt={member.name} 
                fill 
                sizes="(max-width: 768px) 100px, 200px"
                className="object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                style={{ objectPosition: member.imgClassName || 'center' }}
            />
        </div>

        {/* TYPOGRAPHY */}
        <div className="flex flex-col justify-center gap-1 md:gap-2">
            <h3 className={cn(
                "font-serif text-neutral-900 leading-[1.1] transition-colors group-hover:text-black",
                size === "lg" ? "text-lg md:text-5xl font-light" : "text-base md:text-2xl font-light"
            )}>
                {member.name}
            </h3>
            <p className={cn(
                "font-medium uppercase text-neutral-400 group-hover:text-neutral-600 transition-colors",
                size === "lg" ? "text-[10px] md:text-xs tracking-[0.2em]" : "text-[9px] md:text-[10px] tracking-[0.15em]"
            )}>
                {member.title}
            </p>
        </div>
      </div>

      {/* ARROW */}
      {hasBio && (
        <div className="shrink-0">
            <ArrowRight className="block md:hidden w-4 h-4 text-neutral-300" />
            <ArrowRight className="hidden md:block w-6 h-6 text-neutral-300 opacity-0 -translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] mr-6" />
        </div>
      )}
    </div>
  );
};

export default function LeadershipSection() {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<any>(null);

  const handleReadMore = (memberData: any) => {
    setSelectedMember(memberData);
    setDialogOpen(true);
  };

  return (
    <>
      <section className="w-full py-16 md:py-40 bg-white">
        <div className="container mx-auto px-6 md:px-12 max-w-[1440px]">
            
            {/* --- HEADER --- */}
            <div className="mb-16 md:mb-40 flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12">
                <FadeIn>
                    <h2 className="text-4xl md:text-8xl font-serif font-thin text-neutral-900 leading-[0.9] tracking-tight">
                        Our <span className="italic text-neutral-400 block md:inline">Leadership</span>
                    </h2>
                </FadeIn>
                <FadeIn delay={0.2}>
                      <p className="text-neutral-500 font-light max-w-sm text-sm md:text-base leading-relaxed text-left md:text-right">
                        Architecting the future of GrowShare Capital through integrity, strategy, and innovation.
                    </p>
                </FadeIn>
            </div>

            {/* --- TIER 1 --- */}
            <div className="mb-20 md:mb-32">
                <FadeIn>
                    <div className="flex items-end justify-between mb-0 border-b border-black pb-4">
                        <h2 className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-black">
                            Founding Leadership
                        </h2>
                    </div>
                </FadeIn>
                <div className="flex flex-col">
                    {TIER_1_LEADERSHIP.map((member, i) => (
                        <FadeIn key={member.name} delay={i * 0.1}>
                            <MemberRow member={member} size="lg" onClick={handleReadMore} />
                        </FadeIn>
                    ))}
                </div>
            </div>

            {/* --- TIER 2 & 3 --- */}
            <div className="space-y-20">
                <div>
                    <FadeIn>
                        <div className="flex items-end justify-between mb-0 border-b border-black pb-4">
                            <h2 className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-black">
                                Executive Directors
                            </h2>
                        </div>
                    </FadeIn>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 -ml-6">
                        {TIER_2_DIRECTORS.map((member, i) => (
                            <FadeIn key={member.name} delay={i * 0.1}>
                                <div className="pl-6 pt-6">
                                  <MemberRow member={member} size="md" onClick={handleReadMore} />
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>

                <div>
                    <FadeIn>
                        <div className="flex items-end justify-between mb-0 border-b border-black pb-4">
                            <h2 className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-black">
                                Partners & Advisors
                            </h2>
                        </div>
                    </FadeIn>
                    <div className="grid grid-cols-1 md:grid-cols-2 -ml-6">
                        {TIER_3_ADVISORS.map((member, i) => (
                            <FadeIn key={member.name} delay={i * 0.1}>
                                <div className="pl-6 pt-6">
                                  <MemberRow member={member} size="md" onClick={handleReadMore} />
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </div>


            {/* --- FOOTER --- */}
            <div className="mt-20 md:mt-40 flex justify-center md:justify-end border-t border-neutral-100 pt-12">
                <Button asChild variant="link" className="text-lg md:text-2xl font-serif font-light text-neutral-900 hover:text-neutral-500 p-0 no-underline transition-all group">
                    <Link href="/leadership" className="flex items-center gap-4 md:gap-6">
                        Explore Full Directory 
                        <span className="w-12 md:w-16 h-px bg-neutral-300 group-hover:w-20 md:group-hover:w-24 group-hover:bg-black transition-all duration-500" />
                        <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                    </Link>
                </Button>
            </div>
            
        </div>
      </section>

      {/* --- MODAL --- */}
      {selectedMember && (
        <Dialog open={isDialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent className="max-w-[100vw] h-[100vh] md:h-auto md:max-w-6xl bg-white p-0 border-none rounded-none shadow-none flex flex-col md:flex-row md:max-h-[800px] overflow-hidden focus:outline-none">
             
             {/* IMAGE SIDE */}
             <div className="w-full h-[40vh] md:h-auto md:w-1/2 relative bg-neutral-100 shrink-0">
                <Image 
                    src={selectedMember.image} 
                    alt={selectedMember.name} 
                    fill 
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                />
             </div>

             {/* TEXT SIDE */}
             <div className="flex-1 p-8 md:p-20 flex flex-col bg-white overflow-hidden justify-center relative">
                <div className="shrink-0 mb-6 md:mb-12">
                    <DialogTitle className="font-serif font-light text-3xl md:text-6xl text-neutral-900 mb-2 md:mb-4 leading-none">
                        {selectedMember.name}
                    </DialogTitle>
                    <DialogDescription className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-neutral-500">
                        {selectedMember.title}
                    </DialogDescription>
                </div>
                
                <ScrollArea className="flex-1 -mr-6 pr-6">
                    <p className="text-sm md:text-lg text-neutral-600 font-light leading-loose whitespace-pre-line font-serif max-w-prose pb-10">
                        {selectedMember.bio}
                    </p>
                </ScrollArea>
             </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
