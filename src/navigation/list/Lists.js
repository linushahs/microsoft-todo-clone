import React from "react";
import { BsPlusLg } from "react-icons/bs";
import { BiBookAdd } from "react-icons/bi";

function Lists() {
  return (
    <div className="lists-container">
      <ul className="nav-menu lists-block ">
        {/* <NavigationMenu iconTitle="started" text="Getting Started" count={2} />
        <NavigationMenu iconTitle="list" text="Vidyarthi WebApp" count={2} />
        <NavigationMenu iconTitle="list" text="React Projects" count={2} /> */}
      </ul>
      <div className="addlist-block">
        <div className="new-list">
          <BsPlusLg className="icon" />
          <span>New list</span>
        </div>

        <BiBookAdd className="icon c-group" />
      </div>
    </div>
  );
}

export default Lists;
