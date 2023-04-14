import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoTaskSlice";
import completedTaskReducer from "./completedTaskSlice";
import taskMenuReducer from "./taskMenuSlice";
import userReducer from "./userSlice";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

export const store = configureStore({
  reducer: {
    todoTasks: todoReducer,
    completedTasks: completedTaskReducer,
    taskMenus: taskMenuReducer,
    users: userReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

store.subscribe(() => console.log("Updated state", store.getState()));

//Today I researched about database (MySQL or PostgreSQL)
