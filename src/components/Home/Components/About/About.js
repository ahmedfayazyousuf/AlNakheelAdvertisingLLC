import TextAnim from '../../../FadeAnimation.jsx';
import YouTube from 'react-youtube';
// Default theme
import '@splidejs/react-splide/css';

// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';

import { useMotionValue } from "framer-motion";
import React, { useState, useEffect} from "react";
// import tree from '../1_MediaAssets/Homepage/tree.png';

import "../../../1_MediaAssets/Styles/App.css";

const Home = () =>{
 
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    // eslint-disable-next-line
    const springConfig = { damping: 25, stiffness: 700 };

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



    // YOUTUBE VIDEO 
    const videoId = 'fiwunlzTGFI'; // Replace with your actual video ID
    const opts = {
        height: '195',
        width: '320',
        playerVars: {
        autoplay: 0,
        },
    };

    return( 
        <div style={{overflow: 'hidden',background:'black'}}>

            <div className="cursor" style={{transform: `translate3d(${cursorXY.x}px, ${cursorXY.y}px, 0)`, zIndex: '1000000000000000000000000000'}} />

            <div style={{width:'100%',background:'#29024A',display:'flex',justifyContent:'center',alignItems:'center', paddingTop: '100px', paddingBottom: '100px', height: '100vh'}}>

                <div className="paradiv" style={{display: 'flex', justifyContent: 'center', padding: '10px'}}>
                    <TextAnim Body={
                        <p style={{marginBottom: '10px'}} className="parahead">About Us</p>
                    }/>
                    <TextAnim Body={
                        <p className="para">
                            Discover Al Nakheel Advertising LLC: Your Vision, Our Expertise.<br></br>
                        </p>
                    }/>

                    <p className="para" style={{color: '#29024a'}}>.</p>

                    <TextAnim Body={
                        <p className="para">
                            Located in Ajman, United Arab Emirates, Al Nakheel Advertising LLC stands as a dynamic Advertising Company specializing in signage, marketing, branding, and printing media services. With a track record spanning 16 years, we've left an indelible mark on the industry, serving esteemed clients throughout the UAE.    
                        </p>
                    }/>
                    <p className="para" style={{color: '#29024a'}}>.</p>

                    <TextAnim Body={
                        <p className="para">
                            Our forte lies in crafting captivating visuals and seamlessly bringing them to life through our cutting-edge production setup. From conceptualization to installation, we pride ourselves on precision and creativity that know no bounds.
                        </p>
                    }/>

                    <p className="para" style={{color: '#29024a'}}>.</p>

                    <TextAnim Body={
                        <p className="para">
                            Our journey has been adorned with partnerships with renowned organizations, companies, and institutes, solidifying our reputation as a trusted name in the field.
                        </p>
                    }/>
                    
                    <TextAnim Body={
                        // eslint-disable-next-line
                        <a href="https://api.whatsapp.com/send?phone=971506328029&text=Hello!" target="_blank">
                            <button className="bookacall" style={{marginTop: '30px'}}>Get in touch</button>   
                        </a>
                    }/>

                    
                </div>  
                {/* <img src={tree} alt="tree" className="tree"></img> */}
                <YouTube className="YoutubeDesktop" videoId={videoId} opts={opts}/>
            </div>

        </div>
    
    )
}

export default Home