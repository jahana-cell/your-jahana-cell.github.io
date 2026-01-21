// /src/lib/firebase.ts
import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";
import { getFunctions, Functions } from "firebase/functions";
import { getAuth, Auth } from "firebase/auth";
import { AppCheck, initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
import { getStorage } from "firebase/storage";

// --- Augment Window Interface ---
// This tells TypeScript that our custom property can exist on the window object.
declare global {
  interface Window {
    FIREBASE_APPCHECK_INITIALIZED?: boolean;
  }
}

// --- Firebase Config ---
export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID!,
};

// --- Initialize Firebase App (only once) ---
const app: FirebaseApp = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// --- Firebase Services ---
const db: Firestore = getFirestore(app);
const functions: Functions = getFunctions(app, "nam5");
const auth: Auth = getAuth(app);
const storage = getStorage(app);

// --- App Check (Client-side only) ---
let appCheck: AppCheck | undefined;
if (typeof window !== 'undefined') {
  // Ensure App Check is initialized only once
  if (!window.FIREBASE_APPCHECK_INITIALIZED) {
    if (app.options.appId) {
      try {
        appCheck = initializeAppCheck(app, {
          provider: new ReCaptchaV3Provider("6Ld0k_UrAAAAAAkeU8nhe6nn2haxSbOeXPVRm407"),
          isTokenAutoRefreshEnabled: true,
        });
        window.FIREBASE_APPCHECK_INITIALIZED = true;
      } catch (e) {
        console.info("Firebase App Check failed to initialize or running in a non-browser environment.", e);
      }
    }
  }
}

export { app, db, functions, auth, storage, appCheck };
export type { Firestore };
