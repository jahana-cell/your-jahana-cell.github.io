
'use client';

import React, { useMemo, useState } from 'react';
import { teamMembers } from '@/lib/team-data';
import { X, ChevronRight } from 'lucide-react'; 
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Dialog, DialogContent, DialogClose, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import Image from 'next/image';

/* --- TYPES --- */
// Ensure this interface matches your data source exactly. 
// Mark fields as optional (?) if they might be missing in some data entries.
export interface TeamMember {
  name: string;
  title: string;
  image: string;
  bio?: string;
  email?: string;
  linkedin?: string;
  category: string;
  imgClassName?: string;
  roles?: string[];
  phone?: string;
  aiHint?: string;
}

/* --- COMPONENT: LUXURY CARD --- */
const LuxuryMemberCard = ({ member, isLead = false }: { member: TeamMember, isLead?: boolean }) => {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const hasBio = member.bio && member.bio.trim().length > 0;
  const initials = member.name.split(' ').map((n) => n[0]).join('').substring(0, 2).toUpperCase();

  return (
    <>
      {/* --- CARD TRIGGER --- */}
      <div 
        onClick={() => hasBio && setDialogOpen(true)}
        className={cn(
          "group relative flex flex-col items-center bg-white transition-all duration-500 ease-out",
          "h-full overflow-hidden cursor-pointer select-none", 
          "p-6 md:p-8 pb-6",
          "border",
          isLead 
            ? "border-[#D4AF37] shadow-[0_4px_20px_-12px_rgba(212,175,55,0.3)] z-10 scale-[1.01]" 
            : "border-stone-200 hover:border-[#D4AF37]/50 hover:shadow-lg"
        )}
      >
        <div className={cn(
            "absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent transition-opacity duration-700",
            isLead ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        )} />

        <div className="flex flex-col items-center flex-grow w-full">
          {/* Avatar Area */}
          <div className="relative mb-5 md:mb-6">
            <div className={cn(
              "absolute inset-0 rounded-full border border-[#D4AF37]/30 scale-110 transition-transform duration-700 ease-out",
              "group-hover:scale-125 group-hover:border-[#D4AF37]/60"
            )} />
            
            {/* SIMPLIFIED AVATAR CONTAINER */}
            <div className={cn(
                "relative overflow-hidden rounded-full transition-transform duration-500 group-hover:scale-[1.02] bg-stone-100",
                isLead ? "w-32 h-32 md:w-40 md:h-40" : "w-28 h-28 md:w-36 md:h-36"
            )}>
               {/* 1. The Image (Standard IMG tag to ensure it works instantly) */}
               {/* We use z-20 to FORCE it to sit on top of the letters */}
               <img 
                  src={member.image} 
                  alt={member.name}
                  className="absolute inset-0 h-full w-full object-cover object-center z-20"
                  onError={(e) => {
                      // If the image fails to load, hide it so the letters show up
                      e.currentTarget.style.display = 'none';
                  }}
               />
               
               {/* 2. The Initials (Background Layer) */}
               {/* z-10 sits BEHIND the image (z-20) */}
               <div className="absolute inset-0 flex items-center justify-center z-10 text-stone-400 font-serif text-lg">
                  {initials}
               </div>
            </div>
          </div>

          <div className="text-center space-y-2 z-10 w-full px-2">
            <h3 className={cn(
              "font-serif tracking-wide transition-colors duration-300 leading-tight",
              "group-hover:text-[#b49021]",
              isLead ? "text-2xl md:text-3xl text-stone-900" : "text-xl md:text-2xl text-stone-800"
            )}>
              {member.name}
            </h3>
            <p className={cn(
                "font-medium uppercase tracking-widest group-hover:text-stone-700 transition-colors",
                isLead ? "text-sm text-[#D4AF37] font-bold" : "text-xs md:text-sm text-stone-500"
            )}>
              {member.title}
            </p>
          </div>
        </div>

        <div className="w-full mt-6 pt-4 border-t border-stone-100 flex items-center justify-center gap-4 opacity-70 group-hover:opacity-100 transition-opacity duration-500">
            <span className="text-[10px] uppercase tracking-widest font-bold text-stone-400 group-hover:text-[#D4AF37]">
                {hasBio ? "View Bio" : "Team Member"}
            </span>
        </div>
      </div>

      {/* --- MODAL --- */}
      <Dialog open={isDialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent 
          className="max-w-4xl p-0 overflow-hidden border-none bg-white rounded-none shadow-2xl h-[85vh] md:h-[600px] flex flex-col md:flex-row gap-0"
          style={{ padding: 0 }}
        >
            <DialogDescription className="sr-only">
                Biography details for {member.name}, {member.title}
            </DialogDescription>

            <div className="hidden md:block w-1/3 relative bg-stone-100 flex-shrink-0 h-full">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="absolute inset-0 w-full h-full object-cover opacity-90"
                  style={{ objectPosition: member.imgClassName || 'top' }}
                />
                <div className="absolute inset-0 bg-[#D4AF37]/10 mix-blend-multiply pointer-events-none" />
            </div>
            
            <div className="flex-1 flex flex-col bg-white h-full relative">
               <div className="px-8 pt-12 pb-6 md:px-12 md:pt-12 md:pb-8 flex-shrink-0">
                   <div className="flex"> 
                       <div className="w-1 bg-[#D4AF37] mr-6 flex-shrink-0" /> 
                       <div>
                           <DialogTitle className="font-serif text-2xl md:text-4xl text-stone-900 mb-3 leading-tight">
                             {member.name}
                           </DialogTitle>
                           <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#D4AF37] leading-normal">
                             {member.title}
                           </p>
                       </div>
                   </div>
               </div>

               <div className="flex-1 min-h-0 relative w-full px-8 md:px-12 pb-8">
                   <ScrollArea className="h-full w-full pr-4">
                        <div className="text-stone-600 leading-loose text-base font-light font-sans whitespace-pre-line pb-8">
                            {member.bio}
                        </div>
                   </ScrollArea>
               </div>
            </div>
        </DialogContent>
      </Dialog>
    </>
  );
};


/* --- SECTION WRAPPER --- */
const DepartmentSection = ({ name, leads, team, gridCols = 3, bgClassName = "bg-white" }: { name: string, leads: TeamMember[], team: TeamMember[], gridCols?: number, bgClassName?: string }) => {
    if (leads.length === 0 && team.length === 0) return null;

    return (
        <section className={cn("py-16 md:py-32 border-b border-stone-100 last:border-0", bgClassName)}>
            <div className="container mx-auto max-w-7xl px-4 md:px-8">
                <div className="flex flex-col items-center mb-10 md:mb-16 text-center">
                   <h2 className="text-2xl md:text-4xl font-serif text-stone-900 relative z-10">
                      {name}
                   </h2>
                   <div className="h-[1px] w-16 md:w-24 bg-[#D4AF37] mt-4 md:mt-6" />
                </div>
                
                {leads.length > 0 && (
                  <div className="flex flex-col items-center">
                      <div className="grid grid-cols-1 gap-12 max-w-md w-full mx-auto justify-center">
                        {leads.map(lead => (
                            <div key={lead.name} className="w-full">
                                <LuxuryMemberCard member={lead} isLead={true} />
                            </div>
                        ))}
                      </div>
                  </div>
                )}

                {leads.length > 0 && team.length > 0 && (
                    <div className="flex flex-col items-center justify-center -mt-0 mb-0 relative z-0 py-6 md:py-8">
                        <div className="h-12 md:h-16 w-px bg-gradient-to-b from-[#D4AF37] to-stone-300/50" />
                        <div className="w-1.5 h-1.5 rounded-full bg-stone-300" />
                    </div>
                )}

                {team.length > 0 && (
                    <>
                        <div className={cn(
                            "hidden md:grid gap-6",
                            gridCols === 3 ? "lg:grid-cols-3 md:grid-cols-2" : "lg:grid-cols-2"
                        )}>
                            {team.map(member => (
                                <LuxuryMemberCard key={member.name} member={member} />
                            ))}
                        </div>

                        <div className="md:hidden relative -mx-4 px-4">
                            <div className="flex overflow-x-auto gap-4 pb-8 snap-x snap-mandatory no-scrollbar">
                                {team.map(member => (
                                    <div key={member.name} className="min-w-[85%] sm:min-w-[45%] snap-center h-full">
                                        <LuxuryMemberCard member={member} />
                                    </div>
                                ))}
                                <div className="min-w-[4px]" />
                            </div>
                            
                            {team.length > 1 && (
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-stone-400 opacity-50 animate-pulse">
                                    <ChevronRight size={24} />
                                </div>
                            )}
                        </div>
                    </>
                )}
            </div>
        </section>
    )
}

/* --- MAIN PAGE --- */
export default function TeamHierarchy() {
  const groups = useMemo(() => {
    // 1. Cast teamMembers to your explicit Type to help TS understand the structure
    // (Assuming team-data.ts exports a list that might be inferred loosely)
    const members = teamMembers as unknown as TeamMember[];

    const findByName = (search: string) => members.find(m => m.name.includes(search));
    const findByCategory = (cat: string) => members.filter(m => m.category === cat);

    const ashif = findByName("Ashif Jahan");
    const kazi = findByName("Kazi Nabiul");
    const mansur = findByName("Abul Mansur");
    const abid = findByName("Abid Abdullah");
    const kaukab = members.find(m => m.category === "Executive Leadership" && m.name.includes("Kaukab"));
    
    const founders = findByCategory("Founder & Director");
    const babacar = members.find(m => m.category === "Investment Leadership");
    const usman = members.find(m => m.category === "Executive Leadership" && m.name.includes("Usman"));

    // 2. Helper for Type Predicate: Ensures we filter out 'undefined' values safely
    const isTeamMember = (member: TeamMember | undefined): member is TeamMember => {
        return member !== undefined;
    };

    return {
      founders: founders.sort((a, b) => {
          if (a.name.includes("Aminuddin")) return -1;
          if (b.name.includes("Aminuddin")) return 1;
          if (a.name.includes("Ashif")) return -1;
          if (b.name.includes("Ashif")) return 1;
          return a.name.localeCompare(b.name);
      }),
      itTeam: findByCategory("IT Team"),
      itLead: kaukab ? kaukab : undefined, // Explicitly handle potential undefined
      
      // FIX: Use explicit type predicate filter
      mediaLeads: [ashif, kazi].filter(isTeamMember),
      
      mediaTeam: members.filter(m => m.category === "Media Team" || m.category === "Marketing Team"),
      taxLead: usman ? usman : undefined,
      taxTeam: findByCategory("Tax & Finance Team"),
      investmentLead: mansur ? mansur : undefined,
      
      // FIX: Use explicit type predicate filter
      investmentTeam: [abid, babacar].filter(isTeamMember),
    };
  }, []);

  return (
    <div className="flex flex-col w-full bg-stone-50 font-sans">
        
        <section className="relative py-20 md:py-36 px-4 overflow-hidden bg-white border-b border-stone-100">
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none" />
            
            <div className="container mx-auto relative z-10">
              <div className="text-center mb-12 md:mb-20">
                  <span className="text-[#D4AF37] tracking-[0.2em] text-[10px] md:text-xs font-bold uppercase mb-4 block">Leadership</span>
                  <h1 className="text-4xl md:text-6xl font-serif text-stone-900 mb-6">Founders & Directors</h1>
                  <p className="text-base md:text-lg text-stone-500 font-light max-w-2xl mx-auto leading-relaxed">
                    Architects of vision. Stewards of capital.
                  </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
                  {groups.founders.map(member => (
                      <LuxuryMemberCard key={member.name} member={member} isLead />
                  ))}
              </div>
            </div>
        </section>

        {/* Check for undefined leads explicitly */}
        {groups.itLead && (
            <DepartmentSection 
                name="Technology & Digital"
                leads={[groups.itLead]}
                team={groups.itTeam}
                gridCols={3}
                bgClassName="bg-stone-50"
            />
        )}

        {groups.investmentLead && (
            <DepartmentSection 
                name="Investment Strategy"
                leads={[groups.investmentLead]}
                team={groups.investmentTeam}
                gridCols={2}
                bgClassName="bg-white"
            />
        )}

        {groups.taxLead && (
            <DepartmentSection 
                name="Tax & Finance"
                leads={[groups.taxLead]}
                team={groups.taxTeam}
                gridCols={2}
                bgClassName="bg-stone-50"
            />
        )}

        <DepartmentSection 
            name="Media & Comms"
            leads={groups.mediaLeads}
            team={groups.mediaTeam}
            gridCols={3}
            bgClassName="bg-white"
        />
    </div>
  );
}
