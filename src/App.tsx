import { useState } from "react";
import "./App.css";
import ContentWrapper from "./content/ContentWrapper";
import Navigation from "./navigation/Navigation";
import SignInPage from "./navigation/account/signInPage";
import { useAppSelector } from "../redux-context/hooks";
import { RootState } from "../redux-context/store";

function App() {
  const userList = useAppSelector((state: RootState) => state.users.userList);

  if (userList.length === 0) {
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
