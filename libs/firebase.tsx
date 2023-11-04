// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVxCNs75D8lI2fzCsMknwLa8yeEmmMzK4",
  authDomain: "e-shop-80ea3.firebaseapp.com",
  projectId: "e-shop-80ea3",
  storageBucket: "e-shop-80ea3.appspot.com",
  messagingSenderId: "286942561229",
  appId: "1:286942561229:web:2aefa8e3cfd29340be7a84"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;