import React from "react";
import { BsArrowDownUp, BsChevronRight, BsPrinter } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

export default function ThreedotsContainer() {
  const colors = ["#788CDE", "#BC7ABC", "#E46C8C", "red-500", "blue-500"];
  const colorStyle = "h-11 w-11";

  return (
    <div className="absolute right-0 top-full mt-2.5 min-w-[290px] rounded border border-gray-600 bg-gray-800  ">
      {/* sort by section --------------->  */}
      <div className="flex w-full cursor-pointer items-center  gap-4 px-4 py-3 hover:bg-gray-700">
        <BsArrowDownUp className="text-gray-400" />
        <h2>Sort by</h2>
        <BsChevronRight className="ml-auto text-gray-400" />
      </div>

      {/* theme section -------------->  */}
      <div className="px-4 py-2">
        <h2>Theme</h2>
        <div className="mt-2 grid grid-cols-5 gap-x-1 gap-y-2 ">
          <button className={`${colorStyle} bg-[#788CDE]`}></button>
          <button className={`${colorStyle} bg-[#BC7ABC]`}></button>
          <button className={`${colorStyle} bg-[#E46C8C]`}></button>
          <button className={`${colorStyle} bg-[#E46B67]`}></button>
          <button className={`${colorStyle} bg-[#4AA079]`}></button>
          <button className={`${colorStyle} bg-[#479E98]`}></button>
          <button className={`${colorStyle} bg-[#8795A0]`}></button>
          <button className={`${colorStyle} bg-[#D6BDE7]`}></button>
          <button className={`${colorStyle} bg-[#A0CBF1]`}></button>
        </div>
      </div>

      {/* some extra features ----------->  */}
      <div className="mt-2 flex w-full cursor-pointer items-center  gap-4 px-4 py-3 hover:bg-gray-700">
        <BsPrinter className="text-[19px] text-gray-400" />
        <h2>Print List</h2>
      </div>
      <div className="flex w-full cursor-pointer items-center  gap-4 px-4 py-3 hover:bg-gray-700">
        <FiMail className="text-[19px] text-gray-400" />
        <h2>Email List</h2>
      </div>
    </div>
  );
}
