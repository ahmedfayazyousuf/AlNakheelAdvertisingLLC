
// import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import 'bootstrap/dist/js/bootstrap'
import { NavLink } from "react-router-dom";
import codebrewlogo from "./logo.png"
import { useNavigate } from 'react-router-dom';

import bar from './bar.jpg'

const Navbar = () => {
    const RenderMenu = () => {

            return (
                <>
                    <li>
                        <NavLink className="nav-link hoverable" to="/Technologies" style={{fontWeight: '300'}}>
                           Technologies
                        </NavLink>
                    </li>
                    <li >
                        <NavLink className="nav-link hoverable"  to="/Contact" style={{fontWeight: '300', marginRight:'25px',}}>
                            Get in Touch
                        </NavLink>
                    </li>
                </>
            )
    }

    const nav = useNavigate()

    function Home (){
        console.log('here')
        nav('/')
        nav(0)
    }

    // const cursorX = useMotionValue(-100);
    // const cursorY = useMotionValue(-100);
    // const springConfig = { damping: 25, stiffness: 700 };
    // // const cursorXSpring = useSpring(cursorX, springConfig);
    // // const cursorYSpring = useSpring(cursorY, springConfig);
    
    // useEffect(() => {
    //     const moveCursor = (e) => {
    //     cursorX.set(e.clientX - 16)
    //     cursorY.set(e.clientY - 16)
    //     };
    // }, [])
    
    // const [cursorXY, setCursorXY] = useState({ x: -100, y: -100 })
    
    // useEffect(() => {
    //     const moveCursor = (e) => {
    //         const x = e.clientX - 16
    //         const y = e.clientY - 16
    //         setCursorXY({ x, y })
    //     }

    //     window.addEventListener('mousemove', moveCursor)
    //     return () => {
    //     window.removeEventListener('mousemove', moveCursor)
    //     }
    // }, [])


    return (
        <nav id='navigator' className="navbar navbar-expand-lg navbar-dark" style={{backgroundImage:`url('${bar}')`,backgroundRepeat:'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize:'cover',display:'flex',width:'100%',position: 'sticky',top: '0', marginTop: '0',zIndex:'1000000000000000'}}>  

        {/* <div className="cursor" style={{transform: `translate3d(${cursorXY.x}px, ${cursorXY.y}px, 0)`}} /> */}
            
            <span className="navbar-brand" style={{flex:'20%',cursor:'pointer',justifyContent:'flex-end'}}>
                {/* <div></div> */}
                <img className='navbars' style={{marginLeft:'15px'}} src={codebrewlogo} onClick={Home} alt="the hanging house logo"/>
            </span>

            <button style={{width: '60px'}} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            
            <div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{flex:'80%'}}>
                    <ul className="navbar-nav ml-auto">
                        <RenderMenu />
                    </ul>
                </div>
            </div>

        </nav>
  )
}

export default Navbar