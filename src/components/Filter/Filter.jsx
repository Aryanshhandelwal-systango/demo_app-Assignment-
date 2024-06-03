// src/components/Filter/Filter.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import './Filter.css';
import { filterProducts } from '../../store/Slices/productSlice';
import { useState } from 'react';

const Filter = () => {
  const [selectedOption, setSelectedOption] = useState('Option 1');

  const dispatch = useDispatch();
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    dispatch(filterProducts(event.target.value));
  };
  const filters = ['All', 'T-shirt', 'Denim', 'Sweatshirts', 'Polo T-shirts'];

  const sortOptions = [
    { value: 'Option 1', label: 'Sort by: Price Low to High' },
    { value: 'Option 2', label: 'Sort by: Price High to Low' },
  ]

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
        <span className='sort'>
        <select className="sort" value={selectedOption} onChange={handleChange}>
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
        </span>
      </span>
    </>
  );
};

export default Filter;
