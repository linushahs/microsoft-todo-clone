import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import { AiOutlineUserSwitch } from "react-icons/ai";
import { BsChevronExpand } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { useAppSelector } from "../../../redux-context/hooks";
import ManageAccount from "./manageAccount";
import "./user.css";

function User() {
  const [showManageAccount, setShowManageAccount] = useState(false);
  const [isDropdownActive, setIsDropdownActive] = useState(false);

  //ref variable
  const dropdownRef = useRef<HTMLUListElement | null>(null);

  //user data from redux
  const selectedUser = useAppSelector((state) => state.users.selectedUser);

  const handleMenu = (type: string) => {
    if (type === "manage") {
      setShowManageAccount(true);
    } else {
      setShowManageAccount(false);
    }
  };

  const displayAddAccount = () => {
    setShowManageAccount(false);
  };

  const hideManageAccount = () => {
    setShowManageAccount(false);
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
    <section>
      <header
        className="flex items-center px-4 pb-4 pt-6"
        onClick={() => handleDropdown()}
      >
        <img
          src={selectedUser.imgAddress}
          alt="Logo"
          className="mr-2 h-12 w-12 rounded-full bg-purple-600"
        />

        <span className="relative w-full cursor-pointer text-white">
          <h2>{selectedUser.name}</h2>
          <div className="flex items-center gap-2">
            <h3 className="text-gray-400">{selectedUser.email}</h3>
            <BsChevronExpand className="ml-auto " />
          </div>
        </span>

        {/* Dropdown section ---------------->  */}
        {/* <-------------------------------->  */}

        <AnimatePresence>
          {isDropdownActive ? (
            <motion.ul
              initial={{ opacity: 0, y: "-10%", zIndex: 50 }}
              animate={{ opacity: 1, y: "0%", zIndex: 50 }}
              transition={{ duration: 0.2, type: "spring", stiffness: 100 }}
              ref={dropdownRef}
              className="absolute left-5  top-20 z-10 w-[260px] rounded border-[0.5px] border-gray-600 bg-gray-800 text-white shadow-md"
            >
              <li
                onClick={() => handleMenu("manage")}
                className="flex cursor-pointer items-center border-b border-b-gray-600 px-4 py-3 hover:bg-gray-700"
              >
                <AiOutlineUserSwitch className="mr-3 text-[18px] text-gray-400" />{" "}
                Manage accounts
              </li>
              <li
                onClick={() => handleMenu("setting")}
                className="flex cursor-pointer items-center px-4 py-3 hover:bg-gray-700"
              >
                <IoSettingsOutline className="mr-3 text-[18px] text-gray-400" />{" "}
                Settings
              </li>
            </motion.ul>
          ) : null}
        </AnimatePresence>
      </header>

      {showManageAccount ? (
        <ManageAccount hideManageAccount={hideManageAccount} />
      ) : null}
    </section>
  );
}

export default User;
