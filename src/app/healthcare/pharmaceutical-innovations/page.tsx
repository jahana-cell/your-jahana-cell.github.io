
import type { Metadata } from 'next';
import PharmaceuticalInnovationsClientPage from './client-page';

export const metadata: Metadata = {
    title: "Pharmaceutical Innovations | A GrowShare Capital Thesis",
    description: "Investing in the next generation of medicine. We back the breakthroughs that define the future of human health.",
    openGraph: {
        title: "The Science of Tomorrow | GrowShare Capital",
        description: "Our investment thesis for early-stage biotech, focusing on novel drug discovery, advanced diagnostics, and process innovation.",
        images: [
            {
                url: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070',
                width: 1200,
                height: 630,
                alt: 'A scientist working in a high-tech pharmaceutical lab.',
            },
        ],
    },
};

export default function PharmaceuticalInnovationsPage() {
  return <PharmaceuticalInnovationsClientPage />;
}
