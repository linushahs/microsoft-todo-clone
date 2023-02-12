import { useState } from "react";
import {
  BsSun,
  BsReverseLayoutTextSidebarReverse,
  BsPrinter,
  BsPinAngle,
  BsPlusLg,
  BsChevronDown,
  BsChevronUp,
} from "react-icons/bs";
import {
  AiOutlineStar,
  AiFillDelete,
  AiOutlineSearch,
  AiOutlineUserSwitch,
} from "react-icons/ai";
import {
  HiOutlineUser,
  HiOutlineMail,
  HiOutlineDocumentDuplicate,
} from "react-icons/hi";
import {
  BiTask,
  BiRename,
  BiUserPlus,
  BiBookAdd,
  BiHide,
} from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSettingsOutline } from "react-icons/io5";

function DropdownMenu({ title, text }) {
  const icons = {
    // rename: <BiRename className="icon" />,
    // share: <BiUserPlus className="icon" />,
    print: <BsPrinter className="icon" />,
    email: <HiOutlineMail className="icon" />,
    // pin: <BsPinAngle className="icon" />,
    // hide: <BiHide className="icon" />,
    // duplicate: <HiOutlineDocumentDuplicate className="icon" />,
  };

  return (
    <>
      <li>
        {icons[title]}
        {text}
      </li>
    </>
  );
}

export default DropdownMenu;
