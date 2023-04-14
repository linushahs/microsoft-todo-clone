import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
  name: "list",
  initialState: {
    selectedList: "",
    deletedList: [],
  },
  reducers: {
    selectList: (state, action) => {
      state.selectedList = action.payload.title;
    },
  },
});

export const { selectList } = listSlice.actions;
export default listSlice.reducer;
