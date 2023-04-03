import { useState, useRef, useEffect } from "react";
import {
  BsArrowDownUp,
  BsChevronRight,
  BsCalendarPlus,
  BsPrinter,
} from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

export default function ThreedotsContainer({
  handleThreeDots,
}: {
  handleThreeDots: Function;
}) {
  const colors = ["#788CDE", "#BC7ABC", "#E46C8C", "red-500", "blue-500"];
  const colorStyle = "h-11 w-11";
  const [showSortByDropdown, setShowSortByDropdown] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // If mouse is clicked outside the dropdown element then
    // dropdown will close
    document.addEventListener("mousedown", (event) => {
      let outSideClick = true;
      containerRef.current?.childNodes.forEach((elem) => {
        if (elem == event.target) {
          outSideClick = false;
        }
      });

      if (outSideClick) handleThreeDots(false);
    });
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: "-10%", zIndex: 50 }}
        animate={{ opacity: 1, y: "0%", zIndex: 50 }}
        exit={{ opacity: 0, y: "-10%" }}
        transition={{ duration: 0.3, type: "spring", stiffness: 100 }}
        ref={containerRef}
        className="absolute right-0 top-full mt-2.5 min-w-[290px] rounded border border-gray-600 bg-gray-800 "
      >
        {/* sort by section ------------------>  */}
        {/* <-------------------------------------->  */}
        <div
          onMouseEnter={() => setShowSortByDropdown(true)}
          onClick={() => setShowSortByDropdown(false)}
          className="flex w-full cursor-pointer items-center  gap-4 px-4 py-3 hover:bg-gray-700"
        >
          <BsArrowDownUp className="text-gray-400" />
          <h2>Sort by</h2>
          <BsChevronRight className="ml-auto text-gray-400" />
        </div>

        {/* sort by dropdown ---------------------->  */}
        {/* <---------------------------------------->  */}
        {showSortByDropdown ? (
          <AnimatePresence>
            <motion.ul
              initial={{ opacity: 0, y: "-10%", zIndex: 50 }}
              animate={{ opacity: 1, y: "0%", zIndex: 50 }}
              exit={{ opacity: 0, y: "-10%" }}
              transition={{ duration: 0.3, type: "spring", stiffness: 100 }}
              className="absolute right-full top-0 flex w-[290px] flex-col rounded border border-gray-600 bg-gray-800"
            >
              <li className="flex cursor-pointer items-center gap-3 px-4 py-3 hover:bg-gray-700">
                <AiOutlineStar className="text-[20px] text-gray-400" />{" "}
                Importance
              </li>
              <li className="flex cursor-pointer items-center gap-3 px-4 py-3 hover:bg-gray-700">
                <BsArrowDownUp className="text-[17px] text-gray-400" />{" "}
                Alphabetically
              </li>
              <li className="flex cursor-pointer items-center gap-3 px-4 py-3 hover:bg-gray-700">
                <BsCalendarPlus className="text-[17px] text-gray-400" />{" "}
                Creation Date
              </li>
            </motion.ul>
          </AnimatePresence>
        ) : null}

        {/* theme section -------------->  */}
        <div className="px-4 py-2">
          <h2>Theme</h2>
          <div className="mt-2 grid grid-cols-5 gap-x-1 gap-y-2 ">
            <button className={`${colorStyle} bg-[#788CDE]`}></button>
            <button className={`${colorStyle} bg-[#BC7ABC]`}></button>
            <button className={`${colorStyle} bg-[#E46C8C]`}></button>
            <button className={`${colorStyle} bg-[#E46B67]`}></button>
            <button className={`${colorStyle} bg-[#4AA079]`}></button>
            <button className={`${colorStyle} bg-[#479E98]`}></button>
            <button className={`${colorStyle} bg-[#8795A0]`}></button>
            <button className={`${colorStyle} bg-[#D6BDE7]`}></button>
            <button className={`${colorStyle} bg-[#A0CBF1]`}></button>
          </div>
        </div>

        {/* some extra features --------------->  */}
        {/* <--------------------------------------->  */}
        <div className="mt-2 flex w-full cursor-pointer items-center  gap-4 px-4 py-3 hover:bg-gray-700">
          <BsPrinter className="text-[19px] text-gray-400" />
          <h2>Print List</h2>
        </div>
        <div className="flex w-full cursor-pointer items-center  gap-4 px-4 py-3 hover:bg-gray-700">
          <FiMail className="text-[19px] text-gray-400" />
          <h2>Email List</h2>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
