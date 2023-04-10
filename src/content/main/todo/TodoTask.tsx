import { useState } from "react";
import { AiFillStar, AiOutlineStar, AiFillDelete } from "react-icons/ai";
import { BsCheck } from "react-icons/bs";
import { useAppDispatch } from "../../../../redux-context/hooks";
import { deleteTodoTask } from "../../../../redux-context/todoTaskSlice";
import { addCompletedTask } from "../../../../redux-context/completedTaskSlice";
import { TaskListType } from "../../../../redux-context/todoTaskSlice";
import TodoTaskDropdown from "./TodoTaskDropdown";

export default function TodoTask({ data }: { data: TaskListType }) {
  const [starred, setStarred] = useState(false);
  const [showTick, setShowTick] = useState(false);
  const [showTaskDropdown, setShowTaskDropdown] = useState(false);
  const [dropdownDimension, setDropdownDimension] = useState({ x: 0, y: 0 });
  const dispatch = useAppDispatch();

  const handleCompletion = () => {
    dispatch(addCompletedTask(data));
    dispatch(deleteTodoTask(data));
  };

  const handleDropdown = (e: React.MouseEvent<HTMLLIElement>) => {
    window.oncontextmenu = () => false;
    setDropdownDimension({ x: e.clientX, y: e.clientY });
    setShowTaskDropdown(!showTaskDropdown);
  };

  const closeDropdown = () => {
    setShowTaskDropdown(false);
  };

  return (
    <li
      onContextMenu={(e) => handleDropdown(e)}
      className="mb-1 flex h-[54px] cursor-pointer items-center justify-between rounded-md bg-gray-700 p-4 text-white hover:bg-gray-600"
    >
      <div className="flex items-center gap-4">
        <span
          className="relative h-5 w-5 rounded-full border-2 border-white"
          onMouseEnter={() => setShowTick(true)}
          onMouseLeave={() => setShowTick(false)}
          onClick={() => handleCompletion()}
        >
          {showTick ? <BsCheck className="absolute top-[1px]" /> : null}
        </span>
        <h2>{data.task}</h2>
      </div>

      {/* right side ---------------->  */}
      <div className="flex items-center gap-2">
        {starred ? (
          <AiFillStar
            className="text-[22px]"
            onClick={() => setStarred(false)}
          />
        ) : (
          <AiOutlineStar
            className="text-[22px]"
            onClick={() => setStarred(true)}
          />
        )}
        <AiFillDelete
          className="text-[20px] text-red-300"
          onClick={() => dispatch(deleteTodoTask(data))}
        />
      </div>

      {showTaskDropdown ? (
        <TodoTaskDropdown
          closeDropdown={closeDropdown}
          dropdownDimension={dropdownDimension}
        />
      ) : null}
    </li>
  );
}
