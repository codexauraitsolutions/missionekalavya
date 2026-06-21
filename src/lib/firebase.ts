// src/lib/firebase.ts
// Initializes Firebase once and exposes Firestore + a helper to save form submissions.
// This is the React/Next.js equivalent of the old js/firebase-init.js used on the
// plain-HTML version of the site - same project, same collection, same behavior.

import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBUrMuthDlsmKLW5TEWZuv7idagCvrV2MW',
  authDomain: 'codexaura-it-solutions.firebaseapp.com',
  projectId: 'codexaura-it-solutions',
  storageBucket: 'codexaura-it-solutions.firebasestorage.app',
  messagingSenderId: '852712858901',
  appId: '1:852712858901:web:51f5153ba804d3b1d8751c',
  measurementId: 'G-3MWVR5QE6L',
};

// getApps()/getApp() guard avoids "Firebase app already initialized" errors,
// which happen in Next.js because client components can re-run this module
// during fast-refresh/navigation.
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

const COLLECTION_NAME = 'meklvy_form_submissions';

export type FormType = 'contact' | 'demo-registration' | 'scholarship-registration';

/**
 * Saves a form's data into Firestore.
 * Mirrors the original window.saveFormSubmission() behavior from main.js.
 */
export async function saveFormSubmission(
  formType: FormType,
  data: Record<string, string>
): Promise<string> {
  const docRef = await addDoc(collection(db, COLLECTION_NAME), {
    formType,
    ...data,
    submittedAt: serverTimestamp(),
    smsStatus: 'pending',
  });
  return docRef.id;
}
