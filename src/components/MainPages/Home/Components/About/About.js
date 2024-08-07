import TextAnim from '../../../../1_MediaAssets/Styles/FadeAnimation.jsx';
import Video from '../../../../1_MediaAssets/BrandAssets/Interview.mp4';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import '@splidejs/react-splide/css/core';
import React from "react";
import Cover2 from '../../../../1_MediaAssets/BrandAssets/TextureTriangle.png'
import "../../../../1_MediaAssets/Styles/App.css";

const Home = () =>{

    return( 
        <div style={{width:'100%', background:'rgba(20,20,20,0.7)', display:'flex',justifyContent:'center',alignItems:'center', paddingTop: '100px', paddingBottom: '100px', height: '100vh', backgroundImage:`url('${Cover2}')`, backgroundPosition: 'bottom', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
            
            <div className='mainAbout'>
                <div className="videoAboutDiv">
                    <video controls className='VideoVideo'>
                        <source src={Video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div className="paraAboutDiv">
                    <TextAnim Body={
                        <h1 className="hero-title outlined-text" style={{color: 'transparent', fontSize: '35px', marginBottom: '-15px'}}>About Us</h1>
                    }/>
                    <TextAnim Body={
                        <p className="parahead" style={{margin: '20px 0px', color: 'grey', fontSize: '13px'}}>
                            Located in the United Arab Emirates, Al Nakheel Advertising LLC is an Advertising Agency that specializes in signage, marketing, branding, and printing media services. With a track record spanning over 16 years, we've left an indelible mark on the industry, serving esteemed clients throughout the UAE. <br /> <br />
                            Our forte lies in crafting captivating visuals and seamlessly bringing them to life through our cutting-edge production setup. From conceptualization to installation, we pride ourselves on precision and creativity that know no bounds.<br />
                        </p>
                    }/>
                    
                    <TextAnim Body={
                        <a href="/Contact" rel="noreferrer noopener" target="_blank">
                            <button className="bookacall" style={{fontSize: '14px'}}>Get in touch</button>   
                        </a>
                    }/>
                </div> 
            </div>
        </div>
    )
}

export default Home