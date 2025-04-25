// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDub0bIgPPWQg9oB-pNPgpa83W_m95rT74",
    authDomain: "e-commerce-de270.firebaseapp.com",
    projectId: "e-commerce-de270",
    storageBucket: "e-commerce-de270.firebasestorage.app",
    messagingSenderId: "203130400447",
    appId: "1:203130400447:web:db97181e95e60e1d70200a"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
