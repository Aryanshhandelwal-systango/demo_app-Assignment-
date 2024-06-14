
// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { AiFillCloseCircle } from 'react-icons/ai';
// import { setDetail, closeDetail } from '../../store/Slices/productSlice';
// import heartIcon from '../../assets/heart.png';
// import './Product.css';

// function Product({ handleClick }) {
//   const dispatch = useDispatch();
//   const products = useSelector((state) => state.product.filteredProducts);
//   const detail = useSelector((state) => state.product.detail);
//   const close = useSelector((state) => state.product.close);
//   const status = useSelector((state) => state.product.status);
//   const error = useSelector((state) => state.product.error);
  

//   const [hoveredProductId, setHoveredProductId] = useState(null);
//   const [selectedOption, setSelectedOption] = useState({ id: null, value: null });
//   const [wishlist, setWishlist] = useState([]);
//   const [showPopup, setShowPopup] = useState({ show: false, message: '', productId: null });


//   const detailPage = (product) => {
//     dispatch(setDetail(product));
//   };

//   const handleWishlistClick = (productId) => {
//     let message;
//     if (!wishlist.includes(productId)) {
//       setWishlist([...wishlist, productId]);
//       message = 'Added to wishlist';
//     } else {
//       setWishlist(wishlist.filter((id) => id !== productId));
//       message = 'Removed from wishlist';
//     }
//     setShowPopup({ show: true, message, productId });
//     setTimeout(() => setShowPopup({ show: false, message: '', productId: null }), 2000);
//   };
//   console.log(wishlist);

//   const handleSizeClick = (option) => {
//     setSelectedOption({ id: option.id, value: option.value });
//   };

//   if (status === 'loading') {
//     return <div>Loading...</div>;
//   }

//   if (status === 'failed') {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <>
//       {close && (
//         <div className="detail_container">
//           <div className="detail_name">
//             <button className="close" onClick={() => dispatch(closeDetail())}>
//               <AiFillCloseCircle />
//             </button>
//             <div key={detail.id}>
//               <div className="detail_info">
//               <div className="wishlist-container">
//                 <div className="wishlist-icon" onClick={() => handleWishlistClick(detail.id)}>
//                   <img src={heartIcon} alt="Wishlist" className={wishlist.includes(detail.id) ? 'wishlist-icon red' : 'wishlist-icon'} />
//                   {showPopup.show && showPopup.productId === detail.id && (
//                     <div className="popup">{showPopup.message}</div>
//                   )}
//                 </div>
//               </div>
//                 <div className="image_src-box">
//                   <img src={detail.image_src} alt={detail.vendor} />
//                 </div>
//                 <div className="detail">
//                   <h2>{detail.vendor}</h2>
//                   <h3>{detail.name}</h3>
//                   <h4>
//                     Size:
//                     {detail.options.map((option) => (
//                       <button
//                         key={option.id}
//                         className="size_buttons"
//                         onClick={() => handleSizeClick(option)}
//                       >
//                         {option.value}
//                       </button>
//                     ))}
//                   </h4>
//                   <h3>$ {detail.price}</h3>
//                   <p>
//                     $<del>{detail.compare_at_price}</del>
//                     <span className="discount">
//                       ({Math.round(((detail.compare_at_price - detail.price) / detail.compare_at_price) * 100)}% OFF)
//                     </span>
//                   </p>
//                   <button onClick={() => { handleClick({ ...detail, selectedOption, amount: 1 }) }}>Add to Cart</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//       {products.length > 0 ? (
//         <div className="product_container">
//           {products.map((shirt) => (
//             <div
//               key={shirt.id}
//               className="product_box"
//               onMouseEnter={() => setHoveredProductId(shirt.id)}
//               onMouseLeave={() => setHoveredProductId(null)}
//             >
//               <div className="wishlist-container">
//                 <div className="wishlist-icon" onClick={() => handleWishlistClick(shirt.id)}>
//                   <img src={heartIcon} alt="Wishlist" className={wishlist.includes(shirt.id) ? 'wishlist-icon red' : 'wishlist-icon'} />
//                   {showPopup.show && showPopup.productId === shirt.id && (
//                     <div className="popup">{showPopup.message}</div>
//                   )}
//                 </div>
//               </div>
//               <div className="product_name">
//                 <div className="image_src-box" onClick={() => detailPage(shirt)}>
//                   <img src={shirt.image_src} alt={shirt.vendor} />
//                 </div>
//                 <div className={`product_detail ${hoveredProductId === shirt.id ? 'hide-details' : ''}`}>
//                   <div className="info">
//                     <h3>{shirt.vendor}</h3>
//                     <p>{shirt.name}</p>
//                     <span className="price_container">
//                       <b>${shirt.price}</b>
//                       <span>
//                         <del>${shirt.compare_at_price}</del>
//                         <span className="discount">
//                           ({Math.round(((shirt.compare_at_price - shirt.price) / shirt.compare_at_price) * 100)}% OFF)
//                         </span>
//                       </span>
//                     </span>
//                   </div>
//                 </div>
//                 {hoveredProductId === shirt.id && (
//                   <div className="hover_info">
//                     <div className="options-btn">
//                       Size:
//                       {shirt.options.map((option) => (
//                         <button
//                           key={option.id}
//                           className="product_size_buttons"
//                           onClick={() => handleSizeClick(option)}
//                         >
//                           {option.value}
//                         </button>
//                       ))}
//                     </div>
//                     <button className="add_to_cart-btn" onClick={() => { handleClick({ ...shirt, selectedOption, amount: 1 }) }}>Add to Cart</button>
//                   </div>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <div>No products available</div>
//       )}
//     </>
//   );
// }

// export default Product;
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AiFillCloseCircle } from 'react-icons/ai';
import { setDetail, closeDetail } from '../../store/Slices/productSlice';
import heartIcon from '../../assets/heart.png';
import './Product.css';

function Product({ handleClick, handleWishlistClick, wishlist=[] }) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.filteredProducts);
  const detail = useSelector((state) => state.product.detail);
  const close = useSelector((state) => state.product.close);
  const status = useSelector((state) => state.product.status);
  const error = useSelector((state) => state.product.error);

  const [hoveredProductId, setHoveredProductId] = useState(null);
  const [selectedOption, setSelectedOption] = useState({ id: null, value: null });
  const [showPopup, setShowPopup] = useState({ show: false, message: '', productId: null });

  const detailPage = (product) => {
    dispatch(setDetail(product));
  };

  const handleSizeClick = (option) => {
    setSelectedOption({ id: option.id, value: option.value });
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }
  console.log('w',wishlist)
  return (
    <>
      {close && (
        <div className="detail_container">
          <div className="detail_name">
            <button className="close" onClick={() => dispatch(closeDetail())}>
              <AiFillCloseCircle />
            </button>
            <div key={detail.id}>
              <div className="detail_info">
                <div className="wishlist-container">
                  <div className="wishlist-icon" onClick={() => handleWishlistClick(detail)}>
                    <img src={heartIcon} alt="Wishlist" className={wishlist?.find(item => item.id === detail.id) ? 'wishlist-icon red' : 'wishlist-icon'} />
                    {showPopup.show && showPopup.productId === detail.id && (
                      <div className="popup">{showPopup.message}</div>
                    )}
                  </div>
                </div>
                <div className="image_src-box">
                  <img src={detail.image_src} alt={detail.vendor} />
                </div>
                <div className="detail">
                  <h2>{detail.vendor}</h2>
                  <h3>{detail.name}</h3>
                  <h4>
                    Size:
                    {detail.options.map((option) => (
                      <button
                        key={option.id}
                        className="size_buttons"
                        onClick={() => handleSizeClick(option)}
                      >
                        {option.value}
                      </button>
                    ))}
                  </h4>
                  <h3>$ {detail.price}</h3>
                  <p>
                    $<del>{detail.compare_at_price}</del>
                    <span className="discount">
                      ({Math.round(((detail.compare_at_price - detail.price) / detail.compare_at_price) * 100)}% OFF)
                    </span>
                  </p>
                  <button onClick={() => { handleClick({ ...detail, selectedOption, amount: 1 }) }}>Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {products.length > 0 ? (
        <div className="product_container">
          {products.map((shirt) => (
            <div
              key={shirt.id}
              className="product_box"
              onMouseEnter={() => setHoveredProductId(shirt.id)}
              onMouseLeave={() => setHoveredProductId(null)}
            >
              <div className="wishlist-container">
                <div className="wishlist-icon" onClick={() => handleWishlistClick(shirt)}>
                  <img src={heartIcon} alt="Wishlist" className={wishlist?.find(item => item.id === shirt.id) ? 'wishlist-icon red' : 'wishlist-icon'} />
                  {showPopup.show && showPopup.productId === shirt.id && (
                    <div className="popup">{showPopup.message}</div>
                  )}
                </div>
               
              </div>
              <div className="product_name">
                <div className="image_src-box" onClick={() => detailPage(shirt)}>
                  <img src={shirt.image_src} alt={shirt.vendor} />
                </div>
                <div className={`product_detail ${hoveredProductId === shirt.id ? 'hide-details' : ''}`}>
                  <div className="info">
                    <h3>{shirt.vendor}</h3>
                    <p>{shirt.name}</p>
                    <span className="price_container">
                      <b>${shirt.price}</b>
                      <span>
                        <del>${shirt.compare_at_price}</del>
                        <span className="discount">
                          ({Math.round(((shirt.compare_at_price - shirt.price) / shirt.compare_at_price) * 100)}% OFF)
                        </span>
                      </span>
                    </span>
                  </div>
                </div>
                {hoveredProductId === shirt.id && (
                  <div className="hover_info">
                    <div className="options-btn">
                      Size:
                      {shirt.options.map((option) => (
                        <button
                          key={option.id}
                          className="product_size_buttons"
                          onClick={() => handleSizeClick(option)}
                        >
                          {option.value}
                        </button>
                      ))}
                    </div>
                    <button className="add_to_cart-btn" onClick={() => { handleClick({ ...shirt, selectedOption, amount: 1 }) }}>Add to Cart</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>No products available</div>
      )}
    </>
  );
}

export default Product;
