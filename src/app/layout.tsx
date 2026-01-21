import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Montserrat, Pinyon_Script, Cinzel } from 'next/font/google';
import './globals.css';
import { ClientProviders } from '@/components/client-providers';
import { Toaster } from '@/components/ui/toaster';
import LayoutWrapper from '@/components/layout-wrapper';

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const pinyonScript = Pinyon_Script({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-pinyon-script',
  display: 'swap',
});

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
  display: 'swap',
});


const canonicalUrl = 'https://www.growsharecapital.com';
const siteTitle = 'GrowShare Capital';
const siteDescription = 'A premier American private equity and impact investment platform building resilient communities through intelligent, ethical, and high-yield investments.';
const logoUrl = 'https://firebasestorage.googleapis.com/v0/b/growshare-capital.firebasestorage.app/o/Logo%2FGrowshare%20Capital%20Transparent.png?alt=media&token=b53577e6-eb64-409d-aa7a-e9aa4fe01c49';
const previewImageUrl = 'https://firebasestorage.googleapis.com/v0/b/growshare-capital.firebasestorage.app/o/Logo%2FGrowshare%20Capital%20Transparent.png?alt=media&token=b53577e6-eb64-409d-aa7a-e9aa4fe01c49';

export const metadata: Metadata = {
  metadataBase: new URL(canonicalUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteTitle}`,
  },
  description: siteDescription,
  manifest: '/site.webmanifest',
  robots: { // Allowing search engines to index and follow links
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: [
      { url: logoUrl, sizes: '180x180' },
    ],
  },
  appleWebApp: {
    title: 'GrowShare Capital',
    statusBarStyle: 'default',
    capable: true,
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    siteName: siteTitle,
    images: [
      {
        url: previewImageUrl,
        width: 1200,
        height: 630,
        alt: 'GrowShare Capital - High-yield, principled investments in resilient communities.',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: [previewImageUrl],
  },
};

export const viewport: Viewport = {
  themeColor: '#F9F7F2',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${montserrat.variable} ${pinyonScript.variable} ${cinzel.variable} scroll-smooth`}>
      <body>
        <ClientProviders>
          <LayoutWrapper>
            {children}
          </LayoutWrapper>
          <Toaster />
        </ClientProviders>
      </body>
    </html>
  );
}
