// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD10369GSw5trA8ufTmQ8j7vop8Di_4kz8",
  authDomain: "commercial-2bee8.firebaseapp.com",
  projectId: "commercial-2bee8",
  storageBucket: "commercial-2bee8.appspot.com",
  messagingSenderId: "590496060556",
  appId: "1:590496060556:web:4f632bb2128fef74eb17a9",
  measurementId: "G-KR2RSDG1BY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;