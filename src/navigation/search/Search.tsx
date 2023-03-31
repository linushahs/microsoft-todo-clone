import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

function Search() {
  return (
    <div className="mx-4 mb-3 flex items-center justify-between rounded border-[0.5px] border-b border-gray-600 border-b-white px-3 py-2">
      <input
        type="text"
        placeholder="Search"
        id=""
        className="border-none bg-transparent text-sm text-white outline-none"
      />
      <AiOutlineSearch className="text-md text-white" />
    </div>
  );
}

export default Search;
