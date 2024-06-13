
import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Home from '../pages/Home';
import Cart from '../pages/Cart/Cart';
import ProductDetails from '../pages/ProductDetails';
import Checkout from '../pages/Checkout/Checkout';



const Routers = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // fetch('https://cdn.shopify.com/s/files/1/0455/2176/4502/files/products.json', {
    //   method: 'GET'
    // })
    //   .then(response => {
    //     if (!response.ok) {
    //       throw new Error(`HTTP error! status: ${response.status}`);
    //     }
    //     return response.json();
    //   })
    //   .then(data => {
    //     setProducts(data);
    //   })
    //   .catch(error => {
    //     console.log({ error });
    //   });

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
        console.log('PUT response:', data);
        setCart(data);
      })
      .catch(error => {
        console.log({ error });
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
    // fetch('https://fir-app-c1845-default-rtdb.firebaseio.com/cart.json', {
    //   method: 'PUT',
     
    //   body: JSON.stringify(updatedCart)
    // })
    //   .then(response => {
    //     if (!response.ok) {
    //       throw new Error(`HTTP error! status: ${response.status}`);
    //     }
    //     return response.json();
    //   })
    //   .then(data => {
    //     console.log('Cart PUT response:', data);
    //   })
    //   .catch(error => {
    //     console.log({ error });
    //   });
    
  };
  const postCartData = () => {
    
    fetch('https://fir-app-c1845-default-rtdb.firebaseio.com/cart.json', {
      method: 'PUT',
     
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Cart data ', data);
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
        if (newAmount < 1) newAmount = 1;
        return { ...cartItem, amount: newAmount };
      }
      return cartItem;
    });
    setCart(updatedCart);
    postCartData(updatedCart);
  };

  return (
    <Routes>
      <Route path='/' element={<Navigate to='home' />} />
      <Route path='home' element={<Layout cart={cart}><Home handleClick={handleClick} /></Layout>} />
      <Route path='cart' element={<Layout cart={cart}><Cart cart={cart} setCart={setCart} handleChange={handleChange} postCartData={postCartData} /></Layout>} />
      <Route path='checkout' element={<Checkout />} />
      <Route path='home/:id' element={<ProductDetails />} />
    </Routes>
  );
};

export default Routers;


