import Footer from '../Footer/Footer.js';
import TextAnim from '../../../FadeAnimation.jsx';
import { Splide, SplideSlide } from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css';

// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';

import React from "react";
import "../../../1_MediaAssets/Styles/App.css";


import Abbar from '../../../1_MediaAssets/Homepage/Clients/Abbar.png';
import Ghurair from '../../../1_MediaAssets/Homepage/Clients/Ghurair.png';
import Landmark from '../../../1_MediaAssets/Homepage/Clients/Landmark.png';
import OTW from '../../../1_MediaAssets/Homepage/Clients/OTW.png';
import Ramada from '../../../1_MediaAssets/Homepage/Clients/Ramada.png';
import Riviera from '../../../1_MediaAssets/Homepage/Clients/Riviera.png';
import Rixos from '../../../1_MediaAssets/Homepage/Clients/Rixos.png';
import Sheraton from '../../../1_MediaAssets/Homepage/Clients/Sheraton.png';
import Swissotel from '../../../1_MediaAssets/Homepage/Clients/Swissotel.png';
import TapaKing from '../../../1_MediaAssets/Homepage/Clients//Tapa King.png';
import UOK from '../../../1_MediaAssets/Homepage/Clients/UOK.png';
import UOS from '../../../1_MediaAssets/Homepage/Clients/UOS.png';
import Hilton from '../../../1_MediaAssets/Homepage/Clients/Hilton.png';
import Ramee from '../../../1_MediaAssets/Homepage/Clients/Ramee.png';
import Chowking from '../../../1_MediaAssets/Homepage/Clients/Chowking.png';
import Wingstop from '../../../1_MediaAssets/Homepage/Clients/Wingstop.png';
import Fairmont from '../../../1_MediaAssets/Homepage/Clients/Fairmont.png';
import WHO from '../../../1_MediaAssets/Homepage/Clients/WHO.png';
import IHC from '../../../1_MediaAssets/Homepage/Clients/IHC.png';


const ClientsCarousel = () =>{

    return( 
        <div style={{height:'100vh', overflow: 'hidden',background:'black'}}>

            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '-60px', width: '100vw', paddingTop: '60px'}}>
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

export default ClientsCarousel