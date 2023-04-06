import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import { BsPrinter } from "react-icons/bs";
import { HiOutlineMail, HiUsers } from "react-icons/hi";
import { CgRename } from "react-icons/cg";
import TaskDropdown from "./TaskDropdown";
import { BiDuplicate } from "react-icons/bi";

function TaskMenu({
  text,
  count,
  children,
}: {
  text: string;
  count: number;
  children: React.ReactElement;
}) {
  // ref variable -------------->
  const dropdownRef = useRef<null | HTMLUListElement>(null);

  //State variables
  const [isDropdownActive, setIsDropdownActive] = useState(false);

  // handleDropdown method goes here ------------->
  // <----------------------------------->
  const handleDropdown = () => {
    window.oncontextmenu = () => false;
    setIsDropdownActive(!isDropdownActive);

    // If mouse is clicked outside the dropdown element then
    // dropdown will close
    document.addEventListener("mousedown", (event) => {
      let outSideClick = true;
      dropdownRef.current?.childNodes.forEach((elem) => {
        if (elem == event.target) {
          outSideClick = false;
        }
      });

      if (outSideClick) setIsDropdownActive(false);
    });
  };

  return (
    <div className="relative">
      <li
        onContextMenu={() => handleDropdown()}
        className=" mx-2 my-2 flex items-center rounded  px-3 py-2 text-white hover:bg-gray-600"
      >
        <a
          href="#"
          className=" decoration-none flex w-full items-center text-white outline-none"
        >
          {children} <span>{text}</span>
          <div className="ml-auto flex items-center gap-1">
            <span
              className="mt-[0.5px] flex h-5 w-5 items-center justify-center rounded-full bg-gray-700 text-xs "
              style={{ display: count ? "flex" : "none" }}
            >
              {count}
            </span>
          </div>
        </a>
      </li>
      {/* Dropdown section ------------------------------------------->  */}
      {/* <---------------------------------------------------------------> */}
      {isDropdownActive ? <TaskDropdown /> : null}
      {/* Dropdown section ends here --------------------------------------> */}
    </div>
  );
}

export default TaskMenu;
