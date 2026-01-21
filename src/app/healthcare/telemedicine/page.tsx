
import type { Metadata } from 'next';
import TelemedicineClientPage from './client-page';

export const metadata: Metadata = {
    title: "Telemedicine & Digital Health | A GrowShare Capital Thesis",
    description: "Investing in scalable platforms that expand access, improve outcomes, and redefine the patient experience.",
    openGraph: {
        title: "Healthcare Without Borders | GrowShare Capital",
        description: "Our investment thesis for telemedicine, remote monitoring, and AI-driven diagnostics.",
        images: [
            {
                url: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070',
                width: 1200,
                height: 630,
                alt: 'Doctor using a tablet for a telehealth consultation.',
            },
        ],
    },
};

export default function TelemedicinePage() {
  return <TelemedicineClientPage />;
}
