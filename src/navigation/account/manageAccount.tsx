import React, { useState } from "react";
import AddAccount from "./addAccount";

function ManageAccount({ hideManageAccount, displayAddAccount }) {
  return (
    <>
      <div className="absolute top-0 h-screen w-screen bg-black/50 text-white">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md border-[0.5px] border-gray-600 bg-gray-900">
          <h2 className="py-4 text-center">Manage accounts</h2>
          <div className="flex cursor-pointer items-center gap-3 px-6 py-4 hover:bg-black/20">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              alt="Logo"
              className=" mr-2 h-10 w-10 rounded-full "
            />
            <div className="">
              <h3>Sunil Shah</h3>
              <p className="text-gray-400">sunntraveler2004@outlook.com</p>
            </div>
            <button className="rounded bg-red-600 px-2 py-1 text-white">
              Sign out
            </button>
          </div>
          <p
            className=" px-6 py-3  hover:bg-black/20"
            onClick={() => displayAddAccount()}
          >
            <span className="mx-2 text-lg">+</span> Add account
          </p>
          <p className="my-4 mr-6 text-right ">
            <button
              className="rounded border border-gray-600 bg-black/50 px-4 py-2 hover:bg-black/30"
              onClick={() => hideManageAccount()}
            >
              Close
            </button>
          </p>
        </div>
      </div>
    </>
  );
}

export default ManageAccount;
