import React from 'react';
import './Introduction.css';
import backdrop from './../../../Home/Components/Intro/backdrop.jpg';
import { useNavigate } from "react-router-dom";


const Intro = () => {
  const navigate = useNavigate();
  return (
    <div class="introduction" style={{backgroundImage: `url('${backdrop}')`,height: '100%', width: '100vw', display:'flex', justifyContent: 'center', alignItems: 'center'}}>
      <div class="content">
        <div class="welcome-tag">Al Nakheel Advertising LLC</div>
        <h1 class="title">Your Vision, Our Expertise.</h1>
        <p class="subtitle">Our comprehensive advertisment solutions will completely transform your company. Grow the future of your business.</p>
        <button onClick= {()=> navigate('/Projects')} className='buttonDefault' style={{width: '120px', height: '50px', fontSize: '14px', marginTop: '10px'}}>View Projects</button>
      </div>
    </div>
  );
};

export default Intro;
