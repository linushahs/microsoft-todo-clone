import React from "react";
import { BiBookAdd } from "react-icons/bi";
import { BsPlusLg } from "react-icons/bs";

export default function AddTaskMenu() {
  return (
    <div className="mt-auto flex items-center gap-2 text-white">
      <div className=" flex w-full cursor-pointer items-center gap-4 rounded px-5 pb-3 pt-2 hover:bg-gray-600">
        <BsPlusLg className=" text-[20px] " />
        <span>New list</span>
      </div>

      <BiBookAdd className="ml-auto mr-4 text-[24px]" />
    </div>
  );
}
