import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { BsSun } from "react-icons/bs";
import { TbCalendarDue, TbCalendarPlus, TbCalendarTime } from "react-icons/tb";
import { HiOutlineCheckCircle } from "react-icons/hi";
import { RiDeleteBin6Line } from "react-icons/ri";

interface DimensionType {
  x: number;
  y: number;
}

export default function TodoTaskDropdown({
  closeDropdown,
  dropdownDimension,
}: {
  closeDropdown: Function;
  dropdownDimension: DimensionType;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { x, y } = dropdownDimension;
  console.log(x, y);

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

      if (outSideClick) closeDropdown(false);
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
        style={{ top: `${y + 10}px`, left: `${x}px` }}
        className="absolute  z-20 mt-2.5 flex min-w-[290px] flex-col rounded border border-gray-600 bg-gray-800 "
      >
        {/* Add to My Day list ----------------------->  */}
        {/* <-------------------------------------------->  */}
        <div className="flex cursor-pointer items-center gap-4 px-4 py-3 hover:bg-gray-700">
          <BsSun className="text-[20px] text-gray-400" />
          Add to My Day
        </div>

        {/* Mark as Important ----------------------->  */}
        {/* <-------------------------------------------->  */}
        <div className=" flex w-full cursor-pointer items-center  gap-4 px-4 py-3 hover:bg-gray-700">
          <AiOutlineStar className="text-[21px] text-gray-400" />
          <h2>Mark as Important</h2>
        </div>

        {/* Mark as Completed ----------------------->  */}
        {/* <-------------------------------------------->  */}
        <div className="flex w-full cursor-pointer items-center  gap-4 px-4 py-3 hover:bg-gray-700">
          <HiOutlineCheckCircle className="text-[21px] text-gray-400" />
          <h2>Mark as Completed</h2>
        </div>

        {/* Due Today ----------------------->  */}
        {/* <-------------------------------------------->  */}
        <div className="flex w-full cursor-pointer items-center gap-4 border-t  border-t-gray-600 px-4 py-3 hover:bg-gray-700">
          <TbCalendarDue className="text-[21px] text-gray-400" />
          <h2>Due Today</h2>
        </div>

        {/* Due Tomorrow ----------------------->  */}
        {/* <-------------------------------------------->  */}
        <div className="flex w-full cursor-pointer items-center  gap-4 px-4 py-3 hover:bg-gray-700">
          <TbCalendarPlus className="text-[21px] text-gray-400" />
          <h2>Due Tomorrow</h2>
        </div>

        {/* Pick a date ----------------------->  */}
        {/* <-------------------------------------------->  */}
        <div className="flex w-full cursor-pointer items-center  gap-4 px-4 py-3 hover:bg-gray-700">
          <TbCalendarTime className="text-[21px] text-gray-400" />
          <h2>Pick a date</h2>
        </div>

        {/* Delete Task ----------------------->  */}
        {/* <-------------------------------------------->  */}
        <div className="flex w-full cursor-pointer items-center gap-4  border-t border-t-gray-600  px-4 py-3 text-red-600 hover:bg-gray-700">
          <RiDeleteBin6Line className="text-[21px] " />
          <h2>Delete Task</h2>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
