
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBAa6EdveE6_UXk9nDiJaO7uVJjGQ4DZZE",
  authDomain: "travel-final-29d0b.firebaseapp.com",
  projectId: "travel-final-29d0b",
  storageBucket: "travel-final-29d0b.appspot.com",
  messagingSenderId: "18800261193",
  appId: "1:18800261193:web:eafd7435208ecab6d3e798"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const currentuser = auth.currentUser