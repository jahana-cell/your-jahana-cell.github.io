
import type { Metadata } from 'next';
import ServicesClientPage from './client-page';

export const metadata: Metadata = {
  title: 'Professional Services',
  description: 'We provide expert-led services in design, construction, and agricultural training to empower our partners and build sustainable value.',
  openGraph: {
    title: 'Professional Services | GrowShare Capital',
    description: 'We provide expert-led services in design, construction, and agricultural training to empower our partners and build sustainable value.',
    images: [
      {
        url: 'https://images.pexels.com/photos/280014/pexels-photo-280014.jpeg',
        width: 1200,
        height: 630,
        alt: 'A team working collaboratively on a project.',
      },
    ],
  },
};

export default function ServicesPage() {
    return <ServicesClientPage />;
}
