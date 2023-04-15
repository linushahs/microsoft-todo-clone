import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase";
import { addUser } from "../redux-context/userSlice";
import { useAppDispatch } from "../redux-context/hooks";

// signInWithGoogle function ----------------------------->
// ------------------------------------------------------->
export const signInWithGoogle = () => {};

// signOut function ----------------------------->
// ------------------------------------------------------->
export const signOut = () => {
  auth.signOut().then(() => {
    console.log("signout success");
  });
};
