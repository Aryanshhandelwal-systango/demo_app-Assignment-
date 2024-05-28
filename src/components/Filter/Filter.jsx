import React, { useState } from 'react';
import './Filter.css';

const Filter = () => {
  const [selectedOption, setSelectedOption] = useState('Option 1');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // Arrays for filters and sort options
  const filters = ['T-shirt', 'Denim', 'Sweatshirts', 'Polo T-shirts'];
  const sortOptions = [
    { value: 'Option 1', label: 'Sort by: Price Low to High' },
    { value: 'Option 2', label: 'Sort by: Price High to Low' },
    { value: 'Option 3', label: 'Sort by: Popularity' },
    { value: 'Option 4', label: 'Sort by: Newest' }
  ];

  return (
    <>
      {/*main-page-content*/}
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
            <button key={index} className='filter_buttons'>{filter}</button>
          ))}
        </span>
        <span>
          <select className='sort' value={selectedOption} onChange={handleChange}>
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

