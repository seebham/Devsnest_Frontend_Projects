import { createSlice } from "@reduxjs/toolkit";

export const wishSlice = createSlice({
  name: "wish",
  initialState: { openWish: false, wishCount: 0, wishlist: [] },
  reducers: {
    toggleWish: (state, action) => {
      state.openWish = !state.openWish;
    },
    loadWish: (state, action) => {
      let wishes = window.localStorage.getItem("wishlist");
      state.wishlist = wishes ? JSON.parse(wishes) : [];
      state.wishCount = state.wishlist.length;
    },
    addToWishlist: (state, action) => {
      if (!state.wishlist.some((wish) => wish.id === action.payload.id)) {
        state.wishlist = [...state.wishlist, action.payload];
        state.wishCount = state.wishlist.length;
        window.localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
      }
      console.log(state.wishlist);
    },
  },
});

export const { toggleWish, loadWish, addToWishlist } = wishSlice.actions;
export default wishSlice.reducer;
