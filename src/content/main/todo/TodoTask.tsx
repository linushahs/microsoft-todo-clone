import { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsCheck } from "react-icons/bs";

export default function TodoTask({ task }: { task: string }) {
  const [starred, setStarred] = useState(false);
  const [showTick, setShowTick] = useState(false);

  return (
    <li className="flex h-[60px] cursor-pointer items-center justify-between rounded bg-gray-700 p-4 text-white hover:bg-gray-600">
      <div className="flex items-center gap-4">
        <span
          className="relative h-5 w-5 rounded-full border-2 border-white"
          onMouseEnter={() => setShowTick(true)}
          onMouseLeave={() => setShowTick(false)}
        >
          {showTick ? <BsCheck className="absolute top-[1px]" /> : null}
        </span>
        <h2>{task}</h2>
      </div>
      {starred ? (
        <AiFillStar className="text-[22px]" onClick={() => setStarred(false)} />
      ) : (
        <AiOutlineStar
          className="text-[22px]"
          onClick={() => setStarred(true)}
        />
      )}
    </li>
  );
}
