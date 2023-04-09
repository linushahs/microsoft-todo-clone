import { useEffect, useRef, useState } from "react";
import { useAppDispatch } from "../../../redux-context/hooks";
import { renameTaskMenu } from "../../../redux-context/taskMenuSlice";
import TaskDropdown from "./TaskDropdown";

function TaskMenu({
  text,
  count,
  id,
  children,
}: {
  text: string;
  count: number;
  id: number;
  children: React.ReactElement;
}) {
  // ref variable -------------->
  const menuRef = useRef<null | HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  //State variables
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const [selectMenuInput, setSelectMenuInput] = useState(false);
  const [menuInput, setMenuInput] = useState("Untitled");

  //useEffect() method ---------------->
  useEffect(() => {
    if (text === "Get Started") return;
    setSelectMenuInput(true);
    menuRef.current?.focus();
  }, []);

  //handleMenuInput() method -------------->
  const handleMenuInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      dispatch(renameTaskMenu({ id, menuTitle: menuInput }));
      setSelectMenuInput(false);
    }
  };

  // handleDropdown method goes here ------------->
  // <----------------------------------->
  const handleDropdown = () => {
    window.oncontextmenu = () => false;
    setIsDropdownActive(!isDropdownActive);
  };

  // //setContainerRef() method ------------->
  // const setContainerRef = (ref: React.MutableRefObject<HTMLDivElement>) => {
  //   containerRef = ref;
  // };

  return (
    <div className="relative">
      <li
        onContextMenu={() => handleDropdown()}
        className={`mx-2 my-2 flex items-center rounded  px-3 py-2 text-white ${
          selectMenuInput ? "" : "hover:bg-gray-600"
        }`}
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
              className="w-[160px] rounded border border-b border-gray-700 border-b-white bg-transparent px-2 py-1 outline-none"
              onChange={(e) => setMenuInput(e.target.value)}
              onKeyDown={(e) => handleMenuInput(e)}
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
      {isDropdownActive ? (
        <TaskDropdown id={id} setIsDropdownActive={setIsDropdownActive} />
      ) : null}
    </div>
  );
}

export default TaskMenu;
