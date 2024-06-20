// // import React, { useEffect, useState } from 'react';
// // import Helmet from '../../components/Helmet/Helmet';
// // import Header from '../../components/Header/Header';
// // import Message from '../../components/Message_Line/Message';


// // function Orders(  ) {
// //   return (
// //    <Helmet>
// //     <Header/>
// //     <Message/>
// //      <div className="order_container">
// //        <h3>Success</h3>
       
// //      </div>
// //    </Helmet>
// //   )
// // }

// // export default Orders;
// // Orders.jsx
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import Helmet from '../../components/Helmet/Helmet';
// import Header from '../../components/Header/Header';
// import Message from '../../components/Message_Line/Message';
// import { fetchOrders } from '../../store/Slices/orderSilce';
// import './orders.css';

// const Orders = () => {
//   const dispatch = useDispatch();
//   const orders = useSelector((state) => state.orders.orders);
//   const status = useSelector((state) => state.orders.status);
//   const error = useSelector((state) => state.orders.error);

//   useEffect(() => {
//     dispatch(fetchOrders());
//   }, [dispatch]);

//   return (
//     <Helmet>
//       <Header />
//       <Message />
//       <div className="order_container">
//         {status === 'loading' && <div>Loading...</div>}
//         {status === 'failed' && <div>Error: {error}</div>}
//         {status === 'succeeded' && (
//           <>
//             {orders.length === 0 ? (
//               <p>No orders found.</p>
//             ) : (
//               orders.map((order, index) => (
//                 <div key={index} className="order">
//                   <p>Order ID: {order.id}</p>
//                   <p>Total Amount: ${order.totalAmount}</p>
//                   {/* Add more order details as needed */}
//                 </div>
//               ))
//             )}
//           </>
//         )}
//       </div>
//     </Helmet>
//   );
// };

// export default Orders;
// Orders.jsx
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import Helmet from '../../components/Helmet/Helmet';
// import Header from '../../components/Header/Header';
// import Message from '../../components/Message_Line/Message';
// import { fetchOrders } from '../../store/Slices/orderSilce';
// import './orders.css';

// const Orders = () => {
//   const dispatch = useDispatch();
//   const orders = useSelector((state) => state.orders.orders);
//   const status = useSelector((state) => state.orders.status);
//   const error = useSelector((state) => state.orders.error);

//   useEffect(() => {
//     dispatch(fetchOrders());
//   }, [dispatch]);

//   return (
//     <Helmet>
//       <Header />
//       <Message />
//       <div className="order_container">
//         {status === 'loading' && <div>Loading...</div>}
//         {status === 'failed' && <div>Error: {error}</div>}
//         {status === 'succeeded' && (
//           <>
//             {orders && orders.length === 0 ? (
//               <p>No orders found.</p>
//             ) : (
//               orders && orders.map((order, index) => (
//                 <div key={index} className="order">
//                   <h3>Order ID: {order.id}</h3>
//                   {order.items.map((item) => (
//                     <div className="cart_box" key={`${item.id}-${item.selectedOption.id}`}>
//                       <div className="cart_img">
//                         <img src={item.image_src} alt={item.vendor} />
//                         <p>{item.vendor}</p>
//                         <p>{item.name}</p>
//                         <p>Size: {item.selectedOption.value}</p>
//                       </div>
//                       <div>
//                         <span>${item.price}</span>
//                         <span>Quantity: {item.amount}</span>
//                       </div>
//                     </div>
//                   ))}
//                   <div className="order_total">
//                     <span><b>Total Amount: ${order.totalAmount}</b></span>
//                   </div>
//                 </div>
//               ))
//             )}
//           </>
//         )}
//       </div>
//     </Helmet>
//   );
// };

// export default Orders;
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Helmet from '../../components/Helmet/Helmet';
import Header from '../../components/Header/Header';
import Message from '../../components/Message_Line/Message';
import { fetchOrders } from '../../store/Slices/orderSilce';
import './orders.css';

const Orders = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.orders);
  const status = useSelector((state) => state.orders.status);
  const error = useSelector((state) => state.orders.error);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  return (
    <Helmet>
      <Header />
      <Message />
      <div className="order_container">
        {status === 'loading' && <div>Loading...</div>}
        {status === 'failed' && <div>Error: {error}</div>}
        {status === 'succeeded' && (
          <>
            {orders && orders.length === 0 ? (
              <p>No orders found.</p>
            ) : (
              orders && orders.map((order, index) => (
                <div key={index} className="order">
                  <h3>Order ID: {order.id}</h3>
                  {order.items && order.items.map((item) => (
                    <div className="cart_box" key={`${item.id}-${item.selectedOption.id}`}>
                      <div className="cart_img">
                        <img src={item.image_src} alt={item.vendor} />
                        <p>{item.vendor}</p>
                        <p>{item.name}</p>
                        <p>Size: {item.selectedOption.value}</p>
                      </div>
                      <div>
                        <span>${item.price}</span>
                        <span>Quantity: {item.amount}</span>
                      </div>
                    </div>
                  ))}
                  <div className="order_total">
                    <span><b>Total Amount: ${order.totalAmount}</b></span>
                  </div>
                </div>
              ))
            )}
          </>
        )}
      </div>
    </Helmet>
  );
};

export default Orders;
