import { useState } from "react";
import "./Navigation.css";
import User from "./account/User";
import Search from "./search/Search";
import Lists from "./list/Lists";
import NavigationBlock from "./menu/NavigationBlock";

function Navigation({ handleMenu }) {
  return (
    <div className="nav-block">
      {/* Header --------------------------------------->  */}
      <User handleMenu={handleMenu} />
      <Search />
      {/* Navigation Menu --------------------------------------->  */}
      <NavigationBlock />
      <hr />
      {/* List -- blocks --------------------------------------->  */}
      <Lists />
    </div>
  );
}

export default Navigation;
