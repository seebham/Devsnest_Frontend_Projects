import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: { currentProduct: null, areFetched: false, productsArray: [] },
  reducers: {
    setFetchedProducts: (state, action) => {
      state.areFetched = true;
      state.currentProduct = action.payload[0];
      state.productsArray = action.payload;
    },
    setCurrentProduct: (state, action) => {
      state.currentProduct = action.payload;
    },
  },
});

export const fetchProducts = () => async (dispatch) => {
  let req = await fetch(`https://fakestoreapi.com/products`);
  let res = await req.json();
  dispatch(setFetchedProducts(res));
};

export const fetchCurrentProduct = (id) => async (dispatch) => {
  let req = await fetch(`https://fakestoreapi.com/products/${id}`);
  let res = await req.json();
  dispatch(setCurrentProduct(res));
};

export const { setFetchedProducts, setCurrentProduct } = productsSlice.actions;
export default productsSlice.reducer;
