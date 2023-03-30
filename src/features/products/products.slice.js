import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./products";

const initialState = {
  loading: false,
  error: false,
  products: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.loading = true;
    },
    [getProducts.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.products = payload;
    },
    [getProducts.rejected]: (state) => {
      state.error = true;
      state.loading = false;
    },
  },
});

export const productReducer = productSlice.reducer;
