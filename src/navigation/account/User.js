import { BsChevronExpand } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineUserSwitch } from "react-icons/ai";
import "./user.css";
import { useState, useEffect } from "react";

function User({ handleMenu }) {
  const [isDropdownActive, setIsDropdownActive] = useState(false);

  return (
    <>
      <header
        className="user"
        onClick={() => setIsDropdownActive(!isDropdownActive)}
      >
        <img
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          alt="Logo"
          className="logo"
        />
        <span className="user-profile">
          <h4>Sunil Shah</h4>
          <div className="">
            <p>sunntraveler2004@outlook.com</p>
            <BsChevronExpand />
          </div>
        </span>

        {/* Dropdown section ---------------->  */}
        <ul
          style={{ display: isDropdownActive ? "block" : "none" }}
          className="user-dropdown"
        >
          <li onClick={() => handleMenu("manage")}>
            <AiOutlineUserSwitch className="icon" /> Manage accounts
          </li>
          <li onClick={() => handleMenu("setting")}>
            <IoSettingsOutline className="icon" /> Settings
          </li>
        </ul>
      </header>
    </>
  );
}

export default User;
