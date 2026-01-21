
'use server';

import { dbAdmin } from '@/lib/firebase-admin';
import { storiesData } from '@/app/news/stories-data';
import { Timestamp } from 'firebase-admin/firestore';

export async function seedDatabase() {
  if (!dbAdmin) {
    return { success: false, message: "Firebase Admin not initialized. Seeding failed." };
  }
  
  try {
    const storiesCollection = dbAdmin.collection('stories');
    const batch = dbAdmin.batch();

    const allStories = storiesData.map(story => ({
      ...story,
      slug: story.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    }));

    // This new, safer approach only adds or updates documents. It does NOT delete.
    allStories.forEach(story => {
      // Use the generated slug as the document ID.
      // This creates a new document if the ID doesn't exist,
      // or overwrites the existing one if it does.
      const docRef = storiesCollection.doc(story.slug);
      
      const storyData = {
        ...story,
        date: Timestamp.fromDate(new Date(story.date)),
      };
      
      // Use set with merge: true to be even safer, though set alone works here.
      batch.set(docRef, storyData, { merge: true });
    });

    await batch.commit();

    return { success: true, message: `Successfully created or updated ${allStories.length} articles in the database.` };
  } catch (error: any) {
    console.error("Error seeding database:", error);
    const errorMessage = error.message || 'An unknown error occurred during seeding.';
    return { success: false, message: `Seeding failed: ${errorMessage}` };
  }
}
