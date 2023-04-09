import { createSlice } from "@reduxjs/toolkit";

export interface MenuListType {
  id: number;
  menuTitle: string;
}

const taskMenuSlice = createSlice({
  name: "taskMenu",
  initialState: {
    menuList: <MenuListType[]>[{ id: 0, menuTitle: "Get Started" }],
  },
  reducers: {
    renameTaskMenu: (state, { payload }) => {
      state.menuList[payload.id]["menuTitle"] = payload.menuTitle;
    },
    addTaskMenu: (state, action) => {
      state.menuList = [
        ...state.menuList,
        {
          id: action.payload.id,
          menuTitle: action.payload.menuTitle,
        },
      ];
    },
    deleteTaskMenu: (state, action) => {
      state.menuList = state.menuList.filter(
        (menu) => menu.id !== action.payload.id
      );
    },
  },
});

export const { renameTaskMenu, addTaskMenu, deleteTaskMenu } =
  taskMenuSlice.actions;

export default taskMenuSlice.reducer;
