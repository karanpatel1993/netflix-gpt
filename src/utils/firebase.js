// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjkftExwCYZ5W5SEpXSn4Zv84u2CP1HiU",
  authDomain: "netflixgpt-a6a00.firebaseapp.com",
  projectId: "netflixgpt-a6a00",
  storageBucket: "netflixgpt-a6a00.appspot.com",
  messagingSenderId: "132227782150",
  appId: "1:132227782150:web:0e54e43effe7eb1cf0d587",
  measurementId: "G-BFCVFHTBB9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
