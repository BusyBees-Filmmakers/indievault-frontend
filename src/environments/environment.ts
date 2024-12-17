// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyB0139fOO6JaIKsc8irq9XbU9-HMnUk_2M",
        authDomain: "indievault-a17b9.firebaseapp.com",
        projectId: "indievault-a17b9",
        storageBucket: "indievault-a17b9.firebasestorage.app",
        messagingSenderId: "698981784269",
        appId: "1:698981784269:web:053b28093b69989cf06784"
    }
};

// Initialize Firebase
const app = initializeApp(environment.firebaseConfig);