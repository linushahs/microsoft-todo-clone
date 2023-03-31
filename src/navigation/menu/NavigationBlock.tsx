import React from "react";
import NavigationMenu from "./NavigationMenu";

function NavigationBlock() {
  return (
    <ul className=" w-full list-none ">
      <NavigationMenu iconTitle="myday" text="My Day" count={2} />
      <NavigationMenu iconTitle="important" text="Important" count={0} />
      <NavigationMenu iconTitle="planned" text="Planned" count={2} />
      <NavigationMenu iconTitle="assigned" text="Assigned" count={3} />
      <NavigationMenu iconTitle="task" text="Tasks" count={0} />
    </ul>
  );
}

export default NavigationBlock;
