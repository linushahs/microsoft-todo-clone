import React from "react";
import NavigationMenu from "./NavigationMenu";
import { AiOutlineStar } from "react-icons/ai";
import { BiTask } from "react-icons/bi";
import {
  BsChevronDown,
  BsChevronUp,
  BsReverseLayoutTextSidebarReverse,
  BsSun,
} from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiOutlineUser } from "react-icons/hi";

function NavigationBlock() {
  return (
    <ul className=" w-full list-none ">
      <NavigationMenu text="My Day" count={2}>
        <BsSun className="mr-4 cursor-pointer text-[20px]" />
      </NavigationMenu>
      <NavigationMenu text="Important" count={0}>
        <AiOutlineStar className="mr-4 cursor-pointer text-[20px]" />
      </NavigationMenu>
      <NavigationMenu text="Planned" count={2}>
        <BsReverseLayoutTextSidebarReverse className="mr-4 cursor-pointer text-[18px]" />
      </NavigationMenu>
      <NavigationMenu text="Assigned" count={3}>
        <HiOutlineUser className="mr-4 cursor-pointer text-[20px]" />
      </NavigationMenu>
      <NavigationMenu text="Tasks" count={0}>
        <BiTask className="mr-4 cursor-pointer text-[20px]" />
      </NavigationMenu>
    </ul>
  );
}

export default NavigationBlock;
