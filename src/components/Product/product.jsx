// src/components/Product/Product.jsx
// import React, {useState} from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { AiFillCloseCircle } from 'react-icons/ai';
// import { setDetail, closeDetail } from '../../store/Slices/productSlice';
// import './Product.css';

// function Product({handleClick}) {
//   const dispatch = useDispatch();
//   const products = useSelector((state) => state.product.filteredProducts);
//   const detail = useSelector((state) => state.product.detail);
//   const close = useSelector((state) => state.product.close);
//   const status = useSelector((state) => state.product.status);
//   const error = useSelector((state) => state.product.error);
 
 
//   // console.log(typeof products);
//   const [selectedSize, setSelectedSize] = useState(null);
//   const[isHover,setIsHover]=useState(false)

 
//   const detailPage = (product) => {
//     dispatch(setDetail(product));
//     setSelectedSize(null); 
//   };

//     const size = ['XS', 'S', 'M', 'L', 'XL'];

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
//                 <div className="image_src-box">
//                   <img src={detail.image_src} alt={detail.vendor} />
//                 </div>
//                 <div className="detail">
//                   <h2>{detail.vendor}</h2>
//                   <h3>{detail.name}</h3>
                  
//                   <h4>
//                     Size:
//                     {size.map((size, index) => (
//                       <button key={index} className="size_buttons" onClick={() => setSelectedSize(size)}>
//                         {size}
//                       </button>
//                     ))}
//                   </h4>
//                   <h3>$ {detail.price}</h3>
//                   <p>{detail.compare_at_price}</p>
//                   <button onClick = {() => {handleClick({...detail, selectedSize})}}>Add to Cart</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       <div className="product_container">
//         {products?.map ?.((shirt) => (
//           <div key={shirt.id} className="product_box" onClick={() => detailPage(shirt)} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
//             <div className="product_name">
//               <div className="image_src-box">
//                 <img src={shirt.image_src} alt={shirt.vendor} />
//               </div>

//                {isHover && (<div className="product_detail">
//                 <div className="info" >
//                   <h3>{shirt.vendor}</h3>
//                   <p>
//                      {shirt.name}
//                   </p>
//                   <span className='price_container'>
//                     <b>${shirt.price}</b> 
//                     <p>${shirt.compare_at_price}</p>
//                   </span>
//                 </div>
//                 <button>View</button>
//               </div>)}
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

// export default Product;

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AiFillCloseCircle } from 'react-icons/ai';
import { setDetail, closeDetail } from '../../store/Slices/productSlice';
import './Product.css';

function Product({ handleClick }) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.filteredProducts);
  const detail = useSelector((state) => state.product.detail);
  const close = useSelector((state) => state.product.close);
  const status = useSelector((state) => state.product.status);
  const error = useSelector((state) => state.product.error);

  const [hoveredProductId, setHoveredProductId] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  const detailPage = (product) => {
    dispatch(setDetail(product));
  };

  const size = ['XS', 'S', 'M', 'L', 'XL'];

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }


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
                <div className="image_src-box">
                  <img src={detail.image_src} alt={detail.vendor} />
                </div>
                <div className="detail">
                  <h2>{detail.vendor}</h2>
                  <h3>{detail.name}</h3>
                  
                  <h4>
                    Size:
                    {detail.options.map((option) => (
                          <button key={option.id} className="ize_buttons" onClick={() => setSelectedSize(option.value)}>
                            {option.value}
                          </button>
                        ))}
                  </h4>
                  <h3>$ {detail.price}</h3>
                  <p>
                    $<del>{ detail.compare_at_price}</del>
                    <span className="discount">
                      ({Math.round(((detail.compare_at_price-detail.price)/(detail.compare_at_price))*100 )}% OFF)
                    </span>
                  </p>
                  <button onClick = {() => {handleClick({...detail, selectedSize,})}}>Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="product_container">
      
        {products.map((shirt) => (
          <div
            key={shirt.id}
            className="product_box"
            onMouseEnter={() => setHoveredProductId(shirt.id)}
            onMouseLeave={() => setHoveredProductId(null)}
          >
            <div className="product_name">
              <div className="image_src-box"  onClick={() => detailPage(shirt)}>
                <img src={shirt.image_src} alt={shirt.vendor} />
              </div>
            
                <div className="product_detail">
                  <div className="info">
                    <h3>{shirt.vendor}</h3>
                    <p>{shirt.name}</p>
                    <span className="price_container">
                      <b>${shirt.price}</b>
                      
                  <span>
                  <del>${ shirt.compare_at_price}</del>
                    <span className="discount">
                    ({Math.round(((shirt.compare_at_price-shirt.price)/(shirt.compare_at_price))*100 )}% OFF)
                    </span>
                  </span>
                  {hoveredProductId === shirt.id && (
                      <div className="options-btn">
                        Size:
                        {shirt.options.map((option) => (
                          <button key={option.id} className="product_size_buttons" onClick={() => setSelectedSize(option.value)}>
                            {option.value}
                          </button>
                        ))}
                      </div>
                    )}
                      
                    </span>
                  </div>
                  {hoveredProductId === shirt.id && ( <button onClick = {() => {handleClick({...detail, selectedSize, amount: 1})}}>Add to Cart</button>)}
                </div>
              
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Product;