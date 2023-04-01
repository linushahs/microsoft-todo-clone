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
      {/* When there are todos ----------------->  */}
      <div className="mt-6">
        <ul className="flex flex-col gap-1">
          {tasks.map((task, id) => (
            <TodoTask task={task} key={id} />
          ))}
        </ul>
      </div>
    </>
  );
}
