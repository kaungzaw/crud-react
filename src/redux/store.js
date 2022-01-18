import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "@/redux/slices/uiSlice";

const store = configureStore({
  reducer: { ui: uiReducer },
});

export default store;
