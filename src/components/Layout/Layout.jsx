import React, { useState } from 'react';
import Header from '../Header/Header';
import Routers from '../../routers/Routers';
import Message from '../Message_Line/Message';
import Filter from '../Filter/Filter';
import Cart from '../../pages/Cart/Cart';
import ProductData from '../Product/productData';

function Layout({children, cart, setCart}) {
  
  return (
    <>
    
      <Header cart={cart} />
      <Message />
      <Filter/>
      
      <div>
        {children}
        {/* <Routers handleClick={handleClick} cart={cart} setCart={setCart}/> */}
      </div>
     
    </>
  )
}

export default Layout;
