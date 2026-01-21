
import type { Metadata } from 'next';
import AgricultureClientPage from './client-page';

export const metadata: Metadata = {
  title: 'Agriculture Investments',
  description: 'High-yield investments in America\'s food future. We partner with farmers and entrepreneurs to build resilient, profitable food systems that deliver sustainable returns.',
  openGraph: {
    title: 'Agriculture Investments | GrowShare Capital',
    description: 'High-yield investments in America\'s food future. We partner with farmers and entrepreneurs to build resilient, profitable food systems that deliver sustainable returns.',
    images: [
      {
        url: 'https://images.pexels.com/photos/3013440/pexels-photo-3013440.jpeg',
        width: 1200,
        height: 630,
        alt: 'A lush green field representing agriculture investments.',
      },
    ],
  },
};

export default function AgricultureHubPage() {
  return <AgricultureClientPage />;
}
