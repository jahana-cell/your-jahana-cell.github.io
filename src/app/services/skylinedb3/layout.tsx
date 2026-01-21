
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'SkylineDB3 | Design, Build & Development Services',
  description: 'SkylineDB3 is a full-service design-build firm specializing in ROI-focused architectural design, construction management, and land development feasibility studies. We partner with landowners, real estate investors, and developers on multifamily, mixed-use, and commercial projects in Memphis, TN, Arkansas, and across the Southeast US.',
  keywords: [
    // By Customer
    'Land development feasibility study',
    'Site planning and architectural analysis',
    'Maximize land value design services',
    'Multifamily design-build firm',
    'ROI-focused architectural design',
    'Turnkey real estate development services',
    'Commercial mixed-use architects',
    'Master planning and urban design',
    'Commercial space planning services',
    '3D architectural visualization for listings',
    'Custom home design services',
    'Construction administration services',
    // By Service
    'Integrated design-build company',
    'Conceptual architectural design',
    '3D architectural rendering services',
    'Construction document preparation',
    'Project management and on-site supervision',
    'Strategic development planning',
    'Green building and sustainable design',
    // By Project Type
    'Multifamily housing architecture',
    'Single-family rental (SFR) community design',
    'Assisted living community construction',
    'Urban infill design projects',
    'Community center architects',
    // By Location
    'Architectural design firm Memphis TN',
    'Design-build contractors Arkansas',
    'Blytheville AR construction companies',
    'Birmingham AL community development architects',
    'Southeast US real estate development partners',
  ],
  openGraph: {
    title: 'SkylineDB3 | Design, Build & Development Services',
    description: 'Full-service design-build for landowners, investors, and developers. Specializing in multifamily, mixed-use, and commercial projects.',
    images: [
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/growshare-capital.firebasestorage.app/o/Logo%2FSBD.png?alt=media&token=07ed4301-023d-42fa-9f69-2f3b789c8406',
        width: 1200,
        height: 630,
        alt: 'SkylineDB3 Logo | Architectural Design and Construction Management',
      },
    ],
  },
};

export default function SkylineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
