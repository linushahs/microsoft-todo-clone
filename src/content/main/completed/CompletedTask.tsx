import { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsCheck, BsCheckCircleFill } from "react-icons/bs";
import {
  TaskListType,
  addTodoTask,
} from "../../../../redux-context/todoTaskSlice";
import { useAppDispatch } from "../../../../redux-context/hooks";
import { deleteCompletedTask } from "../../../../redux-context/completedTaskSlice";

export default function CompletedTask({ data }: { data: TaskListType }) {
  const [starred, setStarred] = useState(false);
  const [showTick, setShowTick] = useState(false);
  const dispatch = useAppDispatch();

  const makeItUncomplete = () => {
    dispatch(addTodoTask(data));
    dispatch(deleteCompletedTask(data));
  };
  return (
    <li className="flex h-[54px] cursor-pointer items-center justify-between rounded-md bg-gray-700 p-4 text-white hover:bg-gray-600">
      <div className="flex items-center gap-4">
        <BsCheckCircleFill
          className="h-5 w-5 text-red-400"
          onClick={() => makeItUncomplete()}
        />

        <h2 className=" text-gray-400 line-through">{data.task}</h2>
      </div>
      {starred ? (
        <AiFillStar className="text-[22px]" onClick={() => setStarred(false)} />
      ) : (
        <AiOutlineStar
          className="text-[22px]"
          onClick={() => setStarred(true)}
        />
      )}
    </li>
  );
}
