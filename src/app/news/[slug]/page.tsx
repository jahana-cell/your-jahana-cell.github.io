// src/app/news/[slug]/page.tsx

import type { Metadata } from 'next';
import NewsArticleClientPage from './client-page';
import { dbAdmin } from '@/lib/firebase-admin';
import { Timestamp } from 'firebase-admin/firestore';
import type { Story } from '@/app/news/stories-data';

type Props = {
  params: { slug: string }
}

// 2. Ensure we do NOT export generateStaticParams
// (Double check that this function is NOT present in this file)

async function getStoryData(slug: string): Promise<Story | null> {
  const cleanSlug = decodeURIComponent(slug).trim();
  
  if (!dbAdmin) {
    console.error("Admin DB not initialized for story page");
    return null;
  }

  try {
    // Strategy 1: Try Fetching by ID
    const docRef = dbAdmin.collection("stories").doc(cleanSlug);
    const docSnap = await docRef.get();

    if (docSnap.exists) {
       const data = docSnap.data()!;
       return { 
         id: docSnap.id, 
         slug: data.slug || docSnap.id, 
         ...data, 
         date: data.date instanceof Timestamp ? data.date.toDate().toISOString() : new Date().toISOString() 
       } as Story;
    }

    // Strategy 2: Fallback to querying the slug field
    const q = dbAdmin.collection("stories").where("slug", "==", cleanSlug);
    const querySnap = await q.get();

    if (!querySnap.empty) {
       const docSnap = querySnap.docs[0];
       const data = docSnap.data();
       return { 
         id: docSnap.id, 
         slug: data.slug || docSnap.id, 
         ...data, 
         date: data.date instanceof Timestamp ? data.date.toDate().toISOString() : new Date().toISOString() 
       } as Story;
    }

    return null;

  } catch (error) {
    console.error(`Server fetch failed for slug "${slug}":`, error);
    return null;
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // During build time, Next.js might try to run this.
  // We add a quick check to prevent heavy DB calls if the build environment is restricted.
  if (process.env.NEXT_PHASE === 'phase-production-build') {
      return { title: 'News Article' }; 
  }

  const story = await getStoryData(params.slug);
  if (!story) return { title: 'Loading Article...' };
  
  return {
    title: story.title,
    description: story.description,
    openGraph: {
      title: story.title,
      description: story.description,
      type: 'article',
      publishedTime: story.date,
      images: [
        {
          url: story.image,
          width: 1200,
          height: 630,
          alt: story.title,
        },
      ],
    },
  };
}

export default async function NewsArticlePage({ params }: Props) {
  const story = await getStoryData(params.slug);
  // Pass the slug so the client knows what to fetch if 'story' is null
  return <NewsArticleClientPage initialStory={story} slug={params.slug} />;
}
