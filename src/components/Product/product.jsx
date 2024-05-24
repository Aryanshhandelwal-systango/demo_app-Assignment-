import React from "react";
import './Product.css';
import ProductData from './productData';


function product() {
  return (
    <>
      <div className="product_container">
        {
            ProductData.map((shirt) =>{
                return(
                    <>
                    <div className="product_box">
                        <div className="product_content">
                            <div className="img-box">
                                <img src={shirt.img} alt={shirt.title}></img>
                            </div>
                            <div className="product_detail">
                                <div className="info">
                                    <h3>{shirt.title}</h3>
                                    <p>{shirt.content}</p>
                                    <p>{shirt.price}</p>
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

export default product;
