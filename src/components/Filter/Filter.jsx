
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './Filter.css';
import { filterProducts, sortProducts } from '../../store/Slices/productSlice';

const Filter = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [selectedSort, setSelectedSort] = useState('All');
  const dispatch = useDispatch();

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    dispatch(filterProducts(filter));
    dispatch(sortProducts(selectedSort));
  };

  const handleSortChange = (event) => {
    const sort = event.target.value;
    setSelectedSort(sort);
    dispatch(sortProducts(sort));
  };

  const filters = ['All', 'T-shirt', 'Denim', 'Sweatshirts', 'Polo T-shirts'];
  const sortOptions = [
    { value: 'All', label: 'All' },
    { value: 'Option 1', label: 'Sort by: Price Low to High' },
    { value: 'Option 2', label: 'Sort by: Price High to Low' },
  ];

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
            <button key={index} className='filter_buttons' onClick={() => handleFilterChange(filter)}>
              {filter}
            </button>
          ))}
        </span>
        <span className='sort'>
          <select className="sort" value={selectedSort} onChange={handleSortChange}>
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
