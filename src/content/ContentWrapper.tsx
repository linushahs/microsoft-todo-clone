import React from "react";
import Header from "./header/Header";
import TodoContainer from "./main/TodoContainer";
import AddTask from "./main/AddTask";

export default function ContentWrapper() {
  return (
    <div className="flex h-screen w-full flex-col bg-gray-900 p-8">
      <Header />
      <TodoContainer />
      <AddTask />
    </div>
  );
}
