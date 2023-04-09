import { useAppSelector } from "../../../../redux-context/hooks";
import TodoTask from "./TodoTask";

export default function TodoContainer() {
  const tasks = useAppSelector((state) => state.todoTasks.taskList);

  return (
    <>
      {/* When there are todos ----------------->  */}
      <div className="mt-6">
        <ul className="flex flex-col gap-1">
          {tasks.map((data) => (
            <TodoTask data={data} key={data.id} />
          ))}
        </ul>
      </div>
    </>
  );
}
