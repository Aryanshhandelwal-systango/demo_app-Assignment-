
import { createSlice, current, createAsyncThunk } from '@reduxjs/toolkit';
import test from './test.json'
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
   
        return test

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
    // filterProducts(state, action) {
    //   if (action.payload === 'All') {
    //     state.filteredProducts = state.products;
    //   } else {
    //     const filteredData = state.products.filter((product) => product.tag === action.payload);
    //     console.log('Filtered Data:', filteredData);
        
    //     state.filteredProducts = filteredData;
        
    //     if (filteredData.length === 0) {
    //       console.log("No matching products");
    //     }
    //   }
    // },
    filterProducts(state,action) {
      console.log('action',action)
      if (action.payload === 'All') {
        state.filteredProducts = state.products;
        
      } else {
         const currentState =current(state);
         const productState=currentState.products; 
     
      const filteredData = productState?.filter((product) => {
        if( product.tag === action.payload) {
          return product
        }
      })
   
      console.log(filteredData);
      state.filteredProducts = filteredData
      if(filteredData.length === 0){
       console.log("No matching products")
      }

      }
    },
    sortProducts: (state, action) => {
      // console.log('action',action)
      const currentState =current(state);
      // console.log("curr",currentState);
      const productState=[...currentState.products];
      console.log("prod",productState) ;

      
      const sortedData = productState?.sort((a,b)=>{
        if (action.payload === 'Option 1') {
          return a.price - b.price;
        } else if (action.payload === 'Option 2') {
          return b.price - a.price;
        }
        
      })
      console.log(action.payload)
      console.log(sortedData)
      /*const sortedData = [...state.filteredProducts]/*.sort((a, b) => {
        
        if (action.payload === 'Price Low to High') {
          return a.price - b.price;
        } else if (action.payload === 'Price High to Low') {
          return b.price - a.price;
        }
        return 0;
      });*/
      state.filteredProducts = sortedData;
      // console.log("FilteredData",state.filteredProducts)
      // console.log("sorteddata",state.sortedData)
    }
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
