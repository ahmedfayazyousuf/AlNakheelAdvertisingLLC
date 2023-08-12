// eslint-disable-next-line
import { motion, useMotionValue } from "framer-motion";
import { useState, useEffect } from "react";

import wallpaper from '../../CodebrewAssets/Images/TechTypes/wallpaper.jpg';
// import video from '../TechTypesAssets/video.mp4';
// import bg from '../TechTypesAssets/bg6.png'
// import ar from '../TechTypesAssets/AR.jpg'
import crossIcon from '../crossIcon.png'
import ARpop from '../../CodebrewAssets/Images/PRODUCT LIST/LANDSCAPE/AUGMENTED REALITY/Asset 35.png'
// import VRpop from '../../CodebrewAssets/Images/PRODUCT LIST/LANDSCAPE/VIRTUAL REALITY/Asset 34.png'
// import MRpop from '../../CodebrewAssets/Images/PRODUCT LIST/LANDSCAPE/MIXED REALITY/Asset 32.png'
// import Metapop from '../../CodebrewAssets/Images/PRODUCT LIST/LANDSCAPE/METAVERSE/Asset 5.png'


import Threephoto from '../../CodebrewAssets/Images/PRODUCT LIST/LANDSCAPE/360 PHOTOBOOTH/Asset 33.png'
import AI from '../../CodebrewAssets/Images/PRODUCT LIST/LANDSCAPE/360 PHOTOBOOTH/Asset 33.png'
import Mosaic from '../../CodebrewAssets/Images/PRODUCT LIST/LANDSCAPE/360 PHOTOBOOTH/Asset 33.png'
import Glam from '../../CodebrewAssets/Images/PRODUCT LIST/LANDSCAPE/360 PHOTOBOOTH/Asset 33.png'
import Cari from '../../CodebrewAssets/Images/PRODUCT LIST/LANDSCAPE/ROBOT CARICARTURE/Asset 30.png'
import AR from '../../CodebrewAssets/Images/PRODUCT LIST/LANDSCAPE/360 PHOTOBOOTH/Asset 33.png'
import Digital from '../../CodebrewAssets/Images/PRODUCT LIST/LANDSCAPE/360 PHOTOBOOTH/Asset 33.png'

import Threephotomob from '../../CodebrewAssets/Images/PRODUCT LIST/PORTRAIT/360 PHOTOBOOTH/Asset 5.png'
import AImob from '../../CodebrewAssets/Images/PRODUCT LIST/LANDSCAPE/AI GREEN SCREEN/Asset 31.png'
import Mosaicmob from '../../CodebrewAssets/Images/PRODUCT LIST/LANDSCAPE/PHOTO MOSAIC WALL/Asset 25.png'
import Glammob from '../../CodebrewAssets/Images/PRODUCT LIST/LANDSCAPE/ROBOT GLAMBOT/Asset 7.png'
import Carimob from '../../CodebrewAssets/Images/PRODUCT LIST/LANDSCAPE/ROBOT CARICARTURE/Asset 30.png'
import ARmob from '../../CodebrewAssets/Images/PRODUCT LIST/LANDSCAPE/AR PHOTOBOOTHS/Asset 29.png'
import Digitalmob from '../../CodebrewAssets/Images/PRODUCT LIST/LANDSCAPE/DIGITAL PHOTOBOOTHS/Asset 9.png'


import Threephotoc from '../../CodebrewAssets/Images/PRODUCT LIST/LANDSCAPE/360 PHOTOBOOTH/cover.png'
import AIc from '../../CodebrewAssets/Images/PRODUCT LIST/LANDSCAPE/AI GREEN SCREEN/Cover.jpg'
import Mosaicc from '../../CodebrewAssets/Images/PRODUCT LIST/LANDSCAPE/PHOTO MOSAIC WALL/Cover.png'
import Glamc from '../../CodebrewAssets/Images/PRODUCT LIST/LANDSCAPE/ROBOT GLAMBOT/Cover.png'
import Caric from '../../CodebrewAssets/Images/PRODUCT LIST/LANDSCAPE/ROBOT CARICARTURE/Cover.png'
import ARc from '../../CodebrewAssets/Images/PRODUCT LIST/LANDSCAPE/AR PHOTOBOOTHS/Cover.png'
import Digitalc from '../../CodebrewAssets/Images/PRODUCT LIST/LANDSCAPE/DIGITAL PHOTOBOOTHS/Cover.jpg'




const Photobooths = () =>{

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

        if(pop === '360 Photobooth'){
            document.getElementById('backmob').style.backgroundImage = `url('${Threephotomob}')`
            document.getElementById('paramob').innerHTML = ' The 360 Photobooth captures panoramic photos with rotating camera technology, offering a comprehensive view. It encapsulates moments from every angle, creating dynamic memories that can be shared and cherished.'
        }

        if(pop === 'AI Green Screen Photobooth'){
            document.getElementById('backmob').style.backgroundImage = `url('${AImob}')`
            document.getElementById('paramob').innerHTML = 'The AI Green Screen uses artificial intelligence to replace backgrounds in real-time, offering creative photo effects. This advanced technology allows for dynamic and unique backgrounds, making every photo an artistic creation.'
        }

        if(pop === 'Photo Mosaic Wall'){
            document.getElementById('backmob').style.backgroundImage = `url('${Mosaicmob}')`
            document.getElementById('paramob').innerHTML = 'With the Photo Mosaic Wall, individual photos are compiled to create a large, cohesive image using image recognition software. Each photo becomes a part of a bigger picture, contributing to a collective masterpiece and making every participant feel special.'
        }

        if(pop === 'Robot Glambot'){
            document.getElementById('backmob').style.backgroundImage = `url('${Glammob}')`
            document.getElementById('paramob').innerHTML = 'Experience the precision and efficiency of robotic photography with our Robot Glambot. Designed to capture stunning, high-quality images, it brings a new level of professionalism and novelty to the photo capturing experience.'
        }

        if(pop === 'Robot Caricature'){
            document.getElementById('backmob').style.backgroundImage = `url('${Carimob}')`
            document.getElementById('paramob').innerHTML = 'Have a blast with our Robot Caricature feature. AI-enabled robotic systems generate unique sketches, offering a fun and personalized keepsake that adds a dash of humor and creativity to any event.'
        }

        if(pop === 'AR Photobooths'){
            document.getElementById('backmob').style.backgroundImage = `url('${ARmob}')`
            document.getElementById('paramob').innerHTML = 'Our AR Photobooths utilize Augmented Reality technology to superimpose digital elements into your photo captures. This blend of digital and real elements adds a touch of whimsy and excitement to your photographs, creating lasting memories.'
        }

        if(pop === 'Digital Photobooths'){
            document.getElementById('backmob').style.backgroundImage = `url('${Digitalmob}')`
            document.getElementById('paramob').innerHTML = 'Our Digital Photobooths offer a seamless photo capturing and sharing experience, powered by high-resolution digital cameras. These booths provide easy-to-use interfaces and high-quality photos that can be shared instantly, adding a fun and engaging element to any event.'
        }



        // document.getElementById('black').style.display = 'initial'


        document.getElementById('headmob').innerHTML = pop
        

    
            }
            else{
                document.getElementById('back').style.display = 'flex'

                if(pop === '360 Photobooth'){
                    document.getElementById('back').style.backgroundImage = `url('${Threephoto}')`
                    document.getElementById('para').innerHTML = 'The 360 Photobooth captures panoramic photos with rotating camera technology, offering a comprehensive view. It encapsulates moments from every angle, creating dynamic memories that can be shared and cherished.'
                }
        
                if(pop === 'AI Green Screen Photobooth'){
                    document.getElementById('back').style.backgroundImage = `url('${AI}')`
                    document.getElementById('para').innerHTML = ' The AI Green Screen uses artificial intelligence to replace backgrounds in real-time, offering creative photo effects. This advanced technology allows for dynamic and unique backgrounds, making every photo an artistic creation.'
                }
        
                if(pop === 'Photo Mosaic Wall'){
                    document.getElementById('back').style.backgroundImage = `url('${Mosaic}')`
                    document.getElementById('para').innerHTML = 'With the Photo Mosaic Wall, individual photos are compiled to create a large, cohesive image using image recognition software. Each photo becomes a part of a bigger picture, contributing to a collective masterpiece and making every participant feel special.'
                }
        
                if(pop === 'Robot Glambot'){
                    document.getElementById('back').style.backgroundImage = `url('${Glam}')`
                    document.getElementById('para').innerHTML = 'Experience the precision and efficiency of robotic photography with our Robot Glambot. Designed to capture stunning, high-quality images, it brings a new level of professionalism and novelty to the photo capturing experience.'
                }
        
                if(pop === 'Robot Caricature'){
                    document.getElementById('back').style.backgroundImage = `url('${Cari}')`
                    document.getElementById('para').innerHTML = 'Have a blast with our Robot Caricature feature. AI-enabled robotic systems generate unique sketches, offering a fun and personalized keepsake that adds a dash of humor and creativity to any event.'
                }
        
                if(pop === 'AR Photobooths'){
                    document.getElementById('back').style.backgroundImage = `url('${AR}')`
                    document.getElementById('para').innerHTML = ' Our AR Photobooths utilize Augmented Reality technology to superimpose digital elements into your photo captures. This blend of digital and real elements adds a touch of whimsy and excitement to your photographs, creating lasting memories.'
                }
        
                if(pop === 'Digital Photobooths'){
                    document.getElementById('back').style.backgroundImage = `url('${Digital}')`
                    document.getElementById('para').innerHTML = 'Our Digital Photobooths offer a seamless photo capturing and sharing experience, powered by high-resolution digital cameras. These booths provide easy-to-use interfaces and high-quality photos that can be shared instantly, adding a fun and engaging element to any event.'
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

            <div style={{display: 'flex', width: '100vw', height: '100vh', justifyContent: 'center', alignItems: 'center',overflowY:'scroll'}}>
                <div className='maindiv'>
                    
                    <div className='child'  style={{display: 'flex', width:'100%', justifyContent: 'center', alignItems: 'center'}}>

                        <div className="content2 content-2" style={{height: '130px', textAlign: 'center', padding: '5px'}} onClick={() =>{openpop('360 Photobooth')}}>
                            <img src={Threephotoc} alt="Logo" style={{width: '40px', height: '85px', borderRadius: '5px', marginBottom: '9px'}}/>
                            <p style={{fontSize: '10px', color: 'white', paddingBottom: '20px'}}>360 Photobooth</p>
                        </div>

                        <div className="content2 content-2" style={{height: '130px', textAlign: 'center', padding: '5px'}} onClick={() =>{openpop('AI Green Screen Photobooth')}}>
                            <img src={AIc} alt="Logo" style={{width: '40px', height: '85px', borderRadius: '5px', marginBottom: '9px'}}/>
                            <p style={{fontSize: '10px', color: 'white', paddingBottom: '20px'}}>AI Green Screen Photobooth</p>
                        </div>

                        
                        <div className="content2 content-2" style={{height: '130px', textAlign: 'center', padding: '5px'}} onClick={() =>{openpop('Photo Mosaic Wall')}}>
                            <img src={Mosaicc} alt="Logo" style={{width: '40px', height: '85px', borderRadius: '5px', marginBottom: '9px'}}/>
                            <p style={{fontSize: '10px', color: 'white', paddingBottom: '20px'}}>Photo Mosaic Wall</p>
                        </div>
                        
                        <div className="content2 content-2" style={{height: '130px', textAlign: 'center', padding: '5px'}} onClick={() =>{openpop('Robot Glambot')}}>
                            <img src={Glamc} alt="Logo" style={{width: '40px', height: '85px', borderRadius: '5px', marginBottom: '9px'}}/>
                            <p style={{fontSize: '10px', color: 'white', paddingBottom: '20px'}}>Robot Glambot</p>
                        </div>

                    </div>


                    <div className='child'  style={{display: 'flex', width:'100%', justifyContent: 'center', alignItems: 'center'}}>

                        <div className="content2 content-2" style={{height: '130px', textAlign: 'center', padding: '5px'}} onClick={() =>{openpop('Robot Caricature')}}>
                            <img src={Caric} alt="Logo" style={{width: '40px', height: '85px', borderRadius: '5px', marginBottom: '9px'}}/>
                            <p style={{fontSize: '10px', color: 'white', paddingBottom: '20px'}}>Robot Caricature</p>
                        </div>

                        <div className="content2 content-2" style={{height: '130px', textAlign: 'center', padding: '5px'}} onClick={() =>{openpop('AR Photobooths')}}>
                            <img src={ARc} alt="Logo" style={{width: '40px', height: '85px', borderRadius: '5px', marginBottom: '9px'}}/>
                            <p style={{fontSize: '10px', color: 'white', paddingBottom: '20px'}}>AR Photobooths</p>
                        </div> 

                        <div className="content2 content-2" style={{height: '130px', textAlign: 'center', padding: '5px'}} onClick={() =>{openpop('Digital Photobooths')}}>
                            <img src={Digitalc} alt="Logo" style={{width: '40px', height: '85px', borderRadius: '120', marginBottom: '9px'}}/>
                            <p style={{fontSize: '10px', color: 'white', paddingBottom: '20px'}}>Digital Photobooths</p>
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
                            <p id='para' style={{width:'85%', fontSize:'12px',marginTop:'25px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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

export default Photobooths