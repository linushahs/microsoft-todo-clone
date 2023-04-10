import React from "react";
import Header from "./header/Header";
import TodoContainer from "./main/todo/TodoContainer";
import AddTask from "./main/AddTask";
import CompletedContainer from "./main/completed/CompletedContainer";
import { useAppSelector } from "../../redux-context/hooks";

export default function ContentWrapper() {
  const todoTasks = useAppSelector((state) => state.todoTasks.taskList);
  const completedTasks = useAppSelector(
    (state) => state.completedTasks.taskList
  );

  //empty spaces according to todo and completed tasks
  // -------------------------------------------- >
  const totalEmptySpaces = new Array(8).fill(0);
  const emptySpacesForTodo = new Array(8 - todoTasks.length).fill(0);
  const emptySpacesForBoth = new Array(
    7 - (todoTasks.length + completedTasks.length)
  ).fill(0);

  return (
    <div className="flex h-screen w-full flex-col bg-gray-900 px-8 pb-8 pt-5">
      <Header />

      {/* No todos/Completed tasks to show ----------------------->  */}
      {/* <-------------------------------------------> */}
      {/* <div className="flex flex-1 items-center justify-center text-white">
        <div className="flex flex-col items-center gap-2 text-center ">
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
      </div> */}

      <TodoContainer />
      <CompletedContainer />

      {/* Empty spaces mapping  ---------------->  */}
      <ul>
        {todoTasks.length && completedTasks.length
          ? emptySpacesForBoth.map((_) => (
              <li className=" mb-1 h-[54px] border-b-2 border-b-gray-800 "></li>
            ))
          : todoTasks.length
          ? emptySpacesForTodo.map((_) => (
              <li className="mb-1 h-[54px] border-b-2 border-b-gray-800 "></li>
            ))
          : totalEmptySpaces.map((_) => (
              <li className="mb-1 h-[54px] border-b-2 border-b-gray-800 "></li>
            ))}
      </ul>

      <AddTask />
    </div>
  );
}
