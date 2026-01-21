

import type { Metadata } from 'next';
import LivestockClientPage from './client-page';

export const metadata: Metadata = {
  title: 'Community Livestock Fund',
  description: 'An asset-backed investment in America\'s food future. A tangible partnership connecting investors with sustainable livestock farming for principled returns.',
  openGraph: {
    title: 'Community Livestock Fund | GrowShare Capital',
    description: 'An asset-backed investment in America\'s food future. A tangible partnership connecting investors with sustainable livestock farming for principled returns.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1761839257961-4dce65b72d99?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        width: 1600,
        height: 900,
        alt: 'A lush farm field at sunset, representing the Community Livestock Fund.',
      },
    ],
  },
};

export default function LivestockPage() {
  return <LivestockClientPage />;
}
