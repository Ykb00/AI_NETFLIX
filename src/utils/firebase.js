// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDA1VPWqF831sJoU4T_CF2ydB18XfiFOlM",
  authDomain: "ai-netflix-f05c2.firebaseapp.com",
  projectId: "ai-netflix-f05c2",
  storageBucket: "ai-netflix-f05c2.appspot.com",
  messagingSenderId: "420360988123",
  appId: "1:420360988123:web:eaf916fd0194f64327b3fe",
  measurementId: "G-JK06WGNDNQ"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();