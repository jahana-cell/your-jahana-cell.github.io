import type { Metadata } from 'next';
import SkylineClientPage from './client-page';

export const metadata: Metadata = {
    title: "Skyline Design + Build | Industrial Construction",
    description: "A GrowShare Capital Company. Eliminating friction through single-source accountability. Est. 2000.",
    openGraph: {
        title: "Skyline D+B | Build Certainty",
        description: "Vertical integration and guaranteed vision for industrial projects. A GrowShare Capital Company.",
    },
};

export default function SkylinePage() {
    return <SkylineClientPage />;
}