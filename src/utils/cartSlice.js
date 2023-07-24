import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // Mutating the state here
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0; // [] this will not work?
    },
  },
});

// cartSlice = {actions: {addItem, removeItem}, reducer}

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;