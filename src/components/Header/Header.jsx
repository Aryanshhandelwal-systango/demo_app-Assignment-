import React  from 'react';
import { useNavigate } from 'react-router-dom';
import './header.css';
import cartIcon from '../../assets/Icon-04 1.svg';
import profileIcon from '../../assets/Icon-03 1.svg';
import searchIcon from '../../assets/Icon-02 1.svg';
import logo from '../../assets/logo.png'
import {NavLink} from 'react-router-dom';
import {Container, Row} from 'reactstrap';
//import Product from '../Product/product';


const navlinks = [
  {
    path:'/home',
    diplay:'Shop'
  },
  {
    path:'/cart',
    diplay:'About Us' //need to update the nav_links
  },
  {
    path:'/home',
    diplay:'Our Stores'
  },
  {
    path:'/home',
    diplay:'Contact Us'
  },
]



function Header({cart}) {

  const navigate = useNavigate();

  const handleCartClick = () =>{
    navigate('/Cart');
  }
  
//  console.log(cart)
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
               {navlinks.map((item,index) => (
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
              <span className='cart_icon' onClick={handleCartClick}>
              <img src={cartIcon} alt='cartIcon' />
              <span className="badge">{cart?.length}
              </span>
              </span>
            </div>
          </div>
            
          
        </Row>
      </Container>
    </header>
    
    </div>
  )
}

export default Header;
