import { AiOutlineBars } from "react-icons/ai";
import TaskMenu from "./TaskMenu";
import { useAppSelector } from "../../redux/hooks";

function Lists() {
  const menus = useAppSelector((state) => state.taskMenus.menuList);

  return (
    <div className="flex flex-1 flex-col">
      <ul className="w-full">
        {menus.map((menu) => (
          <TaskMenu
            text={menu.menuTitle}
            count={menus.length}
            id={menu.id}
            key={menu.id}
          >
            <AiOutlineBars className="mr-4 cursor-pointer text-[18px]" />
          </TaskMenu>
        ))}
      </ul>
    </div>
  );
}

export default Lists;
