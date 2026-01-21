
import type { Metadata } from 'next';
import SafuraClientPage from './client-page';

// --- SEO CONFIGURATION ---
export const metadata: Metadata = {
    title: "Safura's Bakery | Luxury Cakes & Chocolates | Hoover, AL",
    description: "A GrowShare Capital Company. Experience bespoke artisan cakes, hand-piped buttercream, and Belgian chocolate creations. Serving Hoover & Birmingham. Est. 2024.",
    keywords: ["Luxury Cakes", "Wedding Cakes Hoover", "Artisan Chocolate", "Safura's Bakery", "GrowShare Capital", "Birmingham Bakery"],
    openGraph: {
        title: "Safura's Bakery | Artistry in Flour",
        description: "Bespoke desserts for life's most elegant moments. A GrowShare Capital Company.",
        url: 'https://www.growsharecapital.com/services/safuras-bakery',
        siteName: 'GrowShare Capital',
        images: [
            {
                url: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=1200', // Safura Signature Image
                width: 1200,
                height: 630,
                alt: 'Safura Signature Luxury Cake',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: "Safura's Bakery | Luxury Desserts",
        description: "Hand-crafted elegance. A GrowShare Capital Company.",
        images: ['https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=1200'],
    },
};

export default function SafuraPage() {
    return <SafuraClientPage />;
}
