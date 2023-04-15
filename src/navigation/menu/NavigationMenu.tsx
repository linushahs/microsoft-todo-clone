import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import { BsPrinter } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import DropdownMenu from "./DropdownMenu";
import { useAppDispatch, useAppSelector } from "../../../redux-context/hooks";
import { selectList } from "../../../redux-context/listSlice";

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
  const dispatch = useAppDispatch();
  const selectedList = useAppSelector((state) => state.lists.selectedList);

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

  // handleClick() method of navigation menu ----------->
  // ---------------------------------------------------->
  const handleClick = () => {
    dispatch(selectList({ title: text }));
  };

  return (
    <div className="relative">
      <li
        onContextMenu={() => handleDropdown()}
        onClick={() => handleClick()}
        style={{
          backgroundColor: selectedList === text ? "rgb(75 85 99)" : "",
        }}
        className=" mx-2 my-2 flex rounded  px-3 py-2 text-white hover:bg-gray-600"
      >
        <a
          href="#"
          className=" decoration-none flex w-full items-center text-white outline-none"
        >
          {children} <span>{text}</span>
        </a>
        {/* right side of the menu ------------------- >  */}
        {/* <------------------------------------------->  */}
        <div className="ml-auto flex items-end gap-2">
          <span
            className="mt-[1px] flex h-5 w-5 items-center justify-center rounded-full bg-gray-700 text-xs "
            style={{ display: count ? "flex" : "none" }}
          >
            {count}
          </span>
        </div>

        {/* side thin bar (displayed when selected) --------->  */}
        <span
          style={{ display: selectedList === text ? "block" : "none" }}
          className="absolute left-2 top-2.5 h-5 w-1 rounded-full bg-cyan-400"
        ></span>
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
            className="absolute left-4  w-[275px] list-none rounded border border-gray-600 bg-gray-800 text-white shadow-md"
          >
            <DropdownMenu text="Print list">
              <BsPrinter className="mr-3 text-[18px] text-gray-400" />
            </DropdownMenu>
            <DropdownMenu text="Email list">
              <HiOutlineMail className="mr-3 text-[19px] text-gray-400" />
            </DropdownMenu>
          </motion.ul>
        ) : null}
      </AnimatePresence>

      {/* Dropdown section ends here --------------------------------------> */}
    </div>
  );
}

export default NavigationMenu;
