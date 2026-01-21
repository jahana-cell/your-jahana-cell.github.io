
import type { Metadata } from 'next';
import NewsClientPage from './client-page';
import { dbAdmin } from '@/lib/firebase-admin';
import { Timestamp } from 'firebase-admin/firestore';
import type { Story } from '@/app/news/stories-data';


async function getStories(): Promise<Story[]> {
  if (!dbAdmin) {
    console.error("Admin DB not initialized for news page");
    return [];
  }
  try {
    const storiesRef = dbAdmin.collection("stories");
    const q = storiesRef.orderBy("date", "desc");
    const snapshot = await q.get();
    if (snapshot.empty) {
      return [];
    }
    return snapshot.docs.map(doc => {
      const data = doc.data();
      // Ensure date is a serializable string for the client
      const date = data.date instanceof Timestamp ? data.date.toDate().toISOString() : new Date().toISOString();
      return { 
        ...data, 
        id: doc.id,
        slug: data.slug || doc.id,
        date,
      } as Story;
    });
  } catch (error) {
    console.error("Error fetching stories for news page:", error);
    // Return empty array on error to prevent build failure
    return [];
  }
}

export const metadata: Metadata = {
  title: 'Newsroom',
  description: 'Our latest company news, announcements, press releases, and in-depth reports on our investment sectors.',
  openGraph: {
    title: 'Newsroom | GrowShare Capital',
    description: 'The latest updates and insights from GrowShare Capital.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1600&auto=format&fit=crop',
        width: 1600,
        height: 900,
        alt: 'News and reports from GrowShare Capital.',
      },
    ],
  },
};


export default async function NewsPage() {
  const initialStories = await getStories();
  return <NewsClientPage initialStories={initialStories} />;
}
