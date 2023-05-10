import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD0ieEUknbnIiSENbD6f743KqeSgCL1N0g",
  authDomain: "my-app-9b9a3.firebaseapp.com",
  projectId: "my-app-9b9a3",
  storageBucket: "my-app-9b9a3.appspot.com",
  messagingSenderId: "633590439072",
  appId: "1:633590439072:web:96b5decc11b4f0fac0fdc5",
  measurementId: "G-BN1CM9MJ6N"
};
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);

console.log("Firebase is connected!");