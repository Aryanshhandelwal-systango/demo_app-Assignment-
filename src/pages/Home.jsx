import React from 'react';
import Helmet from '../components/Helmet/Helmet';
import Product from '../components/Product/product';
function Home({handleClick}) {
  
  return (
   <Helmet title= {'Home'} >
   <Product handleClick={handleClick}/>
   </Helmet>
   
  );
}

export default Home;
