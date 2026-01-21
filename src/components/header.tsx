
"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { 
  Menu, UserSquare, Facebook, Instagram, 
  Youtube, LogOut, X, Search, ChevronRight, ArrowRight
} from "lucide-react";
import { 
  Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose, SheetDescription
} from "@/components/ui/sheet";
import { 
  Accordion, AccordionContent, AccordionItem, AccordionTrigger 
} from "@/components/ui/accordion";
import SocialIcons from './SocialIcons'; // Import the new component
import { Cart } from "./cart"; 
import { SearchComponent } from "./search-component"; 
import { useAuth } from "@/context/auth-context";
import { Button } from "./ui/button";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { cn } from "@/lib/utils";

// --- NAVIGATION DATA ---
const realEstateLinks = [
  { title: "Real Estate Overview", href: "/real-estate", description: "Building value by building communities. We create stable, high-yield assets through strategic real estate investments." },
  { title: "Crowdfunding Initiative", href: "/real-estate#crowdfunding", description: "Invest directly in Memphis real estate and build community wealth with targeted annual returns of 12-18%." },
  { title: "Income-Focused REIT", href: "/real-estate#impact", description: "Our Single-Family Rental (SFR) REIT, designed for stable, inflation-resilient income and long-term appreciation." },
];

const agricultureLinks = [
  { title: "Agriculture Overview", href: "/agriculture", description: "High-yield investments in Americas food future, from livestock to value-added products." },
  { title: "Community Livestock", href: "/agriculture/livestock", description: "An asset-backed investment program in sustainable goat and sheep farming." },
  { title: "Alabama Livestock & Co-Housing", href: "/agriculture/alabama-livestock", description: "A foundational project in Birmingham, AL, combining poultry farming with community co-housing." },
];

const healthcareLinks = [
  { title: "Healthcare Overview", href: "/healthcare", description: "Funding high-growth ventures that close critical care gaps and drive innovation." },
  { title: "Global Rehab Initiative", href: "/healthcare/global-rehab", description: "An AI-integrated model for psychotherapy and physical rehabilitation." },
  { title: "Maternal Health Tech", href: "/healthcare/maternal-health", description: "A dedicated investment thesis for prenatal, delivery, and postnatal care." },
];

const servicesLinks: { title: string; href: string; description: string }[] = [
  {
    title: "Services Overview",
    href: "/services",
    description: "Professional design, construction, and training services to build a better future.",
  },
  {
    title: "SkylineDB3 Design & Construction",
    href: "/services/skylinedb3",
    description: "Innovative and functional architectural design and construction solutions.",
  },
  {
    title: "Khalui Farm",
    href: "/services/khalui-farm",
    description: "Our innovative urban farm in Memphis, focused on sustainable and high-tech agriculture.",
  },
  {
    title: "Farm & Garden Training",
    href: "/services/training",
    description: "Hands-on training sessions for gardening, greenhouse management, and livestock care.",
  },
  {
    title: "Global Trade Solutions",
    href: "/services/global-trade",
    description: "Bridging the gap between world-class manufacturers and high-growth markets.",
  },
  {
    title: "Safura's Bakery",
    href: "/services/safuras-bakery",
    description: "Bespoke wedding cakes, confections, and artisanal desserts.",
  },
];

// --- PROJECT PREVIEW CARDS FOR MENU ---
const realEstateProjectCards = [
    { title: "887 S. Highland Hub", image: "https://i.pinimg.com/736x/c8/4a/fd/c84afd2564d5fc045936a5b1f25f2944.jpg", href: "/real-estate/highland-hub" },
    { title: "Foundry55 Apartments", image: "https://i.imgur.com/Lyfqp5G.jpeg", href: "/real-estate/foundry55" },
    { title: "The PLATFORM @ Brooks", image: "https://i.imgur.com/yOzfw4N.jpeg", href: "/real-estate/platform-brooks" }
];

const agricultureProjectCards = [
    { title: "Community Livestock", image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=1600", href: "/agriculture/livestock" },
    { title: "Alabama Livestock", image: "https://images.unsplash.com/photo-1589922585952-b31ed31b2c92?q=80&w=1080", href: "/agriculture/alabama-livestock" },
    { title: "Ghee Manufacturing", image: "https://images.unsplash.com/photo-1573812461383-e5f8b759d12e?q=80&w=1080", href: "/agriculture/ghee-manufacturing" }
];

const healthcareProjectCards = [
    { title: "Global Rehab Initiative", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070", href: "/healthcare/global-rehab" },
    { title: "Maternal Health Tech", image: "https://images.unsplash.com/photo-1535914254981-b5012eebbd15?q=80&w=2070", href: "/healthcare/maternal-health" },
    { title: "Pharma Innovations", image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070", href: "/healthcare/pharmaceutical-innovations" }
];

const servicesProjectCards = [
    { title: "SkylineDB3", image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070", href: "/services/skylinedb3" },
    { title: "Khalui Farm", image: "https://images.unsplash.com/photo-1592079927431-3f8ced0dacc6?q=80&w=1200", href: "/services/khalui-farm" },
    { title: "Global Trade", image: "https://images.unsplash.com/photo-1554769944-3138b076c38a?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", href: "/services/global-trade" },
    { title: "Safura's Bakery", image: "https://i.imgur.com/klLlEA4.jpeg", href: "/services/safuras-bakery" }
];

const mainCategories = [
  { href: "/real-estate", label: "Real Estate", links: realEstateLinks, projects: realEstateProjectCards },
  { href: "/healthcare", label: "Healthcare", links: healthcareLinks, projects: healthcareProjectCards },
  { href: "/agriculture", label: "Agriculture", links: agricultureLinks, projects: agricultureProjectCards },
  { href: "/services", label: "Services", links: servicesLinks, projects: servicesProjectCards },
];

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { user, signOut, isMember } = useAuth();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-500 border-b border-neutral-100 ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-white"
    }`}>
      <div className="w-full px-4 md:px-12 h-[80px] md:h-[90px] flex items-center justify-between relative">
        
        <div className="flex items-center flex-1">
          <SiteMenu isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
        </div>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Link href="/" className="block hover:opacity-70 transition-opacity">
            <Image 
              src="https://firebasestorage.googleapis.com/v0/b/growshare-capital.firebasestorage.app/o/Logo%2FGrowshare%20Capital%20Transparent.png?alt=media&token=b53577e6-eb64-409d-aa7a-e9aa4fe01c49" 
              alt="GrowShare" 
              width={180} 
              height={45} 
              className="h-8 md:h-10 w-auto object-contain"
              priority 
            />
          </Link>
        </div>

        <div className="flex items-center justify-end gap-3 md:gap-6 flex-1">
          <div className="hidden md:flex items-center">
             <SearchComponent />
          </div>
          <div className="h-4 w-[1px] bg-neutral-200 hidden md:block" />
          {user ? (
            <div className="flex items-center gap-2">
                <Link href={isMember ? "/services/admin" : "/contact"} className="hover:text-neutral-500 transition-colors p-2">
                    <UserSquare className="h-5 w-5 stroke-[1.5px]" />
                </Link>
                <Button onClick={signOut} variant="ghost" size="icon" className="w-8 h-8 hidden md:inline-flex hover:bg-transparent hover:text-neutral-500">
                    <LogOut className="h-5 w-5 stroke-[1.5px]" />
                </Button>
            </div>
          ) : (
            <Link href="/login" className="hover:text-neutral-500 transition-colors p-2">
                 <UserSquare className="h-5 w-5 stroke-[1.5px]" /> 
            </Link>
          )}
          <Cart />
        </div>
      </div>
      {/* --- DESKTOP MEGA MENU --- */}
      <div className="hidden lg:flex justify-center border-t border-neutral-100 bg-white/50 backdrop-blur-sm">
        <NavigationMenu>
            <NavigationMenuList>
                {mainCategories.map((category) => (
                    <NavigationMenuItem key={category.label}>
                        <NavigationMenuTrigger className="text-[10px] tracking-[0.25em] font-bold uppercase text-neutral-500 h-auto py-4 bg-transparent hover:bg-neutral-100 focus:bg-neutral-100 data-[state=open]:bg-neutral-100">
                            {category.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <div className="grid grid-cols-[1fr,1.5fr] w-[600px] lg:w-[800px] xl:w-[900px]">
                                <div className="p-8 bg-neutral-50/50 flex flex-col justify-between">
                                    <div className="space-y-4">
                                        <h3 className="text-xl font-serif">{category.label}</h3>
                                        <ul className="space-y-2">
                                            {category.links.map((link) => (
                                                <li key={link.href}>
                                                    <NavigationMenuLink asChild>
                                                        <Link href={link.href} className="block text-sm p-2 rounded hover:bg-neutral-200/50 transition-colors text-neutral-600 font-light">
                                                            {link.title}
                                                        </Link>
                                                    </NavigationMenuLink>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <Button variant="ghost" asChild className="justify-start p-2 h-auto text-left">
                                        <Link href={category.href}>
                                            Explore All {category.label} <ArrowRight className="ml-2 w-4 h-4" />
                                        </Link>
                                    </Button>
                                </div>
                                <div className="p-6">
                                     <p className="text-[9px] font-bold uppercase tracking-widest text-neutral-400 mb-4">Featured Projects</p>
                                     <div className="grid grid-cols-2 gap-4">
                                        {category.projects.map((project) => (
                                            <NavigationMenuLink asChild key={project.href}>
                                                <Link href={project.href} className="group block">
                                                    <div className="relative aspect-video w-full overflow-hidden rounded-md">
                                                        <Image src={project.image} alt={project.title} fill sizes="200px" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                                                    </div>
                                                    <p className="text-xs font-semibold mt-2 group-hover:text-primary transition-colors">{project.title}</p>
                                                </Link>
                                            </NavigationMenuLink>
                                        ))}
                                     </div>
                                </div>
                            </div>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                ))}
                 <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/news"
                        className={cn(navigationMenuTriggerStyle(), "bg-transparent text-[10px] tracking-[0.25em] font-bold uppercase text-neutral-500 h-auto py-4")}
                      >
                        News
                      </Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                 <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/contact"
                        className={cn(navigationMenuTriggerStyle(), "bg-transparent text-[10px] tracking-[0.25em] font-bold uppercase text-neutral-500 h-auto py-4")}
                      >
                        Contact
                      </Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}

const SiteMenu = ({ isMenuOpen, setMenuOpen }: { isMenuOpen: boolean, setMenuOpen: (open: boolean) => void }) => {
  const { user, signOut } = useAuth();
  
  return (
    <Sheet open={isMenuOpen} onOpenChange={setMenuOpen}>
      <SheetTrigger asChild>
        <button className="flex items-center gap-3 group focus:outline-none pl-0">
          <Menu className="h-6 w-6 stroke-[1.5px] text-neutral-900 group-hover:text-neutral-500 transition-colors" />
          <span className="hidden lg:block text-[10px] tracking-[0.25em] font-bold uppercase pt-0.5 group-hover:text-neutral-500 transition-colors">
            Menu
          </span>
        </button>
      </SheetTrigger>
      
      <SheetContent side="left" className="w-[85vw] sm:w-[400px] p-0 flex flex-col bg-[#FAFAF9] h-full border-r border-neutral-200/60 z-[100]">
        
        <SheetHeader className="p-8 pb-6 flex-shrink-0 border-b border-neutral-200/60">
           <SheetTitle className="text-[10px] tracking-[0.3em] font-bold uppercase text-neutral-400 text-left">
             GrowShare Capital
           </SheetTitle>
           <SheetDescription className="sr-only">
             Main navigation menu providing links to real estate, healthcare, agriculture, and service pages.
           </SheetDescription>
        </SheetHeader>
        
        <div className="flex-1 overflow-y-auto px-6 py-4 custom-scrollbar">
          <nav className="flex flex-col gap-1">
            
            <SheetClose asChild>
                <Link href="/" className="text-xl font-serif py-3 border-b border-neutral-200/60 text-neutral-900 hover:pl-2 transition-all">Home</Link>
            </SheetClose>
            
            <Accordion type="single" collapsible className="w-full">
              {mainCategories.map(category => (
                <AccordionItem key={category.label} value={category.label} className="border-b border-neutral-200/60">
                  <AccordionTrigger className="text-xl font-serif text-neutral-900 hover:no-underline py-4">
                    {category.label}
                  </AccordionTrigger>
                  <AccordionContent className="pl-2 pb-6 text-neutral-500 space-y-2">
                    {category.links.map(link => (
                      <SheetClose asChild key={link.href}>
                          <Link href={link.href} className="block py-2 text-xs uppercase tracking-widest hover:text-black transition-colors">{link.title}</Link>
                      </SheetClose>
                    ))}
                    <div className="pt-6 space-y-3">
                      <p className="text-[9px] font-bold uppercase tracking-widest text-neutral-400 mb-2">Featured Projects</p>
                      {category.projects.map(project => (
                          <SheetClose asChild key={project.href}>
                              <Link href={project.href} className="flex items-center gap-4 group">
                                  <div className="relative w-12 h-12 bg-neutral-200 overflow-hidden border border-neutral-200">
                                      <Image src={project.image} alt={project.title} fill sizes="50px" className="object-cover group-hover:scale-105 transition-transform" />
                                  </div>
                                  <span className="text-sm font-medium text-neutral-600 group-hover:text-black">{project.title}</span>
                              </Link>
                          </SheetClose>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <SheetClose asChild><Link href="/about" className="text-xl font-serif py-3 border-b border-neutral-200/60 text-neutral-900 hover:pl-2 transition-all">About</Link></SheetClose>
            <SheetClose asChild><Link href="/news" className="text-xl font-serif py-3 border-b border-neutral-200/60 text-neutral-900 hover:pl-2 transition-all">News</Link></SheetClose>
            <SheetClose asChild><Link href="/shop" className="text-xl font-serif py-3 border-b border-neutral-200/60 text-neutral-900 hover:pl-2 transition-all">Shop</Link></SheetClose>
            <SheetClose asChild><Link href="/contact" className="text-xl font-serif py-3 hover:pl-2 transition-all text-neutral-900">Contact</Link></SheetClose>

          </nav>
        </div>

        <div className="px-8 py-8 bg-[#F4F4F0] border-t border-neutral-200 flex-shrink-0">
          <div className="flex justify-between items-center mb-6">
            {user ? (
                <SheetClose asChild>
                    <button onClick={signOut} className="text-[10px] tracking-widest font-bold uppercase hover:text-red-500 transition-colors">
                         Sign Out
                    </button>
                </SheetClose>
            ) : (
                <SheetClose asChild>
                    <Link href="/login" className="text-[10px] tracking-widest font-bold uppercase hover:text-neutral-500 transition-colors">
                        Sign In
                    </Link>
                </SheetClose>
            )}
             
             <SocialIcons iconClassName="h-4 w-4 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300" />

          </div>
          
          <p className="text-[9px] tracking-widest text-neutral-400 uppercase text-center">
            © 2025 GrowShare Capital
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
};
