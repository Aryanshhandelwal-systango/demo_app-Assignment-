import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Home from '../pages/Home';
import Cart from '../pages/Cart/Cart';
import ProductDetails from '../pages/ProductDetails';
import Checkout from '../pages/Checkout/Checkout';

const Routers = () => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    fetch('https://fir-app-c1845-default-rtdb.firebaseio.com/cart.json', {
      method: 'GET',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Cart data:', data);
        setCart(data);
      })
      .catch(error => {
        console.log({ error });
      });

    fetch('https://fir-app-c1845-default-rtdb.firebaseio.com/wishlist.json', {
      method: 'GET',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Wishlist data:', data);
        setWishlist(data);
      })
      .catch(error => {
        console.log({ error });
        console.log("wishlist",wishlist)
      });
  }, []);

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
    postCartData(updatedCart);
  };

  const postCartData = (updatedCart) => {
    fetch('https://fir-app-c1845-default-rtdb.firebaseio.com/cart.json', {
      method: 'PUT',
      body: JSON.stringify(updatedCart),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Cart data:', data);
      })
      .catch((error) => {
        console.error('Error posting cart data:', error);
      });
  };

  const handleChange = (product, operation) => {
    const { id, selectedOption } = product;
    const optionId = selectedOption.id;
    let updatedCart = cart.map((cartItem) => {
      if (cartItem.id === id && cartItem.selectedOption.id === optionId) {
        let newAmount = cartItem.amount + operation;
        if (newAmount < 1) return null;
        return { ...cartItem, amount: newAmount };
      }
      return cartItem;
    }).filter((cartItem) => cartItem !== null);

    setCart(updatedCart);
    postCartData(updatedCart);
  };

  const handleWishlistClick = (product) => {
    const { id } = product;
    let updatedWishlist;
    if (wishlist?.find(item => item.id === id)) {
      updatedWishlist = wishlist.filter(item => item.id !== id);
    } else {
      updatedWishlist = [...wishlist, product];
    }
    setWishlist(updatedWishlist);
    postWishlistData(updatedWishlist);
  };

  const postWishlistData = (updatedWishlist) => {
    fetch('https://fir-app-c1845-default-rtdb.firebaseio.com/wishlist.json', {
      method: 'PUT',
      body: JSON.stringify(updatedWishlist),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Wishlist data:', data);
      })
      .catch((error) => {
        console.error('Error posting wishlist data:', error);
      });
  };

  return (
    <Routes>
      <Route path='/' element={<Navigate to='home' />} />
      <Route path='home' element={<Layout cart={cart}><Home handleClick={handleClick} handleWishlistClick={handleWishlistClick} wishlist={wishlist} /></Layout>} />
      <Route path='cart' element={<Layout cart={cart}><Cart cart={cart} setCart={setCart} handleChange={handleChange} postCartData={postCartData} /></Layout>} />
      <Route path='checkout' element={<Checkout />} />
      <Route path='home/:id' element={<ProductDetails />} />
    </Routes>
  );
};

export default Routers;

// import React, { useState, useEffect } from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import Layout from '../components/Layout/Layout';
// import Home from '../pages/Home';
// import Cart from '../pages/Cart/Cart';
// import ProductDetails from '../pages/ProductDetails';
// import Checkout from '../pages/Checkout/Checkout';



// const Routers = () => {
//   const [cart, setCart] = useState([]);
  
 
//   useEffect(() => {


//     fetch('https://fir-app-c1845-default-rtdb.firebaseio.com/cart.json', {
//       method: 'GET',
     
//     })
//       .then(response => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then(data => {
//         console.log('PUT response:', data);
//         setCart(data);
//       })
//       .catch(error => {
//         console.log({ error });
//       });
//   }, []);
//   const handleClick = (product) => {
//     const { id, selectedOption, amount } = product;
//     const optionId = selectedOption.id;
//     let isPresent = false;
//     let updatedCart = cart.map((cartItem) => {
//       if (cartItem.id === id && cartItem.selectedOption.id === optionId) {
//         isPresent = true;
//         return { ...cartItem, amount: cartItem.amount + amount };
//       }
//       return cartItem;
//     });

//     if (!isPresent) {
//       updatedCart = [...updatedCart, { ...product, amount: 1 }];
//     }

//     setCart(updatedCart);
//     postCartData(updatedCart);
    
//   };
//   const postCartData = () => {
    
//     fetch('https://fir-app-c1845-default-rtdb.firebaseio.com/cart.json', {
//       method: 'PUT',
//       body: JSON.stringify(cart)
     
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log('Cart data ', data);
//       })
//       .catch((error) => {
//         console.error('Error posting cart data:', error);
//       });
//   };
  

//   const handleChange = (product, operation) => {
//     const { id, selectedOption } = product;
//     const optionId = selectedOption.id;
//     let updatedCart = cart.map((cartItem) => {
//       if (cartItem.id === id && cartItem.selectedOption.id === optionId) {
//         let newAmount = cartItem.amount + operation;
//         if (newAmount < 1) return null;
//         return { ...cartItem, amount: newAmount };
//       }
//       return cartItem;
//     }).filter((cartItem) => cartItem !== null);;
//     setCart(updatedCart);
//     postCartData(updatedCart);
//   };

//   return (
//     <Routes>
//       <Route path='/' element={<Navigate to='home' />} />
//       <Route path='home' element={<Layout cart={cart}><Home handleClick={handleClick} /></Layout>} />
//       <Route path='cart' element={<Layout cart={cart}><Cart cart={cart} setCart={setCart} handleChange={handleChange} postCartData={postCartData} /></Layout>} />
//       <Route path='checkout' element={<Checkout />} />
//       <Route path='home/:id' element={<ProductDetails />} />
//     </Routes>
//   );
// };

// export default Routers;


