
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from "react-router-dom";
import thhwhite from '../1_MediaAssets/Homepage/LogoWhite.png';
import './Navbar.scss';
// import $ from "jquery"
import React, { useState } from 'react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  function close(){
    setMenuOpen()
  }

  return (
    <div style={{zIndex: '1000000000000000000001'}}>
      <div style={{top: '0px', left: '-20px', height: '90px', width: '180px',  position: 'fixed', zIndex: '1000000000'}}></div>

      <NavLink className="nav-link" to="/">
        <img alt='thhlogo' style={{width: '48px', top: '8px', left: '20px', zIndex: '1000000000', position: 'fixed'}} src={thhwhite}/>
      </NavLink>
      

      <div className={`container ${menuOpen ? 'full-menu' : ''}`}  style={{zIndex: '1000000000000000000001'}}>
        <div className="menu-container" onClick={toggleMenu} id="toggle"  style={{zIndex: '1000000000000000000001'}}>
        {/* eslint-disable-next-line */}
          <a href="#" className="menu"  style={{zIndex: '1000000000000000000001', marginTop: '-9px'}}>
            <i className={`fa ${menuOpen ? 'fa-times' : 'fa-bars'}`} aria-hidden="true"  style={{zIndex: '100000000000'}}></i>
          </a>
        </div>
      </div>

      <div className={`overlay ${menuOpen ? 'open' : ''}` } id="overlay" style={{zIndex: '1000000000'}}>
        <nav className="overlay-menu" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <ul style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>

              <li><NavLink onClick={()=>close()} className="nav-link2" to="/" style={{fontWeight: '600'}}> Home</NavLink></li>
              <li><NavLink onClick={()=>close()} className="nav-link2" to="/Services" style={{fontWeight: '600'}}>Services</NavLink></li>
              {/* <li><NavLink onClick={()=>close()} className="nav-link2" to="/Contact" style={{fontWeight: '600'}}> Get in Touch</NavLink></li> */}
          </ul>
        </nav>
      </div>

    </div>
  );
}

export default App;