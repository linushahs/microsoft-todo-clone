import TodoTask from "./TodoTask";

export default function TodoContainer() {
  const tasks = useSelector((state) => state.todoTasks.taskList);

  return (
    <>
      {/* When there are todos ----------------->  */}
      <div className="mt-6">
        <ul className="flex flex-col gap-1">
          {/* {tasks.map((data) => (
            <TodoTask task={data.task} key={data.id} />
          ))} */}
        </ul>
      </div>
    </>
  );
}
