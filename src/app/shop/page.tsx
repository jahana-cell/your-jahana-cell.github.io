
import type { Metadata } from 'next';
import ShopClientPage from './client-page';

export const metadata: Metadata = {
  title: 'Farmstead Market',
  description: 'Shop sustainably sourced products from our farms and partners, including organic honey, artisanal ghee, free-range eggs, and more.',
  openGraph: {
    title: 'Farmstead Market | GrowShare Capital',
    description: 'Shop sustainably sourced products from our farms and partners.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542838132-92c53300491e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxmcmVzaCUyMHByb2R1Y2V8ZW58MHx8fHwxNzYwMTcwMDkzfDA&ixlib=rb-4.1.0&q=80&w=1080',
        width: 1200,
        height: 630,
        alt: 'A market stall with fresh produce.',
      },
    ],
  },
};

export default function ShopPage() {
  return <ShopClientPage />;
}
