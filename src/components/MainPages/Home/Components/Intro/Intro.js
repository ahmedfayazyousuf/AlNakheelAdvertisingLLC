import React from 'react';
import backdrop from '../../../../1_MediaAssets/BrandAssets/Backgrounds/backdrop2.jpg';
 //import { useNavigate } from "react-router-dom";

const Intro = () => {
  // const navigate = useNavigate();
  return (
    <div class="introduction" style={{backgroundImage: `url('${backdrop}')`, height: '100%', width: '100vw', display:'flex', justifyContent: 'center', alignItems: 'center'}}>
      <div class="content">
        <div class="welcome-tag" style={{margin: '0'}}>AL NAKHEEL ADVERTISING LLC</div>
        <h1 className="hero-title outlined-text" style={{color: 'transparent', fontSize: '35px', margin: '0'}}>Your Vision, Our Expertise.</h1>
        <p style={{fontSize: '14px', color: 'white'}}>Empower Your Business with Strategic Advertising Solutions.</p>
        {/* <button onClick= {()=> navigate('/About')} className='buttonDefault' style={{width: '120px', height: '50px', fontSize: '14px', marginTop: '10px'}}>View Projects</button>*/ }
      </div>
    </div>
  );
};

export default Intro;
