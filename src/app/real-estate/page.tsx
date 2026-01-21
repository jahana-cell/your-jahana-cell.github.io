
import RealEstateClientPage from "./client-page";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Real Estate Division | Growshare Capital",
  description: "Building Value. Building Community through strategic real estate development.",
  openGraph: {
    title: "Real Estate Division | Growshare Capital",
    description: "Building Value. Building Community through strategic real estate development.",
    images: [
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/growshare-capital.firebasestorage.app/o/Website%20Pictures%2FReal%20Estate.png?alt=media&token=04d512c0-b4f4-4e5f-807e-3bd69f93d8c9',
        width: 1200,
        height: 630,
        alt: 'Modern architectural rendering of a community-focused real estate project.',
      },
    ],
  }
};

export default function RealEstatePage() {
  return <RealEstateClientPage />;
}
