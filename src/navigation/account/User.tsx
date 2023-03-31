import { BsChevronExpand } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineUserSwitch } from "react-icons/ai";
import "./user.css";
import { useState, useEffect } from "react";
import ManageAccount from "./manageAccount";
import AddAccount from "./addAccount";
import React from "react";

function User() {
  const [showAddAccount, setShowAddAccount] = useState(false);
  const [showManageAccount, setShowManageAccount] = useState(false);
  const [isDropdownActive, setIsDropdownActive] = useState(false);

  const handleMenu = (type) => {
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

  return (
    <section>
      <header
        className="flex items-center px-4 pb-4 pt-6"
        onClick={() => setIsDropdownActive(!isDropdownActive)}
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
        <ul
          style={{ display: isDropdownActive ? "block" : "none" }}
          className="absolute left-5  top-20 z-10 w-[260px] rounded border-[0.5px] border-gray-600 bg-gray-900 text-white shadow-md"
        >
          <li
            onClick={() => handleMenu("manage")}
            className="flex cursor-pointer items-center border-b border-b-gray-600 px-4 py-3 hover:bg-gray-800"
          >
            <AiOutlineUserSwitch className="icon" /> Manage accounts
          </li>
          <li
            onClick={() => handleMenu("setting")}
            className="flex cursor-pointer items-center px-4 py-3 hover:bg-gray-800"
          >
            <IoSettingsOutline className="icon" /> Settings
          </li>
        </ul>
      </header>

      {showManageAccount ? (
        <ManageAccount
          hideManageAccount={hideManageAccount}
          displayAddAccount={displayAddAccount}
        />
      ) : null}
      {showAddAccount ? <AddAccount /> : null}
    </section>
  );
}

export default User;
