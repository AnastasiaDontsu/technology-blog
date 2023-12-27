// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOPbdnAx49SpnECUVug1IGlcZyTvxkc7I",
  authDomain: "sign-up-firebase-b6069.firebaseapp.com",
  projectId: "sign-up-firebase-b6069",
  storageBucket: "sign-up-firebase-b6069.appspot.com",
  messagingSenderId: "169041379672",
  appId: "1:169041379672:web:d5aade5175aecd557a252d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
