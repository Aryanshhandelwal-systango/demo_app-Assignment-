
import React, { useEffect, useState } from 'react';
import './cart.css';
import { useNavigate } from 'react-router-dom';
import Helmet from '../../components/Helmet/Helmet';


function Cart({ cart = [], setCart  }) {
  const [price, setPrice] = useState(0);
  const navigate = useNavigate();

  const handleCheckoutClick = () =>{
    navigate('/Checkout');
  }

  const handlePrice = () => {
    const total = cart.reduce((sum,x) => sum + (x.price), 0);
    setPrice(total);
  };

  const handleRemove = (id) => {
    const filteredCart = cart.filter((x) => x.id !== id);
    setCart(filteredCart);
  };


  useEffect(() => {
    handlePrice();
  }, [cart]);
 console.log(cart)
  return (
    <Helmet>
      
      <article>
        {cart.map((x) => (
          <div className="cart_box" key={x.id}>
            <div className="cart_img">
              
              <img src={x.img} alt={x.title} />
              <p>{x.title}</p>
              <p>{x.content}</p>
              <p>Size: {x.selectedSize}</p>
            </div>
            <div>
              
            </div>
            <div>
              <span>${x.price}</span>
              <button onClick={() => handleRemove(x.id)}>Remove</button>
            </div>
          </div>
        ))}

        <div className='total'>
          <span><b>Total Price: </b></span>
          <span><b>$ {price}</b> </span>
        </div>
        <button className='checkout_button' onClick={handleCheckoutClick}>Checkout and Place Order</button>
      </article>
    </Helmet>
  );
}

export default Cart;
