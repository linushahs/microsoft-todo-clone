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

const userSlice = createSlice({
  name: "users",
  initialState: {
    userList: <UserType[]>[],
    selectedUser: {},
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
