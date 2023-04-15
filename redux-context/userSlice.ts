import { createSlice } from "@reduxjs/toolkit";
import { User } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase-connection/firebase";

export interface UserType {
  id: string;
  name: string;
  email: string;
  imgAddress: string;
}

export interface TaskListType {
  id: string;
  task: string;
}

const defaultUser = {
  id: "E75h3fhgk3",
  name: "Linus Hahs",
  email: "linus07@gmail.com",
  imgAddress:
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
};

const userSlice = createSlice({
  name: "users",
  initialState: {
    userList: <UserType[]>[defaultUser],
    selectedUser: { ...defaultUser },
    taskList: <TaskListType[]>[],
  },
  reducers: {
    addUser: (state, action) => {
      state.userList = [...state.userList, action.payload.user];
    },
    selectUser: (state, action) => {
      state.selectedUser = { ...action.payload.user };
    },
    addTodoTask: (state, action) => {
      state.taskList = [
        ...state.taskList,
        {
          id: action.payload.id,
          task: action.payload.task,
        },
      ];
    },
    deleteTodoTask: (state, action) => {
      state.taskList = state.taskList.filter(
        (task) => task.id !== action.payload.id
      );
    },
  },
});

export const { addUser, selectUser } = userSlice.actions;

//selector

export default userSlice.reducer;
