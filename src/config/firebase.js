// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDM7Z7OrQeRYNKaF6FgRypuyMmsdYu_j2Y",
  authDomain: "contact-app-347ae.firebaseapp.com",
  projectId: "contact-app-347ae",
  storageBucket: "contact-app-347ae.appspot.com",
  messagingSenderId: "40692679298",
  appId: "1:40692679298:web:599c82426ed64161c16a9b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)