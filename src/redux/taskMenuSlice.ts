import { createSlice } from "@reduxjs/toolkit";

export interface MenuListType {
  id: string;
  menuTitle: string;
}

const taskMenuSlice = createSlice({
  name: "taskMenu",
  initialState: {
    menuList: <MenuListType[]>[
      { id: new Date().toString(), menuTitle: "Get Started" },
    ],
  },
  reducers: {
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

export const { addTaskMenu, deleteTaskMenu } = taskMenuSlice.actions;

export default taskMenuSlice.reducer;
