import { useState } from "react";
import { RiLightbulbLine } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import ThreedotsContainer from "./ThreedotsContainer";

export default function Header() {
  const [isThreeDotsClicked, setIsThreeDotsClicked] = useState(false);
  return (
    <div className="flex items-center justify-between  text-white">
      {/* left side --------------->  */}
      <div className="flex flex-col ">
        <h1>My Day</h1>
        <p>Friday, March 31</p>
      </div>

      {/* right side -------------->  */}
      <div className="flex items-center gap-3">
        <button className="rounded bg-gray-700 p-1.5 hover:bg-gray-800 ">
          <RiLightbulbLine className="text-[20px]" />
        </button>
        <div className="relative">
          <BsThreeDots
            className="text-[20px]"
            onClick={() => setIsThreeDotsClicked(!isThreeDotsClicked)}
          />
          {isThreeDotsClicked ? <ThreedotsContainer /> : null}
        </div>
      </div>
    </div>
  );
}
