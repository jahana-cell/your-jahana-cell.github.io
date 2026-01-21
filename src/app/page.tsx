
import type { Metadata } from 'next';
import HomeClientPage from './home-client';
import type { Story } from '@/app/news/stories-data';
import { dbAdmin } from '@/lib/firebase-admin';
import { Timestamp } from 'firebase-admin/firestore';

async function getStories(): Promise<Story[]> {
    if (!dbAdmin) {
        console.error("Admin DB not initialized for home page");
        return [];
    }
    try {
        const storiesRef = dbAdmin.collection("stories");
        const q = storiesRef.orderBy("date", "desc").limit(3);
        const snapshot = await q.get();
        if (snapshot.empty) {
          return [];
        }
        return snapshot.docs.map(doc => {
          const data = doc.data();
          const date = data.date instanceof Timestamp ? data.date.toDate().toISOString() : new Date().toISOString();
          return { 
            ...data, 
            id: doc.id,
            slug: data.slug || doc.id,
            date,
          } as Story;
        });
    } catch (error) {
        console.error("Error fetching stories for home page:", error);
        return [];
    }
}

export const metadata: Metadata = {
  title: 'GrowShare Capital | High-Yield, Principled Investments',
  description: 'A premier American private equity and impact investment platform building resilient communities through intelligent, ethical, and high-yield investments in real estate, agriculture, and healthcare.',
};

export default async function Page() {
    const stories = await getStories();
    // We pass the local data to the client component. 
    // The client component will handle fetching live data if needed.
    return <HomeClientPage initialStories={stories} />;
}
