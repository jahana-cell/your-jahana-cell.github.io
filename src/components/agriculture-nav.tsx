
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Home, Leaf, Menu } from 'lucide-react';
import Image from 'next/image';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from '@/components/ui/sheet';

const agricultureNavLinks = [
    { href: "/agriculture/alabama-livestock", label: "Alabama Livestock", icon: Home, logo: null },
    { href: "/agriculture/alabama-livestock/operation-plan", label: "Operation Plan", icon: Leaf, logo: null },
    { 
        href: "/agriculture/alabama-livestock/faq", 
        label: "FAQ", 
        icon: null,
        logo: "https://img.icons8.com/?size=100&id=120173&format=png&color=000000" 
    },
];

export function AgricultureNav() {
    const pathname = usePathname();
    const [isMenuOpen, setMenuOpen] = useState(false);

    // Component for rendering links to avoid repetition
    const renderLink = (link: typeof agricultureNavLinks[0], isMobile: boolean) => {
        const Icon = link.icon;
        const isActive = pathname === link.href;
        
        const content = (
            <Button
                variant={isActive ? "secondary" : "ghost"}
                asChild
                className={cn("w-full justify-center text-center md:w-auto", isMobile && 'text-lg p-6')}
            >
                <Link href={link.href} className="flex items-center gap-2">
                    {link.logo ? (
                        <Image src={link.logo} alt={`${link.label} logo`} width={24} height={24} className="h-6 w-6" />
                    ) : (
                        Icon && <Icon className="h-5 w-5" />
                    )}
                    <span>{link.label}</span>
                </Link>
            </Button>
        );

        // Only wrap with SheetClose for mobile links
        return isMobile ? <SheetClose asChild key={link.href}>{content}</SheetClose> : <div key={link.href}>{content}</div>;
    };

    return (
        <nav className="bg-background/80 backdrop-blur-md shadow-sm py-2 px-4 sm:rounded-lg max-w-5xl mx-auto">
            <div className="container mx-auto px-0 md:px-6 flex justify-between items-center">
                {/* Desktop Menu - Renders links without SheetClose */}
                <div className="hidden md:flex items-center justify-center gap-2 text-sm w-full">
                   {agricultureNavLinks.map(link => renderLink(link, false))}
                </div>

                {/* Mobile Menu Trigger */}
                <div className="md:hidden w-full">
                     <Sheet open={isMenuOpen} onOpenChange={setMenuOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" className="w-full flex items-center justify-between">
                                <span className="font-headline text-lg font-bold text-primary">Agriculture Menu</span>
                                <Menu size={24} />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="top">
                             <SheetHeader>
                                <SheetTitle className="font-headline text-center text-xl">Agriculture Navigation</SheetTitle>
                            </SheetHeader>
                            <div className="flex flex-col gap-2 p-4">
                                {/* Renders links WITH SheetClose */}
                                {agricultureNavLinks.map(link => renderLink(link, true))}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
             </div>
        </nav>
    );
}
