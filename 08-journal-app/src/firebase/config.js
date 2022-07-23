
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
import { getEnvironments } from "../helpers/getEnvironments";

const {
  VITE_APIKEY,
  VITE_AUTHDOMAIN,
  VITE_PROJECTID,
  VITE_STORAGEBUCKET,
  VITE_MESSAGINGSENDERID,
  VITE_APPID
} = getEnvironments();

//Dev/Prod
// const firebaseConfig = {
//   apiKey: "AIzaSyC4qTCEM9hFvDxviMK4a6V1xwev9W4xmS4",
//   authDomain: "journal-app-b02fe.firebaseapp.com",
//   projectId: "journal-app-b02fe",
//   storageBucket: "journal-app-b02fe.appspot.com",
//   messagingSenderId: "220887934792",
//   appId: "1:220887934792:web:b3f40e215e72a58af4357d"
// };

//Testing
// const firebaseConfig = {
//   apiKey: "AIzaSyAh6g6IA0hp9q02c6YsDGaTHWiHUsNlj0k",
//   authDomain: "journal-app-test-2d39a.firebaseapp.com",
//   projectId: "journal-app-test-2d39a",
//   storageBucket: "journal-app-test-2d39a.appspot.com",
//   messagingSenderId: "840970566614",
//   appId: "1:840970566614:web:4aed777ab148d7d2210277"
// };

const firebaseConfig = {
  apiKey: VITE_APIKEY,
  authDomain: VITE_AUTHDOMAIN,
  projectId: VITE_PROJECTID,
  storageBucket: VITE_STORAGEBUCKET,
  messagingSenderId: VITE_MESSAGINGSENDERID,
  appId: VITE_APPID
};

//console.log(firebaseConfig);

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);