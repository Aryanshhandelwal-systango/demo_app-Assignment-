

//   // const handleClick = (x) => {
//   //   const {id,options,amount} = x
//   //   let isPresent = false;
//   //   cart.forEach((ProductData) =>{
//   //     if (x.id === ProductData.id)
//   //     isPresent = true;
//   //   })
//   //   // if(isPresent)
//   //   // return;
   
//   //    setCart([...cart,x])
//   // }

//   // const handleChange = (x,operation) => {
//   //   console.log(x)
//   //   let ind = -1;
//   //   cart.forEach((data,index)=>{
//   //     if(data.id===x.id)
//   //       ind=index;
//   //   });
//   //   const tempArr = cart;
//   //   tempArr[ind].amount += operation;
//   //   if(tempArr[ind].amount === 0)
//   //      tempArr[ind].amount = 1
//   //     // setCart([...tempArr])
//   //     setCart([...cart, { ...x, amount: 1 }]);
//   // }

//   import React, { useState } from 'react';
//   import {Routes, Route, Navigate} from 'react-router-dom';
//   import Layout from '../components/Layout/Layout';
//   import Home from '../pages/Home';
//   import Cart from '../pages/Cart/Cart';
//   import ProductDetails from '../pages/ProductDetails';
//   import Checkout from '../pages/Checkout/Checkout';
//   const Routers = ({}) => {
  
//   const [cart, setCart] = useState([]);
//   const handleClick = (x) => {
//     const { id, selectedSize, amount } = x;
//     console.log("x",x);
//     //const optionId = options.id;
//     const optionId = selectedSize.id;
    
//     let isPresent = false;
//     let updatedCart = cart.map((product) => {
//       if (product.id === id && product.selectedSize.id === optionId) {
//         isPresent = true;
//         return { ...product, amount: product.amount + amount };
//       }
      
//       console.log("product",product.options.id)
//       return product;
//     });

//     if (!isPresent) {
//       updatedCart = [...updatedCart, { ...x, amount: 1 }];
//     }

//     setCart(updatedCart);
//   };

//   const handleChange = (x, operation) => {
//     const { id, selectedSize } = x;
//     const optionId = selectedSize.options.id;
//     let updatedCart = cart.map((product) => {
//       if (product.id === id && product.selectedSize.id === optionId) {
//         let newAmount = product.amount + operation;
//         if (newAmount < 1) newAmount = 1;
//         return { ...product, amount: newAmount };
//       }
//       return product;
//     });
//     setCart(updatedCart);
//   };
  

//   return (
//    <Routes>
//    <Route path='/' element= {<Navigate to='home' />} />
//     <Route path='home' element={<Layout cart={cart}><Home handleClick={handleClick}  /></Layout>}/>
//     <Route path='cart' element={<Layout cart={cart} ><Cart cart={cart} setCart={setCart} handleChange={handleChange} /></Layout>}/>
//     <Route path='checkout' element={<Checkout ></Checkout>}/>

//     <Route path='home/:id' element={<ProductDetails/>}/>
    
//    </Routes>
//   );
// }

// export default Routers;
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


