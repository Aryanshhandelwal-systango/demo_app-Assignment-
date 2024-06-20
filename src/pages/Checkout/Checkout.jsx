
import React from 'react';
import Helmet from '../../components/Helmet/Helmet';
import Header from '../../components/Header/Header';
import Message from '../../components/Message_Line/Message';
import './Checkout.css'


function Checkout(  ) {
  return (
   <Helmet>
    <Header/>
    <Message/>
     <div className="checkout_container">
       <h3>Success</h3>
       <p>Your order has been placed successfully.</p>
     </div>
   </Helmet>
  )
}

export default Checkout;