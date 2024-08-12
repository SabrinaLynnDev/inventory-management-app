// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkgpNj09vo6q1BbsqcNuFBLFwfCa6DLpM",
  authDomain: "inventory-management-d3593.firebaseapp.com",
  projectId: "inventory-management-d3593",
  storageBucket: "inventory-management-d3593.appspot.com",
  messagingSenderId: "740952191735",
  appId: "1:740952191735:web:010dd6cb9834874ad6d9f2",
  measurementId: "G-JP9JZSV33M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app)

export {firestore}