
import type { Metadata } from 'next';
import KhaluiFarmClientPage from './client-page';

export const metadata: Metadata = {
    title: "Khalui Farm | A GrowShare Capital Company",
    description: "Cultivating health, community, and the future of urban agriculture in Memphis, Tennessee. USDA Certified Organic.",
    openGraph: {
        title: "Khalui Farm | A GrowShare Capital Company",
        description: "Cultivating health, community, and the future of urban agriculture in Memphis, Tennessee.",
        images: [
            {
                url: 'https://images.unsplash.com/photo-1592079927431-3f8ced0dacc6?q=80&w=1920',
                width: 1200,
                height: 630,
                alt: 'A lush green field at Khalui Farm.',
            },
        ],
    },
};

export default function KhaluiFarmPage() {
    return <KhaluiFarmClientPage />;
}
