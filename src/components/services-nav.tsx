'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Home, Sprout, Globe, Utensils, LayoutGrid } from 'lucide-react';
import Image from 'next/image';

// --- LOGO COMPONENTS ---
// We add 'grayscale' class to these by default in the main component
const SkylineLogo = ({ className }: { className?: string }) => (
    <div className={cn("relative w-24 h-6", className)}>
        <Image 
            src="https://firebasestorage.googleapis.com/v0/b/growshare-capital.firebasestorage.app/o/Logo%2FSBD.png?alt=media&token=07ed4301-023d-42fa-9f69-2f3b789c8406"
            alt="SkylineDB3"
            fill
            className="object-contain object-left"
        />
    </div>
);

const KhaluiFarmLogo = ({ className }: { className?: string }) => (
    <div className={cn("relative w-6 h-6 rounded-full overflow-hidden", className)}>
        <Image 
            src="https://firebasestorage.googleapis.com/v0/b/growshare-capital.firebasestorage.app/o/Website%20Pictures%2FKhaluifarm%20logo.jpg?alt=media&token=ae2f6758-1534-4e36-8dd9-f65d2f48ae60"
            alt="Khalui Farm"
            fill
            className="object-cover"
        />
    </div>
);

const servicesNavLinks = [
    { href: "/services", label: "Overview", icon: LayoutGrid, logo: null },
    { href: "/services/skylinedb3", label: "SkylineDB3", icon: null, logo: SkylineLogo },
    { href: "/services/training", label: "Training", icon: Sprout, logo: null },
    { href: "/services/khalui-farm", label: "Khalui Farm", icon: null, logo: KhaluiFarmLogo },
    { href: "/services/global-trade", label: "Global Trade", icon: Globe, logo: null },
    { href: "/services/safuras-bakery", label: "Safura's", icon: Utensils, logo: null },
];

export function ServicesNav() {
    const pathname = usePathname();

    return (
        <nav className="w-full">
            <div className="flex items-center gap-8 md:gap-12">
                {servicesNavLinks.map(link => {
                    const isActive = pathname === link.href;
                    const Icon = link.icon;
                    const Logo = link.logo;

                    return (
                        <Link 
                            key={link.href} 
                            href={link.href}
                            className="group relative flex items-center gap-3 py-4"
                        >
                            {/* Icon / Logo Area */}
                            <span className={cn(
                                "transition-all duration-500",
                                isActive ? "opacity-100 grayscale-0" : "opacity-40 grayscale group-hover:opacity-80 group-hover:grayscale-0"
                            )}>
                                {Logo ? (
                                    <Logo />
                                ) : (
                                    Icon && <Icon strokeWidth={1.5} className="w-5 h-5" />
                                )}
                            </span>

                            {/* Label Area */}
                            {/* Note: We hide the label for Skyline since the logo includes text, cleaner look */}
                            {link.label !== "SkylineDB3" && (
                                <span className={cn(
                                    "text-[11px] uppercase tracking-[0.2em] font-sans font-medium transition-colors duration-300",
                                    isActive ? "text-black" : "text-neutral-400 group-hover:text-black"
                                )}>
                                    {link.label}
                                </span>
                            )}

                            {/* Active Underline Indicator */}
                            {isActive && (
                                <motion.div 
                                    layoutId="activeTab"
                                    className="absolute bottom-0 left-0 w-full h-[1px] bg-[#C6A87C]"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                />
                            )}
                        </Link>
                    )
                })}
            </div>
        </nav>
    )
}
