import React from "react";
import { BiBookAdd } from "react-icons/bi";
import { BsPlusLg } from "react-icons/bs";
import { useAppDispatch } from "../../redux/hooks";
import { addTaskMenu } from "../../redux/taskMenuSlice";

export default function AddTaskMenu() {
  const dispatch = useAppDispatch();

  return (
    <div className="mt-auto flex items-center gap-2 text-white">
      <div
        onClick={() =>
          dispatch(
            addTaskMenu({ id: new Date().toString(), menuTitle: "Untitled" })
          )
        }
        className=" flex w-full cursor-pointer items-center gap-4 rounded px-5 pb-3 pt-2 hover:bg-gray-600"
      >
        <BsPlusLg className=" text-[20px] " />
        <span>New list</span>
      </div>

      <BiBookAdd
        className="ml-auto mr-4 text-[24px]"
        onClick={() =>
          dispatch(
            addTaskMenu({ id: new Date().toString(), menuTitle: "Untitled" })
          )
        }
      />
    </div>
  );
}
