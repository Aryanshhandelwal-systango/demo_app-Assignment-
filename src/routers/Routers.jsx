import React, { useState } from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Home from '../pages/Home';
import Cart from '../pages/Cart/Cart';
import ProductDetails from '../pages/ProductDetails';
import Checkout from '../pages/Checkout/Checkout';
const Routers = () => {
  
  const [cart, setCart] = useState([]);

  const handleClick = (x) => {
    const {title, img, price,content} = x
    // console.log(x,cart)
    let isPresent = false;
    cart.forEach((ProductData) =>{
      if (x.id === ProductData.id)
      isPresent = true;
    })
    if(isPresent)
    return;
  setCart([...cart,x])
  }

  return (
   <Routes>
   <Route path='/' element= {<Navigate to='home' />} />
    <Route path='home' element={<Layout cart={cart}><Home handleClick={handleClick}  /></Layout>}/>
    <Route path='cart' element={<Layout cart={cart} ><Cart cart={cart} setCart={setCart}></Cart></Layout>}/>
    <Route path='checkout' element={<Checkout ></Checkout>}/>
    {/* <Route path='cart' element={<Cart/>}/> */}
    <Route path='home/:id' element={<ProductDetails/>}/>
    
   </Routes>
  );
}

export default Routers;
