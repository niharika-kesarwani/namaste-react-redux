import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
  // for each slice there is a reducer
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
