// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMXmOskm5KyvchH7QQFo5QGhJ7ZjeosHk",
  authDomain: "aisnetflix.firebaseapp.com",
  projectId: "aisnetflix",
  storageBucket: "aisnetflix.appspot.com",
  messagingSenderId: "663936230741",
  appId: "1:663936230741:web:63549b8c5f0a9e3cbbfbdc",
  measurementId: "G-JEVXVG9SM2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();