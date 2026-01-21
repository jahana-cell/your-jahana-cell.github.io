'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // 🛑 STOP LIST: Add any path here that should NOT have a Header/Footer
  const isImmersivePage = 
    pathname?.includes('/services/safuras-bakery') || 
    pathname?.includes('/services/skylinedb3');

  return (
    <>
      {/* Conditionally render Header */}
      {!isImmersivePage && <Header />}
      
      <main className="flex-1">
        {children}
      </main>

      {/* Conditionally render Footer */}
      {!isImmersivePage && <Footer />}
    </>
  );
}
