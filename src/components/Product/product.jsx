import React, { useState } from "react";
import './Product.css';
import {AiFillCloseCircle} from 'react-icons/ai';
import ProductData from './productData';


function Product() {
  const [detail, setDetail] = useState([]);
  const[close,setClose] = useState(false);
  const detailPage = (Product) => {
    setDetail([{...Product}])
    setClose(true)
  }
  const size = ['XS','S', 'M', 'L', 'XL'];
  return (
    <>
    {
      close ?
      <div className="detail_container">
      <div className="detail_content">
        <button className="close" onClick={() => setClose(false)}><AiFillCloseCircle/></button>
        {
          detail.map((x)=>{
            return (
              <div key = {x.id}>
                <div className="detail_info">
                  <div className="img-box">
                    <img src={x.img} alt={x.title} ></img>
                  </div>
                  <div className="detail">
                    <h2>{x.title}</h2>
                    <h3>{x.content}</h3>
                    <h4>Size: {size.map((size, index) => (
            <button key={index} className='size_buttons'>{size}</button>
          ))}</h4>
                    <h3>$ {x.price}</h3>
                    <p>{x.price_Content}</p>
                    <button>Add to Cart</button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>: null
    }
 
      <div className="product_container">
        {
            ProductData.map((shirt) =>{
                return(
                    <>
                    <div className="product_box" onClick={() =>detailPage(shirt)}>
                        <div className="product_content">
                            <div className="img-box">
                                <img src={shirt.img} alt={shirt.title}></img>
                            </div>
                            <div className="product_detail">
                                <div className="info">
                                    <h3>{shirt.title}</h3>
                                    <p><b>Size:</b> {shirt.size}</p>
                                    <p><b>${shirt.price}</b></p>
                                </div>
                                <button>View</button>
                            </div>
                        </div>
                    </div></>
                )
            })
        }
      </div>
    </>
  )
}

export default Product;
