import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

export const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyCV4aV49gtPlpyoKWhiV2zny3JBGS7yq-c',
  authDomain: 'ritvik-1ecb1.firebaseapp.com',
  projectId: 'ritvik-1ecb1',
  storageBucket: 'ritvik-1ecb1.appspot.com',
  messagingSenderId: '1040133548627',
  appId: '1:1040133548627:web:eff0710c653d1f8facb4a6',
  measurementId: 'G-R15HXBRHBV',
};

export const app = initializeApp(FIREBASE_CONFIG);
export const db = getFirestore(app);
