import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: { openCart: false, itemsCount: 0, items: [] },
  reducers: {
    toggleCart: (state) => {
      state.openCart = !state.openCart;
    },
    addToCart: (state) => state,
  },
});

export const { toggleCart, addToCart } = cartSlice.actions;
export default cartSlice.reducer;
