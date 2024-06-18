import React from 'react';
import Helmet from '../components/Helmet/Helmet';
import Product from '../components/Product/product';
function Home({handleClick,handleWishlistClick,wishlist}) {
  
  return (
   <Helmet title= {'Home'} >
   <Product handleClick={handleClick} handleWishlistClick={handleWishlistClick} wishlist={wishlist} />
   </Helmet>
   
  );
}

export default Home;
