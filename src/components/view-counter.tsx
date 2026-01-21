
'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { db } from '@/lib/firebase';
import { doc, setDoc, increment } from 'firebase/firestore';

export function ViewCounter() {
  const pathname = usePathname();

  useEffect(() => {
    const incrementView = async () => {
      // Only count views for specific, public-facing content paths
      // Excludes admin, auth, and other non-content routes
      const isTrackablePage = pathname.startsWith('/news/') ||
                               pathname.startsWith('/real-estate/') ||
                               pathname.startsWith('/agriculture/') ||
                               pathname.startsWith('/healthcare/') ||
                               pathname.startsWith('/services/');
      
      if (process.env.NODE_ENV === 'production' && isTrackablePage) {
        try {
          // Use the pathname as the document ID, replacing slashes to be safe
          const docId = pathname.replace(/\//g, '_');
          const viewRef = doc(db, 'page_views', docId);

          // Atomically increment the 'count' field. If the document doesn't exist,
          // it will be created with a count of 1.
          await setDoc(viewRef, { count: increment(1), path: pathname }, { merge: true });
          
        } catch (error) {
          console.error("Error incrementing view count:", error);
        }
      }
    };

    incrementView();
  }, [pathname]);

  // This component doesn't render anything to the UI
  return null;
}
