// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA16VYA9tVkFrl0wNkU6IkkZE8b7ZyNnTg",
  authDomain: "parts-car-9d05a.firebaseapp.com",
  projectId: "parts-car-9d05a",
  storageBucket: "parts-car-9d05a.appspot.com",
  messagingSenderId: "506774423138",
  appId: "1:506774423138:web:136c265cb48feab3f9f33b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;