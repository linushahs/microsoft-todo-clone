import React from "react";
import { BsPlusLg } from "react-icons/bs";
import { BiBookAdd } from "react-icons/bi";
import TaskMenu from "./TaskMenu";
import { AiOutlineBars } from "react-icons/ai";

function Lists() {
  return (
    <div className="flex flex-1 flex-col">
      <ul className="w-full">
        <TaskMenu text="Getting Started" count={2}>
          <AiOutlineBars className="mr-4 cursor-pointer text-[18px]" />
        </TaskMenu>
        <TaskMenu text="Vidyarthi WebApp" count={2}>
          <AiOutlineBars className="mr-4 cursor-pointer text-[20px]" />
        </TaskMenu>
        <TaskMenu text="React Projects" count={2}>
          <AiOutlineBars className="mr-4 cursor-pointer text-[20px]" />
        </TaskMenu>
      </ul>
    </div>
  );
}

export default Lists;
