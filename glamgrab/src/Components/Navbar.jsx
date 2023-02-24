import React, { useState } from 'react';
import '../Styles/navbar.css';
import images from '../Images/glamgrab.png'
import { FaFlagUsa,FaBell,FaHeart,FaShoppingBag,FaUser,FaSearch } from 'react-icons/fa';

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
          <img src={images} alt="Logo" />
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
                    <li key={subIndex} className="navbar-submenu-item">{subSection}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <div className='icons'>
            <div>
               <div><FaFlagUsa/></div>
               <div><FaBell/></div>
               <div><FaHeart/></div>
               <div><FaShoppingBag/></div>
               <div><FaUser/></div> 
               <div><FaSearch/>Search</div>
                </div>
            </div>
      </nav>
    );
  };
  
  export default Navbar;