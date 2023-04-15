import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";
import { getFirebase } from "react-redux-firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCzS3tYtsNzQZ7XVTwtQCQH9wcb9-WOSdg",
  authDomain: "ms-todo-clone-675ad.firebaseapp.com",
  projectId: "ms-todo-clone-675ad",
  storageBucket: "ms-todo-clone-675ad.appspot.com",
  messagingSenderId: "268103079251",
  appId: "1:268103079251:web:8390e81f9f3b479e397da6",
  measurementId: "G-TXBXQ26T88",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
