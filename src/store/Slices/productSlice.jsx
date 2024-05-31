// src/store/Slices/productSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [], // All products
  filteredProducts: [], // Products after filtering
  detail: {},
  close: false,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
      state.filteredProducts = action.payload;
    },
    setDetail(state, action) {
      state.detail = action.payload;
      state.close = true;
    },
    closeDetail(state) {
      state.close = false;
    },
    filterProducts(state, action) {
      if (action.payload === 'All') {
        state.filteredProducts = state.products;
        console.log(action.payload)
      } else {
        state.filteredProducts = state.products.filter(
          (product) => product.category === action.payload
        );
        console.log(action.payload)
      }
    },
  },
});

export const { setProducts, setDetail, closeDetail, filterProducts } = productSlice.actions;

export default productSlice.reducer;
