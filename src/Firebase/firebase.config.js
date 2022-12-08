// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDfOg43BWFemz5n_ZfBdkJNnx_3dZDw0eo",
    authDomain: "shortgun-assignment.firebaseapp.com",
    projectId: "shortgun-assignment",
    storageBucket: "shortgun-assignment.appspot.com",
    messagingSenderId: "598318336908",
    appId: "1:598318336908:web:5d64903a5c8788dea2a4a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
