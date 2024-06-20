
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  orders: [],
  status: 'idle',
  error: null,
};


export const fetchOrders = createAsyncThunk('orders/fetchOrders', async () => {
  const response = await fetch('https://fir-app-c1845-default-rtdb.firebaseio.com/orders.json');
  if (!response.ok) {
    throw new Error('Failed to fetch orders');
  }
  const data = await response.json();
  return data;
});

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.orders = action.payload;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default ordersSlice.reducer;


