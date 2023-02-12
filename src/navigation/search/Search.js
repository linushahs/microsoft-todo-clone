import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

function Search() {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search" id="" />
      <AiOutlineSearch />
    </div>
  );
}

export default Search;
