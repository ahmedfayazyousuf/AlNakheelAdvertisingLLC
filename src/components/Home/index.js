import { useMotionValue } from "framer-motion";
import React, { useState, useEffect} from "react";
import video from '../MediaAssets/Homepage/video.mp4';
import tree from '../MediaAssets/Homepage/tree.png';
import "../MediaAssets/Styles/App.css";
import Footer from "../Footer/index.js";
// import PartnerSlider from "../PartnerSlider/PartnerSlider.jsx";


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

    

    return( 
        <div style={{height:'100%', overflow: 'hidden',background:'#29024A'}}>

            <div className="cursor" style={{transform: `translate3d(${cursorXY.x}px, ${cursorXY.y}px, 0)`, zIndex: '1000000000000000000000000000'}} />

            <div style={{backgroundSize:'cover',height:'90vh',width:'100vw',overflow:'hidden',position:'relative',marginBottom:'-20px'}}>
                <video id="background-video2" autoPlay loop muted style={{height: '100%', width: '100vw',zIndex:'0',position:'relative',objectFit:'cover'}}>
                    <source src={video} type='video/mp4' />
                </video>
                {/* eslint-disable-next-line */}
                <div style={{width:'100%',height:'100%', display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',zIndex:'10',position:'absolute',top:'0',left:'0',zIndex:'100', marginTop: '-20px'}}>
                    <p className="every">
                        Where innovation meets impact.
                    </p>
                    {/* eslint-disable-next-line */}
                    <a href="https://api.whatsapp.com/send?phone=971506328029&text=Hello!" target="_blank">
                        <button className="bookacall">Get in touch</button>
                    </a>
                </div>
             
            </div>


            <div style={{width:'100%',background:'#29024A',display:'flex',justifyContent:'center',alignItems:'center', paddingTop: '100px', paddingBottom: '100px'}}>

                <div className="paradiv">
                    <p className="parahead">About Us</p>
                    <p className="para">
                        Discover Al Nakheel Advertising LLC: Your Vision, Our Expertise.<br></br>
                    </p>
                    <p className="para" style={{color: '#29024a'}}>.</p>
                    <p className="para">
                        Located in Ajman, United Arab Emirates, Al Nakheel Advertising LLC stands as a dynamic Advertising Company specializing in signage, marketing, branding, and printing media services. With a track record spanning 14 years, we've left an indelible mark on the industry, serving esteemed clients throughout the UAE.    
                    </p>
                    <p className="para" style={{color: '#29024a'}}>.</p>
                    <p className="para">
                        Our forte lies in crafting captivating visuals and seamlessly bringing them to life through our cutting-edge production setup. From conceptualization to installation, we pride ourselves on precision and creativity that know no bounds.
                    </p>
                    <p className="para" style={{color: '#29024a'}}>.</p>
                    <p className="para">
                        Our journey has been adorned with partnerships with renowned organizations, companies, and institutes, solidifying our reputation as a trusted name in the field.
                    </p>
                    {/* eslint-disable-next-line */}
                    <a href="https://api.whatsapp.com/send?phone=971506328029&text=Hello!" target="_blank">
                        <button className="bookacall" style={{marginTop: '30px'}}>Get in touch</button>   
                    </a>
                </div>
                <img src={tree} alt="tree" className="tree"></img>
            </div>



            {/* <PartnerSlider/> */}
            <Footer />
        </div>
    
    )
}

export default Home