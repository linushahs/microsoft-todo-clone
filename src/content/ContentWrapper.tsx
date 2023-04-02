import React from "react";
import Header from "./header/Header";
import TodoContainer from "./main/todo/TodoContainer";
import AddTask from "./main/AddTask";
import CompletedContainer from "./main/completed/CompletedContainer";

export default function ContentWrapper() {
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
      <ul>
        <li className="h-[54px] border-b-2 border-b-gray-800"></li>
        <li className="h-[54px] border-b-2 border-b-gray-800"></li>
        <li className="h-[54px] border-b-2 border-b-gray-800"></li>
        <li className="h-[54px] border-b-2 border-b-gray-800"></li>
        <li className="h-[54px] "></li>
      </ul>
      <AddTask />
    </div>
  );
}
