import React from "react";
import { BsPlusLg } from "react-icons/bs";

export default function AddTask() {
  return (
    <div className="flex items-center gap-3 rounded bg-gray-800 px-4 py-3 text-white">
      <BsPlusLg className="text-[22px]" />
      <input
        type="text"
        placeholder="Add a Task"
        className="w-full bg-transparent outline-none placeholder:text-white"
      />
    </div>
  );
}
