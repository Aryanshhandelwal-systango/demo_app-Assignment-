
// import React, { useEffect, useState } from 'react';
// import './cart.css';
// import { useNavigate } from 'react-router-dom';
// import Helmet from '../../components/Helmet/Helmet';


// function Cart({ cart = [], setCart  }) {
//   const [price, setPrice] = useState(0);
//   const navigate = useNavigate();

//   const handleCheckoutClick = () =>{
//     if (cart.length > 0) {
//       navigate('/checkout');
//       setCart([]);
//     } else {
//       alert('Your cart is empty. Please add items to the cart before checking out.');
//     }
//   }

//   const handlePrice = () => {
//     const total = cart.reduce((x) => amount * (x.price), 0);
//     setPrice(total);
//   };

//   const handleRemove = (id) => {
//     const filteredCart = cart.filter((x) => x.id !== id);
//     setCart(filteredCart);
//   };

//   let amount =1;

//   useEffect(() => {
//     handlePrice();
//   }, [cart]);
//  console.log('cart')
//   return (
//     <Helmet>
      
//       <article>
//         {cart.length === 0 ? (
//           <div className="empty-cart">
//             <h3>Your cart is empty.</h3>
//           </div>
//         ) :cart.map((x) => (
//           <div className="cart_box" key={x.id}>
//             <div className="cart_img">
              
//               <img src={x.image_src} alt={x.vendor} />
//               <p>{x.vendor}</p>
//               <p>{x.name}</p>
//               <p>Size {x.selectedSize}</p>
//               <button className='quantity-btn'>+</button>
//               <button className='quantity-btn'>{amount}</button>
//               <button className='quantity-btn'>-</button>
//             </div>
//             <div>
             
//             </div>
//             <div>
//               <span>${x.price}</span>
//               <button onClick={() => handleRemove(x.id)}>Remove</button>
//             </div>
//           </div>
//         ))}

//         <div className='total'>
//           <span><b>Total Price: </b></span>
//           <span><b>$ {price}</b> </span>
//         </div>
//         <button className='checkout_button' onClick={handleCheckoutClick}>Checkout and Place Order</button>
//       </article>
//     </Helmet>
//   );
// }

// export default Cart;

import React, { useEffect, useState } from 'react';
import './cart.css';
import { useNavigate } from 'react-router-dom';
import Helmet from '../../components/Helmet/Helmet';

function Cart({ cart = [], setCart , handleChange}) {
  const [price, setPrice] = useState(0);
  const navigate = useNavigate();

  const handleCheckoutClick = () => {
    if (cart.length > 0) {
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

  const handleRemove = (id) => {
    const filteredCart = cart.filter((item) => item.id !== id);
    setCart(filteredCart);
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
            <div className="cart_box" key={item.id}>
              <div className="cart_img">
                <img src={item.image_src} alt={item.vendor} />
                <p>{item.vendor}</p>
                <p>{item.name}</p>
                <p>Size: {item.selectedSize}</p>
                <button className='quantity-btn'onClick={()=>handleChange(item,+1)}>+</button>
                <button className='quantity-btn'>{item.amount}</button>
                <button className='quantity-btn'onClick={()=>handleChange(item,-1)}>-</button>
              </div>
              <div>
                <span>${item.price}</span>
                <button className='remove-btn' onClick={() => handleRemove(item.id)}>Remove</button>
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
