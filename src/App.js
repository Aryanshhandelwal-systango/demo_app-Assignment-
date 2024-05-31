
// src/App.jsx
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setProducts } from './store/Slices/productSlice';
import Layout from './components/Layout/Layout';
// import Product from './components/Product/Product';
import ProductData from './components/Product/productData';
import Product from './components/Product/product';
import Routers from './routers/Routers';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProducts(ProductData));
  }, [dispatch]);

  return (
    <>
      <Layout />
      <Product />
    </>
  );
}

export default App;
