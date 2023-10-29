import TextAnim from '../FadeAnimation.jsx';
import YouTube from 'react-youtube';
import { Splide, SplideSlide } from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css';

// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';

import { useMotionValue } from "framer-motion";
import React, { useState, useEffect} from "react";
import video from '../MediaAssets/Homepage/video.mp4';
// import tree from '../MediaAssets/Homepage/tree.png';
import "../MediaAssets/Styles/App.css";
import Footer from "../Footer/index.js";

import Abbar from '../MediaAssets/Homepage/Clients/Abbar.png';
import Ghurair from '../MediaAssets/Homepage/Clients/Ghurair.png';
import Landmark from '../MediaAssets/Homepage/Clients/Landmark.png';
import OTW from '../MediaAssets/Homepage/Clients/OTW.png';
import Ramada from '../MediaAssets/Homepage/Clients/Ramada.png';
import Riviera from '../MediaAssets/Homepage/Clients/Riviera.png';
import Rixos from '../MediaAssets/Homepage/Clients/Rixos.png';
import Sheraton from '../MediaAssets/Homepage/Clients/Sheraton.png';
import Swissotel from '../MediaAssets/Homepage/Clients/Swissotel.png';
import TapaKing from '../MediaAssets/Homepage/Clients//Tapa King.png';
import UOK from '../MediaAssets/Homepage/Clients/UOK.png';
import UOS from '../MediaAssets/Homepage/Clients/UOS.png';
import Hilton from '../MediaAssets/Homepage/Clients/Hilton.png';
import Ramee from '../MediaAssets/Homepage/Clients/Ramee.png';
import Chowking from '../MediaAssets/Homepage/Clients/Chowking.png';
import Wingstop from '../MediaAssets/Homepage/Clients/Wingstop.png';
import Fairmont from '../MediaAssets/Homepage/Clients/Fairmont.png';
import WHO from '../MediaAssets/Homepage/Clients/WHO.png';
import IHC from '../MediaAssets/Homepage/Clients/IHC.png';


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
        <div style={{height:'100%', overflow: 'hidden',background:'black'}}>

            <div className="cursor" style={{transform: `translate3d(${cursorXY.x}px, ${cursorXY.y}px, 0)`, zIndex: '1000000000000000000000000000'}} />

            <div style={{backgroundSize:'cover',height:'100vh',width:'100vw',overflow:'hidden',position:'relative',marginBottom:'-20px'}}>
                <video id="background-video2" autoPlay loop muted style={{height: '100%', width: '100vw',zIndex:'0',position:'relative',objectFit:'cover'}}>
                    <source src={video} type='video/mp4' />
                </video>
                {/* eslint-disable-next-line */}
                <div style={{width:'100%',height:'100%', display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',zIndex:'10',position:'absolute',top:'0',left:'0',zIndex:'100', marginTop: '-20px'}}>
                <TextAnim Body={
                    <p className="every">
                        Where innovation meets impact.
                    </p>
                }/>
                    
                    <TextAnim Body={
                        // eslint-disable-next-line
                        <a href="https://api.whatsapp.com/send?phone=971506328029&text=Hello!" target="_blank">
                            <button className="bookacall">Get in touch</button>
                        </a>
                    }/>
                </div>
             
            </div>


            <div style={{width:'100%',background:'#29024A',display:'flex',justifyContent:'center',alignItems:'center', paddingTop: '100px', paddingBottom: '100px'}}>

                <div className="paradiv" style={{display: 'flex', justifyContent: 'center', padding: '10px'}}>
                    <TextAnim Body={
                        <p className="parahead">About Us</p>
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
                    {/* eslint-disable-next-line */}
                    <TextAnim Body={
                        <a href="https://api.whatsapp.com/send?phone=971506328029&text=Hello!" target="_blank">
                            <button className="bookacall" style={{marginTop: '30px'}}>Get in touch</button>   
                        </a>
                    }/>

                    <TextAnim Body={
                        <YouTube className="YoutubePhone" videoId={videoId} opts={opts} />
                    }/>
                </div>  
                {/* <img src={tree} alt="tree" className="tree"></img> */}
                <YouTube className="YoutubeDesktop" videoId={videoId} opts={opts} />
            </div>

            

            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', marginBottom: '-60px', backgroundColor: 'black', paddingTop: '60px'}}>
                <TextAnim Body={
                    <p className="parahead">Our Clients</p>
                }/>
            </div>

            <div  style={{backgroundColor: 'black'}} className="splide clientsDesktop">
            <TextAnim Body={
                <Splide
                    options={ {
                        type   : 'loop',
                        drag   : 'free',
                        snap   : true,
                        perPage: 5,
                        backgroundColor: 'black',
                    } } style={{display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'black'}}
                    aria-label="My Favorite Images"
                    >
                    <SplideSlide style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px'}}>
                        <img alt='img' style={{height: '35px'}} src={Abbar}/>
                    </SplideSlide>
                    <SplideSlide style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px'}}>
                        <img alt='img' style={{height: '50px'}} src={Ghurair}/>
                    </SplideSlide>
                    <SplideSlide style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px'}}>
                        <img alt='img' style={{height: '75px'}} src={Landmark}/>
                    </SplideSlide>
                    <SplideSlide style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px'}}>
                        <img alt='img' style={{height: '90px'}} src={OTW}/>
                    </SplideSlide>
                    <SplideSlide style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px'}}>
                        <img alt='img' style={{height: '50px'}} src={Ramada}/>
                    </SplideSlide>
                    <SplideSlide style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px'}}>
                        <img alt='img' style={{height: '50px'}} src={Riviera}/>
                    </SplideSlide>
                    <SplideSlide style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px'}}>
                        <img alt='img' style={{height: '100px'}} src={Rixos}/>
                    </SplideSlide>
                    <SplideSlide style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px'}}>
                        <img alt='img' style={{height: '80px'}} src={Sheraton}/>
                    </SplideSlide>
                    <SplideSlide style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px'}}>
                        <img alt='img' style={{height: '60px'}} src={Swissotel}/>
                    </SplideSlide>
                    <SplideSlide style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px'}}>
                        <img alt='img' style={{height: '45px'}} src={TapaKing}/>
                    </SplideSlide>
                    <SplideSlide style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px'}}>
                        <img alt='img' style={{height: '120px'}} src={UOK}/>
                    </SplideSlide>
                    <SplideSlide style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px'}}>
                        <img alt='img' style={{height: '100px'}} src={UOS}/>
                    </SplideSlide>
                    <SplideSlide style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px'}}>
                        <img alt='img' style={{height: '100px'}} src={Hilton}/>
                    </SplideSlide>
                    <SplideSlide style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px'}}>
                        <img alt='img' style={{height: '110px'}} src={Ramee}/>
                    </SplideSlide>
                    <SplideSlide style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px'}}>
                        <img alt='img' style={{height: '100px'}} src={Chowking}/>
                    </SplideSlide>
                    <SplideSlide style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px'}}>
                        <img alt='img' style={{height: '60px'}} src={Wingstop}/>
                    </SplideSlide>
                    <SplideSlide style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px'}}>
                        <img alt='img' style={{height: '60px'}} src={Fairmont}/>
                    </SplideSlide>
                    <SplideSlide style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px'}}>
                        <img alt='img' style={{height: '100px'}} src={WHO}/>
                    </SplideSlide>
                    <SplideSlide style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px'}}>
                        <img alt='img' style={{height: '100px'}} src={IHC}/>
                    </SplideSlide>
                </Splide>
            }/>
            </div>




            <div className="clientsMobile">
            <TextAnim Body={
                <Splide
                    options={ {
                        type   : 'loop',
                        drag   : 'free',
                        snap   : true,
                        perPage: 2,
                    }} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '400px'}}
                    aria-label="My Favorite Images"
                    >
                    <SplideSlide style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px'}}>
                        <img alt='img' style={{height: '20px'}} src={Abbar}/>
                    </SplideSlide>
                    <SplideSlide style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px'}}>
                        <img alt='img' style={{height: '30px'}} src={Ghurair}/>
                    </SplideSlide>
                    <SplideSlide style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px'}}>
                        <img alt='img' style={{height: '40px'}} src={Landmark}/>
                    </SplideSlide>
                    <SplideSlide style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px'}}>
                        <img alt='img' style={{height: '45px'}} src={OTW}/>
                    </SplideSlide>
                    <SplideSlide style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px'}}>
                        <img alt='img' style={{height: '30px'}} src={Ramada}/>
                    </SplideSlide>
                    <SplideSlide style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px'}}>
                        <img alt='img' style={{height: '30px'}} src={Riviera}/>
                    </SplideSlide>
                    <SplideSlide style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px'}}>
                        <img alt='img' style={{height: '60px'}} src={Rixos}/>
                    </SplideSlide>
                    <SplideSlide style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px'}}>
                        <img alt='img' style={{height: '50px'}} src={Sheraton}/>
                    </SplideSlide>
                    <SplideSlide style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px'}}>
                        <img alt='img' style={{height: '40px'}} src={Swissotel}/>
                    </SplideSlide>
                    <SplideSlide style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px'}}>
                        <img alt='img' style={{height: '30px'}} src={TapaKing}/>
                    </SplideSlide>
                    <SplideSlide style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px'}}>
                        <img alt='img' style={{height: '70px'}} src={UOK}/>
                    </SplideSlide>
                    <SplideSlide style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px'}}>
                        <img alt='img' style={{height: '60px'}} src={UOS}/>
                    </SplideSlide>
                    <SplideSlide style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px'}}>
                        <img alt='img' style={{height: '60px'}} src={Hilton}/>
                    </SplideSlide>
                    <SplideSlide style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px'}}>
                        <img alt='img' style={{height: '60px'}} src={Ramee}/>
                    </SplideSlide>
                    <SplideSlide style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px'}}>
                        <img alt='img' style={{height: '60px'}} src={Chowking}/>
                    </SplideSlide>
                    <SplideSlide style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px'}}>
                        <img alt='img' style={{height: '35px'}} src={Wingstop}/>
                    </SplideSlide>
                    <SplideSlide style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px'}}>
                        <img alt='img' style={{height: '35px'}} src={Fairmont}/>
                    </SplideSlide>
                    <SplideSlide style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px'}}>
                        <img alt='img' style={{height: '60px'}} src={WHO}/>
                    </SplideSlide>
                    <SplideSlide style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px'}}>
                        <img alt='img' style={{height: '60px'}} src={IHC}/>
                    </SplideSlide>
                </Splide>
            }/>
            </div>


            <Footer />
        </div>
    
    )
}

export default Home