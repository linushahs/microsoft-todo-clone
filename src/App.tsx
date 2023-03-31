import { useEffect, useState } from "react";
import "./App.css";
import "./navigation/Navigation.css";
import Navigation from "./navigation/Navigation";
import ManageAccount from "./navigation/account/manageAccount";
import Settings from "./settings";
import ContentWrapper from "./content/ContentWrapper";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App flex">
      <Navigation />
      <ContentWrapper />
    </div>
  );
}

export default App;
