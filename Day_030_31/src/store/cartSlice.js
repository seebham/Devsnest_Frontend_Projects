import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: "cart",
  reducers: { addToCart: (state) => {} },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
