import React, { useState } from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import TodoTask from "./TodoTask";

export default function TodoContainer() {
  const [tasks, setTasks] = useState([
    "Complete Todo Clone",
    "Learn react redux",
  ]);

  return (
    <>
      <div className="flex  items-center justify-center text-white">
        {/* No todos -------------------->  */}
        <div className="hidden flex-1 flex-col items-center gap-2 text-center ">
          <img
            src="./calendar.png"
            alt="calendar logo"
            className="h-[120px] w-[120px] "
          />
          <h2 className=" text-lg">Focus on your day</h2>
          <h3>
            Get things done with My Day, a list <br /> that refreshes every day.
          </h3>
          <button className="mt-2 rounded bg-gray-800 px-5 py-1 hover:bg-gray-800/60">
            Add task to My Day
          </button>
        </div>
      </div>

      {/* When there are todos ----------------->  */}
      <div className="mt-6">
        <ul className="flex flex-col gap-1">
          {tasks.map((task, id) => (
            <TodoTask task={task} key={id} />
          ))}

          <li className="h-[60px] border-b-2 border-b-gray-800"></li>
          <li className="h-[60px] border-b-2 border-b-gray-800"></li>
          <li className="h-[60px] border-b-2 border-b-gray-800"></li>
          <li className="h-[60px] border-b-2 border-b-gray-800"></li>
          <li className="h-[60px] border-b-2 border-b-gray-800"></li>
          <li className="h-[60px] "></li>
        </ul>
      </div>
    </>
  );
}
