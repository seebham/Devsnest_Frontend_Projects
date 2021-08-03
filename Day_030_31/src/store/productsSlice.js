import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: "products",
  reducers: {
    fetchProducts: (state) => state,
  },
});

export const { fetchProducts } = productsSlice.actions;
export default productsSlice.reducer;
