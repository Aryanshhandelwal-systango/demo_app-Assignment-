// src/store/Slices/productSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  products: [], // All products
  filteredProducts: [], // Products after filtering
  detail: null,
  close: false,
  status: 'idle',
  error: null,
};

export const fetchProducts = createAsyncThunk('product/fetchProducts', async () => {
    try {
        const response = await fetch('https://cdn.shopify.com/s/files/1/0455/2176/4502/files/products.json'); // Replace with your API URL
        const textData = await response.text(); // Get the response as text
        console.log(typeof textData, 'textData');
        const data = JSON.parse(JSON.stringify(textData)); // Parse the text as JSON\
        console.log(data);
        return data
        // try {
        //     console.log(data, 'Parsed JSON', response.body);
        //     return data;
        // } catch (jsonError) {
        //     console.log('JSON parsing error:', jsonError.message);
        //     console.log('Received data:', textData);
        //     throw jsonError; // Re-throw the error to be caught by the outer catch
        // }
    } catch (error) {
        console.error('Fetch error:', error.message);
        throw error;
    }
});
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
        console.log(action.payload, state.products)
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
        state.filteredProducts = action.payload; // Initially, all products are displayed
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setProducts, setDetail, closeDetail, filterProducts } = productSlice.actions;

export default productSlice.reducer;
