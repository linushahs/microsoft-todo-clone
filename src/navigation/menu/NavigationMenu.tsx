import { useRef, useState } from "react";
import { BsChevronDown, BsChevronUp, BsPrinter } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import DropdownMenu from "./DropdownMenu";
import { AnimatePresence, motion } from "framer-motion";

function NavigationMenu({
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
      <AnimatePresence>
        {isDropdownActive ? (
          <motion.ul
            ref={dropdownRef}
            initial={{ opacity: 0, y: "-10%", zIndex: 50 }}
            animate={{ opacity: 1, y: "0%", zIndex: 50 }}
            transition={{ duration: 0.2, type: "spring", stiffness: 100 }}
            className="absolute left-5  w-[270px] list-none rounded border border-gray-600 bg-gray-900 text-white shadow-md"
          >
            <DropdownMenu text="Print list">
              <BsPrinter className="icon" />
            </DropdownMenu>
            <DropdownMenu text="Email list">
              <HiOutlineMail className="icon" />
            </DropdownMenu>
          </motion.ul>
        ) : null}
      </AnimatePresence>

      {/* Dropdown section ends here --------------------------------------> */}
    </div>
  );
}

export default NavigationMenu;
