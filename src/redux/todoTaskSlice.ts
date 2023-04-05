import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface TaskListType {
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
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.taskList = [
        ...state.taskList,
        {
          id: action.payload.id,
          task: action.payload.task,
        },
      ];
    },
    deleteTodoTask: ({ taskList }, action) => {
      taskList.filter((task) => task.id !== action.payload.id);
    },
  },
});

export const { addTodoTask, deleteTodoTask } = todoTaskSlice.actions;
// Other code such as selectors can use the imported `RootState` type
export const selectTodoTasks = (state: RootState) => state.todoTasks.taskList;

export default todoTaskSlice.reducer;
