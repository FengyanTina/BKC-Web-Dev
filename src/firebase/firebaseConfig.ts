import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Correct import for Firestore


import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkPOWoEvITxHXYGDlh9jKqPwFEsm8TyRc",
  authDomain: "bkc-web-298bf.firebaseapp.com",
  projectId: "bkc-web-298bf",
  storageBucket: "bkc-web-298bf.firebasestorage.app",
  messagingSenderId: "349770579560",
  appId: "1:349770579560:web:1aa5e6c0b338db5ca785dd",
  measurementId: "G-BFCRPG6L4G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase services
export const auth = getAuth(app); // Authentication service
export const db = getFirestore(app); // Firestore service

export default app;
