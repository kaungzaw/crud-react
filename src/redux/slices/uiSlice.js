import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sideDrawerOpen: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openSideDrawer: (state) => {
      state.sideDrawerOpen = true;
    },
    closeSideDrawer: (state) => {
      state.sideDrawerOpen = false;
    },
    toggleSideDrawer: (state) => {
      state.sideDrawerOpen = !state.sideDrawerOpen;
    },
  },
});

export const { openSideDrawer, closeSideDrawer, toggleSideDrawer } =
  uiSlice.actions;

export default uiSlice.reducer;
