// eslint-disable-next-line
import { motion, useMotionValue } from "framer-motion";
import { useState, useEffect } from "react";

import wallpaper from '../../CodebrewAssets/Images/TechTypes/wallpaper.jpg';
// import video from '../TechTypesAssets/video.mp4';
// import bg from '../TechTypesAssets/bg6.png'
// import ar from '../TechTypesAssets/AR.jpg'
import Slingpop from '../../CodebrewAssets/Images/PRODUCT LIST/LANDSCAPE/SLINGSHOT/Asset 3.png'
import VMpop from '../../CodebrewAssets/Images/PRODUCT LIST/LANDSCAPE/VENDING MACHINE/Asset 20.png'
import DGpop from '../../CodebrewAssets/Images/PRODUCT LIST/LANDSCAPE/DIGITAL GRAFFITI/Asset 21.png'

import Slingpopmob from '../../CodebrewAssets/Images/PRODUCT LIST/PORTRAIT/SLINGSHOT/Asset 31.png'
import VMpopmob from '../../CodebrewAssets/Images/PRODUCT LIST/PORTRAIT/VENDING MACHINE/Asset 32.png'
import DGpopmob from '../../CodebrewAssets/Images/PRODUCT LIST/PORTRAIT/DIGITAL GRAFFITI/Asset 33.png'

import SlingC from '../../CodebrewAssets/Images/PRODUCT LIST/LANDSCAPE/SLINGSHOT/Cover.jpg'
import VMC from '../../CodebrewAssets/Images/PRODUCT LIST/LANDSCAPE/VENDING MACHINE/Cover.jpg'
import DGC from '../../CodebrewAssets/Images/PRODUCT LIST/LANDSCAPE/DIGITAL GRAFFITI/Cover.png'
import crossIcon from '../crossIcon.png'


const DigitalEngagingActivations = () =>{

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
    
      function openpop(pop){

        if(window.innerWidth<=700){
           
            document.getElementById('backmob').style.display = 'flex'

            if(pop === 'Slingshot'){
                document.getElementById('backmob').style.backgroundImage = `url('${Slingpopmob}')`
                document.getElementById('paramob').innerHTML = 'With our digital Slingshot, you can propel digital elements onto a display using physical movements and sensor technology. This engaging activation combines the physical and digital in a playful way, offering an exciting interactive experience for users.'
            }
    
            if(pop === 'Vending Machine'){
                document.getElementById('backmob').style.backgroundImage = `url('${VMpopmob}')`
                document.getElementById('paramob').innerHTML = `Experience our interactive Vending Machine that uses touchscreen and smart automation technology. Not only does it dispense items, but it also offers a unique interaction that's customizable and fun, reinventing the traditional vending experience.`
            }
    
    
            if(pop === 'Digital Graffiti'){
                document.getElementById('backmob').style.backgroundImage = `url('${DGpopmob}')`
                document.getElementById('paramob').innerHTML = 'Unleash your creativity with Digital Graffiti. Using stylus or touch-input technology on a large digital canvas, you can create your own digital art, showcasing your creativity in a vibrant and modern way.'
            }
    
            // document.getElementById('black').style.display = 'initial'
    
    
            document.getElementById('headmob').innerHTML = pop
            
    
    
    
            }
            else{
                document.getElementById('back').style.display = 'flex'

        if(pop === 'Slingshot'){
            document.getElementById('back').style.backgroundImage = `url('${Slingpop}')`
            document.getElementById('para').innerHTML = 'With our digital Slingshot, you can propel digital elements onto a display using physical movements and sensor technology. This engaging activation combines the physical and digital in a playful way, offering an exciting interactive experience for users.'
        }

        if(pop === 'Vending Machine'){
            document.getElementById('back').style.backgroundImage = `url('${VMpop}')`
            document.getElementById('para').innerHTML = `Experience our interactive Vending Machine that uses touchscreen and smart automation technology. Not only does it dispense items, but it also offers a unique interaction that's customizable and fun, reinventing the traditional vending experience.`
        }


        if(pop === 'Digital Graffiti'){
            document.getElementById('back').style.backgroundImage = `url('${DGpop}')`
            document.getElementById('para').innerHTML = 'Unleash your creativity with Digital Graffiti. Using stylus or touch-input technology on a large digital canvas, you can create your own digital art, showcasing your creativity in a vibrant and modern way.'
        }

        document.getElementById('black').style.display = 'initial'


        document.getElementById('head').innerHTML = pop
       


            }
        
       
      }

      function Close(){

        
        document.getElementById('backmob').style.display = 'none'

        document.getElementById('back').style.display = 'none'
        document.getElementById('black').style.display = 'none'
      }

    return(
        <div style={{backgroundImage: `url('${wallpaper}')`, backgroundRepeat:'no-repeat', backgroundPosition: 'center center', backgroundSize:'cover', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', height: '100vh', width: '100vw',overflow:'hidden'}}>
            {/* <video id="background-video" autoPlay loop muted style={{height: '120vh', width: '120vw', opacity: '0.15'}}>
                <source src={video} type='video/mp4' />
            </video> */}
            
            <div className="cursor" style={{transform: `translate3d(${cursorXY.x}px, ${cursorXY.y}px, 0)`, zIndex: '1000000000000000000000000000'}} />

            <div style={{display: 'flex', width: '100vw', height: '100vh', justifyContent: 'center', alignItems: 'center'}}>
                <div className='maindiv' >
                    
                    <div className='child'  style={{display: 'flex', width:'100%', justifyContent: 'center', alignItems: 'center'}}>
                        <div className="content content-1" style={{height: '200px', width: '130px', textAlign: 'center', padding: '15px'}} onClick={() =>{openpop('Slingshot')}}>
                            <img src={SlingC} alt="Logo" style={{width: '40px', height: '150px', borderRadius: '10px', marginBottom: '9px'}}/>
                            <p style={{fontSize: '10px', color: 'white', paddingBottom: '20px'}}>Slingshot</p>
                        </div>

                        <div className="content content-1" style={{height: '200px', width: '130px', textAlign: 'center', padding: '15px'}} onClick={() =>{openpop('Vending Machine')}}>
                            <img src={VMC} alt="Logo" style={{width: '40px', height: '150px', borderRadius: '10px', marginBottom: '9px'}}/>
                            <p style={{fontSize: '10px', color: 'white', paddingBottom: '20px'}}>Vending Machine</p>
                        </div>
                    </div>


                    <div className='child'  style={{display: 'flex', width:'100%', justifyContent: 'center', alignItems: 'center'}} >

                        <div className="content content-1" style={{height: '200px', width: '130px', textAlign: 'center', padding: '15px'}} onClick={() =>{openpop('Digital Graffiti')}}>
                            <img src={DGC} alt="Logo" style={{width: '40px', height: '150px', borderRadius: '10px', marginBottom: '9px'}}/>
                            <p style={{fontSize: '10px', color: 'white', paddingBottom: '20px'}}>Digital Graffiti</p>
                        </div>
                    </div>

                    <div id='black' style={{display:'none',background:'rgba(0,0,0,0.8',height:'100vh',width:'100vw',zIndex:'2',position:'absolute'}}>

                    </div>

                    <div id='back' style={{position:'absolute',width:'800px',height:'600px',marginBottom:'180px',marginRight:'40px',color:'white',backgroundRepeat:'no-repeat',backgroundPosition: 'center center',backgroundSize:'contain',display:'none',alignItems:'center',flexDirection:'column',zIndex:'1000000000000000000000000'}}>
                        <div style={{marginLeft:'160px',width:'100%',height:'100%',justifySelf:'flex-end',flex:'50%',display:'flex',alignItems:'flex-end'   }}>
                            <h1 id='head' style={{marginBottom:'5px',fontSize:'20px',flex:'50%'}}>Augmented Reality</h1>
                            <div style={{flex:'50%',display:'flex',justifyContent:'flex-end'}}> 
                                <img src={crossIcon} alt="Logo" style={{width:'30px', borderRadius: '5px', marginBottom: '9px',marginRight:'120px', alignSelf: 'flex-end',cursor:'pointer'}} onClick={Close}/>

                            </div>
                        </div>

                        <div style={{marginLeft:'160px',width:'100%',flex:'50%',display:'flex',alignItems:'center',marginTop:'80px'}}>
                            <p id='para' style={{width:'85%',fontSize:'12px',marginTop:'25px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>

                                        {/* MOBILE POPUP  */}
                    <div id='backmob' style={{position:'absolute',width:'90%',marginBottom:'200px',height:'90%',color:'white',display:'none',alignItems:'center',flexDirection:'column',backgroundRepeat:'no-repeat',backgroundPosition: 'center center',backgroundSize:'contain',zIndex:'10000000000000000'}}>
                    
                    <div style={{width:'100%',height:'20%',justifySelf:'flex-end',display:'flex',alignItems:'flex-end',flexDirection:'column'}}>
                    <div style={{flex:'50%',marginBottom:'-40px',display:'flex',justifyContent:'flex-end'}}> 
                            <img src={crossIcon} alt="Logo" style={{width:'30px', borderRadius: '5px', marginBottom: '9px',marginRight:'30px', alignSelf: 'flex-end',cursor:'pointer',zIndex:'10000000000000000'}} onClick={Close}/>

                        </div>
                        <h1 id='headmob' style={{marginRight: '90px',fontSize:'22px'}}>Augmented Reality</h1>
                    </div>

                    <div style={{width:'100%', height: '80%', display:'flex',alignItems:'center'}}>
                        <p id='paramob' style={{marginLeft: '70px', fontSize: '9px', width: '250px', marginTop: '30px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                </div>

                 </div>
            </div>
        </div>
    )
}

export default DigitalEngagingActivations