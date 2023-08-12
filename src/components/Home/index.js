// eslint-disable-next-line
import { motion, useMotionValue } from "framer-motion";
// eslint-disable-next-line
import React, { useState, useEffect, useSpring } from "react"

import tv from '../CodebrewAssets/Images/HomePage/alexander-shatov-DHl49oyrn7Y-unsplash.psd.png';
import logo from '../CodebrewAssets/Images/HomePage/Asset 17.png';
import video from '../CodebrewAssets/Images/HomePage/video.mp4';


 
const Home = () =>{
 
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    // eslint-disable-next-line
    const springConfig = { damping: 25, stiffness: 700 };
    // const cursorXSpring = useSpring(cursorX, springConfig);
    // const cursorYSpring = useSpring(cursorY, springConfig);
    
    useEffect(() => {
        // eslint-disable-next-line
        const moveCursor = (e) => {
        cursorX.set(e.clientX - 16)
        cursorY.set(e.clientY - 16)
        };
        // eslint-disable-next-line
    }, [])
    
    const [cursorXY, setCursorXY] = useState({ x: -100, y: -100 })
    
    useEffect(() => {
        const moveCursor = (e) => {
            const x = e.clientX - 16
            const y = e.clientY - 16
            setCursorXY({ x, y })
        }

        window.addEventListener('mousemove', moveCursor)
        return () => {
        window.removeEventListener('mousemove', moveCursor)
        }
    }, [])

    

    return( 
        <div style={{height:'100%', overflow: 'hidden',background:'#E32961'}} id="lol" className="lol">
            {/* <div className="cursor" style={{transform: `translate3d(${cursorXY.x}px, ${cursorXY.y}px, 0)`}} /> */}
            {/* <motion.div className="cursor" style={{translateX:'cursorXSpring', translateY:'cursorYSpring', transform: `translate3d(${cursorXY.x}px, ${cursorXY.y}px, 0)`}} /> */}
            <div className="cursor" style={{transform: `translate3d(${cursorXY.x}px, ${cursorXY.y}px, 0)`, zIndex: '1000000000000000000000000000'}} />

            <div id="girlvid" style={{backgroundSize:'cover',height:'90vh',width:'100vw',overflow:'hidden',position:'relative',marginBottom:'-20px'}}>

                <video id="background-video2" autoPlay loop muted style={{height: '100%', width: '100vw',zIndex:'0',position:'relative',objectFit:'cover'}}>
                        <source src={video} type='video/mp4' />
                </video>
                {/* eslint-disable-next-line */}
                <div className="contentt" style={{width:'100%',height:'100%', display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',zIndex:'10',position:'absolute',top:'0',left:'0',zIndex:'100', marginTop: '-20px'}}>
                    <p className="every">
                        Everything starts with a line of code
                    </p>
                    {/* eslint-disable-next-line */}
                    <a href="https://api.whatsapp.com/send?phone=971505217178&text=Hello!" target="_blank">
                        <button className="bookacall">Book a Call</button>
                    </a>
                    
                </div>
             
            </div>


            <div class='main'>
                <div class='products'>
                    <div class='phover'>
                        <h1 className="phead" style={{textAlign: 'center',fontSize: '25px'}}>
                            OUR PRODUCTS
                        </h1>

                        <div className="line">

                        </div>

                        <p className="pcontent" style={{textAlign: 'center', fontSize: '12px', padding: '15px'}}>
                            With the use of our technologies, we bring to you products both, old and new.
                        </p>

                        {/* eslint-disable-next-line */}
                        <a href="#" target="_blank">
                        {/* eslint-disable-next-line */}
                            <button  id="pbutton" className="pbutton">
                                EXPLORE
                            </button>
                        </a>
                    </div>
                </div>
        
                <div class='tech'>
                    <div class='stech'>
                        <h1 className="phead" style={{textAlign: 'center',fontSize: '25px'}}>
                            ACTIVATIONS
                        </h1>
                            <div className="line" style={{background: 'white'}}>

                            </div>

                            <p className="pcontent" style={{textAlign: 'center',fontSize: '12px',padding: '15px',color: 'white'}}>
                                Our ideas are formulated keeping our technologies at the base. Although, we speak tech, we understand not everyone else does. Click here – we’ve broken it down for you
                            </p>
                            {/* eslint-disable-next-line */}
                        <a href="#" target="_blank">
                            <button  className="pbutton" style={{background: 'white',color: 'black'}}>
                                EXPLORE
                            </button>
                        </a>
                    </div>
                </div>

                <div class='services'>
                <div class='shover'>
                    <h1 className="phead" style={{textAlign: 'center',fontSize: '25px'}}>
                        TECHNOLOGIES
                    </h1>
                        <div className="line">

                        </div>

                        <p className="pcontent" style={{textAlign: 'center',fontSize: '12px',padding: '15px'}}>
                            Our ideas are formulated keeping our technologies at the base. Although, we speak tech, we understand not everyone else does. Click here – we’ve broken it down for you
                        </p>
                        {/* eslint-disable-next-line */}
                        <a href="#" target="_blank">
                            <button className="pbutton">
                                EXPLORE
                            </button>
                        </a>
                </div>
            </div>
      
 
        </div>

            <div className="whoo" style={{width:'100%',background:'#E32961',display:'flex',justifyContent:'center',alignItems:'center'}}>

                <div style={{display: 'flex', flexDirection: 'column', width: '60%'}}>
                    <p style={{color:'white',marginBottom:'42px', fontSize: '40px'}}>WHO WE ARE</p>

                    <p className="para">
                        Codebrew is a technology agency that specializes in crafting innovative digital solutions for businesses. With a team of experienced developers and designers. Codebrew delivers customized software, web, and mobile app development services that drive business growth and success. 
                    </p>
                    {/* eslint-disable-next-line */}
                    <a href="https://api.whatsapp.com/send?phone=971505217178&text=Hello!" target="_blank">
                        <button className="bookacall" style={{marginTop: '30px'}}>Book a Call</button>   
                    </a>
                    
                </div>
                {/* eslint-disable-next-line */}
                <img src={tv} className="tvclass"></img>
            </div>


            <div className="fooooter">

                    <div  style={{display:'flex', width: '50%', alignItems:'center'}}>
                        {/* eslint-disable-next-line */}
                        <img style={{width:'85px', marginLeft: '20px'}} src={logo}></img>
                    </div>

                    <div style={{display:'flex', width: '50%', alignItems:'center', justifyContent: 'flex-end', padding: '0', margin: '0'}}>
                        <p className="foottext"> © Codebrew 2023. All rights reserved.</p>
                    </div>
            </div>
        </div>
    
    )
}

export default Home