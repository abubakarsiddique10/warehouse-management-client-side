// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBKaIqnDbjQADGRxMePdzyxazkFI9ruwcQ",
    authDomain: "phone-corner-e38c5.firebaseapp.com",
    projectId: "phone-corner-e38c5",
    storageBucket: "phone-corner-e38c5.appspot.com",
    messagingSenderId: "1072151217078",
    appId: "1:1072151217078:web:e72431e3543fb472693717"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;