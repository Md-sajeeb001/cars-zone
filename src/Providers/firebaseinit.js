// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqik3hOrLMfFnjHK1cqbbM7jiJHs6WfPg",
  authDomain: "cars-zone-f5bd1.firebaseapp.com",
  projectId: "cars-zone-f5bd1",
  storageBucket: "cars-zone-f5bd1.firebasestorage.app",
  messagingSenderId: "229446351043",
  appId: "1:229446351043:web:de6ab13ff0fe0d2b564a76",
  measurementId: "G-MP7H2GN3CS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;