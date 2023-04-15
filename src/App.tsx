import { useState } from "react";
import "./App.css";
import ContentWrapper from "./content/ContentWrapper";
import Navigation from "./navigation/Navigation";
import SignInPage from "./navigation/account/signInPage";

function App() {
  return (
    <div className="App flex">
      {/* <Navigation />
      <ContentWrapper /> */}
      <SignInPage />
    </div>
  );
}

export default App;
