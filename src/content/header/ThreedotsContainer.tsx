import React from "react";
import { BsArrowDownUp, BsChevronRight } from "react-icons/bs";

export default function ThreedotsContainer() {
  return (
    <div className="absolute right-0 top-full mt-3 min-w-[260px] rounded border border-gray-600 bg-gray-800  ">
      {/* sort by section --------------->  */}
      <div className="flex w-full cursor-pointer items-center  gap-4 px-3 py-2 hover:bg-gray-700">
        <BsArrowDownUp className="text-gray-400" />
        <h2>Sort by</h2>
        <BsChevronRight className="ml-auto text-gray-400" />
      </div>

      {/* theme section -------------->  */}
      <div>
        <h2>Theme</h2>
        <div>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
        </div>
      </div>
    </div>
  );
}
