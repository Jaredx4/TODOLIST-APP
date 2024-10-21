// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDexUiCL8xDsS7BSEQtJ43ZCHuPBuSSIrI",
  authDomain: "todolist-mini-app.firebaseapp.com",
  projectId: "todolist-mini-app",
  storageBucket: "todolist-mini-app.appspot.com",
  messagingSenderId: "863828946703",
  appId: "1:863828946703:web:3ed55ac070c588bb19987a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);