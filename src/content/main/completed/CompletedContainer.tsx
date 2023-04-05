import React, { useState } from "react";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import CompletedTask from "./CompletedTask";
import { useAppSelector } from "../../../redux/hooks";

export default function CompletedContainer() {
  const [showTask, setShowTask] = useState(true);
  const tasks = useAppSelector((state) => state.completedTasks.taskList);

  return (
    <div className="mt-2">
      <div
        onClick={() => setShowTask(!showTask)}
        className="mb-2 flex w-fit cursor-pointer items-center gap-2 rounded bg-gray-700 px-2 py-1 text-white hover:bg-gray-600"
      >
        {showTask ? <FiChevronDown /> : <FiChevronRight />}
        <h2>Completed</h2>
        <span>1</span>
      </div>

      <div>
        {showTask ? (
          <div className="flex flex-col gap-1">
            {tasks.map((data) => (
              <CompletedTask data={data} key={data.id} />
            ))}
          </div>
        ) : (
          <div className="h-[54px] border-b-2 border-t-2 border-gray-800"></div>
        )}
      </div>
    </div>
  );
}
