import { useEffect, useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { useAppDispatch } from "../../redux/hooks";
import { addTodoTask } from "../../redux/todoTaskSlice";

export default function AddTask() {
  const [taskInput, setTaskInput] = useState<string | undefined>("");
  const dispatch = useAppDispatch();

  const handleTaskInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskInput(e.target.value);

    document.onkeydown = (event) => {
      if (event.key === "Enter") {
        dispatch(addTodoTask({ id: new Date().toString(), task: taskInput }));
        setTaskInput("");
      }
    };

    // return () => document.removeEventListener("onkeydown", handleKeyDown);
  };

  return (
    <div className="flex items-center gap-3 rounded-md bg-gray-800 px-4 py-3 text-white">
      <BsPlusLg className="text-[22px]" />
      <input
        type="text"
        placeholder="Add a Task"
        value={taskInput}
        onChange={(e) => handleTaskInput(e)}
        className="w-full bg-transparent outline-none placeholder:text-white"
      />
    </div>
  );
}
