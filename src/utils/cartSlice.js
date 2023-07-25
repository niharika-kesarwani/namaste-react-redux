import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // redux toolkit uses immer BTS
      // have to mutate the state
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state) => {
      // RTK - either mutate existing state or return a new state
      // state.items.length = 0; // original state = []

      return { items: [] }; // this new [] will be replaced inside originalState = {items: []}
    },
  },
});

// cartSlice = {actions: {addItem, removeItem}, reducer}

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
