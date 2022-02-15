// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDYU8DgPN9g_hQJnusidKNDBKcJOeu7Z0",
  authDomain: "house-rent-marketplace.firebaseapp.com",
  projectId: "house-rent-marketplace",
  storageBucket: "house-rent-marketplace.appspot.com",
  messagingSenderId: "284880836292",
  appId: "1:284880836292:web:bb0b2f608a504723651b91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const db = getFirestore()