import React, {useState} from 'react';
import './Filter.css';
function Filter() {

    const [selectedOption, setSelectedOption] = useState('Option 1');

    const handleChange = (event) => {
      setSelectedOption(event.target.value);
    };
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
            <button className='filter_buttons'>T-shirt</button>
            <button className='filter_buttons'>Denim</button>
            <button className='filter_buttons'>Sweatshirts</button>
            <button className='filter_buttons'>Polo T-shirts</button>
          </span>
          <span>
          <select className='sort' value={selectedOption} onChange={handleChange} >
            <option value="Option 1">Sort by: Price Low to High</option>
            <option value="Option 2">Sort by: Price High to Low</option>
            <option value="Option 3">Sort by: Popularity</option>
            <option value="Option 4">Sort by: Newest</option>
          </select>
          </span>
          </span>
         
    </>
  );
}

export default Filter;
