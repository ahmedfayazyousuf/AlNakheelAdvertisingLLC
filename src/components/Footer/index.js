import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import logowhite from '../MediaAssets/Homepage/LogoWhite.png';

const Footer = () => {

    const handleLinkClick = (event) => {
        event.preventDefault();
        window.location.href = 'https://www.facebook.com/alnakheeladvert';
    };
    const handleLinkClick2 = (event) => {
        event.preventDefault();
        window.location.href = 'https://api.whatsapp.com/send?phone=971506328029&text=Hello!';
    };
    const handleLinkClick3 = (event) => {
        event.preventDefault();
        window.location.href = 'https://www.instagram.com/alnakheeladv/';
    };
    const handleLinkClick4 = (event) => {
        event.preventDefault();
        window.location.href = 'https://www.linkedin.com/company/alnakheeladv/';
    };

  return (
    <div style={{background: 'black', width: '100vw', height: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',marginBottom: '40px'}}>
        
        <div style={{}}>
            <p className="foottext" style={{justifySelf: 'flex-end'}}>© Al Nakheel Advertising LLC 2023. All rights reserved.</p>
        </div> 

        <div style={{display:'flex', alignItems:'center'}}>

            <button className="facebook socialbutton" onClick={handleLinkClick} style={{}} >
                <FontAwesomeIcon icon={faFacebook} aria-hidden="true" />
            </button> 
            <button className="whatsapp socialbutton" onClick={handleLinkClick2}>
                <FontAwesomeIcon icon={faWhatsapp} aria-hidden="true" />
            </button>
            <button className="instagram socialbutton" onClick={handleLinkClick3}>
                <FontAwesomeIcon icon={faInstagram} aria-hidden="true" />
            </button>
            <button className="linkedin socialbutton" onClick={handleLinkClick4}>
                <FontAwesomeIcon icon={faLinkedin} aria-hidden="true" />
            </button>
        </div>
        
    </div>
  );
}

export default Footer;
