// src/components/Product/Product.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AiFillCloseCircle } from 'react-icons/ai';
import { setDetail, closeDetail } from '../../store/Slices/productSlice';
import './Product.css';

function Product() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.filteredProducts);
  const detail = useSelector((state) => state.product.detail);
  const close = useSelector((state) => state.product.close);

  const detailPage = (product) => {
    dispatch(setDetail(product));
  };

  const size = ['XS', 'S', 'M', 'L', 'XL'];

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
                  <h3>{detail.tag}</h3>
                  <h4>
                    Size:
                    {size.map((size, index) => (
                      <button key={index} className="size_buttons">
                        {size}
                      </button>
                    ))}
                  </h4>
                  <h3>$ {detail.price}</h3>
                  <p>{detail.compare_at_price}</p>
                  <button>Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="product_container">
        {products.map((shirt) => (
          <div key={shirt.id} className="product_box" onClick={() => detailPage(shirt)}>
            <div className="product_name">
              <div className="image_src-box">
                <img src={shirt.image_src} alt={shirt.vendor} />
              </div>
              <div className="product_detail">
                <div className="info">
                  <h3>{shirt.vendor}</h3>
                  <p>
                    <b>Size:</b> {shirt.size}
                  </p>
                  <p>
                    <b>${shirt.price}</b>
                  </p>
                </div>
                <button>View</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Product;

