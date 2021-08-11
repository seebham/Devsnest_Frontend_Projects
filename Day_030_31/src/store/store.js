import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import productsReducer from "./productsSlice";
import wishReducer from "./wishSlice";

const store = configureStore({
  reducer: { cart: cartReducer, products: productsReducer, wish: wishReducer },
});

export default store;
