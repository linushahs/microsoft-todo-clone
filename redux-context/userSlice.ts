import { createSlice } from "@reduxjs/toolkit";
import { User } from "firebase/auth";

export interface UserType {
  id: string;
  name: string;
  email: string;
  imgAddress: string;
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
  },
  reducers: {
    addUser: (state, action) => {
      state.userList = [...state.userList, action.payload.user];
    },
    selectUser: (state, action) => {
      state.selectedUser = { ...action.payload.user };
    },
  },
});

export const { addUser, selectUser } = userSlice.actions;

export default userSlice.reducer;
