import React, { useState } from 'react';

const FilterAndSort = () => {
  const [selectedOption, setSelectedOption] = useState('Option 1');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  
  const filters = ['T-shirt', 'Denim', 'Sweatshirts', 'Polo T-shirts'];

  
  const sortOptions = [
    { value: 'Option 1', label: 'Sort by: Price Low to High' },
    { value: 'Option 2', label: 'Sort by: Price High to Low' },
    { value: 'Option 3', label: 'Sort by: Popularity' },
    { value: 'Option 4', label: 'Sort by: Newest' }
  ];

  return (
    <div className="filter_sort">
      <div className="filter">
        <h4>Filters:</h4>
        {filters.map((filter, index) => (
          <button key={index} className="filter_buttons">{filter}</button>
        ))}
      </div>
      <div>
        <select className="sort" value={selectedOption} onChange={handleChange}>
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterAndSort;
