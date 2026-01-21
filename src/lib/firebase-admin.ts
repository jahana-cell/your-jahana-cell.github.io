
import * as admin from 'firebase-admin';

let dbAdmin: admin.firestore.Firestore | null = null;
let adminAuth: admin.auth.Auth | null = null;

// --- INITIALIZATION ---
// This code now runs inside a try-catch block to prevent server crashes
// if the environment (e.g., credentials) is not set up correctly.
if (!admin.apps.length) {
  try {
    // This configuration is automatically populated by Firebase App Hosting.
    admin.initializeApp({
      credential: admin.credential.applicationDefault(),
      // FIX: Removed the incorrect backslash before the template literal
      databaseURL: `https://${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}.firebaseio.com`,
    });
    console.log("Firebase Admin SDK initialized successfully.");
    dbAdmin = admin.firestore();
    adminAuth = admin.auth();
  } catch (error) {
    // If initialization fails, log a critical error but do not crash the server.
    // dbAdmin and adminAuth will remain null, and server actions will handle this gracefully.
    console.error("CRITICAL: Firebase Admin SDK initialization failed:", error);
  }
} else {
  // If the app is already initialized, safely get the services.
  dbAdmin = admin.app().firestore();
  adminAuth = admin.app().auth();
}


// --- EXPORTS ---
// Export the (potentially null) services.
export { dbAdmin, adminAuth };
