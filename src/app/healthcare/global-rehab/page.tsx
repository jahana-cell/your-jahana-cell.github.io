
import type { Metadata } from 'next';
import GlobalRehabClientPage from './client-page';

export const metadata: Metadata = {
    title: "Global Rehab Initiative | AI-Integrated Rehabilitation",
    description: "An AI-Integrated Model for Psychotherapy and Physical Rehabilitation. Scalable, data-driven, and human-centric.",
    openGraph: {
        title: "The Future of Recovery | GrowShare Capital",
        description: "An AI-Integrated Model for Psychotherapy and Physical Rehabilitation. Scalable, data-driven, and human-centric.",
        images: [
            {
                url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070',
                width: 1200,
                height: 630,
                alt: 'A doctor reviewing data on a tablet, representing digital health.',
            },
        ],
    },
};

export default function GlobalRehabPage() {
  return <GlobalRehabClientPage />;
}
