// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_odfN5_ip-fBLNDGX_-EKLEjLeU0tsN4",
  authDomain: "mern-book-inventory-6a104.firebaseapp.com",
  projectId: "mern-book-inventory-6a104",
  storageBucket: "mern-book-inventory-6a104.appspot.com",
  messagingSenderId: "235599139079",
  appId: "1:235599139079:web:84fd09ed28150dcaf135a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;