
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "e-commerce-400807.firebaseapp.com",
  projectId: "e-commerce-400807",
  storageBucket: "e-commerce-400807.appspot.com",
  messagingSenderId: "505760981286",
  appId: "1:505760981286:web:fb49c3e804f4a1576aa1e7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
