// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDeAXQZbEMZSPWbTOo4rbXddDCFymlp_dQ",
    authDomain: "konvo-2f03e.firebaseapp.com",
    projectId: "konvo-2f03e",
    storageBucket: "konvo-2f03e.firebasestorage.app",
    messagingSenderId: "55303094331",
    appId: "1:55303094331:web:82df640c3dfe9a4e6a9c1e"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

