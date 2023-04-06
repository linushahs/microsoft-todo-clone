import { useState } from "react";
import "./App.css";
import ContentWrapper from "./content/ContentWrapper";
import Navigation from "./navigation/Navigation";

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
