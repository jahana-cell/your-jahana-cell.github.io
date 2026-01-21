
import type { Metadata } from 'next';
import GheeManufacturingClientPage from './client-page';

export const metadata: Metadata = {
    title: "Ghee & Specialty Cheese Manufacturing | Business Plan",
    description: "A comprehensive business case for a high-demand, value-added dairy production facility.",
    openGraph: {
        title: "Ghee & Specialty Cheese Manufacturing | A GrowShare Capital Project",
        description: "A comprehensive business case for a high-demand, value-added dairy production facility.",
        images: [
            {
                url: 'https://images.unsplash.com/photo-1573812461383-e5f8b759d12e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxnaGVlfGVufDB8fHx8MTc1ODU1NTY0Mnww&ixlib=rb-4.1.0&q=80&w=1080',
                width: 1200,
                height: 630,
                alt: 'Jars of ghee in a production setting.',
            },
        ],
    },
};

export default function GheeManufacturingPage() {
  return <GheeManufacturingClientPage />;
}
