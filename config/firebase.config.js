// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage}  from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "rentify-53d6a.firebaseapp.com",
  projectId: "rentify-53d6a",
  storageBucket: "rentify-53d6a.firebasestorage.app",
  messagingSenderId: "173341927576",
  appId: "1:173341927576:web:3bc7e50b04dd12971008ed"
};

// Initialize Firebase
const app = getApps().length == 0 ? initializeApp(firebaseConfig): getApp();
const db = getFirestore(app);
const storage = getStorage(app);

   export{db,storage}