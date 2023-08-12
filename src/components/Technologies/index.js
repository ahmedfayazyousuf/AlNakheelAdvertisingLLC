import { useMotionValue } from "framer-motion"; 
import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import "../CodebrewAssets/Styles/tech.css";
import "../CodebrewAssets/Styles/App.css";

//imports for section 1 - x-reality ==========================================================================
import wallpaperXReality from '../CodebrewAssets/Images/Technologies/1_XReality/BG1DESK.jpg';
import statue from '../CodebrewAssets/Images/Technologies/1_XReality/stature.png';
import box from '../CodebrewAssets/Images/Technologies/1_XReality/Asset 26.png';
import girlwithgun from '../CodebrewAssets/Images/Technologies/1_XReality/Asset 1.png';
import VRpod from '../CodebrewAssets/Images/Technologies/1_XReality/Asset 2.png';

// imports for section 2 - Display Technologies ==============================================================
import wallpaperDisplayTechnologies from '../CodebrewAssets/Images/Technologies/2_DisplayTechnologies/wallpaper.png';
import Hand from '../CodebrewAssets/Images/Technologies/2_DisplayTechnologies/Asset 4.png';
import Screen from '../CodebrewAssets/Images/Technologies/2_DisplayTechnologies/Asset 4 copy.png';
import Fan from '../CodebrewAssets/Images/Technologies/2_DisplayTechnologies/Asset 3.png';

//imports for section 3 - Photobooths ========================================================================
import wallpaperPhotobooths from '../CodebrewAssets/Images/Technologies/3_Photobooths/PhotoDesk2.jpg';
import robotarm from '../CodebrewAssets/Images/Technologies/3_Photobooths/Asset 7@3x.png';
import platform from '../CodebrewAssets/Images/Technologies/3_Photobooths/Asset 17.png';
import lady2 from '../CodebrewAssets/Images/Technologies/3_Photobooths/Asset 16.png';
import img1 from '../CodebrewAssets/Images/Technologies/3_Photobooths/Asset 5.png';
import guy from '../CodebrewAssets/Images/Technologies/3_Photobooths/Asset 12.png';
import img2 from '../CodebrewAssets/Images/Technologies/3_Photobooths/Asset 13.png';
import gridkuka from '../CodebrewAssets/Images/Technologies/3_Photobooths/Asset 18.png';
import gridbooth from '../CodebrewAssets/Images/Technologies/3_Photobooths/Asset 19.png';

//imports for section 4 - Games ==============================================================================
import wallpaperGames from '../CodebrewAssets/Images/Technologies/4_Games/wallpaper.png';
import Run from '../CodebrewAssets/Images/Technologies/4_Games/Asset 25.png';
import Multi from '../CodebrewAssets/Images/Technologies/4_Games/Asset 9.png';
import AR from '../CodebrewAssets/Images/Technologies/4_Games/Asset 8.png';
import Jump from '../CodebrewAssets/Images/Technologies/4_Games/Asset 24.png';

//imports for section 5 - Digital Engaging Activations =======================================================
import wallpaperDigitalEngagingActivations from '../CodebrewAssets/Images/Technologies/5_DigitalEngagingActivations/wallpaperx.jpg';
import wallpaperDigitalEngagingActivationsMob from '../CodebrewAssets/Images/Technologies/5_DigitalEngagingActivations/wallpapermob.png';
import Cube from '../CodebrewAssets/Images/Technologies/5_DigitalEngagingActivations/Asset 35.png';
import Point from '../CodebrewAssets/Images/Technologies/5_DigitalEngagingActivations/Asset 37.png';
import Sling from '../CodebrewAssets/Images/Technologies/5_DigitalEngagingActivations/Asset 10.png';
import Tan from '../CodebrewAssets/Images/Technologies/5_DigitalEngagingActivations/Asset 11.png';
import Table from '../CodebrewAssets/Images/Technologies/5_DigitalEngagingActivations/Asset 38.png';

//imports for section 6 - Mechatronics =======================================================================
import wallpaperMechatronics from '../CodebrewAssets/Images/Technologies/6_Mechatronics/wallpaperx.jpg';
import wallpaperMechatronicsMob from '../CodebrewAssets/Images/Technologies/6_Mechatronics/wallpapermob.jpg';
import pic1 from '../CodebrewAssets/Images/Technologies/6_Mechatronics/Asset 13.png';
import pic2 from '../CodebrewAssets/Images/Technologies/6_Mechatronics/Asset 14.png';
import pic3 from '../CodebrewAssets/Images/Technologies/6_Mechatronics/brains.png';
import robot from '../CodebrewAssets/Images/Technologies/6_Mechatronics/robot.psd.png';


import { useNavigate } from "react-router-dom";

const Technologies = () =>{

  var nav = useNavigate()

  var count = 0;


  useEffect(()=>{
    // eslint-disable-next-line
    if(count === 0)
    // window.location.reload();

    count++
 

    // eslint-disable-next-line
    var mySlider = slider('.slides');

    
    if(window.innerWidth>700){
    document.getElementById('avatar').style.marginLeft = '0px'
    document.getElementById('lady').style.opacity= '1'
    document.getElementById('lady').style.marginTop= '200px'
    document.getElementById('pod').style.opacity= '1'
    document.getElementById('pod').style.marginTop= '0px'
    document.getElementById('x').style.opacity= '1'
    document.getElementById('hfans').style.opacity = '0'
    }
      

    // document.getElementById('pod').style.marginTop= '0px';
    // eslint-disable-next-line
},[])

var slider = function (sliderElement) {

    var pages = [];
    var currentSlide = 1;
    var isChanging = false;
    var keyUp = {38:1, 33:1};
    var keyDown = {40:1, 34:1};
  
    var init = function () {
  
      document.body.classList.add('slider__body');
  
      // control scrolling
      var whatWheel = 'onwheel' in document.createElement('div') ? 'wheel' : document.onmousewheel !== undefined ? 'mousewheel' : 'DOMMouseScroll';
      window.addEventListener(whatWheel, function (e) {
        var direction = e.wheelDelta || e.deltaY;
        if (direction > 0) {
          changeSlide(-1);
        } else {
          changeSlide(1);
        }
      });
  
      // allow keyboard input
      window.addEventListener('keydown', function (e) {
        if (keyUp[e.keyCode]) {
          changeSlide(-1);
        } else if (keyDown[e.keyCode]) {
          changeSlide(1);
        }
      });
  
      // page change animation is done
      detectChangeEnd() && document.querySelector(sliderElement).addEventListener(detectChangeEnd(), function () {
        if (isChanging) {
          console.log(currentSlide)
          setTimeout(function() {
            isChanging = false;
            window.location.hash = document.querySelector('[data-slider-index="' + currentSlide + '"]').id;
          }, 400);
        }
      });
  
      // set up page and build visual indicators
      document.querySelector(sliderElement).classList.add('slider__container');
      var indicatorContainer = document.createElement('div');
      indicatorContainer.classList.add('slider__indicators');
  
      var index = 1;
      [].forEach.call(document.querySelectorAll(sliderElement + ' > *'), function (section) {
  
        var indicator = document.createElement('a');
        indicator.classList.add('slider__indicator')
        indicator.setAttribute('data-slider-target-index', index);
        indicatorContainer.appendChild(indicator);
  
        section.classList.add('slider__page');
        pages.push(section);
        section.setAttribute('data-slider-index', index++);
      });
  
      document.body.appendChild(indicatorContainer);
      document.querySelector('a[data-slider-target-index = "' + currentSlide +'"]').classList.add('slider__indicator--active');
      

      // stuff for touch devices
      var touchStartPos = 0;
      var touchStopPos = 0;
      var touchMinLength = 90;
      document.addEventListener('touchstart', function (e) {
        // eslint-disable-next-line
        // e.preventDefault();
        // eslint-disable-next-line
        if (e.type == 'touchstart' || e.type == 'touchmove' || e.type == 'touchend' || e.type == 'touchcancel') {
          var touch = e.touches[0] || e.changedTouches[0];
          touchStartPos = touch.pageY;
        }
      });
      document.addEventListener('touchend', function (e) {
        // e.preventDefault();
        // eslint-disable-next-line
        if (e.type == 'touchstart' || e.type == 'touchmove' || e.type == 'touchend' || e.type == 'touchcancel') {
          var touch = e.touches[0] || e.changedTouches[0];
          touchStopPos = touch.pageY;
        }
        if (touchStartPos + touchMinLength < touchStopPos) {
          changeSlide(-1);
        } else if (touchStartPos > touchStopPos + touchMinLength) {
          changeSlide(1);
        }
      });
  
    };
  
  
    // prevent double scrolling
    var detectChangeEnd = function () {
      var transition;
      var e = document.createElement('foobar');
      var transitions = {
        'transition': 'transitionend',
        'OTransition': 'oTransitionEnd',
        'MozTransition': 'transitionend',
        'WebkitTransition': 'webkitTransitionEnd'
      };
  
      for(transition in transitions) {
        if (e.style[transition] !== undefined) {
          return transitions[transition];
        }
      }
      return true;
    };
  
  
    // handle css change
    var changeCss = function (obj, styles) {
      for (var _style in styles) {
        if (obj.style[_style] !== undefined) {
          obj.style[_style] = styles[_style];
        }
      }
    };
  
    // handle page/section change
    var changeSlide = function (direction) {
  
      // already doing it or last/first page, staph plz
    //   eslint-disable-next-line
      if (isChanging || (direction == 1 && currentSlide == pages.length) || (direction == -1 && currentSlide == 1)) {
        return;
      }
  
      // change page
    //   eslint-disable-next-line

    
    if(window.innerWidth>700){

      if(currentSlide === 1){
        document.getElementById('avatar').style.marginLeft = '200px'
        document.getElementById('lady').style.opacity= '0'
        document.getElementById('lady').style.marginTop= '-200px'
        document.getElementById('pod').style.opacity= '0'
        document.getElementById('pod').style.marginTop= '200px'
        document.getElementById('x').style.opacity= '0'
      }
      // eslint-disable-next-line
      if (currentSlide === 2 && direction == -1){
        document.getElementById('avatar').style.marginLeft = '0px'
        document.getElementById('lady').style.opacity= '1'
        document.getElementById('lady').style.marginTop= '200px'
        document.getElementById('pod').style.opacity= '1'
        document.getElementById('pod').style.marginTop= '0px'
        document.getElementById('x').style.opacity= '1'
      }
      // eslint-disable-next-line
      if(currentSlide == 2){
        document.getElementById('hand1').style.marginLeft= '-200px'
        document.getElementById('hand1').style.opacity= '0'
        document.getElementById('display').style.opacity= '0'
        document.getElementById('fan').style.opacity= '0'
        document.getElementById('fan').style.marginTop= '200px'
        document.getElementById('hfans').style.opacity= '0'

      }
      // eslint-disable-next-line
      if((currentSlide === 3 && direction == -1) || (currentSlide === 1 && direction == 1)){
        document.getElementById('hand1').style.marginLeft= '0px'
        document.getElementById('hand1').style.opacity= '1'
        document.getElementById('display').style.opacity= '1'
        document.getElementById('fan').style.opacity= '1'
        document.getElementById('fan').style.marginTop= '0px'
        document.getElementById('hfans').style.opacity= '1'
      }
      // eslint-disable-next-line
      if(currentSlide == 3){
        document.getElementById('pgirl').style.marginTop= '-200px'
        document.getElementById('pgirl').style.opacity= '0'
        document.getElementById('pic1').style.marginTop= '200px'
        document.getElementById('pic1').style.opacity= '0'
        document.getElementById('pic2').style.opacity= '0'
      }
      // eslint-disable-next-line
      if((currentSlide === 4 && direction == -1) || (currentSlide === 2 && direction == 1)){
        document.getElementById('pgirl').style.marginTop= '0px'
        document.getElementById('pgirl').style.opacity= '1'
        document.getElementById('pic1').style.marginTop= '200px'
        document.getElementById('pic1').style.opacity= '1'
        document.getElementById('pic2').style.opacity= '1'
      }
      // eslint-disable-next-line
      if(currentSlide == 4){
        document.getElementById('run').style.marginTop= '200px'
        document.getElementById('run').style.opacity= '0'
        document.getElementById('multi').style.marginTop= '-200px'
        document.getElementById('multi').style.opacity= '0'
        document.getElementById('ar').style.marginTop= '-200px'
        document.getElementById('ar').style.opacity= '0'
        document.getElementById('artext').style.marginLeft= '200px'
        document.getElementById('artext').style.opacity= '0'
        document.getElementById('jump').style.marginLeft= '200px'
        document.getElementById('jump').style.opacity= '0'
        document.getElementById('games').style.opacity= '0'
      }
      // eslint-disable-next-line
      if((currentSlide === 5 && direction == -1) || (currentSlide === 3 && direction == 1)){
        document.getElementById('run').style.marginTop= '0px'
        document.getElementById('run').style.opacity= '1'
        document.getElementById('multi').style.marginTop= '10px'
        document.getElementById('multi').style.opacity= '1'
        document.getElementById('ar').style.marginTop= '0px'
        document.getElementById('ar').style.opacity= '1'
        document.getElementById('artext').style.marginLeft= '0px'
        document.getElementById('artext').style.opacity= '1'
        document.getElementById('jump').style.marginLeft= '0px'
        document.getElementById('jump').style.opacity= '1'
        document.getElementById('games').style.opacity= '1'
      }
      // eslint-disable-next-line
      if(currentSlide == 5){
        document.getElementById('hand2').style.opacity= '0'
        document.getElementById('hand2').style.marginTop= '-200px'
        document.getElementById('rfid').style.opacity= '0'
        document.getElementById('tan').style.opacity= '0'
        document.getElementById('tan').style.marginTop= '-200px'
        document.getElementById('sling').style.opacity= '0'
        document.getElementById('sling').style.marginTop= '200px'
        document.getElementById('digital').style.opacity= '0'
      }
      // eslint-disable-next-line
      if((currentSlide === 6 && direction == -1) || (currentSlide === 4 && direction == 1)){
        document.getElementById('hand2').style.opacity= '1'
        document.getElementById('hand2').style.marginTop= '0px'
        document.getElementById('rfid').style.opacity= '1'
        document.getElementById('tan').style.opacity= '1'
        document.getElementById('tan').style.marginTop= '0px'
        document.getElementById('sling').style.opacity= '1'
        document.getElementById('sling').style.marginTop= '0px'
        document.getElementById('digital').style.opacity= '1'
      }
      // eslint-disable-next-line
      if(currentSlide == 6){
        document.getElementById('robo').style.opacity= '0'
        document.getElementById('robo').style.marginRight= '-200px'
        document.getElementById('object').style.opacity= '0'
        document.getElementById('object').style.marginBottom= '200px'
        document.getElementById('brain').style.opacity= '0'
        document.getElementById('brain').style.marginTop= '-200px'
        document.getElementById('mech').style.opacity= '0'
        document.getElementById('otext').style.opacity= '0'
      }

      // eslint-disable-next-line
      if( (currentSlide === 5 && direction == 1)){
        document.getElementById('robo').style.opacity= '1'
        document.getElementById('robo').style.marginRight= '200px'
        document.getElementById('object').style.opacity= '1'
        document.getElementById('object').style.marginBottom= '0px'
        document.getElementById('brain').style.opacity= '1'
        document.getElementById('brain').style.marginTop= '0px'
        document.getElementById('mech').style.opacity= '1'
        document.getElementById('otext').style.opacity= '1'
      }
    }   



      currentSlide += direction;
      isChanging = true;
      changeCss(document.querySelector(sliderElement), {
        transform: 'translate3d(0, ' + -(currentSlide - 1) * 100 + '%, 0)'
      });
  
      // change dots
      document.querySelector('a.slider__indicator--active').classList.remove('slider__indicator--active');
      document.querySelector('a[data-slider-target-index="' + currentSlide +'"]').classList.add('slider__indicator--active');
    };
  
    // go to spesific slide if it exists
    var gotoSlide = function (where) {
      console.log(where,'im where')
      var target = document.querySelector(where).getAttribute('data-slider-index');
    //   eslint-disable-next-line
      if (target != currentSlide && document.querySelector(where)) {
        changeSlide(target - currentSlide);
      }
    };
  
    // if page is loaded with hash, go to slide
    if (window.location.hash) {
      setTimeout(function () {
        window.scrollTo(0, 0);
        gotoSlide(window.location.hash);
      }, 1);
    };
  
    // we have lift off
    if (document.readyState === 'complete') {
      init();
    } else {
      window.addEventListener('onload', init(), false);
    }
  
    // expose gotoSlide function
    return {
      gotoSlide: gotoSlide
    }
  };

  function go(to){
    console.log('sadnjkasdnkjand')
    nav(to)
    nav(0)
  } 

  const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    // eslint-disable-next-line
    const springConfig = { damping: 25, stiffness: 700 };
    // const cursorXSpring = useSpring(cursorX, springConfig);
    // const cursorYSpring = useSpring(cursorY, springConfig);
    
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

    if(window.innerWidth<=700){
      return(
        <body>
            <div class="slides">
                {/* X REALITY SECTION */}
                <section id="X-Reality" style={{backgroundSize: 'cover', backgroundImage: `url('${wallpaperXReality}')`}}>
                   {/* MOBILE VERSION */}
                   {/* eslint-disable-next-line */}
                  <div className="mobileVersion" style={{display: 'flex',  flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '90vh', display: 'flex'}}>
                  
                    <div style={{display: 'flex', width: '100vw', height: '20%'}}>
                      <div style={{display:'flex', alignItems:'center', width: '50vw',marginLeft: '250px',marginBottom:'-130px',zIndex:'100'}}>
                        <img style={{width: '120px'}} src={statue} alt="VR Statue"/>
                      </div>
                    </div>

                    <div style={{display: 'flex', width: '100vw', height: '60%', justifyContent: 'center', alignItems: 'center'}}>
                      <div style={{backgroundImage: `url('${box}')`, backgroundRepeat:'no-repeat', backgroundPosition: 'center center', backgroundSize:'contain',width: '320px', height: '400px', display:'flex', justifyContent:'center', alignItems: 'center', marginTop: '-80px'}}>
                        <div style={{ width: '320px', padding: '40px', display: 'flex', justifyContent:'flex-start', alignItems: 'flex-start', flexDirection: 'column'}}>
                          <h1 style={{color: 'white', fontWeight: '900', alignSelf: 'start', marginBottom: '20px', fontSize: '25px'}}>X-Reality</h1>
                          <p style={{ color: 'white', fontSize: '10px'}}>Experience X-Reality, the blend of VR, AR, and MR creating immersive and multidimensional environments. Engage with 3D models, explore virtual landscapes, or participate in shared simulations. X-Reality enhances real-world settings with digital overlays, transforming spaces into extraordinary realms for increased engagement and memorable experiences. </p>
                          {/* <button style={{backgroundImage: `url('${seemoreBut}')`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundColor: 'transparent', color: 'white'}}>See more</button> */}
                          <Link to="/xreality">
                            <button className="bookacall hoverable" style={{width: '100px', backgroundColor: 'white', color: '#e32961', fontSize: '11px', height: '40px', marginTop: '10px'}}>See more</button>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div style={{display: 'flex', width: '100vw', height: '20%', justifyContent: 'flex-end', marginTop: '-45px'}}>
                      <div style={{display: 'flex',  flexDirection: 'column'}}>
                        <img style={{height:'160px', width: '200px', marginTop: '-120px'}} src={VRpod} alt="VRPods"/>
                        <p style={{color: 'black', fontWeight: '900'}}></p>
                      </div>
                    </div>

                  </div>
               
                </section>



              {/* ========================================================================================================================================= */}



                {/* DISPLAY TECHNOLOGIES SECTION */}

                <section id="Display-Technologies" style={{color:'white', backgroundRepeat:'no-repeat',backgroundPosition: 'center center',backgroundSize:'cover',backgroundImage:`url('${wallpaperDisplayTechnologies}')`}}>
                
                  {/* MOBILE VERSION */}
                  {/* eslint-disable-next-line */}
                  <div className="mobileVersion" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100%', backgroundColor: 'grey', display: 'flex', backgroundRepeat:'no-repeat', backgroundPosition: 'center center',backgroundSize:'cover', backgroundImage: `url('${wallpaperDisplayTechnologies}')`}}>
                  
                    <div style={{display: 'flex', width: '100vw', height: '20%'}}>
                      <div style={{display:'flex', alignItems:'center', width: '100vw', marginLeft: '100px'}}>
                      {/* eslint-disable-next-line */}
                        <div style={{display: 'flex', height: '100%', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                        {/* eslint-disable-next-line */}
                          <p style={{color: 'black', marginTop: '100px', fontWeight: '900', color: 'white',fontSize:'11px'}}>Dual Screen</p>
                          <img style={{height:'100px', width: '150px', zIndex:'10', marginTop: '-30px'}} src={Hand} alt="hand"/>
                        </div>

                        <img style={{height:'170px', width: '70px', zIndex: '1000000000000', marginTop: '100px'}} src={Screen} alt="ipad"/>
                      
                      </div>
                    </div>

                    <div style={{display: 'flex', width: '100vw', height: '60%',  justifyContent: 'center', alignItems: 'center'}}>
                      <div style={{backgroundImage: `url('${box}')`, backgroundRepeat:'no-repeat', backgroundPosition: 'center center', backgroundSize:'contain',width: '320px', height: '400px', display:'flex', justifyContent:'center', alignItems: 'center', marginTop: '-40px'}}>
                        
                        <div style={{ width: '320px', padding: '40px', display: 'flex', justifyContent:'flex-start', alignItems: 'flex-start', flexDirection: 'column'}}>
                          <h1 style={{color: 'white', fontWeight: '900', alignSelf: 'start', marginBottom: '20px', fontSize: '25px'}}>Display Technology</h1>
                          <p style={{ color: 'white', fontSize: '10px'}}>Display technologies play a crucial role inenhancing the impact of events. From vibrant LED video walls that captivate audiences to interactive touchscreens that engage attendees, these technologies create immersive experiences. Projection mapping and holographic displays add a touch of magic, while augmented reality and virtual reality bring events to life in innovative ways.</p>
                          <button className="bookacall hoverable" style={{width: '100px', backgroundColor: 'white', color: '#e32961', fontSize: '11px', height: '40px', marginTop: '10px'}} onClick={() =>{go('/xreality')}}>See more</button>          
                        </div>
                      
                      </div>
                    </div>

                    <div style={{display: 'flex', width: '100vw', height: '20%', justifyContent: 'flex-end', padding: '0'}}>
                    {/* eslint-disable-next-line */}
                      <div style={{display: 'flex', flexDirection: 'column', marginRight: '0px', marginRight: '20px'}}>
                        <img style={{height:'120px', width: '100px', marginTop: '-120px', marginLeft: '20px'}} src={Fan} alt="holographic fans"/>
                        {/* eslint-disable-next-line */}
                        <p style={{color: 'black', fontWeight: '900', color: 'white', marginRight: '10px',fontSize:'11px'}}>Holographic Fan</p>
                      </div>
                    </div>

                  </div>
                  
                  
                  
                 
                </section>




              {/* ========================================================================================================================================= */}

                

                {/* PHOTOBOOTHS SECTION */}

                <section id="Photobooths" style={{backgroundSize: 'conntain', backgroundImage: `url('${wallpaperPhotobooths
              }')`}}>
                  {/* MOBILE VERSION */}
                  {/* eslint-disable-next-line */}
                  <div className="mobileVersion" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '90vh', backgroundColor: 'grey', display: 'flex', backgroundRepeat:'no-repeat', backgroundPosition: 'center center',backgroundSize:'cover', backgroundImage:`url('${wallpaperPhotobooths
                }')`}}>
                    <div style={{display: 'flex', width: '100vw', height: '20%',zIndex:'1000'}}>
                      <div style={{display:'flex', alignItems:'center', width: '100vw', marginLeft: '100px'}}>
                        <div style={{display: 'flex', height: '100%', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',marginTop:'-120px'}}>
                          <div style={{height: '100vh', width: '30vw', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection:'column'}}>
                            <img style={{ height: '120px', width: '50px', marginLeft: "10px",marginTop:'210px',zIndex:'1000'}}  src={lady2} alt="lady"/>
                            {/* eslint-disable-next-line */}
                            <img style={{width: '120px', marginTop: '-120px', marginTop: '-90px'}} src={platform} alt="Robot Arm"/>
                          </div>
                        </div>

                      
                      </div>
                    </div>

                    <div style={{display: 'flex', width: '100vw', height: '60%', justifyContent: 'center', alignItems: 'center'}}>
                      <div style={{backgroundImage: `url('${box}')`, backgroundRepeat:'no-repeat', backgroundPosition: 'center center', backgroundSize:'contain',width: '320px', height: '400px', display:'flex', justifyContent:'center', alignItems: 'center'}}>
                        <div style={{ width: '320px', padding: '40px', display: 'flex', justifyContent:'flex-start', alignItems: 'flex-start', flexDirection: 'column'}}>
                          <h1 style={{ color: 'white', fontWeight: '900', alignSelf: 'start', marginBottom: '20px', fontSize: '25px'}}>PHOTOBOOTHS</h1>
                          <p style={{ color: 'white', fontSize: '10px'}}>The versatility of photo booths allows them to seamlessly integrate into any event, from weddings and parties to corporate functions and trade shows. Whether it's a themed backdrop that complements your event's aesthetic or a branded printout that promotes your company, photo booths can be tailored to align with your event's unique style and objectives. </p>
                          <Link to="/photobooths">
                            <button className="bookacall hoverable" style={{width: '100px', backgroundColor: 'white', color: '#e32961', fontSize: '11px', height: '40px', marginTop: '10px'}}>See more</button>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div style={{display: 'flex', width: '100vw', height: '20%', justifyContent: 'flex-end'}}>
                      
                      <div style={{display: 'flex', flexDirection: 'row', marginTop: '-100px', marginLeft: '20px', width: '40%'}}>
             
                        <img style={{width: '120px', height: '140px'}} src={img1} alt="pic2"/>

                      </div>

                    </div>
                  </div>
          
                </section>                                                                                                                                         



              {/* ========================================================================================================================================= */}

                {/* GAMES SECTION  */}

                <section id="Games">

                   {/* MOBILE VERSION */}
                   {/* eslint-disable-next-line */}
                   <div className="mobileVersion" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', backgroundColor: 'grey', display: 'flex', backgroundRepeat:'no-repeat', backgroundPosition: 'center center',backgroundSize:'cover', backgroundImage:`url('${wallpaperGames}')`}}>
                    <div style={{display: 'flex', width: '100vw', height: '20%'}}>
                      <div style={{display:'flex', alignItems:'center', width: '100vw', marginLeft: '100px'}}>

         
                      <div style={{width:'80%',justifyContent:'flex-end',alignItems:'flex-end',display:'flex'}}>  
                        <img style={{height:'200px', width: '140px',zIndex:'100',marginLeft:'230px',marginTop:'40%'}} src={Run} alt="the hanging house logo"/>
                      </div>
                        
                      
                      </div>
                    </div>

                    <div style={{display: 'flex', width: '100vw', height: '60%',  justifyContent: 'center', alignItems: 'center'}}>
                      <div style={{backgroundImage: `url('${box}')`, backgroundRepeat:'no-repeat', backgroundPosition: 'center center', backgroundSize:'contain',width: '320px', height: '400px', display:'flex', justifyContent:'center', alignItems: 'center', marginTop: '-120px'}}>
                        <div style={{ width: '320px', padding: '40px', display: 'flex', justifyContent:'flex-start', alignItems: 'flex-start', flexDirection: 'column'}}>
                          <h1 style={{ color: 'white', fontWeight: '900', alignSelf: 'start', marginBottom: '20px', fontSize: '25px'}}>Games</h1>
                          <p style={{ color: 'white', fontSize: '10px'}}>Enrich your event with the excitement of gamification. Transform your event into a playground of challenges and rewards, turning attendees from spectators to active participants. With customizable game elements, align the excitement with your event's theme, objectives, and audience. </p>
                          <Link to="/games">
                            <button className="bookacall hoverable" style={{width: '100px', backgroundColor: 'white', color: '#e32961', fontSize: '11px', height: '40px', marginTop: '10px'}}>See more</button>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div style={{display: 'flex', width: '100vw', height: '20%',  justifyContent: 'flex-start'}}>
                      
                      <div style={{display: 'flex', flexDirection: 'column', marginTop: '-100px', marginLeft: '20px', width: '80%',alignItems:'flex-end'}}>
                        <div style={{display:'flex',flexDirection:'column', marginTop: '-40px', marginLeft: '50px'}}>
                          <p style={{fontWeight:'900',width:'100px',color:'white',fontSize:'11px', marginBottom: '2px'}}>AR Games</p>
                          <img style={{height:'100px', width: '85px',marginRight:'-20px', position: 'relative'}} src={AR} alt="grid"/>
                        </div>


                        <div style={{alignSelf:'flex-start', width:'210px', textAlign: 'right', display: 'flex', marginTop: '-65px'}}> 
                          <p style={{fontWeight:'900',width:'100px',color:'white',fontSize:'11px', textAlign: 'right'}}>Multi Motion Games</p>
                          <img style={{height:'120px', width: '100px',  marginTop: '-5px',zIndex:'1000',marginLeft:'5px'}} src={Multi} alt="Robot Arm"/>
                        </div>
                          
                      </div>

                    </div>
                  </div>              
                </section>


              {/* ========================================================================================================================================= */}


                {/* DIGITAL ENGAGING ACTIVATIONS  */}

                <section id="DigitalEngagingActivations" style={{backgroundColor: 'black'}}>

                   {/* MOBILE VERSION */}
                   {/* eslint-disable-next-line */}
                   <div className="mobileVersion" style={{display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '90vh', backgroundColor: 'grey', display: 'flex', backgroundRepeat:'no-repeat', backgroundPosition: 'center center',backgroundSize:'cover', backgroundImage:`url('${wallpaperDigitalEngagingActivationsMob}')`}}>
                    <div style={{display: 'flex', width: '100vw', height: '20%',justifyContent:'flex-end'}}>
                      <div style={{display:'flex',flexDirection:'column',justifyContent:'center', alignItems:'center', width: '50%'}}>
                      {/* eslint-disable-next-line */}
                        <img src={Point} style={{height:'150px', width: '100px',}}  />

                        <div style={{display:'flex',zIndex:'100'}}>
                          <p style={{fontWeight:'900',zIndex:'100',marginLeft:'120px',color:'white', fontSize:'11px'}}>RFID Table</p>
                          {/* eslint-disable-next-line */}
                          <img src={Table} style={{marginRight:'100px',width:'100px'}} />
                        </div>
                      </div>
                    </div>

                    <div style={{display: 'flex', width: '100vw', height: '60%',  justifyContent: 'center', alignItems: 'center'}}>
                      <div style={{backgroundImage: `url('${box}')`, backgroundRepeat:'no-repeat', backgroundPosition: 'center center', backgroundSize:'contain',width: '320px', height: '400px', display:'flex', justifyContent:'center', alignItems: 'center', marginTop: '-70px'}}>
                        <div style={{ width: '320px', padding: '40px', display: 'flex', justifyContent:'flex-start', alignItems: 'flex-start', flexDirection: 'column'}}>
                          <h1 style={{ color: 'white', fontWeight: '900', alignSelf: 'start', marginBottom: '20px', fontSize: '18px'}}>Digital Engaging Activations</h1>
                          <p style={{ color: 'white', fontSize: '10px'}}>Enhance your event with interactive tech experiences through digital activations. Offering valuable insights into attendee behavior, these activations provide real-time data capture and analytics, enabling personalized experiences and data-driven decisions.</p>
                          <Link to="/digitalengagingactivations">
                            <button className="bookacall hoverable" style={{width: '100px', backgroundColor: 'white', color: '#e32961', fontSize: '11px', height: '40px', marginTop: '10px'}}>See more</button>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div style={{display: 'flex', width: '100vw', height: '20%',  justifyContent: 'flex-start'}}>
                    {/* eslint-disable-next-line */}
                      <div style={{display: 'flex',width:'100vw',  flexDirection: 'row', marginTop: '-100px', marginLeft: '20px', width: '40%'}}>
                        <div>
                          <img style={{height:'130px', width: '100px', alignSelf:'flex-start',top:'57%',left:'27%'}} src={Sling} alt="the hanging house logo"/>
                        </div>
                      </div>

                      <div style={{alignSelfSelf:'flex-end',width:'100%'}}>
                        <div style={{display:'flex', marginTop: '-60px'}}>
             
                          <div style={{display:'flex',flexDirection:'column', marginLeft: '90px'}}>
                            <div style={{display:'flex',width:'100%',justifyContent:'flex-end'}}>
                            {/* eslint-disable-next-line */}
                              <img style={{width:'100px',zIndex:'10'}} src={Tan} />
                            </div>
                            <p style={{fontWeight:'900',fontSize:'11px'}}>Interactive Sensor Table</p>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </section>



              {/* ========================================================================================================================================= */}



                <section id="Mechatronics" style={{backgroundSize: 'cover', backgroundImage: `url('${wallpaperMechatronicsMob}')`,}}>
                {/* MOBILE VERSION */}
                {/* eslint-disable-next-line */}
                <div className="mobileVersion" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '90vh',  display: 'flex'}}>
                  
                  <div style={{display: 'flex', width: '100%', height: '20%',justifyContent:'flex-end'}}>
                    <div style={{zIndex:'100',marginTop:'50px'}}> 
                    <p style={{color: 'white', marginBottom: '-1px', fontWeight: '900',fontSize:'11px',textAlign:'center'}}>Object Recognition <br></br> Technology</p>
                            <img style={{width: '170px', height: '160px',zIndex:'100', marginTop: '0'}} src={[pic2]} alt="pic2"/>
                    </div>
                  </div>

                  <div style={{display: 'flex', width: '100vw', height: '60%', justifyContent: 'center', alignItems: 'center'}}>
                    <div style={{backgroundImage: `url('${box}')`, backgroundRepeat:'no-repeat', backgroundPosition: 'center center', backgroundSize:'contain',width: '320px', height: '400px', display:'flex', justifyContent:'center', alignItems: 'center'}}>
                      <div style={{ width: '320px', padding: '40px', display: 'flex', justifyContent:'flex-start', alignItems: 'flex-start', flexDirection: 'column'}}>
                        <h1 style={{color: 'white', fontWeight: '900', alignSelf: 'start', marginBottom: '20px', fontSize: '25px'}}>Mechatronics</h1>
                        <p style={{ color: 'white', fontSize: '10px'}}>The versatility of photo booths allows them to seamlessly integrate into any event, from weddings and parties to corporate functions and trade shows. Whether its a themed backdrop that complements your events aesthetic or a branded printout that promotes your company, photo booths can be tailored to align with your events unique style and objectives.</p>
                        <a href="fb.com" style={{zIndex:'10000000000000000000000000000000000000000000000000000000000'}}>
                          <button className="bookacall hoverable" style={{width: '100px', backgroundColor: 'white', color: '#e32961', fontSize: '11px', height: '40px', marginTop: '10px'}}>See more</button>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div style={{display: 'flex', width: '100vw', height: '20%', justifyContent: 'flex-end'}}>
                    {/* eslint-disable-next-line */}
                    <div style={{zIndex:'100',alignSelf:'flex-end',justifySelf:'flex-end',zIndex:'1000'}}> 
                      <img style={{width: '270px', height: '240px',}} src={[robot]} alt="pic2"/>
                    </div>
                  </div>

                </div>
                  
                </section>

                
            </div>
        </body>
    )
  
    }
    
    else{
      return(
        <body>
          <div className="cursor" style={{transform: `translate3d(${cursorXY.x}px, ${cursorXY.y}px, 0)`, zIndex: '1000000000000000000000000000'}} />
              <div id='desktop' class="slides">
              {/* X REALITY SECTION */}
              
              <section id="X-Reality" style={{backgroundSize: 'cover', backgroundImage: `url('${wallpaperXReality}')`, backgroundRepeat: 'no-repeat'}}>
                  <div style={{width: '100vw', height: '100vh', justifyContent: 'right', alignItems: 'right', display: 'flex'}}>
                      <div style={{width: '60vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                      {/* eslint-disable-next-line */}
                          <div id="x" className="x" style={{width: '460px', height: '570px', display:'flex', backgroundSize: 'contain', backgroundImage: `url('${box}')`, display: 'flex', justifyContent:'center', alignItems: 'center', marginTop: '-100px'}}>
                              <div style={{width: '370px', padding: '20px', display: 'flex', justifyContent:'flex-start', alignItems: 'flex-start', flexDirection: 'column', marginTop: '-40px'}}>
                                  <h1 style={{ color: 'white', fontWeight: '900', alignSelf: 'start', marginBottom: '20px', fontSize: '30px'}}>X-REALITY</h1>
                                  <p style={{ color: 'white', fontSize: '11px'}}>Step into a world where reality bends and imagination takes flight. Virtual Reality (VR), Augmented Reality (AR), and Mixed Reality (MR) are revolutionizing the event landscape, infusing fun and engagement like never before. With VR headsets, attendees can explore new dimensions, interacting with virtual objects and environments. AR overlays digital content onto the real world, adding an extra layer of excitement and interactivity. MR combines the best of both worlds, merging virtual elements seamlessly with the physical environment. These technologies transport participants into extraordinary realms, enabling them to unleash their creativity, unlock hidden wonders, and embark on unforgettable adventures. Get ready to break free from the ordinary and immerse yourself in a world where reality is redefined.</p>
                                  <Link to="/Xreality">
                                    {/* <button className="bookacall hoverable" style={{width: '100px', backgroundColor: 'white', color: 'white', fontSize: '12px', height: '40px', alignSelf: 'flex-start'}}>See more</button> */}
                                    <button className="bookacall" style={{height: '40px', width: '100px', fontSize: '11px', alignSelf: 'flex-start', marginTop: "10px"}}>See more</button>
                                  </Link>
                              </div>
                          </div>

                          <div style={{width: '200px', height: '700px', display:'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'flex-end'}}>
                            <div style={{width: '200px', height: '350px'}}>
                              <img src={girlwithgun} id="lady" className="lady" alt="VR Statue" style={{}}/>
                            </div>
                            
                            <div style={{width: '200px', height: '350px'}}>
                              <img id="pod" className="pod" src={VRpod} alt="VR Pod"/>
                            </div>
                          </div>

                      </div>

                      <div style={{width: '40vw', height: '100vh', display: 'flex', alignItems: 'flex-end'}}>
                          <div class="avatar" id="avatar">
                              <img style={{width: '800px'}} src={statue} alt="VR Statue"/>
                          </div>
                      </div>
                  </div>
              </section>






              {/* DISPLAY TECHNOLOGIES SECTION */}

              <section id="Display_Technologies" style={{backgroundColor: 'blue',color:'white'}}>
                <div style={{width: '100vw', height: '100vh', backgroundColor: 'grey', display: 'flex',flexDirection:'row',backgroundImage:`url('${wallpaperDisplayTechnologies}')`,
             backgroundRepeat:'no-repeat',
             backgroundPosition: 'center center',
             backgroundSize:'cover'}}>
                  <div style={{display:'flex',height:'100%',flex:'70vw'}}> 
                  
                    <div style={{display:'flex',alignItems:'center'}}>
                      <img style={{height:'300px',marginRight:'-50px',zIndex:'10',marginTop:'100px'}} className="hand1" id="hand1" src={Hand} alt="the hanging house logo"/>
                      <div >
                          <p style={{fontWeight: '900'}}>Dual Screens</p>
                          <img style={{height:'500px',justifySelf:'flex-start'}} src={Screen} alt="the hanging house logo"/>
                      </div>
                    </div>
                  </div>

                  <div style={{justifySelf:'center',alignSelf:'center',flex:'10vw'}}>
                    <div>
                      <p id='hfans' style={{fontWeight: '900', textAlign: 'center'}}>Holographic Fans</p>
                      <img id='fan' className="fan" style={{height:'185px',width:'150px'}} src={Fan} alt="the hanging house logo"/>
                    </div>
                  </div> 
                  <div style={{display:'flex', justifyContent: 'flex-start', alignItems: 'center',flex:'40vw'}}>
                  {/* eslint-disable-next-line */}
                    <div id="display" className="display" style={{width: '400px', height: '500px', display:'flex', backgroundSize: 'contain', backgroundImage: `url('${box}')`, display: 'flex', justifyContent:'center', alignItems: 'flex-start', marginTop: '-50px'}}>
                          <div style={{ width: '370px', padding: '40px', display: 'flex', justifyContent:'flex-start', alignItems: 'flex-start', flexDirection: 'column'}}>
                          <h1 style={{ color: 'white', fontWeight: '900', alignSelf: 'start', marginBottom: '20px', fontSize: '30px', width: '400px', marginLeft: '-30px'}}>Display Technology</h1>
                          <p style={{ color: 'white', fontSize: '11px'}}>Display technologies play a crucial role inenhancing the impact of events. From vibrant LED video walls that captivate audiences to interactive touchscreens that engage attendees, these technologies create immersive experiences. Projection mapping and holographic displays add a touch of magic, while augmented reality and virtual reality bring events to life in innovative ways.</p>
                          <Link to="/displaytechnologies">
                            <button className="bookacall" style={{height: '40px', width: '100px', fontSize: '11px', alignSelf: 'flex-start', marginTop: "10px"}}>See more</button>
                          </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </section>






              

              {/* PHOTOBOOTHS SECTION */}

              <section id="Photobooths" style={{backgroundSize: 'contain', backgroundImage: `url('${wallpaperPhotobooths}')`}}>
                  <div style={{width: '100vw', height: '100vh', display: 'flex'}}>
                      <div style={{height: '100vh', width: '30vw', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection:'column'}}>
                          <p style={{color: 'white', marginRight: '250px', marginBottom: '-1px', fontWeight: '900'}}>360 Camera</p>
                          <img style={{width: '120px', marginRight: '240px', position: 'relative'}} src={gridbooth} alt="gridbooth"/>
                          <img style={{ height: '350px', width: '140px', marginLeft: "10px", position: 'absolute', marginBottom: '110px', zIndex: '2'}} id='pgirl' className="pgirl" src={lady2} alt="lady"/>
                          <img style={{width: '300px', marginTop: '-100px', zIndex: '1'}} src={platform} alt="platform"/>
                      </div>
                      
                      <div style={{height: '100vh', width: '40vw', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                      {/* eslint-disable-next-line */}
                          <div style={{width: '404px', height: '500px', display:'flex', backgroundSize: 'cover', backgroundImage: `url('${box}')`, display: 'flex', justifyContent:'center', alignItems: 'flex-start', marginTop: '-150px'}}>
                              <div style={{width: '320px', padding: '20px', display: 'flex', justifyContent:'flex-start', alignItems: 'flex-start', flexDirection: 'column'}}>
                                  <h1 style={{ color: 'white', fontWeight: '900', alignSelf: 'start', marginBottom: '20px', marginTop: '10px', fontSize: '30px'}}>PHOTOBOOTHS</h1>
                                  <p style={{ color: 'white', fontSize: '11px'}}>Integrate versatile photobooths into your event. Pose with virtual props against stunning backdrops for unforgettable photos. With instant printing and digital sharing, visitors can keep their photos as souvenirs or share them online, promoting your event. </p>                          
                                  `<Link to="/photobooths">
                                    <button className="bookacall" style={{height: '40px', width: '100px', fontSize: '11px', alignSelf: 'flex-start', marginTop: "-15px"}}>See more</button>
                                  </Link>
                                  <img style={{height: '120px', width: '80px', marginLeft: '340px', marginTop: '-200px'}} src={guy} className="guy" id="guy" alt="guy"/>
                                  <img style={{width: '175px', height: '200px', marginLeft: '80px'}} src={img1} className="pic1" id="pic1" alt="pic1" />
                                  <img style={{width: '175px', height: '200px', marginLeft: '220px', marginTop: '-320px'}} src={img2} className="pic2" id="pic2" alt="pic2"/>
                              </div>
                          </div>
                      </div>

                      <div style={{height: '100vh', width: '30vw', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'end', alignItems: 'flex-end'}}>
                              <p style={{color: 'white', marginBottom: '-1px', fontWeight: '900'}}>Glambot</p>
                              <img style={{width: '300px', position: 'relative'}} src={gridkuka} alt="Robot Arm"/>
                          </div>
                          <img style={{width: '800px', height: '765px', position: 'absolute'}} id="arm" className="arm" src={robotarm} alt="Robot Arm"/>
                      </div>
                  </div>
              </section>                                                                                                                                         




              {/* GAMES SECTION  */}

              <section id="Games" >
                <div  style={{width: '100vw', height: '100vh',display:'flex', backgroundImage: `url('${wallpaperGames}')`, backgroundRepeat:'no-repeat', backgroundPosition: 'center center', backgroundSize:'cover'}}>
                    <div style={{flex:'40vw'}}>
                      <div id="games" className="games" style={{backgroundRepeat:'no-repeat', backgroundPosition: 'center center', backgroundSize:'contain', width: '560px', height: '550px', display:'flex', justifyContent:'center', alignItems: 'center',marginLeft:'15%',backgroundImage:`url('${box}')`}}>
                          <div style={{ width: '400px', padding: '40px', display: 'flex', justifyContent:'flex-start', alignItems: 'flex-start', flexDirection: 'column'}}>
                              <h1 style={{ color: 'white', fontWeight: '900', alignSelf: 'start', marginBottom: '20px', fontSize: '30px'}}>GAMES</h1>
                              <p style={{ color: 'white', fontSize: '11px'}}>Take your event experience to new heights with the electrifying addition of gamification. Gamification turns your event into an immersive playground of challenges, competition, and rewards, capturing the hearts and minds of participants like never before. By infusing game elements into your event, gamification ignites a sense of excitement and motivation among attendees. Whether it's a conference, team-building activity, or brand activation, gamification transforms passive spectators into active participants, driving engagement and creating a vibrant atmosphere. The versatility of gamification allows for customization to suit your event's theme, objectives, and target audience. From incorporating event-specific challenges and branding elements to tailoring game mechanics to align with your goals, gamification can be seamlessly integrated into various event formats and settings.</p>
                              <Link to="/games">
                                <button className="bookacall" style={{height: '40px', width: '100px', fontSize: '11px', alignSelf: 'flex-start', marginTop: "10px"}}>See more</button>
                              </Link>
                              <img style={{height:'250px', width: '160px', alignSelf:'flex-start',position:'absolute',top:'60%',left:'5%', marginLeft: "-20px"}} id="run" className="run" src={Run} alt="the hanging house logo"/>
                          </div>
                      </div>
                    </div>

                    <div style={{flex:'20vw'}}>

                    </div>

                    <div style={{flex:'40vw',display:'flex',flexDirection:'column',color:'#E32961'}}>
                      <div style={{display:'flex',flex:'50%'}}>
                        <div style={{flex:'50%',display:'flex',justifyContent:'flex-end',marginTop:'15%'}}>
                          <div>
                          {/* eslint-disable-next-line */}
                          <img id='multi' className="multi"  src={Multi} />
                          <p style={{fontWeight:'900'}}>Multi Motion Games</p>
                          </div>
                        
                        </div>
          
                        <div style={{flex:'50%',display:'flex'}}>
                        {/* eslint-disable-next-line */}
                          <div>
                          {/* eslint-disable-next-line */}
                            <img style={{}} className="ar" id="ar"  src={AR} />
                          </div>
                          <p style={{writingMode:'vertical-rl',marginTop:'60px',fontWeight:'900'}} id="artext" className="artext">AR Games</p>
                         
                        </div>
                      </div>

                      <div style={{flex:'100%'}}>
                      {/* eslint-disable-next-line */}
                        <img style={{width:'400px'}} id="jump" className="jump" src={Jump} />
                      </div>

                      
                    </div>
                </div>
              </section>





              {/* DIGITAL ENGAGING ACTIVATIONS  */}

              <section id="Digital_Engaging_Activations" style={{backgroundColor: 'black'}}>
                <div style={{width: '100vw',color:'white', height: '100vh',display:'flex',backgroundImage: `url('${wallpaperDigitalEngagingActivations}')`,
                              backgroundRepeat:'no-repeat',
                              backgroundPosition: 'center center',
                              backgroundSize:'cover'}}>
                  

                  <div id="digital" className="digital" style={{flex:'40vw'}}>
                      <div style={{backgroundImage:`url('${box}')`,
                      backgroundRepeat:'no-repeat',
                      backgroundPosition: 'center center',
                      backgroundSize:'contain', height: '550px',
                      display:'flex', justifyContent:'center', alignItems: 'center',
                      marginLeft:'15%', marginTop: '20px'
                      }}>
                          <div style={{ width: '400px', padding: '40px', display: 'flex', justifyContent:'flex-start', alignItems: 'flex-start', flexDirection: 'column'}}>
                            <h1 style={{ color: 'white', fontWeight: '900', alignSelf: 'start', marginBottom: '20px', fontSize: '30px'}}>DIGITAL ENGAGING ACTIVATIONS</h1>
                            <p style={{ color: 'white', fontSize: '11px'}}>Digital engaging activations infuse your event with cutting-edge technology, creating a playground of interactive experiences that leave participants in awe. From touchscreen displays and interactive installations to augmented reality and virtual reality experiences, these activations ignite curiosity, spark conversations, and forge connections.Through real-time data capture and analytics, digital engaging activations provide valuable insights into attendee behavior, preferences, and interests. This information can be leveraged to personalize experiences, optimize event offerings, and make data-driven decisions that enhance future events.</p>

                            <Link to="/digitalengagingactivations">
                              <button className="bookacall" style={{height: '40px', width: '100px', fontSize: '11px', alignSelf: 'flex-start', marginTop: "10px", zIndex: '1000000'}}>See more</button>
                            </Link>
                            <img style={{height:'180px', width: '140px', alignSelf:'flex-start',position:'absolute',top:'60%',left:'30%'}} className="sling" id="sling" src={Sling} alt="the hanging house logo"/>
                        </div>
                      </div>
                   </div>

                  <div style={{flex:'30vw',display:'flex',flexDirection:'column',alignItems:'center'}}>
                    <p style={{fontWeight:'900',marginTop:'50px', marginBottom: '-2px'}}>Interactive Sensor Table</p>
                    <div style={{zIndex:'100'}}>
                    {/* eslint-disable-next-line */}
                      <img style={{width:'280px',zIndex:'10'}} id="tan" className="tan" src={Tan} />
                    </div>

                    <div>
                    {/* eslint-disable-next-line */}
                      <img style={{width:'100px',marginLeft:'-100px',marginTop:'50px'}} src={Cube} />
                    </div>
                    
                  </div>

                  <div style={{flex:'30vw',display:'flex',flexDirection:'column', height:'100vh'}}>
                    <div style={{display:'flex',zIndex:'10', height: '60vh'}}>
                    {/* eslint-disable-next-line */}
                      <img src={Point} id="hand2" className="hand2" style={{height: '400px', width: '300px'}}  />
                    </div>

                    <div style={{display:'flex',flexDirection:'column', height: '40vh'}}>
                      <p style={{fontWeight:'900',zIndex:'100',marginLeft:'-100px', marginBottom: '-180px'}}>RFID Table</p>
                      {/* eslint-disable-next-line */}
                      <img id='rfid' className="rfid" src={Table} style={{marginRight:'100px', width: '400px'}} />
                    </div>
                  </div>

                </div>
              </section>


              {/* MECHATRONICS Desktop  */}
              <section id="Mechatronics" style={{backgroundSize: 'cover', backgroundImage: `url('${wallpaperMechatronics}')`,}}>
                  <div style={{height: '100vh', width: '100vw', display: 'flex'}}>

                      <div style={{height: '100vh', width: '35vw', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                          <p style={{color: 'white', marginBottom: '-1px', fontWeight: '900', textAlign: 'center'}} id="otext" className="otext">Object Recognition<br></br>Technology</p>
                          <img style={{width: '240px', height: '230px'}} id="object" className="object" src={[pic2]} alt="pic2"/>
                          <div style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                              <img style={{width: '200px', height: '240px', marginTop: '0', marginLeft: '130px'}} className="musical" id="musical" src={[pic1]} alt="pic2"/>
                              <p style={{color: 'white', marginBottom: '-1px', fontWeight: '900', marginLeft: '10px', zIndex: '10000000'}}>Giant Interactive Musical Instruments</p>
                          </div>
                      </div>
                      
                      
                      
                      <div style={{height: '100vh', width: '30vw'}}>
                      {/* eslint-disable-next-line */}
                          <div id="mech" className="mech"  style={{width: '465px', height: '580px', display:'flex', backgroundSize: 'contain', backgroundImage: `url('${box}')`, display: 'flex', justifyContent:'center', alignItems: 'flex-start', marginTop: '30px'}}>
                              <div style={{width: '320px', padding: '20px', display: 'flex', justifyContent:'flex-start', alignItems: 'flex-start', flexDirection: 'column', marginLeft: '-40px'}}>
                                  <h1 style={{ color: 'white', fontWeight: '900', alignSelf: 'start', marginBottom: '20px', marginTop: '20px', fontSize: '30px'}}>MECHATRONICS</h1>
                                  <p style={{ color: 'white', fontSize: '11px', marginBottom: '20px'}}>	Mechatronics adds a new dimension to events by seamlessly integrating mechanical components, sensors, and intelligent control systems. From robotic performers and interactive installations to automated displays and kinetic sculptures, mechatronics captivates attendees with its mesmerizing blend of technology and artistry. Interactive mechatronic installations invite participants to engage and interact with the technology. Whether it's controlling robotic arms, triggering sensors, or manipulating responsive environments, attendees become active participants, immersing themselves in the marvels of mechatronics.</p>
                                  <Link to="/Mechatronics">
                                    <button className="bookacall" style={{height: '40px', width: '100px', fontSize: '11px', alignSelf: 'flex-start', marginTop: "5px", zIndex: '1000000'}}>See more</button>
                                  </Link>
                              </div>
                          </div>
                      </div>
                      
                      <div style={{height: '100vh', width: '35vw' }}>
                          <div style={{height: '50vh', width: '35vw', display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'center'}}>
                              <p style={{color: 'white', marginBottom: '2px', fontWeight: '900', marginTop: '50px'}}>Brainwave Game Controllers</p>
                              <img style={{width: '240px',height: '300px'}} className="brain" id="brain" src={[pic3]} alt="pic2"/>
                          </div>

                          <div style={{height: '50vh', width: '35vw', display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'center'}}>
                              <img className="robo" id="robo" style={{width: '35%', height: '55%', right: '0', bottom: '0', position: 'absolute', marginBottom: '30px'}} src={[robot]} alt="pic2"/>
                          </div>
                      </div>
                  </div>
              </section>
          </div>
        </body>)
    }
}


export default Technologies