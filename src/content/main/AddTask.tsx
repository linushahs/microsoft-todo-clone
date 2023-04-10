import { useEffect, useRef, useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { useAppDispatch } from "../../../redux-context/hooks";
import { addTodoTask } from "../../../redux-context/todoTaskSlice";

export default function AddTask() {
  const [taskInput, setTaskInput] = useState<string | undefined>("");
  const dispatch = useAppDispatch();

  const handleTaskInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (taskInput) {
        dispatch(addTodoTask({ id: new Date().toString(), task: taskInput }));
        setTaskInput("");
      }
    }
  };

  return (
    <div className="mt-auto flex items-center gap-3 rounded-md bg-gray-800 px-4 py-3 text-white">
      <BsPlusLg className="text-[22px]" />
      <input
        type="text"
        placeholder="Add a Task"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        onKeyDown={(e) => handleTaskInput(e)}
        className="w-full bg-transparent outline-none placeholder:text-white focus:placeholder:text-transparent"
      />
    </div>
  );
}
