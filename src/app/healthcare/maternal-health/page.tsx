
import type { Metadata } from 'next';
import MaternalHealthClientPage from './client-page';

export const metadata: Metadata = {
    title: "Maternal Health Tech | A GrowShare Capital Thesis",
    description: "Supporting high-growth technology for prenatal, delivery, and postnatal care. A multi-billion dollar market with profound social impact.",
    openGraph: {
        title: "Investing in Life's Beginning | GrowShare Capital",
        description: "Our investment thesis for the high-growth FemTech market, focusing on prenatal, delivery, and postnatal care.",
        images: [
            {
                url: 'https://images.unsplash.com/photo-1535914254981-b5012eebbd15?q=80&w=2070',
                width: 1200,
                height: 630,
                alt: 'Doctor showing a pregnant woman information on a tablet.',
            },
        ],
    },
};

export default function MaternalHealthPage() {
  return <MaternalHealthClientPage />;
}
