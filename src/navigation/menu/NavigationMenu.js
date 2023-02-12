import { useState } from "react";
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
import PrintList from "./print/PrintList";

function NavigationMenu({ iconTitle, text, count }) {
  //State variables
  const [isActive, setIsActive] = useState(false);
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const icons = {
    myday: <BsSun className="icon" />,
    important: <AiOutlineStar className="icon" />,
    planned: <BsReverseLayoutTextSidebarReverse className="icon" />,
    assigned: <HiOutlineUser className="icon" />,
    task: <BiTask className="icon" />,
    started: <span className="icon">👋</span>,
    list: <GiHamburgerMenu className="icon" />,
  };

  const printList = useReactToPrint({
    content: () => <PrintList />,
  });

  return (
    <li
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      className={isActive ? "active" : "none"}
      style={{ position: "relative" }}
    >
      <a href="#">
        {icons[iconTitle]} <span>{text}</span>
        <div className="right-side">
          {isDropdownActive ? (
            <BsChevronUp
              onClick={() => {
                setIsDropdownActive(false);
              }}
              style={{ fontSize: "14px", width: "16px", height: "16px" }}
            />
          ) : (
            <BsChevronDown
              onClick={() => setIsDropdownActive(true)}
              style={{ fontSize: "14px", width: "16px", height: "16px" }}
            />
          )}
          <span className="count" style={{ display: count ? "flex" : "none" }}>
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
        <ul className="dropdown">
          <DropdownMenu title="print" text="Print list" />
          <DropdownMenu title="email" text="Email list" />
        </ul>
      </div>

      {/* Dropdown section ends here --------------------------------------> */}
    </li>
  );
}

export default NavigationMenu;
