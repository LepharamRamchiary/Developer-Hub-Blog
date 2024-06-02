// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// console.log(import.meta.env.VITE_FIREBASE_API_KEY)
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "developers-hub-30e6f.firebaseapp.com",
  projectId: "developers-hub-30e6f",
  storageBucket: "developers-hub-30e6f.appspot.com",
  messagingSenderId: "875534166401",
  appId: "1:875534166401:web:efb0c3958682bf9cf3e080"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);