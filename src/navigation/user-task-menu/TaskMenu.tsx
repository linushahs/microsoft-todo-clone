import { useEffect, useRef, useState } from "react";
import TaskDropdown from "./TaskDropdown";

function TaskMenu({
  text,
  count,
  id,
  children,
}: {
  text: string;
  count: number;
  id: string;
  children: React.ReactElement;
}) {
  // ref variable -------------->
  const dropdownRef = useRef<null | HTMLUListElement>(null);
  const menuRef = useRef<null | HTMLInputElement>(null);
  const [selectMenuInput, setSelectMenuInput] = useState(false);
  const [menuInput, setMenuInput] = useState("Untitled");

  //State variables
  const [isDropdownActive, setIsDropdownActive] = useState(false);

  //useEffect() method
  useEffect(() => {
    setSelectMenuInput(true);
    menuRef.current?.focus();
  }, []);

  //handleMenuInput() method -------------->
  const handleMenuInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMenuInput(e.target.value);
  };

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
        className="mx-2 my-2 flex items-center rounded  px-3 py-2 text-white hover:bg-gray-600"
      >
        <a
          href="#"
          className="decoration-none flex w-full items-center text-white outline-none"
        >
          {children}
          {selectMenuInput ? (
            <input
              type="text"
              ref={menuRef}
              value={menuInput}
              className="w-[160px] rounded border border-b border-gray-700 border-b-white bg-transparent px-2 py-1 outline-none
              "
              onChange={(e) => handleMenuInput(e)}
            />
          ) : (
            <span>{text}</span>
          )}
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
      {isDropdownActive ? <TaskDropdown id={id} /> : null}
    </div>
  );
}

export default TaskMenu;
