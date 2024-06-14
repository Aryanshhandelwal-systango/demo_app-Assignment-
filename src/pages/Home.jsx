import React from 'react';
import Helmet from '../components/Helmet/Helmet';
import Product from '../components/Product/product';
function Home({handleClick,handleWishlistClick,}) {
  
  return (
   <Helmet title= {'Home'} >
   <Product handleClick={handleClick} handleWishlistClick={handleWishlistClick}/>
   </Helmet>
   
  );
}

export default Home;
