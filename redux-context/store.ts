import { configureStore } from "@reduxjs/toolkit";
import todoReducer, { TaskListType } from "./todoTaskSlice";
import completedTaskReducer from "./completedTaskSlice";
import taskMenuReducer, { MenuListType } from "./taskMenuSlice";
import userReducer, { UserType } from "./userSlice";
import listReducer from "./listSlice";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

export const store = configureStore({
  reducer: {
    todoTasks: todoReducer,
    completedTasks: completedTaskReducer,
    taskMenus: taskMenuReducer,
    users: userReducer,
    lists: listReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
  },
});

interface FirebaseState {
  auth: any;
}

// Infer the `RootState` and `AppDispatch` types from the store itself
// define root state type
export type RootState = {
  todoTasks: {
    taskList: TaskListType[];
  };
  completedTasks: {
    taskList: TaskListType[];
  };
  taskMenus: {
    menuList: MenuListType[];
  };
  users: {
    userList: UserType[];
    selectedUser: UserType;
    taskList: TaskListType[];
  };
  lists: {
    selectedList: string;
    deletedList: string[];
  };
  firebase: FirebaseState;
};
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

store.subscribe(() => console.log("Updated state", store.getState()));

//Today I researched about database (MySQL or PostgreSQL)
