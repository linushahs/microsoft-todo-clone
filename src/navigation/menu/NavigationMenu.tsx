import { ReactElement, useRef, useState } from "react";
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
import DropdownMenu from "./DropdownMenu";

function NavigationMenu({
  iconTitle,
  text,
  count,
}: {
  iconTitle: string;
  text: string;
  count: number;
}) {
  // ref variable -------------->
  const dropdownRef = useRef<null | HTMLUListElement>(null);

  //State variables
  const [isDropdownActive, setIsDropdownActive] = useState(false);

  // icons are here ------------------>
  // <---------------------------->
  const icons: { [key: string]: ReactElement } = {
    myday: <BsSun className="mr-4 cursor-pointer text-[20px]" />,
    important: <AiOutlineStar className="mr-4 cursor-pointer text-[20px]" />,
    planned: (
      <BsReverseLayoutTextSidebarReverse className="mr-4 cursor-pointer text-[18px]" />
    ),
    assigned: <HiOutlineUser className="mr-4 cursor-pointer text-[20px]" />,
    task: <BiTask className="mr-4 cursor-pointer text-[20px]" />,
    started: <span className="mr-4 cursor-pointer text-[20px]">👋</span>,
    list: <GiHamburgerMenu className="mr-4 cursor-pointer text-[20px]" />,
  };

  // handleDropdown method goes here ------------->
  // <----------------------------------->
  const handleDropdown = () => {
    window.oncontextmenu = () => false;
    setIsDropdownActive(true);
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
          {icons[iconTitle]} <span>{text}</span>
          <div className="right-side">
            {isDropdownActive ? (
              <BsChevronUp
                onClick={() => setIsDropdownActive(false)}
                className="h-4 w-4 text-sm"
              />
            ) : (
              <BsChevronDown
                onClick={() => setIsDropdownActive(true)}
                className="h-4 w-4 text-sm"
              />
            )}
            <span
              className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-700 text-xs "
              style={{ display: count ? "flex" : "none" }}
            >
              {count}
            </span>
          </div>
        </a>
      </li>
      {/* Dropdown section ------------------------------------------->  */}
      {/* <---------------------------------------------------------------> */}
      <div
        id="dropdown-list"
        style={{
          display: isDropdownActive ? "block" : "none",
          maxHeight: isDropdownActive ? "450px" : "0px",
          transition: "max-height 3s",
        }}
      >
        <ul
          ref={dropdownRef}
          className="absolute bottom-full left-5 z-10 w-[270px] list-none rounded border border-gray-600 bg-gray-800 text-white shadow-md"
        >
          <DropdownMenu title="print" text="Print list" />
          <DropdownMenu title="email" text="Email list" />
        </ul>
      </div>

      {/* Dropdown section ends here --------------------------------------> */}
    </div>
  );
}

export default NavigationMenu;
