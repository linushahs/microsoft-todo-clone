import User from "./account/User";
import NavigationBlock from "./menu/NavigationBlock";
import Search from "./search/Search";
import AddTaskMenu from "./user-task-menu/AddTaskMenu";
import TaskBlock from "./user-task-menu/TaskBlock";

function Navigation() {
  return (
    <div className="flex h-screen min-w-[310px] flex-col bg-gray-800">
      {/* Header --------------------------------------->  */}
      <User />
      <Search />
      {/* Navigation Menu --------------------------------------->  */}
      <NavigationBlock />
      <hr className="border-[0.5px] border-gray-700" />
      {/* List -- blocks --------------------------------------->  */}
      <TaskBlock />
      <AddTaskMenu />
    </div>
  );
}

export default Navigation;
