// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqRS14nU9AwGSWGvsmeykmuX2nvCEDEU8",
  authDomain: "little-app-16082.firebaseapp.com",
  projectId: "little-app-16082",
  storageBucket: "little-app-16082.appspot.com",
  messagingSenderId: "965535294967",
  appId: "1:965535294967:web:a1280e2570e05266673af2",
  measurementId: "G-D6YL5MQ3SW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firebase = getAnalytics(app);