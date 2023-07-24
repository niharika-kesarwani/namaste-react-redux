import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
  // For Each Slice there is a Reducer
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
