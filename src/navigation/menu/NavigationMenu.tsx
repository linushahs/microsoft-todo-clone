import { useState, useEffect, useRef, ReactElement } from "react";
import {
  BsSun,
  BsReverseLayoutTextSidebarReverse,
  BsPrinter,
  BsPinAngle,
  BsPlusLg,
  BsChevronDown,
  BsChevronUp,
} from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import { HiOutlineUser } from "react-icons/hi";
import { BiTask, BiRename, BiUserPlus, BiBookAdd } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import DropdownMenu from "./DropdownMenu";
import { useReactToPrint } from "react-to-print";
import React from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 */
// function useOutsideAlerter(ref) {
//   useEffect(() => {
//     /**
//      * Alert if clicked on outside of element
//      */
//     function handleClickOutside(event: <) {
//       if (ref.current && !ref.current.contains(event.target)) {
//         alert("You clicked outside of me!");
//       }
//     }
//     // Bind the event listener
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       // Unbind the event listener on clean up
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [ref]);
// }

function NavigationMenu({
  iconTitle,
  text,
  count,
}: {
  iconTitle: string;
  text: string;
  count: number;
}) {
  const wrapperRef = useRef(null);
  // useOutsideAlerter(wrapperRef);
  //State variables
  const [isActive, setIsActive] = useState(false);
  const [isDropdownActive, setIsDropdownActive] = useState(false);
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

  return (
    <li className="relative  mx-2 my-2 flex items-center rounded  px-3 py-2 text-white hover:bg-gray-600">
      <a
        href="#"
        className=" decoration-none flex w-full items-center text-white outline-none"
      >
        {icons[iconTitle]} <span>{text}</span>
        <div className="right-side" ref={wrapperRef}>
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
        <ul className="absolute bottom-full left-3 z-10 w-[270px] list-none rounded border border-gray-600 bg-gray-900 shadow-md">
          <DropdownMenu title="print" text="Print list" />
          <DropdownMenu title="email" text="Email list" />
        </ul>
      </div>

      {/* Dropdown section ends here --------------------------------------> */}
    </li>
  );
}

export default NavigationMenu;
