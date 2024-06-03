

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProducts} from './store/Slices/productSlice';
import Layout from './components/Layout/Layout';
//import ProductData from './components/Product/productData';
import Product from './components/Product/product';
import Routers from './routers/Routers';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <Layout />
      <Product />
    </>
  );
}

export default App;
