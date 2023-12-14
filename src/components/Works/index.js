import React from "react";

import img1 from '../1_MediaAssets/Gallery/img1.jpg';
import img2 from '../1_MediaAssets/Gallery/img2.jpg';
import img3 from '../1_MediaAssets/Gallery/img3.jpg';
import img4 from '../1_MediaAssets/Gallery/img4.jpg';
import img5 from '../1_MediaAssets/Gallery/img5.jpg';
import img6 from '../1_MediaAssets/Gallery/img6.jpg';


const Footer = () => {

  return (

    <div>

        <div style={{width:'100%',height:'80px', display:'flex', justifyContent:'center',alignItems:'center',flexDirection:'column',position:'sticky',top:'0',left:'0', background: 'black', zIndex: '10'}}>
            <p style={{color: 'white', fontSize: '40px', marginTop: '10px'}} >
                WORKS
            </p>
        </div>
        
        
        <div className="gallerymain" style={{marginTop: '-10px', background: 'white'}}>
            <ul className="img-list" >
                <li>
                    <div className="image-container">
                        <img src={img1} alt="Imagwee 1" />
                        <div className="image-text" style={{textAlign: 'center'}}>Production & Installation of Outdoor Sign</div>
                    </div>
                </li>

                <li>
                    <div className="image-container">
                        <img src={img2} alt="Imagwee 1" />
                        <div className="image-text">Text on hover</div>
                    </div>
                </li>

                <li>
                    <div className="image-container">
                        <img src={img3} alt="Imagwee 1" />
                        <div className="image-text">Text on hover</div>
                    </div>
                </li>

                <li>
                    <div className="image-container">
                        <img src={img4} alt="Imagwee 1" />
                        <div className="image-text" style={{textAlign: 'center'}}>Production & Installation of Outdoor Sign</div>
                    </div>
                </li>

                <li>
                    <div className="image-container">
                        <img src={img5} alt="Imagwee 1" />
                        <div className="image-text">Text on hover</div>
                    </div>
                </li>

                <li>
                    <div className="image-container">
                        <img src={img6} alt="Imagwee 1" />
                        <div className="image-text">Text on hover</div>
                    </div>
                </li>


            </ul>

            
        </div>
    </div>
    
  );
}

export default Footer;
