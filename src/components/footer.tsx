
import Image from 'next/image';
import Link from 'next/link';
import NewsletterForm from './newsletter-form';
import SocialIcons from './SocialIcons'; // Import the new component

export default function Footer() {

  return (
    // Background #FAFAF9 matches the rest of the site's "Warm Stone" theme
    <footer className="bg-[#FAFAF9] border-t border-neutral-200 font-sans">
      <div className="container mx-auto px-6 md:px-12 py-16 md:py-24">
        
        {/* --- MAIN GRID SYSTEM --- */}
        {/* Mobile: 1 Column | Desktop: 12 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 mb-16 md:mb-24">
            
            {/* 1. BRAND COLUMN (Desktop: Spans 4 cols) */}
            <div className="md:col-span-4 space-y-8">
                <Link href="/" className="block w-fit opacity-80 hover:opacity-100 transition-opacity">
                    <Image 
                        src="https://firebasestorage.googleapis.com/v0/b/growshare-capital.firebasestorage.app/o/Logo%2FGrowshare%20Capital%20Transparent.png?alt=media&token=b53577e6-eb64-409d-aa7a-e9aa4fe01c49" 
                        alt="GrowShare Capital Logo" 
                        width={180} 
                        height={45} 
                        className="h-8 md:h-10 w-auto" 
                    />
                </Link>
                <p className="text-sm font-serif italic text-neutral-500 leading-relaxed max-w-xs">
                    "High-yield investments. High-impact results. Building a legacy of sustainable wealth."
                </p>
                
                {/* Social Icons - Replaced with the new component */}
                <SocialIcons iconClassName="opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
            </div>

            {/* 2. LINKS COLUMN (Desktop: Spans 2 cols) */}
            <div className="md:col-span-2">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-900 mb-6 md:mb-8">Sectors</h4>
                <nav className="flex flex-col gap-4 text-sm text-neutral-500 font-medium">
                    <Link href="/real-estate" className="hover:text-black transition-colors w-fit">Real Estate</Link>
                    <Link href="/healthcare" className="hover:text-black transition-colors w-fit">Healthcare</Link>
                    <Link href="/agriculture" className="hover:text-black transition-colors w-fit">Agriculture</Link>
                    <Link href="/services" className="hover:text-black transition-colors w-fit">Services</Link>
                </nav>
            </div>

            {/* 3. COMPANY COLUMN (Desktop: Spans 2 cols) */}
            <div className="md:col-span-2">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-900 mb-6 md:mb-8">Company</h4>
                <nav className="flex flex-col gap-4 text-sm text-neutral-500 font-medium">
                    <Link href="/news" className="hover:text-black transition-colors w-fit">News</Link>
                    <Link href="/contact" className="hover:text-black transition-colors w-fit">Contact</Link>
                    <Link href="/about" className="hover:text-black transition-colors w-fit">About</Link>
                    <Link href="/login" className="hover:text-black transition-colors w-fit">Login</Link>
                </nav>
            </div>

            {/* 4. NEWSLETTER COLUMN (Desktop: Spans 4 cols) */}
            <div className="md:col-span-4 bg-white p-6 md:p-8 border border-neutral-100 shadow-sm rounded-sm">
                 <h4 className="text-xl font-serif text-neutral-900 mb-4">Stay Connected</h4>
                 <p className="text-xs text-neutral-500 leading-relaxed mb-6 font-light">
                    Join our exclusive list for early access to investment opportunities and market insights.
                 </p>
                 <div className="w-full">
                    <NewsletterForm />
                 </div>
            </div>
        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="border-t border-neutral-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4 text-[10px] uppercase tracking-widest text-neutral-400">
          <p className="text-center md:text-left">EST. 2022  •  © 2026 GrowShare Capital. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-neutral-900 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-neutral-900 transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
