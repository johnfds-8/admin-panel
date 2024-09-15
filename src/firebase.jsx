import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "admin-panel-d4de3.firebaseapp.com",
  projectId: "admin-panel-d4de3",
  storageBucket: "admin-panel-d4de3.appspot.com",
  messagingSenderId: "211818267768",
  appId: "1:211818267768:web:52e52f63c19ceca8f2d98d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // Pass the app object here
