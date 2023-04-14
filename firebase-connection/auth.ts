import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase";
import { addUser } from "../redux-context/userSlice";
import { useAppDispatch } from "../redux-context/hooks";

// signInWithGoogle function ----------------------------->
// ------------------------------------------------------->
export const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  const dispatch = useAppDispatch();

  signInWithPopup(auth, provider)
    .then((result) => {
      // The signed-in user info.
      const user = result.user;
      console.log(user);
      dispatch(
        addUser({
          user: {
            id: user.uid,
            name: user.displayName,
            email: user.email,
            imgAddress: user.photoURL,
          },
        })
      );
    })
    .catch((error) => {
      // Handle Errors here.
      console.log(error.message);
    });
};

// signOut function ----------------------------->
// ------------------------------------------------------->
export const signOut = () => {
  auth.signOut().then(() => {
    console.log("signout success");
  });
};
