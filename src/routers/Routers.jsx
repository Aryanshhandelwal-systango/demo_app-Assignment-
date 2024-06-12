
import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Home from '../pages/Home';
import Cart from '../pages/Cart/Cart';
import ProductDetails from '../pages/ProductDetails';
import Checkout from '../pages/Checkout/Checkout';

const Routers = () => {
  const [cart, setCart] = useState([]);

  const handleClick = (product) => {
    const { id, selectedOption, amount } = product;
    const optionId = selectedOption.id;
    let isPresent = false;
    let updatedCart = cart.map((cartItem) => {
      if (cartItem.id === id && cartItem.selectedOption.id === optionId) {
        isPresent = true;
        return { ...cartItem, amount: cartItem.amount + amount };
      }
      return cartItem;
    });

    if (!isPresent) {
      updatedCart = [...updatedCart, { ...product, amount: 1 }];
    }

    setCart(updatedCart);
  };

  const handleChange = (product, operation) => {
    const { id, selectedOption } = product;
    const optionId = selectedOption.id;
    let updatedCart = cart.map((cartItem) => {
      if (cartItem.id === id && cartItem.selectedOption.id === optionId) {
        let newAmount = cartItem.amount + operation;
        if (newAmount < 1) newAmount = 1;
        return { ...cartItem, amount: newAmount };
      }
      return cartItem;
    });
    setCart(updatedCart);
  };

  return (
    <Routes>
      <Route path='/' element={<Navigate to='home' />} />
      <Route path='home' element={<Layout cart={cart}><Home handleClick={handleClick} /></Layout>} />
      <Route path='cart' element={<Layout cart={cart}><Cart cart={cart} setCart={setCart} handleChange={handleChange} /></Layout>} />
      <Route path='checkout' element={<Checkout />} />
      <Route path='home/:id' element={<ProductDetails />} />
    </Routes>
  );
};

export default Routers;


