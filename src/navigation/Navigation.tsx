import { useState } from "react";
import "./Navigation.css";
import User from "./account/User";
import Search from "./search/Search";
import Lists from "./list/Lists";
import NavigationBlock from "./menu/NavigationBlock";
import React from "react";

function Navigation() {
  return (
    <div className="flex h-screen min-w-[310px] flex-col bg-gray-800">
      {/* Header --------------------------------------->  */}
      <User />
      <Search />
      {/* Navigation Menu --------------------------------------->  */}
      <NavigationBlock />
      <hr className="border-[0.5px] border-gray-700" />
      {/* List -- blocks --------------------------------------->  */}
      <Lists />
    </div>
  );
}

export default Navigation;
