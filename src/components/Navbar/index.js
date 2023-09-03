// import bar from './bar.jpg';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'
import BrandImage from '../MediaAssets/Homepage/Logo.png';
import HamburgerImage from '../MediaAssets/Homepage/Burger.png';

const Navbar = () => {
        const nav = useNavigate()
        const [showNavbar, setShowNavbar] = useState(false)

        const handleShowNavbar = () => {
            setShowNavbar(!showNavbar)
        }
        
        function Home (){
            console.log('here')
            nav('/')
            nav(0)
        }

  return (
    // <div className='navvy' style={{backgroundImage:`url('${bar}')`,backgroundRepeat:'no-repeat',backgroundPosition: 'center center',backgroundSize:'cover',display:'flex',width:'100%',position: 'sticky',top: '0', marginTop: '0',zIndex:'1000000000000000'}}>
    <div className='navvy' style={{display:'flex',width:'100%',position: 'sticky',top: '0', marginTop: '0',zIndex:'1000000000000000', backgroundColor: 'black'}}>
      <nav className="navbar">
        <div className="conntainer">

            <span style={{flex:'50%',cursor:'pointer',justifyContent:'start', flexDirection: 'row', display: 'flex', alignItems: 'center'}}>
                <img style={{width: '35px', marginLeft: '15px'}} src={BrandImage} alt="Brand Logo" />
                <p onClick={Home} className='navtext'>Al Nakheel Advertising LLC</p>
            </span>

          <div className="menu-icon" style={{width: '30px', marginRight: '15px'}} onClick={handleShowNavbar}>
            <img style={{width: '25px'}} src={HamburgerImage} alt="Hamburger Icon" />
          </div>

          <div className={`nav-elements  ${showNavbar && 'active'}`} style={{display:'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px'}}>
            <ul>
              <li>
                <NavLink to="/Services" style={{ fontWeight: '300', color: 'grey'}}>
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/Projects" style={{ fontWeight: '300', marginRight: '25px', color: 'grey' }}>
                  Gallery
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbar

































// // import React, { useState, useEffect } from "react";
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap';
// import 'bootstrap/dist/js/bootstrap'
// import { NavLink } from "react-router-dom";
// import { useNavigate } from 'react-router-dom'; 
// import logo from '../MediaAssets/Homepage/Logo.png';

// import bar from './bar.jpg'
 
// const Navbar = () => {
//     const RenderMenu = () => {

//             return (
//                 <>
//                     <li>
//                         <NavLink className="nav-link hoverable" to="/Services" style={{fontWeight: '300'}}>
//                            Services
//                         </NavLink>
//                     </li>

//                     <li>
//                         <NavLink className="nav-link hoverable" to="/Projects" style={{fontWeight: '300', marginRight:'25px'}}>
//                            Gallery
//                         </NavLink>
//                     </li>

//                     {/* <li>
//                         <NavLink className="nav-link hoverable"  to="/Contact" style={{fontWeight: '300', marginRight:'25px'}}>
//                             Get in Touch
//                         </NavLink>
//                     </li> */}
//                 </>
//             )
//     }

//     const nav = useNavigate()

//     function Home (){
//         console.log('here')
//         nav('/')
//         nav(0)
//     }

//     return (
//         <nav id='navigator' className="navbar navbar-expand-lg navbar-dark" style={{backgroundImage:`url('${bar}')`,backgroundRepeat:'no-repeat',backgroundPosition: 'center center',backgroundSize:'cover',display:'flex',width:'100%',position: 'sticky',top: '0', marginTop: '0',zIndex:'1000000000000000'}}>  
        
//             <span className="navbar-brand" style={{flex:'20%',cursor:'pointer',justifyContent:'start', flexDirection: 'row', display: 'flex', alignItems: 'center'}}>
//                 <img className='navbars' style={{marginLeft:'15px', width: '40px'}} src={logo} onClick={Home} alt="the hanging house logo"/>
//                 <p onClick={Home} className='navtext'>Al Nakheel Advertising LLC</p>
//             </span>
//             {/* <p style={{fontSize: '25px', marginLeft: '15px', color: 'white'}}>Al Nakheel Advertising LLC</p> */}

//             <button style={{width: '60px'}} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//             </button>
            
//             <div>
//                 <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{flex:'80%'}}>
//                     <ul className="navbar-nav ml-auto">
//                         <RenderMenu />
//                     </ul>
//                 </div>
//             </div>

//         </nav>
//   )
// }

// export default Navbar