import './Navbar.css';
import Burger from '../../1_MediaAssets/BrandAssets/Burger.png';
import React, { useState, useRef, useEffect } from 'react';
import ANLogo from '../../1_MediaAssets/BrandAssets/LogoWhite.png';
import { NavLink } from 'react-router-dom';

const NavbarMain = () => {
  const [isChecked, setIsChecked] = useState(false);
  const navRef = useRef(null);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const closeNavvy = () => {
    setIsChecked(false);
  };

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsChecked(false);
    }
  };

  useEffect(() => {
    if (isChecked) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isChecked]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav ref={navRef} style={{ zIndex: '10' }}>
        <input type="checkbox" id="check" checked={isChecked} onChange={handleCheckboxChange} />

        <NavLink className="nav-link" style={{margin: '0px 0px 0px 20px', zIndex: '2', cursor: 'pointer'}} to='/'>
          <img src={ANLogo} style={{width: '35px'}} alt='Imageer'/>
        </NavLink>

        <label htmlFor="check" className="checkbtn">
          <img src={Burger} alt='Burger' className='Burger' style={{ width: '27px', height: '22px', filter: 'brightness(1000%)' }}></img>
        </label>

        <ul>
          <li>
            <NavLink className="nav-link" to='/' style={{ color: 'white', cursor: 'pointer' }} onClick={() => { closeNavvy();}}>
              Home 
            </NavLink> 
          </li>
          <li>
            <NavLink className="nav-link" to='/Services' style={{ color: 'white', cursor: 'pointer' }} onClick={() => { closeNavvy(); scrollToSection('offerings'); }}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to='/Projects' style={{ color: 'white', cursor: 'pointer' }} onClick={() => { closeNavvy(); scrollToSection('gallery'); }}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to='/Blogs' style={{ color: 'white', cursor: 'pointer' }} onClick={() => { closeNavvy(); scrollToSection('gallery'); }}>
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to='/Contact' style={{ color: 'white', cursor: 'pointer' }} onClick={() => { closeNavvy(); }}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavbarMain;
