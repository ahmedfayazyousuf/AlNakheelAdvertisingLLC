// eslint-disable-next-line
import { motion, useMotionValue } from "framer-motion";
import { useState, useEffect } from "react";

import wallpaper from '../../CodebrewAssets/Images/TechTypes/wallpaper.jpg';
// import video from '../TechTypesAssets/video.mp4';
// import bg from '../TechTypesAssets/bg6.png'
// import ar from '../TechTypesAssets/AR.jpg'
import ARpop from '../../CodebrewAssets/Images/PRODUCT LIST/LANDSCAPE/AR GAMES/Asset 28.png'
import VRpop from '../../CodebrewAssets/Images/PRODUCT LIST/LANDSCAPE/VR GAMES/Asset 10.png'
import CMGpop from '../../CodebrewAssets/Images/PRODUCT LIST/LANDSCAPE/CUSTOMISABLE MOTION GAMES/Asset 8.png'
import Touchpop from '../../CodebrewAssets/Images/PRODUCT LIST/LANDSCAPE/TOUCH GAMES/Asset 11.png'

import ARpopmob from '../../CodebrewAssets/Images/PRODUCT LIST/PORTRAIT/AR GAMES/Asset 14.png'
import VRpopmob from '../../CodebrewAssets/Images/PRODUCT LIST/PORTRAIT/VR GAMES/Asset 15.png'
import CMGpopmob from '../../CodebrewAssets/Images/PRODUCT LIST/PORTRAIT/CUSTOMISABLE MOTION GAMES/Asset 12.png'
import Touchpopmob from '../../CodebrewAssets/Images/PRODUCT LIST/PORTRAIT/TOUCH GAMES/Asset 13.png'

import ARc from '../../CodebrewAssets/Images/PRODUCT LIST/LANDSCAPE/AR GAMES/cover.png'
import VRc from '../../CodebrewAssets/Images/PRODUCT LIST/LANDSCAPE/VR GAMES/Cover.jpg'
import CMGc from '../../CodebrewAssets/Images/PRODUCT LIST/LANDSCAPE/CUSTOMISABLE MOTION GAMES/cover.jpg'
import Touchc from '../../CodebrewAssets/Images/PRODUCT LIST/LANDSCAPE/TOUCH GAMES/Cover.png'
import crossIcon from '../crossIcon.png'


const XReality = () =>{

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

            if(pop === 'Customizable Motion Games'){
                document.getElementById('backmob').style.backgroundImage = `url('${CMGpopmob}')`
                document.getElementById('paramob').innerHTML = ' Enjoy interactive games that utilize motion-sensing technology for a personalized experience. These games react to your body movements, offering an exciting and immersive gaming experience that encourages physical activity and engagement.'
            }
    
            if(pop === 'Touch Games'){
                document.getElementById('backmob').style.backgroundImage = `url('${Touchpopmob}')`
                document.getElementById('paramob').innerHTML = 'Engage with games that leverage touchscreen technology for intuitive play. With a simple tap or swipe, these games offer easy navigation and a high level of engagement, making them perfect for all age groups.'
            }
    
            if(pop === 'AR Games'){
                document.getElementById('backmob').style.backgroundImage = `url('${ARpopmob}')`
                document.getElementById('paramob').innerHTML = ' Experience games with a new layer of interactivity using Augmented Reality technology. These games superimpose digital elements onto your physical environment, providing an immersive gaming experience that blurs the line between the virtual and real world.'
            }
    
            if(pop === 'VR Games'){
                document.getElementById('backmob').style.backgroundImage = `url('${VRpopmob}')`
                document.getElementById('paramob').innerHTML = 'Dive into immersive worlds created by state-of-the-art Virtual Reality technology. These games offer you the chance to explore, learn, and have fun in environments that are limited only by imagination, providing an escape from reality and a unique gaming experience.'
            }
    
            // document.getElementById('black').style.display = 'initial'
    
    
            document.getElementById('headmob').innerHTML = pop
            
    
    
        }
        else{
            document.getElementById('back').style.display = 'flex'

            if(pop === 'Customizable Motion Games'){
                document.getElementById('back').style.backgroundImage = `url('${CMGpop}')`
                document.getElementById('para').innerHTML = ' Enjoy interactive games that utilize motion-sensing technology for a personalized experience. These games react to your body movements, offering an exciting and immersive gaming experience that encourages physical activity and engagement.'
            }
    
            if(pop === 'Touch Games'){
                document.getElementById('back').style.backgroundImage = `url('${Touchpop}')`
                document.getElementById('para').innerHTML = ' Engage with games that leverage touchscreen technology for intuitive play. With a simple tap or swipe, these games offer easy navigation and a high level of engagement, making them perfect for all age groups.'
            }
    
            if(pop === 'AR Games'){
                document.getElementById('back').style.backgroundImage = `url('${ARpop}')`
                document.getElementById('para').innerHTML = 'Experience games with a new layer of interactivity using Augmented Reality technology. These games superimpose digital elements onto your physical environment, providing an immersive gaming experience that blurs the line between the virtual and real world.'
            }
    
            if(pop === 'VR Games'){
                document.getElementById('back').style.backgroundImage = `url('${VRpop}')`
                document.getElementById('para').innerHTML = 'Dive into immersive worlds created by state-of-the-art Virtual Reality technology. These games offer you the chance to explore, learn, and have fun in environments that are limited only by imagination, providing an escape from reality and a unique gaming experience.'
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

            <div style={{display: 'flex', width: '100vw', height: '100%', justifyContent: 'center', alignItems: 'center',overflowY:'scroll'}}>
                <div className='maindiv' >
                    
                    <div className='child'  style={{display: 'flex', width:'100%', justifyContent: 'center', alignItems: 'center'}}>
                        <div className="content content-1" style={{height: '200px', width: '130px', textAlign: 'center', padding: '15px'}} onClick={() =>{openpop('Customizable Motion Games')}}>
                            <img src={CMGc} alt="Logo" style={{width: '40px', height: '150px', borderRadius: '10px', marginBottom: '9px'}}/>
                            <p style={{fontSize: '10px', color: 'white', paddingBottom: '20px'}}>Customizable Motion Games</p>
                        </div>

                        <div className="content content-1" style={{height: '200px', width: '130px', textAlign: 'center', padding: '15px'}} onClick={() =>{openpop('Touch Games')}}>
                            <img src={Touchc} alt="Logo" style={{width: '40px', height: '150px', borderRadius: '10px', marginBottom: '9px'}}/>
                            <p style={{fontSize: '10px', color: 'white', paddingBottom: '20px'}}>Touch Games</p>
                        </div>
                    </div>


                    <div className='child'  style={{display: 'flex', width:'100%', justifyContent: 'center', alignItems: 'center'}} >
                        <div className="content content-1" style={{height: '200px', width: '130px', textAlign: 'center', padding: '15px'}} onClick={() =>{openpop('AR Games')}}>
                            <img src={ARc} alt="Logo" style={{width: '40px', height: '150px', borderRadius: '10px', marginBottom: '9px'}}/>
                            <p style={{fontSize: '10px', color: 'white', paddingBottom: '20px'}}>AR Games</p>
                        </div>

                        <div className="content content-1" style={{height: '200px', width: '130px', textAlign: 'center', padding: '15px'}} onClick={() =>{openpop('VR Games')}}>
                            <img src={VRc} alt="Logo" style={{width: '40px', height: '150px', borderRadius: '10px', marginBottom: '9px'}}/>
                            <p style={{fontSize: '10px', color: 'white', paddingBottom: '20px'}}>VR Games</p>
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

export default XReality