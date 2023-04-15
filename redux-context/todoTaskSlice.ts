import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { db } from "../firebase-connection/firebase";

export interface TaskListType {
  id: string;
  task: string;
}

const todoTaskSlice = createSlice({
  name: "todoTask",
  initialState: {
    taskList: <TaskListType[]>[],
  },
  reducers: {
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

export const { addTodoTask, deleteTodoTask } = todoTaskSlice.actions;

export default todoTaskSlice.reducer;
