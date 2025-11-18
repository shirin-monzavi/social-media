import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBJaX-8WxxQ4fixah0wwEQD0hBVnXGQVxc",
    authDomain: "socialmedia-dd077.firebaseapp.com",
    projectId: "socialmedia-dd077",
    storageBucket: "socialmedia-dd077.firebasestorage.app",
    messagingSenderId: "466481795383",
    appId: "1:466481795383:web:4e325c3f6dfd43a263cab2"
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);