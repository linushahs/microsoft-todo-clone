import React, { useState } from "react";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import CompletedTask from "./CompletedTask";
import { useAppSelector } from "../../../../redux-context/hooks";

export default function CompletedContainer() {
  const [showTask, setShowTask] = useState(true);
  const tasks = useAppSelector((state) => state.completedTasks.taskList);

  if (tasks.length === 0) return <></>;

  return (
    <div className="mt-1">
      <div
        onClick={() => setShowTask(!showTask)}
        className="mb-2 flex w-fit cursor-pointer items-center gap-2 rounded bg-gray-700 px-2 py-1 text-white hover:bg-gray-600"
      >
        {showTask ? <FiChevronDown /> : <FiChevronRight />}
        <h2>Completed</h2>
        <span>{tasks.length || ""}</span>
      </div>

      <div>
        {showTask ? (
          <div className="flex flex-col ">
            {tasks.map((data) => (
              <CompletedTask data={data} key={data.id} />
            ))}
          </div>
        ) : (
          <ul>
            {tasks.map((data) => (
              <li className="mb-1 h-[54px] border-t-2 border-gray-800 last:border-b-2 "></li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
