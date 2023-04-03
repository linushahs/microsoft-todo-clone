import React from "react";
import { BsPrinter } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

function DropdownMenu({ title, text }: { title: string; text: string }) {
  const icons: { [key: string]: React.ReactElement } = {
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
      <li className="flex cursor-pointer items-center rounded border-b border-b-gray-600 px-4 py-3 last:border-0 hover:bg-gray-700">
        {icons[title]}
        {text}
      </li>
    </>
  );
}

export default DropdownMenu;
