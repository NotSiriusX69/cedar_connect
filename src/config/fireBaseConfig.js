// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJ3J7v8I1ID94S6EpFJ3S6JEjOjk2qMOg",
  authDomain: "cedarconnect-9c1bd.firebaseapp.com",
  projectId: "cedarconnect-9c1bd",
  storageBucket: "cedarconnect-9c1bd.firebasestorage.app",
  messagingSenderId: "223515276206",
  appId: "1:223515276206:web:b1564c8b5ca60740f20e3f",
  measurementId: "G-RY13YMS6VW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const db = getFirestore(app, 'cedarbase');

export {app,db,auth};