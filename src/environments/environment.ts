import { initializeApp } from "firebase/app";

export const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyB0139fOO6JaIKsc8irq9XbU9-HMnUk_2M",
        authDomain: "indievault-a17b9.firebaseapp.com",
        databaseURL: "https://indievault-a17b9-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "indievault-a17b9",
        storageBucket: "indievault-a17b9.firebasestorage.app",
        messagingSenderId: "698981784269",
        appId: "1:698981784269:web:053b28093b69989cf06784"
    }
};

const app = initializeApp(environment.firebaseConfig);