import React, { useState } from 'react';
import '../Styles/navbar.css';
import images from '../Images/glamgrab.png'
import { Searchbar } from './Search';
import { FaFlagUsa,FaBell,FaHeart,FaShoppingBag,FaUser} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(null);
  
    const handleMenuClick = (index) => {
      setActiveMenu(activeMenu === index ? null : index);
    }
  
    const sections = [
      {
        title: 'WOMEN',
        subSections: ['SHOP ALL','CLOTHING','BAGS','SHOES','ACCESSORIES','BEAUTY','SALE','PRE-OWNED'],
      },
      {
        title: 'MEN',
        subSections: ['SHOP ALL','CLOTHING','BAGS','SHOES','ACCESSORIES','GROOMING','SALE','PRE-OWNED'],
      },
      {
        title: 'BEAUTY',
        subSections: ['SHOP ALL','WOMENS BEAUTY','MENS GROOMING','KIDS CARE','SALE'],
      },
      {
        title: 'KIDS',
        subSections: ['SHOP ALL','BABY GIRLS','BABY BOYS','GIRLS','BOYS','SALE'],
      },
      {
        title: 'HOME',
        subSections: ['NEW ARRIVALS','SHOP ALL','BATH','BED','FURNITURE','HOME DECOR','KITCHEN & DINING','PET ACCESSORIES'],
      },
      {
        title: 'DESIGNERS',
        subSections: ['GUCCI','SAINT LAURENT','VALENTINO','VERSACE','BALENCIAGA','BURBERRY','PRADA'],
      },
      {
        title: 'COMMUNITY',
        subSections: ['DISCOVER','BLOGS','MY CLOSET','INFLUENCER','PROGRAM'],
      },
      {
        title: 'SALE',
        subSections: ['COUPONS','WOMENS SALE','MENS SALE','BEAUTYS SALE','KIDS SALE','HOMES SALE'],
      },
    ];
  
    return (
      <nav className="navbar">
        <div className="navbar-logo">
        <NavLink to="/"><img src={images} alt="Logo" /></NavLink>
        </div>
        <ul className="navbar-menu">
          {sections.map((section, index) => (
            <li
              key={index}
              className={`navbar-menu-item ${activeMenu === index ? 'active' : ''}`}
              onMouseEnter={() => handleMenuClick(index)}
              onMouseLeave={() => handleMenuClick(index)}
            >
              {section.title}
              {activeMenu === index && (
                <ul className="navbar-submenu">
                  {section.subSections.map((subSection, subIndex) => (
                   <NavLink style={{ textDecoration: 'none'}} to="products"><li key={subIndex} className="navbar-submenu-item">{subSection}</li></NavLink>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        
        <div className='icons'>
            <div>
               <div><NavLink style={{ textDecoration: 'none'}} to="/"><FaFlagUsa/></NavLink></div>
               <div><NavLink style={{ textDecoration: 'none'}} to="/"><FaBell/></NavLink></div>
               <div><NavLink style={{ textDecoration: 'none'}} to="/cart"><FaHeart/></NavLink></div>
               <div><NavLink style={{ textDecoration: 'none'}} to="/cart"><FaShoppingBag/></NavLink></div>
               <div><NavLink style={{ textDecoration: 'none'}} to="/login"><FaUser/></NavLink></div> 
               
                </div>
            </div>
      </nav>
    );
  };
  
  export default Navbar;
