// eslint-disable-next-line
import { motion, useMotionValue } from "framer-motion";
import { useState, useEffect } from "react";

import wallpaper from '../../CodebrewAssets/Images/TechTypes/wallpaper.jpg';
// import video from '../TechTypesAssets/video.mp4';
// import bg from '../TechTypesAssets/bg6.png'
// import ar from '../TechTypesAssets/AR.jpg'
import ARpop from '../../CodebrewAssets/Images/PRODUCT LIST/LANDSCAPE/AUGMENTED REALITY/Asset 35.png'
// import VRpop from '../../CodebrewAssets/Images/PRODUCT LIST/LANDSCAPE/VIRTUAL REALITY/Asset 34.png'
// import MRpop from '../../CodebrewAssets/Images/PRODUCT LIST/LANDSCAPE/MIXED REALITY/Asset 32.png'
// import Metapop from '../../CodebrewAssets/Images/PRODUCT LIST/LANDSCAPE/METAVERSE/Asset 5.png'


import Robotpop from '../../CodebrewAssets/Images/PRODUCT LIST/LANDSCAPE/ROBOT ARM/Asset 4.png'
import Peddlepop from '../../CodebrewAssets/Images/PRODUCT LIST/LANDSCAPE/PEDDLE POWER/Asset 19.png'
import Brainwavepop from '../../CodebrewAssets/Images/PRODUCT LIST/LANDSCAPE/BRAINWAVE/Asset 18.png'
import GMpop from '../../CodebrewAssets/Images/PRODUCT LIST/LANDSCAPE/GIANT MUSICALS/Asset 23.png'
import RNpop from '../../CodebrewAssets/Images/PRODUCT LIST/LANDSCAPE/METAVERSE/Asset 5.png'

import Robotpopmob from '../../CodebrewAssets/Images/PRODUCT LIST/PORTRAIT/ROBOT ARM/Asset 26.png'
import Peddlepopmob from '../../CodebrewAssets/Images/PRODUCT LIST/PORTRAIT/PEDDLE POWER/Asset 27.png'
import Brainwavepopmob from '../../CodebrewAssets/Images/PRODUCT LIST/PORTRAIT/BRAINWAVE/Asset 28.png'
import GMpopmob from '../../CodebrewAssets/Images/PRODUCT LIST/PORTRAIT/GIANT MUSICALS/Asset 29.png'
import RNpopmob from '../../CodebrewAssets/Images/PRODUCT LIST/LANDSCAPE/RFID_NFC/Asset 22.png'


import Robotc from '../../CodebrewAssets/Images/PRODUCT LIST/LANDSCAPE/ROBOT ARM/Cover.jpg'
import Peddlec from '../../CodebrewAssets/Images/PRODUCT LIST/LANDSCAPE/PEDDLE POWER/Cover.jpg'
import Brainwavec from '../../CodebrewAssets/Images/PRODUCT LIST/LANDSCAPE/BRAINWAVE/Asset 18(1).jpg'
import GMc from '../../CodebrewAssets/Images/PRODUCT LIST/LANDSCAPE/GIANT MUSICALS/Cover.png'
import RNc from '../../CodebrewAssets/Images/PRODUCT LIST/LANDSCAPE/RFID_NFC/Cover.jpg'
import crossIcon from '../crossIcon.png'

const Mechatronics = () =>{

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

        if(pop === 'Robot Arm'){
            document.getElementById('backmob').style.backgroundImage = `url('${Robotpopmob}')`
            document.getElementById('paramob').innerHTML = 'Experience the precision and speed of robotic automation in real-world applications with our Robot Arm. This advanced piece of technology opens up new possibilities for automation and precision, redefining the standards of efficiency.'
        }

        if(pop === 'Peddle Power'){
            document.getElementById('backmob').style.backgroundImage = `url('${Peddlepopmob}')`
            document.getElementById('paramob').innerHTML = 'Generate electrical power through human kinetic energy with our Pedal-Power installations. This innovative technology highlights the potential of sustainable energy sources, providing an engaging, hands-on way to learn about and contribute to energy generation.'
        }

        if(pop === 'Brainwave'){
            document.getElementById('backmob').style.backgroundImage = `url('${Brainwavepopmob}')`
            document.getElementById('paramob').innerHTML = ' Interact with digital systems using brain activity with our EEG technology. This innovative application allows you to control digital interfaces using your brainwaves, providing a glimpse into the future of human-computer interaction.'
        }

        if(pop === 'Giant Musicals'){
            document.getElementById('backmob').style.backgroundImage = `url('${GMpopmob}')`
            document.getElementById('paramob').innerHTML = 'Make music with our large-scale interactive installations using sensor and sound technology. These installations allow you to create music through movement and interaction, providing a fun and engaging way to explore sound and rhythm.'
        }

        if(pop === 'RFID/NFC'){
            document.getElementById('backmob').style.backgroundImage = `url('${RNpopmob}')`
            document.getElementById('paramob').innerHTML = 'Experience seamless connectivity and interaction via wireless communication protocols like RFID and NFC. These technologies offer efficient, contactless interaction, providing a seamless and modern user experience.'
        }

        // document.getElementById('black').style.display = 'initial'


        document.getElementById('headmob').innerHTML = pop
        

        }
        else{
       
            document.getElementById('back').style.display = 'flex'

            if(pop === 'Robot Arm'){
                document.getElementById('back').style.backgroundImage = `url('${Robotpop}')`
                document.getElementById('para').innerHTML = ' Experience the precision and speed of robotic automation in real-world applications with our Robot Arm. This advanced piece of technology opens up new possibilities for automation and precision, redefining the standards of efficiency.'
            }
    
            if(pop === 'Peddle Power'){
                document.getElementById('back').style.backgroundImage = `url('${Peddlepop}')`
                document.getElementById('para').innerHTML = 'Generate electrical power through human kinetic energy with our Pedal-Power installations. This innovative technology highlights the potential of sustainable energy sources, providing an engaging, hands-on way to learn about and contribute to energy generation.'
            }
    
            if(pop === 'Brainwave'){
                document.getElementById('back').style.backgroundImage = `url('${Brainwavepop}')`
                document.getElementById('para').innerHTML = ' Interact with digital systems using brain activity with our EEG technology. This innovative application allows you to control digital interfaces using your brainwaves, providing a glimpse into the future of human-computer interaction.'
            }
    
            if(pop === 'Giant Musicals'){
                document.getElementById('back').style.backgroundImage = `url('${GMpop}')`
                document.getElementById('para').innerHTML = 'Make music with our large-scale interactive installations using sensor and sound technology. These installations allow you to create music through movement and interaction, providing a fun and engaging way to explore sound and rhythm.'
            }
    
            if(pop === 'RFID/NFC'){
                document.getElementById('back').style.backgroundImage = `url('${RNpop}')`
                document.getElementById('para').innerHTML = 'Experience seamless connectivity and interaction via wireless communication protocols like RFID and NFC. These technologies offer efficient, contactless interaction, providing a seamless and modern user experience.'
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
        <div style={{backgroundImage: `url('${wallpaper}')`, backgroundRepeat:'no-repeat', backgroundPosition: 'center center', backgroundSize:'cover', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', height: '100%', width: '100vw',overflow:'hidden'}}>
            {/* <video id="background-video" autoPlay loop muted style={{height: '120vh', width: '120vw', opacity: '0.15'}}>
                <source src={video} type='video/mp4' />
            </video> */}

            <div className="cursor" style={{transform: `translate3d(${cursorXY.x}px, ${cursorXY.y}px, 0)`, zIndex: '1000000000000000000000000000'}} />

            <div style={{display: 'flex', width: '100vw', height: '100vh', justifyContent: 'center', alignItems: 'center'}}>
                <div className='maindiv' >
                    
                    <div className='child'  style={{display: 'flex', width:'100%', justifyContent: 'center', alignItems: 'center'}}>
                        <div className="content content-1" style={{height: '200px', width: '130px', textAlign: 'center', padding: '15px'}} onClick={() =>{openpop('Robot Arm')}}>
                            <img src={Robotc} alt="Logo" style={{width: '40px', height: '150px', borderRadius: '10px', marginBottom: '9px'}}/>
                            <p style={{fontSize: '10px', color: 'white', paddingBottom: '20px'}}>Robot Arm</p>
                        </div>

                        <div className="content content-1" style={{height: '200px', width: '130px', textAlign: 'center', padding: '15px'}} onClick={() =>{openpop('Peddle Power')}}>
                            <img src={Peddlec} alt="Logo" style={{width: '40px', height: '150px', borderRadius: '10px', marginBottom: '9px'}}/>
                            <p style={{fontSize: '10px', color: 'white', paddingBottom: '20px'}}>Peddle Power</p>
                        </div>
                    </div>


                    <div className='child'  style={{display: 'flex', width:'100%', justifyContent: 'center', alignItems: 'center'}}>
                        <div className="content content-1" style={{height: '200px', width: '130px', textAlign: 'center', padding: '15px'}}  onClick={() =>{openpop('Brainwave')}}>
                            <img src={Brainwavec} alt="Logo" style={{width: '40px', height: '150px', borderRadius: '10px', marginBottom: '9px'}}/>
                            <p style={{fontSize: '10px', color: 'white', paddingBottom: '20px'}}>Brainwave</p>
                        </div>

                        <div className="content content-1" style={{height: '200px', width: '130px', textAlign: 'center', padding: '15px'}} onClick={() =>{openpop('Giant Musicals')}}>
                            <img src={GMc} alt="Logo" style={{width: '40px', height: '150px', borderRadius: '10px', marginBottom: '9px'}}/>
                            <p style={{fontSize: '10px', color: 'white', paddingBottom: '20px'}}>Giant Musicals</p>
                        </div>

                        <div className="content content-1" style={{height: '200px', width: '130px', textAlign: 'center', padding: '15px'}} onClick={() =>{openpop('RFID/NFC')}}>
                            <img src={RNc} alt="Logo" style={{width: '40px', height: '150px', borderRadius: '10px', marginBottom: '9px'}}/>
                            <p style={{fontSize: '10px', color: 'white', paddingBottom: '20px'}}>RFID/NFC</p>
                        </div>
                    </div>

                    <div id='black' style={{display:'none',background:'rgba(0,0,0,0.8',height:'100vh',width:'100vw',zIndex:'2',position:'absolute'}}>

                    </div>

                    <div id='back' style={{position:'absolute',width:'800px',height:'600px',backgroundImage:`url('${ARpop}')`,marginBottom:'180px',marginRight:'40px',color:'white',backgroundRepeat:'no-repeat',backgroundPosition: 'center center',backgroundSize:'contain',display:'none',alignItems:'center',flexDirection:'column',zIndex:'1000000000000000000000000'}}>
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
                                        <div id='backmob' style={{position:'absolute',zIndex:'40',width:'90%',marginBottom:'200px',height:'90%',color:'white',display:'none',alignItems:'center',flexDirection:'column',backgroundRepeat:'no-repeat',backgroundPosition: 'center center',backgroundSize:'contain'}}>
                    
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

export default Mechatronics