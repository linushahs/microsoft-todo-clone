import React from "react";
import { BsPlusLg } from "react-icons/bs";
import { BiBookAdd } from "react-icons/bi";

function Lists() {
  return (
    <div className="flex flex-1 flex-col justify-end">
      <ul className="w-full">
        {/* <NavigationMenu iconTitle="started" text="Getting Started" count={2} />
        <NavigationMenu iconTitle="list" text="Vidyarthi WebApp" count={2} />
        <NavigationMenu iconTitle="list" text="React Projects" count={2} /> */}
      </ul>
      <div className="flex items-center gap-2 text-white ">
        <div className=" flex w-full cursor-pointer items-center gap-4 rounded px-5 py-2 hover:bg-gray-600">
          <BsPlusLg className=" text-md  " />
          <span>New list</span>
        </div>

        <BiBookAdd className="ml-auto mr-4 text-[24px]" />
      </div>
    </div>
  );
}

export default Lists;
