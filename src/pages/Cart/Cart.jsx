
// import React, { useEffect, useState } from 'react';
// import './cart.css';
// import { useNavigate } from 'react-router-dom';
// import Helmet from '../../components/Helmet/Helmet';

// function Cart({ cart = [], setCart, handleChange,postCartData }) {
//   const [price, setPrice] = useState(0);
//   const navigate = useNavigate();

//   const handleCheckoutClick = () => {
//     if (cart.length > 0) {
//       postCartData(cart)
//       navigate('/checkout');
//       setCart([]);
//     } else {
//       alert('Your cart is empty. Please add items to the cart before checking out.');
//     }
//   };

//   const handlePrice = () => {
//     const total = cart.reduce((acc, item) => acc + item.price * item.amount, 0);
//     setPrice(total);
//   };

//   const handleRemove = (id, optionId) => {
//     const filteredCart = cart.filter((item) => !(item.id === id && item.selectedOption.id === optionId));
//     setCart(filteredCart);
//   };

//   useEffect(() => {
//     handlePrice();
//   }, [cart]);

//   return (
//     <Helmet>
//       <article>
//         {cart.length === 0 ? (
//           <div className="empty-cart">
//             <h3>Your cart is empty.</h3>
//           </div>
//         ) : (
//           cart.map((item) => (
//             <div className="cart_box" key={`${item.id}-${item.selectedOption.id}`}>
//               <div className="cart_img">
//                 <img src={item.image_src} alt={item.vendor} />
//                 <p>{item.vendor}</p>
//                 <p>{item.name}</p>
//                 <p>Size: {item.selectedOption.value}</p>
//                 <button className='quantity-btn' onClick={() => handleChange(item, 1)}>+</button>
//                 <button className='quantity-btn'>{item.amount}</button>
//                 <button className='quantity-btn' onClick={() => handleChange(item, -1)}>-</button>
//                 </div>
//                 <div>
//                 <span>${item.price}</span>
//                 <button className='remove-btn' onClick={() => handleRemove(item.id, item.selectedOption.id)}>Remove</button>
//                 </div>
//             </div>
//           ))
//         )}
//         {cart.length > 0 && (
//            <>
//              <div className='total'>
//                  <span><b>Total Price: </b></span>
//                  <span><b>${price}</b></span>
//                </div>
//                <button className='checkout_button' onClick={handleCheckoutClick}>Checkout and Place Order</button>
//            </>
//         )}
//       </article>
//     </Helmet>
//   );
// }

// export default Cart;
import React, { useEffect, useState } from 'react';
import './cart.css';
import { useNavigate } from 'react-router-dom';
import Helmet from '../../components/Helmet/Helmet';

function Cart({ cart = [], setCart, postCartData }) {
  const [price, setPrice] = useState(0);
  const navigate = useNavigate();

  const handleCheckoutClick = () => {
    if (cart.length > 0) {
      postCartData(cart);
      navigate('/checkout');
      setCart([]);
    } else {
      alert('Your cart is empty. Please add items to the cart before checking out.');
    }
  };

  const handlePrice = () => {
    const total = cart.reduce((acc, item) => acc + item.price * item.amount, 0);
    setPrice(total);
  };

  const handleRemove = (id, optionId) => {
    const filteredCart = cart.filter((item) => !(item.id === id && item.selectedOption.id === optionId));
    setCart(filteredCart);
  };

  const handleQuantityChange = (item, delta) => {
    const updatedCart = cart.map((cartItem) => {
      if (cartItem.id === item.id && cartItem.selectedOption.id === item.selectedOption.id) {
        const newAmount = cartItem.amount + delta;
        if (newAmount <= 0) {
          handleRemove(cartItem.id, cartItem.selectedOption.id);
          return null; 
        }
        return { ...cartItem, amount: newAmount };
      }
      return cartItem;
    }).filter((cartItem) => cartItem !== null); 
    setCart(updatedCart);
  };

  useEffect(() => {
    handlePrice();
  }, [cart]);

  return (
    <Helmet>
      <article>
        {cart.length === 0 ? (
          <div className="empty-cart">
            <h3>Your cart is empty.</h3>
          </div>
        ) : (
          cart.map((item) => (
            <div className="cart_box" key={`${item.id}-${item.selectedOption.id}`}>
              <div className="cart_img">
                <img src={item.image_src} alt={item.vendor} />
                <p>{item.vendor}</p>
                <p>{item.name}</p>
                <p>Size: {item.selectedOption.value}</p>
                <button className='quantity-btn' onClick={() => handleQuantityChange(item, 1)}>+</button>
                <button className='quantity-btn'>{item.amount}</button>
                <button className='quantity-btn' onClick={() => handleQuantityChange(item, -1)}>-</button>
              </div>
              <div>
                <span>${item.price}</span>
                <button className='remove-btn' onClick={() => handleRemove(item.id, item.selectedOption.id)}>Remove</button>
              </div>
            </div>
          ))
        )}
        {cart.length > 0 && (
          <>
            <div className='total'>
              <span><b>Total Price: </b></span>
              <span><b>${price}</b></span>
            </div>
            <button className='checkout_button' onClick={handleCheckoutClick}>Checkout and Place Order</button>
          </>
        )}
      </article>
    </Helmet>
  );
}

export default Cart;
