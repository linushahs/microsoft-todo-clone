import { useState } from "react";
import "./App.css";
import ContentWrapper from "./content/ContentWrapper";
import Navigation from "./navigation/Navigation";
import handleSubmit from "../firebase-connection/handleSubmit";

function App() {
  const [count, setCount] = useState(0);
  // handleSubmit();

  return (
    <div className="App flex">
      <Navigation />
      <ContentWrapper />
    </div>
  );
}

export default App;
