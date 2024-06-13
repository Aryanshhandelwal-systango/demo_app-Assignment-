
import { createSlice, current, createAsyncThunk } from '@reduxjs/toolkit';
import test from './test.json';

const initialState = {
  products: [],
  filteredProducts: [],
  detail: null,
  close: false,
  status: 'idle',
  error: null,
};

export const fetchProducts = createAsyncThunk('product/fetchProducts', async () => {
  try {
    const response = await fetch('https://cdn.shopify.com/s/files/1/0455/2176/4502/files/products.json');
    return test;
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
      const currentState = current(state);
      const filteredData = currentState.products.filter((product) => 
        action.payload === 'All' ? true : product.tag === action.payload
      );
      state.filteredProducts = filteredData;
    },
    sortProducts(state, action) {
      const sortedData = [...state.filteredProducts].sort((a, b) => {
        if (action.payload === 'Option 1') {
          return a.price - b.price;
        } else if (action.payload === 'Option 2') {
          return b.price - a.price;
        } 
        return 0;
      });
      state.filteredProducts = sortedData;
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
        state.filteredProducts = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setProducts, sortProducts, setDetail, closeDetail, filterProducts } = productSlice.actions;

export default productSlice.reducer;
