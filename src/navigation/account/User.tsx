import { BsChevronExpand } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineUserSwitch } from "react-icons/ai";
import "./user.css";
import { useState, useEffect, useRef } from "react";
import ManageAccount from "./manageAccount";
import AddAccount from "./addAccount";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { useAppSelector } from "../../../redux-context/hooks";

function User() {
  const [showAddAccount, setShowAddAccount] = useState(false);
  const [showManageAccount, setShowManageAccount] = useState(false);
  const [isDropdownActive, setIsDropdownActive] = useState(false);

  //ref variable
  const dropdownRef = useRef<HTMLUListElement | null>(null);

  //user data from redux
  const users = useAppSelector((state) => state.users.userList);

  const handleMenu = (type: string) => {
    if (type === "manage") {
      setShowManageAccount(true);
    } else {
      setShowManageAccount(false);
    }
  };

  const displayAddAccount = () => {
    setShowAddAccount(true);
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
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          alt="Logo"
          className="mr-2 h-12 w-12 rounded-full bg-purple-600"
        />

        <span className="relative cursor-pointer text-white">
          <h2>Sunil Shah</h2>
          <div className="flex items-center gap-2">
            <h3 className="text-gray-400">sunntraveler2004@outlook.com</h3>
            <BsChevronExpand />
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
      {showAddAccount ? <AddAccount /> : null}
    </section>
  );
}

export default User;
