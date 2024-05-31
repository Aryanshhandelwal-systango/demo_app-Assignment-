// src/components/Filter/Filter.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import './Filter.css';
import { filterProducts } from '../../store/Slices/productSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const filters = ['All', 'T-shirt', 'Denim', 'Sweatshirts', 'Polo T-shirts'];

  const handleFilter = (filter) => {
    dispatch(filterProducts(filter));
  };

  return (
    <>
      <span className='small-text'>
        <p className='small-text'>Home / Clothing / Mens Clothing / All Mens Clothing</p>
      </span>

      <span className='details'>
        <p className='details'><b>All Products</b> (25 Products) </p>
      </span>

      <span className="filter_sort">
        <span className='filter'>
          <h4>Filters:</h4>
          {filters.map((filter, index) => (
            <button key={index} className='filter_buttons' onClick={() => handleFilter(filter)}>
              {filter}
            </button>
          ))}
        </span>
      </span>
    </>
  );
};

export default Filter;
