import React from "react";
import Header from "./header/Header";
import TodoContainer from "./main/TodoContainer";
import AddTask from "./main/AddTask";

export default function ContentWrapper() {
  return (
    <div className="flex h-screen w-full flex-col bg-gray-900 px-8 pb-8 pt-5">
      <Header />
      <TodoContainer />
      <AddTask />
    </div>
  );
}
