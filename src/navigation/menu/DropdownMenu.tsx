import React from "react";

function DropdownMenu({
  text,
  children,
}: {
  text: string;
  children: React.ReactElement;
}) {
  return (
    <>
      <li className="flex cursor-pointer items-center rounded border-b border-b-gray-600 px-4 py-3 last:border-0 hover:bg-gray-700">
        {children}
        {text}
      </li>
    </>
  );
}

export default DropdownMenu;
