import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { BsPrinter } from "react-icons/bs";
import { HiOutlineMail, HiUsers } from "react-icons/hi";
import { CgRename } from "react-icons/cg";
import { BiDuplicate } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useAppDispatch } from "../../redux/hooks";
import { deleteTaskMenu } from "../../redux/taskMenuSlice";

function TaskDropdown({
  id,
  setIsDropdownActive,
}: {
  id: number;
  setIsDropdownActive: Function;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   const handleMouseDown = (event: MouseEvent) => {
  //     let outSideClick = true;

  //     containerRef.current?.childNodes.forEach((elem) => {
  //       if (elem == event.target) {
  //         outSideClick = false;
  //       }
  //     });

  //     if (outSideClick) setIsDropdownActive(false);
  //   };

  //   // If mouse is clicked outside the dropdown element then
  //   // dropdown will close
  //   document.addEventListener("mousedown", handleMouseDown);

  //   return document.removeEventListener("mousedown", handleMouseDown);
  // }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: "10%", zIndex: 50 }}
        animate={{ opacity: 1, y: "0%", zIndex: 50 }}
        exit={{ opacity: 0, y: "10%" }}
        transition={{ duration: 0.3, type: "spring", stiffness: 100 }}
        ref={containerRef}
        className="absolute  bottom-full left-4 z-20 mt-2.5 flex min-w-[275px] flex-col rounded border border-gray-600 bg-gray-800 text-white "
      >
        {/* Add to My Day list ----------------------->  */}
        {/* <-------------------------------------------->  */}
        <div className="flex cursor-pointer items-center gap-4 px-4 py-3 hover:bg-gray-700">
          <CgRename className="text-[20px] text-gray-400" />
          Rename List
        </div>

        {/* Mark as Important ----------------------->  */}
        {/* <-------------------------------------------->  */}
        <div className=" flex w-full cursor-pointer items-center  gap-4 px-4 py-3 hover:bg-gray-700">
          <HiUsers className="text-[20px] text-gray-400" />
          <h2>Sharing Options</h2>
        </div>

        {/* Mark as Completed ----------------------->  */}
        {/* <-------------------------------------------->  */}
        <div className="flex w-full cursor-pointer items-center  gap-4 px-4 py-3 hover:bg-gray-700">
          <BsPrinter className="text-[20px] text-gray-400" />
          <h2>Print List</h2>
        </div>

        {/* Due Today ----------------------->  */}
        {/* <-------------------------------------------->  */}
        <div className="flex w-full cursor-pointer items-center gap-4  px-4 py-3 hover:bg-gray-700">
          <HiOutlineMail className="text-[20px] text-gray-400" />
          <h2>Email List</h2>
        </div>

        {/* Due Tomorrow ----------------------->  */}
        {/* <-------------------------------------------->  */}
        <div className="flex w-full cursor-pointer items-center  gap-4 px-4 py-3 hover:bg-gray-700">
          <BiDuplicate className="text-[20px] text-gray-400" />
          <h2>Duplicate List</h2>
        </div>

        {/* Delete Task ----------------------->  */}
        {/* <-------------------------------------------->  */}
        <div
          onClick={() => dispatch(deleteTaskMenu({ id, menuTitle: "" }))}
          className="flex w-full cursor-pointer items-center gap-4  border-t border-t-gray-600  px-4 py-3 text-red-600 hover:bg-gray-700"
        >
          <RiDeleteBin6Line className="text-[21px] " />
          <h2>Delete Task</h2>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default TaskDropdown;
