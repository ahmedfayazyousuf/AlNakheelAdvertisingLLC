import React from "react";
import './ClientsCarousel.css';
import Contact from '../../../Contact/ContactSection.js';
import Footer from '../../../../Constants/Footer/index.js'
import Background from '../../../../1_MediaAssets/BrandAssets/Backgrounds/PurpleBanner.jpg';
import Texture from '../../../../1_MediaAssets/BrandAssets/Texture.png';
import Abbar from "../../../../1_MediaAssets/Homepage/Clients/Abbar.png"; import Ghurair from "../../../../1_MediaAssets/Homepage/Clients/Ghurair.png"; import Landmark from "../../../../1_MediaAssets/Homepage/Clients/Landmark.png"; import OTW from "../../../../1_MediaAssets/Homepage/Clients/OTW.png"; import Ramada from "../../../../1_MediaAssets/Homepage/Clients/Ramada.png"; import Riviera from "../../../../1_MediaAssets/Homepage/Clients/Riviera.png"; import Rixos from "../../../../1_MediaAssets/Homepage/Clients/Rixos.png"; import Sheraton from "../../../../1_MediaAssets/Homepage/Clients/Sheraton.png"; import Swissotel from "../../../../1_MediaAssets/Homepage/Clients/Swissotel.png"; import TapaKing from "../../../../1_MediaAssets/Homepage/Clients/Tapa King.png"; import UOK from "../../../../1_MediaAssets/Homepage/Clients/UOK.png"; import UOS from "../../../../1_MediaAssets/Homepage/Clients/UOS.png"; import Hilton from "../../../../1_MediaAssets/Homepage/Clients/Hilton.png"; import Ramee from "../../../../1_MediaAssets/Homepage/Clients/Ramee.png"; import Chowking from "../../../../1_MediaAssets/Homepage/Clients/Chowking.png"; import Wingstop from "../../../../1_MediaAssets/Homepage/Clients/Wingstop.png"; import Fairmont from "../../../../1_MediaAssets/Homepage/Clients/Fairmont.png"; import WHO from "../../../../1_MediaAssets/Homepage/Clients/WHO.png"; import IHC from "../../../../1_MediaAssets/Homepage/Clients/IHC.png";

const clients = [
    Abbar,Ghurair,Landmark,OTW,Ramada,Riviera,Rixos,Sheraton,Swissotel,TapaKing,UOK,UOS,Hilton,Ramee,Chowking,Wingstop,Fairmont,WHO,IHC,Abbar,Ghurair,Landmark,OTW,Ramada,Riviera,Rixos,Sheraton,Swissotel,TapaKing,UOK,UOS,Hilton,Ramee,Chowking,Wingstop,Fairmont,WHO,IHC,
];

const ClientsCarousel = () => {
  return (
    <div style={{ height: "100%", overflow:'scroll', backgroundColor: "black", display: 'flex', gap: '10px', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column', backgroundImage: `url(${Background})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
        
        <div className="slider" style={{marginBottom: '20px', background: 'black', backgroundImage: `url(${Texture})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', backgroundAttachment: 'fixed'}}>
            <div className="slide-track">
                {clients.map((client, index) => (
                    <div key={index} className="slide">
                        <img alt={`Client Logo ${index}`} src={client} className="img" onMouseOver={(e) => { e.currentTarget.style.transform = "scale(1.1)"; }} onMouseOut={(e) => { e.currentTarget.style.transform = "scale(1)"; }} />
                    </div>
                ))}
            </div>
        </div>

        <Contact/>
        <Footer />
    </div>
  );
};

export default ClientsCarousel;
