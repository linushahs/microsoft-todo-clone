import React from "react";

export default function TodoContainer() {
  return (
    <div className="flex flex-1 items-center justify-center text-white">
      {/* No todos -------------------->  */}
      <div className="flex flex-col items-center gap-2 text-center ">
        <img
          src="./calendar.png"
          alt="calendar logo"
          className="h-[120px] w-[120px] "
        />
        <h2 className=" text-lg">Focus on your day</h2>
        <h3>
          Get things done with My Day, a list <br /> that refreshes every day.
        </h3>
        <button className="mt-2 rounded bg-gray-800 px-5 py-1 hover:bg-gray-800/60">
          Add task to My Day
        </button>
      </div>

      {/* When there are todos ----------------->  */}
      <div></div>
    </div>
  );
}
