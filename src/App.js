import { useState } from "react";
import "./App.css";
import "./navigation/Navigation.css";
import Navigation from "./navigation/Navigation";
import ManageAccount from "./manageAccount";
import Settings from "./settings";

function App() {
  const [showManageAccount, setShowManageAccount] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const handleMenu = (type) => {
    if (type === "manage") {
      setShowManageAccount(true);
    } else {
      setShowSettings(true);
    }
  };

  const hideManageAccount = () => setShowManageAccount(false);

  return (
    <div className="App">
      <Navigation handleMenu={handleMenu} />
      {/* {Manage account section and Settings --------------> } */}
      {showManageAccount ? (
        <ManageAccount hideManageAccount={hideManageAccount} />
      ) : null}
      {showSettings ? <Settings /> : null}
    </div>
  );
}

export default App;
