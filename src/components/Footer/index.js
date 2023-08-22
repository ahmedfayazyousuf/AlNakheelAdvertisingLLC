import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import logowhite from '../MediaAssets/Homepage/LogoWhite.png';

const Footer = () => {

    const handleLinkClick = (event) => {
        event.preventDefault();
        window.location.href = 'https://www.facebook.com/webrewcode';
    };
    const handleLinkClick2 = (event) => {
        event.preventDefault();
        window.location.href = 'https://api.whatsapp.com/send?phone=971505217178&text=Hello!';
    };
    const handleLinkClick3 = (event) => {
        event.preventDefault();
        window.location.href = 'https://www.instagram.com/webrewcode/';
    };
    const handleLinkClick4 = (event) => {
        event.preventDefault();
        window.location.href = 'https://www.linkedin.com/company/webrewcode/';
    };

  return (
    <div style={{background: 'black', width: '100vw', height: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>

        <div  style={{display:'flex', width: '50%', alignItems:'center'}}>
            {/* eslint-disable-next-line */}
            <img style={{width:'35px', marginLeft: '20px'}} src={logowhite}></img>
        {/* </div> */}

        {/* <div  style={{display:'flex', width: '33.33%', alignItems:'center', margin: '0', padding: '0', justifyContent: 'center'}}> */}
            <button className="facebook socialbutton" onClick={handleLinkClick} style={{marginLeft: '20px'}} >
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

        <div style={{display:'flex', width: '50%', alignItems:'flex-end', justifyContent: 'flex-end', margin: '0', paddingLeft: '10px', flexDirection: 'column'}}>
            <p className="foottext" style={{justifySelf: 'flex-end'}}>© Al Nakheel Advertising LLC 2023. All rights reserved.</p>
            {/* <a href="https://www.webrewcode.com/PrivacyPolicy">
                <p className="foottext2" style={{justifySelf: 'flex-end', cursor: 'grab'}}>Privacy Policy</p>
            </a> */}
        </div> 
    </div>
  );
}

export default Footer;
