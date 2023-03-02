// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDCl9UJarhikR_Dwnxkb4zqytnGejaAltE",
  authDomain: "gluecksrad-database-dd3de.firebaseapp.com",
  projectId: "gluecksrad-database-dd3de",
  storageBucket: "gluecksrad-database-dd3de.appspot.com",
  messagingSenderId: "777158250029",
  appId: "1:777158250029:web:15cfe84a3b69571ed372a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };