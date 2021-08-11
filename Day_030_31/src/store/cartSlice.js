import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: { openCart: false, cartItemsCount: 0, cartItems: [] },
  reducers: {
    toggleCart: (state) => {
      state.openCart = !state.openCart;
    },
    loadCart: (state) => {
      let items = window.localStorage.getItem("cart");
      state.cartItems = items ? JSON.parse(items) : [];
      state.cartItemsCount = state.cartItems.length;
    },
    addToCart: (state, action) => {
      if (!state.cartItems.some((item) => item.id === action.payload.id)) {
        state.cartItems = [...state.cartItems, action.payload];
        state.cartItemsCount += 1;
        window.localStorage.setItem("cart", JSON.stringify(state.cartItems));
      }
      console.log(state.cartItemsCount);
    },
  },
});

export const { toggleCart, loadCart, addToCart } = cartSlice.actions;
export default cartSlice.reducer;
