import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoTaskSlice";
import completedTaskReducer from "./completedTaskSlice";
import taskMenuReducer from "./taskMenuSlice";

export const store = configureStore({
  reducer: {
    todoTasks: todoReducer,
    completedTasks: completedTaskReducer,
    taskMenus: taskMenuReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

store.subscribe(() => console.log("Updated state", store.getState()));

//Today I researched about database (MySQL or PostgreSQL)