import { useEffect, useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { useAppDispatch } from "../../redux/hooks";
import { addTodoTask } from "../../redux/todoTaskSlice";

export default function AddTask() {
  const [taskInput, setTaskInput] = useState<string | undefined>("");
  const dispatch = useAppDispatch();

  useEffect(() => {
    document.onkeydown = (e) => {
      if (e.key === "Enter") {
        dispatch(addTodoTask({ id: new Date().toString(), task: taskInput }));
        setTaskInput("");
      }
    };
  }, [taskInput]);

  return (
    <div className="flex items-center gap-3 rounded-md bg-gray-800 px-4 py-3 text-white">
      <BsPlusLg className="text-[22px]" />
      <input
        type="text"
        placeholder="Add a Task"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        className="w-full bg-transparent outline-none placeholder:text-white"
      />
    </div>
  );
}
