import { configureStore } from '@reduxjs/toolkit';
import orderSilce from './Slices/orderSilce';
import productSlice from './Slices/productSlice';

const store = configureStore({
  reducer: {
    product: productSlice,
    orders: orderSilce,
  },
});

export default store;
