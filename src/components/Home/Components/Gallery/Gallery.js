
import TextAnim from '../../../FadeAnimation.jsx';
import React from "react";

const Footer = () => {

  return (


    <div className="gallerymain">
        {/* <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw'}}>
            <TextAnim Body={
                <p className="parahead">Our Works</p>
            }/>
        </div> */}

        <ul className="img-list" >

            <li>
                <div className="image-container">
                {/* eslint-disable-next-line  */}
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/451895/009.jpg" alt="Image 1" />
                    <div className="image-text">Text on hover</div>
                </div>
            </li>

            <li> 
                <div className="image-container">
                {/* eslint-disable-next-line  */}
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/451895/009.jpg" alt="Image 1" />
                    <div className="image-text">Text on hover</div>
                </div>
            </li>

            <li>
                <div className="image-container">
                {/* eslint-disable-next-line  */}
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/451895/009.jpg" alt="Image 1" />
                    <div className="image-text">Text on hover</div>
                </div>
            </li>

        </ul>

        <TextAnim Body={
            // eslint-disable-next-line
            <a href="https://api.whatsapp.com/send?phone=971506328029&text=Hello!" target="_blank">
                <button className="bookacall" style={{marginTop: '60px'}}>See More</button>   
            </a>
        }/>
    </div>
  );
}

export default Footer;
