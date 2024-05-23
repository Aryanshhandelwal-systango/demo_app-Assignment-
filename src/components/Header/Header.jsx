import React from 'react';
import './header.css';
import cartIcon from '../../assets/Icon-04 1.svg';
import profileIcon from '../../assets/Icon-03 1.svg';
import searchIcon from '../../assets/Icon-02 1.svg';
import logo from '../../assets/logo.png'
import {NavLink} from 'react-router-dom';
import {Container, Row} from 'reactstrap';


const nav__links = [
  {
    path:'home',
    diplay:'Shop'
  },
  {
    path:'cart',
    diplay:'About Us' //need to update the nav_links
  },
  {
    path:'home',
    diplay:'Our Stores'
  },
  {
    path:'home',
    diplay:'Contact Us'
  },
]

function Header() {
  return (
    <div>
    <header className='header'>
      <Container>
        <Row>
          <div className='nav_wrapper'>
            <div className='logo'>
              <img src={logo} alt='logo' />
            </div>

            <div className='navigation'>
              <ul className='menu'>
               {nav__links.map((item,index) => (
                <li className='nav_item' key={index}>
                  <NavLink to={item.path} className={(navClass) =>navClass.isActive ? 'nav_active' : ''}>{item.diplay}</NavLink>
                </li>
               ))}
              </ul>
            </div>

            <div className='nav_icons'>
              <span className='search_icon'>
              <img src={searchIcon} alt='searchIcon' />
              </span>
              <span className='profileIcon'>
              <img src={profileIcon} alt='profileIcon' />
               </span>
              <span className='cart_icon'>
              <img src={cartIcon} alt='cartIcon' />
              <span className="badge">1</span>
              </span>
            </div>
          </div>
          <div className='invite_box'>
            <div className='invite_content'>
            <p className='invite_line'>Invite friends to Fashion Festival & get up to $150 Bonus for every Referral</p>
            <button className='invite_button'>Invite Now</button>
            </div>
          </div>
          {/*main-page-content*/}
          <span className='small-text'>
            <p className='small-text'>Home / Clothing / Mens Clothing / All Mens Clothing</p>
          </span>
          <span className='details'>
            <p className='details'><b>All Products</b> (25 Products) </p>
          </span>
          <span className='filter'>
            <h4>Filters:</h4>
            <button className='filter_buttons'>T-shirt</button>
            <button className='filter_buttons'>Denim</button>
            <button className='filter_buttons'>Sweatshirts</button>
            <button className='filter_buttons'>Polo T-shirts</button>
          </span>
          
        </Row>
      </Container>
    </header>
    
    </div>
  )
}

export default Header;
