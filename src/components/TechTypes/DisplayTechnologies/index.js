// eslint-disable-next-line
import { motion, useMotionValue } from "framer-motion";
import { useState, useEffect } from "react";

import wallpaper from '../../CodebrewAssets/Images/TechTypes/wallpaper.jpg';
import crossIcon from '../crossIcon.png'
import ARpop from '../../CodebrewAssets/Images/PRODUCT LIST/LANDSCAPE/AUGMENTED REALITY/Asset 35.png'
import Tanpop from '../../CodebrewAssets/Images/PRODUCT LIST/LANDSCAPE/TANGIBLE TABLE RECOGNITION/Asset 6.png'
import Swipepop from '../../CodebrewAssets/Images/PRODUCT LIST/LANDSCAPE/SWIPE AND LAUNCH SCREEN/Asset 14.png'
import PMpop from '../../CodebrewAssets/Images/PRODUCT LIST/LANDSCAPE/INTERACTIVE PORJECTION MAPPING/Asset 27.png'
import OLEDpop from '../../CodebrewAssets/Images/PRODUCT LIST/LANDSCAPE/TRANSPARENT OLED SCREEN/Asset 13.png'
import Touchpop from '../../CodebrewAssets/Images/PRODUCT LIST/LANDSCAPE/TOUCH SCREENS/Asset 12.png'
import Immersivepop from '../../CodebrewAssets/Images/PRODUCT LIST/LANDSCAPE/IMMERSIVE ROOMS/Asset 17.png'
import LEDpop from '../../CodebrewAssets/Images/PRODUCT LIST/LANDSCAPE/HOLOGRAPHIC LED DISPLAYS/Asset 26.png'
import Projectionpop from '../../CodebrewAssets/Images/PRODUCT LIST/LANDSCAPE/HOLOGRAPHIC PROJECTIONS/Asset 16.png'
import Classicpop from '../../CodebrewAssets/Images/PRODUCT LIST/LANDSCAPE/CLASSIC HOLOGRAMS/Asset 15.png'
import Fanspop from '../../CodebrewAssets/Images/PRODUCT LIST/LANDSCAPE/HOLOGRAPHIC FANS/Asset 24.png'
import Tanpopmob from '../../CodebrewAssets/Images/PRODUCT LIST/PORTRAIT/TANGIBLE TABLE RECOGNITION/Asset 16.png'
import Swipepopmob from '../../CodebrewAssets/Images/PRODUCT LIST/PORTRAIT/SWIPE AND LAUNCH SCREEN/Asset 17.png'
import PMpopmob from '../../CodebrewAssets/Images/PRODUCT LIST/PORTRAIT/INTERACTIVE PORJECTION MAPPING/Asset 18.png'
import OLEDpopmob from '../../CodebrewAssets/Images/PRODUCT LIST/PORTRAIT/TRANSPARENT OLED SCREEN/Asset 19.png'
import Touchpopmob from '../../CodebrewAssets/Images/PRODUCT LIST/PORTRAIT/TOUCH SCREENS/Asset 20.png'
import Immersivepopmob from '../../CodebrewAssets/Images/PRODUCT LIST/PORTRAIT/IMMERSIVE ROOMS/Asset 2.png'
import LEDpopmob from '../../CodebrewAssets/Images/PRODUCT LIST/PORTRAIT/HOLOGRAPHIC LED DISPLAYS/Asset 22.png'
import Projectionpopmob from '../../CodebrewAssets/Images/PRODUCT LIST/PORTRAIT/HOLOGRAPHIC PROJECTIONS/Asset 23.png'
import Classicpopmob from '../../CodebrewAssets/Images/PRODUCT LIST/PORTRAIT/CLASSIC HOLOGRAMS/Asset 24.png'
import Fanspopmob from '../../CodebrewAssets/Images/PRODUCT LIST/PORTRAIT/HOLOGRAPHIC FANS/Asset 25.png'
import Tanc from '../../CodebrewAssets/Images/PRODUCT LIST/LANDSCAPE/TANGIBLE TABLE RECOGNITION/COVER.png'
import Swipec from '../../CodebrewAssets/Images/PRODUCT LIST/LANDSCAPE/SWIPE AND LAUNCH SCREEN/Cover.jpg'
import PMc from '../../CodebrewAssets/Images/PRODUCT LIST/LANDSCAPE/INTERACTIVE PORJECTION MAPPING/cover.jpg'
import OLEDc from '../../CodebrewAssets/Images/PRODUCT LIST/LANDSCAPE/TRANSPARENT OLED SCREEN/Cover.jpg'
import Touchc from '../../CodebrewAssets/Images/PRODUCT LIST/LANDSCAPE/TOUCH SCREENS/Cover.jpg'
import Immersivec from '../../CodebrewAssets/Images/PRODUCT LIST/LANDSCAPE/IMMERSIVE ROOMS/Cover.png'
import LEDc from '../../CodebrewAssets/Images/PRODUCT LIST/LANDSCAPE/HOLOGRAPHIC LED DISPLAYS/Cover.jpg'
import Projectionc from '../../CodebrewAssets/Images/PRODUCT LIST/LANDSCAPE/HOLOGRAPHIC PROJECTIONS/Cover.png'
import Classicc from '../../CodebrewAssets/Images/PRODUCT LIST/LANDSCAPE/CLASSIC HOLOGRAMS/Asset 15.jpg'
import Fansc from '../../CodebrewAssets/Images/PRODUCT LIST/LANDSCAPE/HOLOGRAPHIC FANS/Cover.jpg'

const DigitalTechnologies = () =>{

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

            if(pop === 'Tangible Table Recognition'){
                document.getElementById('backmob').style.backgroundImage = `url('${Tanpopmob}')`
                document.getElementById('paramob').innerHTML = 'Our Tangible Table Recognition system offers multi-sensory engagement by delivering detailed product information through interactive, tangible forms. Using smart surfaces and object recognition, it transforms everyday items into interactive tools, enhancing the way you understand, engage with, and perceive information.'
            }
    
            if(pop === 'Swipe & Launch Screen'){
                document.getElementById('backmob').style.backgroundImage = `url('${Swipepopmob}')`
                document.getElementById('paramob').innerHTML = 'The Swipe & Launch Screen is designed to instantly captivate audiences. A simple swipe allows users to explore event offerings, engage with interactive content, or immerse themselves in unique experiences. This intuitive platform fosters user engagement, making every interaction exciting and meaningful.'
            }
    
            if(pop === 'Interactive Projection Mapping'){
                document.getElementById('backmob').style.backgroundImage = `url('${PMpopmob}')`
                document.getElementById('paramob').innerHTML = 'Experience the magic of Interactive Projection Mapping that transforms surfaces into dynamic canvases. With a perfect blend of light, sound, and movement, it creates a vivid storytelling medium that can be adapted for various event formats, providing a unique and immersive visual journey for attendees.'
            }
    
            if(pop === 'Transparent OLED Screen'){
                document.getElementById('backmob').style.backgroundImage = `url('${OLEDpopmob}')`
                document.getElementById('paramob').innerHTML = `Our Transparent OLED screens offer high-resolution visuals with a unique see-through effect. Whether you're showcasing product demonstrations or broadcasting engaging animations, these screens deliver content with exceptional depth and realism, enhancing viewer engagement and elevating your presentation capabilities.`
            }
    
            if(pop === 'Touch Screens'){
                document.getElementById('backmob').style.backgroundImage = `url('${Touchpopmob}')`
                document.getElementById('paramob').innerHTML = ' Our Touch Screens provide an intuitive, immersive platform for interaction. Adaptable for varied content presentations, they morph into powerful engagement tools catering to a diverse range of objectives. Their user-friendly interface encourages active participation, transforming passive viewers into interactive users.'
            }
    
            if(pop === 'Immersive Rooms'){
                document.getElementById('backmob').style.backgroundImage = `url('${Immersivepopmob}')`
                document.getElementById('paramob').innerHTML = 'Step into our Immersive Rooms, sensory-rich environments designed to stimulate engagement. Interactive elements, sensor-activated responses, and hands-on activities invite participants to immerse themselves in the experience, fostering exploration, discovery, and learning in an enthralling setting.'
            }
    
            if(pop === 'Holographic LED Displays'){
                document.getElementById('backmob').style.backgroundImage = `url('${LEDpopmob}')`
                document.getElementById('paramob').innerHTML = ' Witness the future of visual experiences with Holographic LED Displays. They project 3D images that appear to hover in mid-air, making logos, products, and brand stories come alive in an unforgettable way. This cutting-edge technology offers a unique, eye-catching medium for your brand messaging.'
            }
    
            if(pop === 'Holographic Projections'){
                document.getElementById('backmob').style.backgroundImage = `url('${Projectionpopmob}')`
                document.getElementById('paramob').innerHTML = 'Experience the spectacle of Holographic Projections. Virtual objects seem to materialize out of thin air, providing mesmerizing performances and product reveals. This technology creates an immersive atmosphere, adding a layer of wonder and intrigue to any event.'
            }
    
            if(pop === 'Classic Holograms'){
                document.getElementById('backmob').style.backgroundImage = `url('${Classicpopmob}')`
                document.getElementById('paramob').innerHTML = 'Our Classic Holograms bring a touch of futuristic technology to your event or space. This technology projects three-dimensional, lifelike images into space, creating an illusion of reality that captures attention and stirs curiosity. Whether you want to create a realistic representation of a product or bring a digital character to life, our classic holograms offer an extraordinary visual experience that adds a new dimension to any presentation or event.'
            }
    
            if(pop === 'Holographic Fans'){
                document.getElementById('backmob').style.backgroundImage = `url('${Fanspopmob}')`
                document.getElementById('paramob').innerHTML = 'Our Holographic Fans take visual displays to a new level, combining the charm of traditional fans with the magic of holography. By projecting images in mid-air, they create a captivating 3D effect that can be viewed from various angles. From detailed product displays to intricate logo presentations, these fans bring your content to life in an eye-catching and unforgettable way. They serve as perfect tools for advertising, product demonstration, event decoration, or simply to create an atmosphere of wonder and amazement.'
            }
    
            // document.getElementById('black').style.display = 'initial'
    
    
            document.getElementById('headmob').innerHTML = pop
     
        }
        else{
            document.getElementById('back').style.display = 'flex'

            if(pop === 'Tangible Table Recognition'){
                document.getElementById('back').style.backgroundImage = `url('${Tanpop}')`
                document.getElementById('para').innerHTML = ' Our Tangible Table Recognition system offers multi-sensory engagement by delivering detailed product information through interactive, tangible forms. Using smart surfaces and object recognition, it transforms everyday items into interactive tools, enhancing the way you understand, engage with, and perceive information.'
            }
    
            if(pop === 'Swipe & Launch Screen'){
                document.getElementById('back').style.backgroundImage = `url('${Swipepop}')`
                document.getElementById('para').innerHTML = 'The Swipe & Launch Screen is designed to instantly captivate audiences. A simple swipe allows users to explore event offerings, engage with interactive content, or immerse themselves in unique experiences. This intuitive platform fosters user engagement, making every interaction exciting and meaningful.'
            }
    
            if(pop === 'Interactive Projection Mapping'){
                document.getElementById('back').style.backgroundImage = `url('${PMpop}')`
                document.getElementById('para').innerHTML = 'Experience the magic of Interactive Projection Mapping that transforms surfaces into dynamic canvases. With a perfect blend of light, sound, and movement, it creates a vivid storytelling medium that can be adapted for various event formats, providing a unique and immersive visual journey for attendees.'
            }
    
            if(pop === 'Transparent OLED Screen'){
                document.getElementById('back').style.backgroundImage = `url('${OLEDpop}')`
                document.getElementById('para').innerHTML = `Our Transparent OLED screens offer high-resolution visuals with a unique see-through effect. Whether you're showcasing product demonstrations or broadcasting engaging animations, these screens deliver content with exceptional depth and realism, enhancing viewer engagement and elevating your presentation capabilities.`
            }
    
            if(pop === 'Touch Screens'){
                document.getElementById('back').style.backgroundImage = `url('${Touchpop}')`
                document.getElementById('para').innerHTML = ' Our Touch Screens provide an intuitive, immersive platform for interaction. Adaptable for varied content presentations, they morph into powerful engagement tools catering to a diverse range of objectives. Their user-friendly interface encourages active participation, transforming passive viewers into interactive users.'
            }
    
            if(pop === 'Immersive Rooms'){
                document.getElementById('back').style.backgroundImage = `url('${Immersivepop}')`
                document.getElementById('para').innerHTML = ' Step into our Immersive Rooms, sensory-rich environments designed to stimulate engagement. Interactive elements, sensor-activated responses, and hands-on activities invite participants to immerse themselves in the experience, fostering exploration, discovery, and learning in an enthralling setting.'
            }
    
            if(pop === 'Holographic LED Displays'){
                document.getElementById('back').style.backgroundImage = `url('${LEDpop}')`
                document.getElementById('para').innerHTML = 'Witness the future of visual experiences with Holographic LED Displays. They project 3D images that appear to hover in mid-air, making logos, products, and brand stories come alive in an unforgettable way. This cutting-edge technology offers a unique, eye-catching medium for your brand messaging.'
            }
    
            if(pop === 'Holographic Projections'){
                document.getElementById('back').style.backgroundImage = `url('${Projectionpop}')`
                document.getElementById('para').innerHTML = ' Experience the spectacle of Holographic Projections. Virtual objects seem to materialize out of thin air, providing mesmerizing performances and product reveals. This technology creates an immersive atmosphere, adding a layer of wonder and intrigue to any event.'
            }
    
            if(pop === 'Classic Holograms'){
                document.getElementById('back').style.backgroundImage = `url('${Classicpop}')`
                document.getElementById('para').innerHTML = ' Our Classic Holograms bring a touch of futuristic technology to your event or space. This technology projects three-dimensional, lifelike images into space, creating an illusion of reality that captures attention and stirs curiosity. Whether you want to create a realistic representation of a product or bring a digital character to life, our classic holograms offer an extraordinary visual experience that adds a new dimension to any presentation or event.'
            }
    
            if(pop === 'Holographic Fans'){
                document.getElementById('back').style.backgroundImage = `url('${Fanspop}')`
                document.getElementById('para').innerHTML = 'Our Holographic Fans take visual displays to a new level, combining the charm of traditional fans with the magic of holography. By projecting images in mid-air, they create a captivating 3D effect that can be viewed from various angles. From detailed product displays to intricate logo presentations, these fans bring your content to life in an eye-catching and unforgettable way. They serve as perfect tools for advertising, product demonstration, event decoration, or simply to create an atmosphere of wonder and amazement..'
            }
    
            document.getElementById('black').style.display = 'initial'
    
    
            document.getElementById('head').innerHTML = pop
         
    
        }
      }

      function Close(){
        console.log('closed')
        
        document.getElementById('backmob').style.display = 'none'
        document.getElementById('back').style.display = 'none'
        document.getElementById('black').style.display = 'none'
      }


    return(
        <div style={{backgroundImage: `url('${wallpaper}')`, backgroundRepeat:'no-repeat', backgroundPosition: 'center center', backgroundSize:'cover', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', height: '100vh', width: '100vw',overflow:'hidden', flexDirection: 'column'}}>
        <div className="cursor" style={{transform: `translate3d(${cursorXY.x}px, ${cursorXY.y}px, 0)`, zIndex: '1000000000000000000000000000'}} />
                    <div className='child' style={{display: 'flex', width:'100%', justifyContent: 'center', alignItems: 'center'}}>

                        <div className="content2 content-2" style={{height: '130px', textAlign: 'center', padding: '5px'}} onClick={() =>{openpop('Tangible Table Recognition')}}>
                            <img src={Tanc} alt="Logo" style={{width: '40px', height: '85px', borderRadius: '5px', marginBottom: '9px'}}/>
                            <p style={{fontSize: '10px', color: 'white', paddingBottom: '20px'}}>Tangible Table Recognition</p>
                        </div>

                        <div className="content2 content-2" style={{height: '130px', textAlign: 'center', padding: '5px'}} onClick={() =>{openpop('Swipe & Launch Screen')}}>
                            <img src={Swipec} alt="Logo" style={{width: '40px', height: '85px', borderRadius: '5px', marginBottom: '9px'}}/>
                            <p style={{fontSize: '10px', color: 'white', paddingBottom: '20px'}}>Swipe & Launch Screen</p>
                        </div>

                        
                        <div className="content2 content-2" style={{height: '130px', textAlign: 'center', padding: '5px'}} onClick={() =>{openpop('Interactive Projection Mapping')}}>
                            <img src={PMc} alt="Logo" style={{width: '40px', height: '85px', borderRadius: '5px', marginBottom: '9px'}}/>
                            <p style={{fontSize: '10px', color: 'white', paddingBottom: '20px'}}>Interactive Projection Mapping</p>
                        </div>
                        
                        <div className="content2 content-2" style={{height: '130px', textAlign: 'center', padding: '5px'}} onClick={() =>{openpop('Transparent OLED Screen')}}>
                            <img src={OLEDc} alt="Logo" style={{width: '40px', height: '85px', borderRadius: '5px', marginBottom: '9px'}}/>
                            <p style={{fontSize: '10px', color: 'white', paddingBottom: '20px'}}>Transparent OLED Screen</p>
                        </div>

                        <div className="content2 content-2" style={{height: '130px', textAlign: 'center', padding: '5px'}} onClick={() =>{openpop('Touch Screens')}}>
                            <img src={Touchc} alt="Logo" style={{width: '40px', height: '85px', borderRadius: '5px', marginBottom: '9px'}}/>
                            <p style={{fontSize: '10px', color: 'white', paddingBottom: '20px'}}>Touch Screens</p>
                        </div>
                        
                    </div>


                    <div className='child' style={{display: 'flex', width:'100%', justifyContent: 'center', alignItems: 'center'}}>

                        <div className="content2 content-2" style={{height: '130px', textAlign: 'center', padding: '5px'}} onClick={() =>{openpop('Immersive Rooms')}}>
                            <img src={Immersivec} alt="Logo" style={{width: '40px', height: '85px', borderRadius: '5px', marginBottom: '9px'}}/>
                            <p style={{fontSize: '10px', color: 'white', paddingBottom: '20px'}}>Immersive Rooms</p>
                        </div>

                        <div className="content2 content-2" style={{height: '130px', textAlign: 'center', padding: '5px'}} onClick={() =>{openpop('Holographic LED Displays')}}>
                            <img src={LEDc} alt="Logo" style={{width: '40px', height: '85px', borderRadius: '5px', marginBottom: '9px'}}/>
                            <p style={{fontSize: '10px', color: 'white', paddingBottom: '20px'}}>Holographic LED Displays</p>
                        </div>

                        <div className="content2 content-2" style={{height: '130px', textAlign: 'center', padding: '5px'}} onClick={() =>{openpop('Holographic Projections')}}>
                            <img src={Projectionc} alt="Logo" style={{width: '40px', height: '85px', borderRadius: '120', marginBottom: '9px'}}/>
                            <p style={{fontSize: '10px', color: 'white', paddingBottom: '20px'}}>Holographic Projections</p>
                        </div>

                        <div className="content2 content-2" style={{height: '130px', textAlign: 'center', padding: '5px'}} onClick={() =>{openpop('Classic Holograms')}}>
                            <img src={Classicc} alt="Logo" style={{width: '40px', height: '85px', borderRadius: '5px', marginBottom: '9px'}}/>
                            <p style={{fontSize: '10px', color: 'white', paddingBottom: '20px'}}>Classic Holograms</p>
                        </div>

                        <div className="content2 content-2" style={{height: '130px', textAlign: 'center', padding: '5px'}} onClick={() =>{openpop('Holographic Fans')}}>
                            <img src={Fansc} alt="Logo" style={{width: '40px', height: '85px', borderRadius: '5px', marginBottom: '9px'}}/>
                            <p style={{fontSize: '10px', color: 'white', paddingBottom: '20px'}}>Holographic Fans</p>
                        </div>

                    </div>

                    <div id='black' style={{display:'none',background:'rgba(0,0,0,0.8',height:'500vh',width:'100vw',zIndex:'2',position:'absolute'}}>

                    </div>

                    <div id='back' style={{position:'absolute',width:'800px',height:'600px',backgroundImage:`url('${ARpop}')`,marginBottom:'180px',marginRight:'40px',color:'white',backgroundRepeat:'no-repeat',backgroundPosition: 'center center',backgroundSize:'contain',display:'none',alignItems:'center',flexDirection:'column',zIndex:'1000000000000000000000000'}}>
                        <div style={{marginLeft:'160px',width:'100%',height:'100%',justifySelf:'flex-end',flex:'50%',display:'flex',alignItems:'flex-end'   }}>
                            <h1 id='head' style={{marginBottom:'5px',fontSize:'20px',flex:'50%'}}>Augmented Reality</h1>
                            <div style={{flex:'50%',display:'flex',justifyContent:'flex-end'}}> 
                                <img src={crossIcon} alt="Logo" style={{width:'30px', borderRadius: '5px', marginBottom: '9px',marginRight:'120px', alignSelf: 'flex-end',cursor:'pointer'}} onClick={Close}/>

                            </div>
                        </div>

                        <div style={{marginLeft:'160px',width:'100%',flex:'50%',display:'flex',alignItems:'center',marginTop:'80px'}}>
                            <p id='para' style={{width:'85%',fontSize:'12px',marginTop:'37px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>

                    {/* MOBILE POPUP  */}
                    <div id='backmob' style={{position:'absolute',width:'90%',marginBottom:'200px',height:'90%',color:'white',display:'none',alignItems:'center',flexDirection:'column',backgroundRepeat:'no-repeat',backgroundPosition: 'center center',backgroundSize:'contain',zIndex:'10000000000000000'}}>
                    
                    <div style={{width:'100%',height:'20%',justifySelf:'flex-end',display:'flex',alignItems:'flex-end',flexDirection:'column',zIndex:'10000000000000000'}}>
                    <div style={{flex:'50%',marginBottom:'-40px',display:'flex',justifyContent:'flex-end'}}> 
                            <img src={crossIcon} alt="Logo" style={{width:'30px', borderRadius: '5px', marginBottom: '9px',marginRight:'30px', alignSelf: 'flex-end',cursor:'pointer',zIndex:'10000000000000000'}} onClick={Close}/>

                        </div>
                        <h1 id='headmob' style={{marginRight: '90px',fontSize:'18px',marginLeft:'20px'}}>Augmented Reality</h1>
                    </div>

                    <div style={{width:'100%', height: '80%', display:'flex',alignItems:'center'}}>
                        <p id='paramob' style={{marginLeft: '70px', fontSize: '9px', width: '250px', marginTop: '30px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                </div>

                 </div>
    )
}

export default DigitalTechnologies      