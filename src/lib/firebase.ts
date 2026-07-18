// ─── Firebase Configuration ───────────────────────────────────────────────────
//
// IMPORTANT: Replace the placeholder values below with your actual Firebase
// project credentials from:
//   Firebase Console → ⚙️ Project Settings → General → Your apps → Web app → Config
//
// These values are safe to expose in client-side code — they are NOT secret keys.
// Firebase security is handled by Firestore Security Rules and Authentication.
//
// ──────────────────────────────────────────────────────────────────────────────

import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase only once (prevents re-initialization in dev mode with HMR)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Export initialized services
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

export default app;
