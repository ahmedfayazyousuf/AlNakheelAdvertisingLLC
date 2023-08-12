import wallpaper from '../../CodebrewAssets/Images/TechTypes/wallpaper.jpg';

// eslint-disable-next-line
import { motion, useMotionValue } from "framer-motion";
import { useState, useEffect } from "react";
// import video from '../TechTypesAssets/video.mp4';
// import bg from '../TechTypesAssets/bg6.png'
import ar from '../TechTypesAssets/AR.jpg'
import ARpop from '../../CodebrewAssets/Images/PRODUCT LIST/LANDSCAPE/AUGMENTED REALITY/Asset 35.png'
import VRpop from '../../CodebrewAssets/Images/PRODUCT LIST/LANDSCAPE/VIRTUAL REALITY/Asset 34.png'
import MRpop from '../../CodebrewAssets/Images/PRODUCT LIST/LANDSCAPE/MIXED REALITY/Asset 32.png'
import Metapop from '../../CodebrewAssets/Images/PRODUCT LIST/LANDSCAPE/METAVERSE/Asset 5.png'
import VRc from '../../CodebrewAssets/Images/PRODUCT LIST/LANDSCAPE/VIRTUAL REALITY/Cover.jpg'
import MRc from '../../CodebrewAssets/Images/PRODUCT LIST/LANDSCAPE/MIXED REALITY/Cover.png'
import Metac from '../../CodebrewAssets/Images/PRODUCT LIST/LANDSCAPE/METAVERSE/Cover.jpg'


import ARpopMob from '../../CodebrewAssets/Images/PRODUCT LIST/PORTRAIT/AUGMENTED REALITY/Asset 35.png'
import VRpopMob from '../../CodebrewAssets/Images/PRODUCT LIST/PORTRAIT/VIRTUAL REALITY/Asset 37.png'
import MRpopMob from '../../CodebrewAssets/Images/PRODUCT LIST/PORTRAIT/MIXED REALITY/Asset 3.png'
import MetapopMob from '../../CodebrewAssets/Images/PRODUCT LIST/PORTRAIT/METAVERSE/Asset 4.png'
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
            document.getElementById('backmob').style.overflowY = 'hidden'
            document.getElementById('black').style.overflowY = 'hidden'
            

            if(pop === 'Augmented Reality'){
                document.getElementById('backmob').style.backgroundImage = `url('${ARpopMob}')`
                document.getElementById('paramob').innerHTML = ' Our AR technology enriches your physical world with a layer of digital information. Interactive characters and features spring to life in your surroundings, infusing your environment with dynamic, digital components. Accessible through your smartphone or tablet, AR invites you to explore an enhanced world that straddles the line between reality and imagination.'
    
               
            }
    
            if(pop === 'Virtual Reality'){
                document.getElementById('backmob').style.backgroundImage = `url('${VRpopMob}')`
                document.getElementById('paramob').innerHTML = ' Our VR technology catapults you into lifelike digital landscapes where you can participate in a multitude of events. From corporate conferences to intimate social gatherings, these virtual arenas provide an immersive experience that transcends physical boundaries, making every event memorable and unique.'
    
               
            }
    
            if(pop === 'Mixed Reality'){
                document.getElementById('backmob').style.backgroundImage = `url('${MRpopMob}')`
                document.getElementById('paramob').innerHTML = ' Immerse yourself in hybrid realms with our Mixed Reality experiences. Here, digital objects and actual surroundings converge, providing an extraordinary blend of realities. This interactive experience anchors virtual elements in your real world, expanding the scope of engagement and transforming your perception of technology.'
    
              
            }
    
            if(pop === 'Metaverse'){
                document.getElementById('backmob').style.backgroundImage = `url('${MetapopMob}')`
                document.getElementById('paramob').innerHTML = ' Delve into the Metaverse, an expansive virtual universe with boundless opportunities. In this digital realm, you can attend immersive conferences, vibrant concerts, and engage with lifelike avatars. The Metaverse eradicates geographic boundaries, enabling you to connect with individuals globally, fostering an innovative platform for exploration, socialization, and collaboration.'
    
               
            }
    
            // document.getElementById('black').style.display = 'initial'
    
    
            document.getElementById('headmob').innerHTML = pop
           
    
        }
        else{
            document.getElementById('back').style.display = 'flex'

            if(pop === 'Augmented Reality'){
                document.getElementById('back').style.backgroundImage = `url('${ARpop}')`
                document.getElementById('para').innerHTML = ' Our AR technology enriches your physical world with a layer of digital information. Interactive characters and features spring to life in your surroundings, infusing your environment with dynamic, digital components. Accessible through your smartphone or tablet, AR invites you to explore an enhanced world that straddles the line between reality and imagination.'
               
            }
    
            if(pop === 'Virtual Reality'){
                document.getElementById('back').style.backgroundImage = `url('${VRpop}')`
                document.getElementById('para').innerHTML = ' Our VR technology catapults you into lifelike digital landscapes where you can participate in a multitude of events. From corporate conferences to intimate social gatherings, these virtual arenas provide an immersive experience that transcends physical boundaries, making every event memorable and unique.'
               
            }
    
            if(pop === 'Mixed Reality'){
                document.getElementById('back').style.backgroundImage = `url('${MRpop}')`
                document.getElementById('para').innerHTML = ' Immerse yourself in hybrid realms with our Mixed Reality experiences. Here, digital objects and actual surroundings converge, providing an extraordinary blend of realities. This interactive experience anchors virtual elements in your real world, expanding the scope of engagement and transforming your perception of technology.'
              
            }
    
            if(pop === 'Metaverse'){
                document.getElementById('back').style.backgroundImage = `url('${Metapop}')`
                document.getElementById('para').innerHTML = ' Delve into the Metaverse, an expansive virtual universe with boundless opportunities. In this digital realm, you can attend immersive conferences, vibrant concerts, and engage with lifelike avatars. The Metaverse eradicates geographic boundaries, enabling you to connect with individuals globally, fostering an innovative platform for exploration, socialization, and collaboration.'
               
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
        <div id='bb' style={{flexDirection: 'column', backgroundImage: `url('${wallpaper}')`, backgroundRepeat:'no-repeat', backgroundPosition: 'center center', backgroundSize:'cover', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', height: '100vh', width: '100vw'}}>
            <div className="cursor" style={{transform: `translate3d(${cursorXY.x}px, ${cursorXY.y}px, 0)`, zIndex: '1000000000000000000000000000'}} />

            <div style={{display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center', height: '100px', marginTop: '60px', marginBottom: '-40px'}}>
                <div style={{display: 'flex', width: '25%', justifyContent: 'center', alignItems: 'center'}}>
                    {/* <h3 style={{color: 'white', fontSize: '40px', margin: '0'}}>X - REALITY</h3> */}
                </div>

                <div style={{display: 'flex', width: '50%', justifyContent: 'center', alignItems: 'center'}}>
                    <h3 style={{color: 'white', fontSize: '40px', margin: '0'}}>X - REALITY</h3>
                </div>

                <div style={{display: 'flex', width: '25%', justifyContent: 'center', alignItems: 'center'}}>
                    {/* <h3 style={{color: 'white', fontSize: '40px', margin: '0'}}>X - REALITY</h3> */}
                </div>
            </div>

            <div style={{display: 'flex', width: '100vw', height: '100%', justifyContent: 'center', alignItems: 'center', flexDirection:'column'}}>
                <div className='maindiv' >     
                    <div className='child' style={{display: 'flex', width:'100%', justifyContent: 'center', alignItems: 'center'}}>
                        <div className="content content-1" style={{height: '180px', maxHeight: '200px', width: '130px', textAlign: 'center', padding: '15px'}} onClick={() =>{openpop('Augmented Reality')}}>
                            <img id='ar' src={ar} alt="Logo" style={{width: '40px', height: '130px', borderRadius: '10px', marginBottom: '9px'}}/>
                            <p style={{fontSize: '10px', color: 'white', paddingBottom: '20px'}}>AUGMENTED REALITY</p>
                        </div>

                        <div className="content content-1" style={{height: '180px', maxHeight: '200px', width: '130px', textAlign: 'center', padding: '15px'}} onClick={() =>{openpop('Virtual Reality')}}>
                            <img id='vr' src={VRc} alt="Logo" style={{width: '40px', height: '130px', borderRadius: '10px', marginBottom: '9px'}}/>
                            <p style={{fontSize: '10px', color: 'white', paddingBottom: '20px'}}>VIRTUAL REALITY</p>
                        </div>
                    </div>

                    <div className='child' style={{display: 'flex', width:'100%', justifyContent: 'center', alignItems: 'center'}}>
                        <div className="content content-1" style={{height: '180px', maxHeight: '200px', width: '130px', textAlign: 'center', padding: '15px'}} onClick={() =>{openpop('Mixed Reality')}}>
                            <img id='mr' src={MRc} alt="Logo" style={{width: '40px', height: '130px', borderRadius: '10px', marginBottom: '9px'}}/>
                            <p style={{fontSize: '10px', color: 'white', paddingBottom: '20px'}}>MIXED REALITY</p>
                        </div>

                        <div className="content content-1" style={{height: '180px', maxHeight: '200px', width: '130px', textAlign: 'center', padding: '15px'}} onClick={() =>{openpop('Metaverse')}}>
                            <img id='meta' src={Metac} alt="Logo" style={{width: '40px', height: '130px', borderRadius: '10px', marginBottom: '9px'}}/>
                            <p  style={{fontSize: '10px', color: 'white', paddingBottom: '20px'}}>METAVERSE</p>
                        </div>
                    </div>

                    <div id='black' style={{display:'none',background:'rgba(0,0,0,0.8',height:'100vh',width:'100vw',zIndex:'2',position:'absolute'}}>

                    </div>

                    {/* DESKTOP POPUP */}
                    <div id='back' style={{position:'absolute',width:'800px',height:'600px',backgroundImage:`url('${ARpop}')`,marginBottom:'180px',marginRight:'40px',color:'white',backgroundRepeat:'no-repeat',backgroundPosition: 'center center',backgroundSize:'contain',display:'none',alignItems:'center',flexDirection:'column',zIndex:'1000000000000000000000000',overflowY:'hidden'}}>
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
                    <div id='backmob' style={{position:'absolute',width:'90%',marginBottom:'200px',height:'90%',color:'white',display:'none',alignItems:'center',flexDirection:'column',backgroundImage:`url('${ARpopMob}')`,backgroundRepeat:'no-repeat',backgroundPosition: 'center center',backgroundSize:'contain',zIndex:'10000000000000000'}}>
                    
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