
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyC4qTCEM9hFvDxviMK4a6V1xwev9W4xmS4",
  authDomain: "journal-app-b02fe.firebaseapp.com",
  projectId: "journal-app-b02fe",
  storageBucket: "journal-app-b02fe.appspot.com",
  messagingSenderId: "220887934792",
  appId: "1:220887934792:web:b3f40e215e72a58af4357d"
};

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);