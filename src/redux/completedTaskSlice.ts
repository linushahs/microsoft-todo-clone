import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface TaskListType {
  id: string;
  task: string;
}

const completedTaskSlice = createSlice({
  name: "completedTask",
  initialState: {
    taskList: <TaskListType[]>[],
  },
  reducers: {
    addCompletedTask: (state, action) => {
      state.taskList = [
        ...state.taskList,
        {
          id: action.payload.id,
          task: action.payload.task,
        },
      ];
    },
    deleteCompletedTask: (state, action) => {
      state.taskList = state.taskList.filter(
        (task) => task.id !== action.payload.id
      );
    },
  },
});

export const { addCompletedTask, deleteCompletedTask } =
  completedTaskSlice.actions;

export default completedTaskSlice.reducer;
