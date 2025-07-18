// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWkRjfU8Gcz9C0zD0MLqFy5XItZtbWlb0",
  authDomain: "prepwise-c799c.firebaseapp.com",
  projectId: "prepwise-c799c",
  storageBucket: "prepwise-c799c.firebasestorage.app",
  messagingSenderId: "723241406553",
  appId: "1:723241406553:web:73b506fa1a591d198f2148",
  measurementId: "G-KEDHQK7YLP"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig): getApp();
export const auth = getAuth(app);
export const db = getFirestore(app)
