import { useState } from "react";
import "./App.css";
import ContentWrapper from "./content/ContentWrapper";
import Navigation from "./navigation/Navigation";
import SignInPage from "./navigation/account/signInPage";
import { useAppSelector } from "../redux-context/hooks";
import { RootState } from "../redux-context/store";

function App() {
  const firebaseAuth = useAppSelector(
    (state: RootState) => state.firebase.auth
  );

  if (!firebaseAuth.uid) {
    return <SignInPage />;
  }

  return (
    <div className="App flex">
      <Navigation />
      <ContentWrapper />
    </div>
  );
}

export default App;
