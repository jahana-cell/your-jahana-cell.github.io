
import type { Timestamp } from "firebase/firestore";

export type Story = {
    id: string;
    slug: string;
    title: string;
    description: string;
    date: string; // Storing as YYYY-MM-DD string
    category: string;
    author: string;
    image: string;
    aiHint: string;
    imagePosition?: string;
    videoUrl?: string;
    pdfUrl?: string;
    summary?: string;
    content?: string;
    status?: 'Published' | 'Coming Soon';
    isFeatured?: boolean;
};

// This array is now restored to be the source of truth for the seeder.
export const storiesData: Omit<Story, 'id' | 'slug'>[] = [
    {
    title: 'GrowShare Capital Appoints Ryan Kelley to Lead Operations & Strategy',
    description: 'This strategic move reinforces the operational backbone supporting the firm’s growing investment portfolio. Kelley enters the role with a resume that merges technical execution with the capital formation skills needed for impact-driven development.',
    date: '2026-01-16',
    category: 'Company News',
    author: 'GrowShare Capital',
    image: 'https://firebasestorage.googleapis.com/v0/b/growshare-capital.firebasestorage.app/o/profile%20pictures%2FRyan%20Kelly.png?alt=media&token=ec9d9c01-5329-4942-a5a2-333dcbcce376',
    aiHint: 'man portrait professional',
    imagePosition: 'top',
    isFeatured: true,
    status: 'Published',
    content: ''
  }
];
