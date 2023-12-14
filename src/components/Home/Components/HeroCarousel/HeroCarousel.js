import { useMotionValue } from "framer-motion";
import React, { useState, useEffect} from "react";
// import { KeyboardArrowLeftIcon, KeyboardArrowRightIcon } from '@mui/icons-material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
// import Wallpaper from './../../../1_MediaAssets/Projects/wallpaper.jpg';

import LEDSign from './../../../1_MediaAssets/Homepage/Signs.jpg';
import CarBranding from './../../../1_MediaAssets/Homepage/Car Branding.webp';
import Engraved from './../../../1_MediaAssets/Homepage/Engraved.avif';
import Outdoor from './../../../1_MediaAssets/Homepage/Outdoor.jpg';
import Wall from './../../../1_MediaAssets/Homepage/Wall.jpg';
import WebDev from './../../../1_MediaAssets/Homepage/WebDev.jpg';
import Glass from './../../../1_MediaAssets/Homepage/Glass.jpg';

// import Signs from './../../../1_MediaAssets/Projects/Signs.jpeg';
import { useNavigate } from "react-router-dom";


export default function Hero(){ 
    const navigate = useNavigate();

    // CURSOR ANIMATION 
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    // eslint-disable-next-line
    const springConfig = { damping: 25, stiffness: 700 };

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


    useEffect(()=>{
        document.getElementById('next').onclick = function(){
            let lists = document.querySelectorAll('.item');
            document.getElementById('slideHero').appendChild(lists[0]);
        }
        document.getElementById('prev').onclick = function(){
            let lists = document.querySelectorAll('.item');
            document.getElementById('slideHero').prepend(lists[lists.length - 1]);
        }
          
    },[])


    const [isHovering, setIsHovering] = useState(false);

    // Event handler for when the mouse enters the div
    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    // Event handler for when the mouse leaves the div
    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    // Style object to conditionally set the width and height
    // eslint-disable-next-line
    const cursorStyle = {
        width: isHovering ? '60px' : '30px',
        height: isHovering ? '60px' : '30px',
    };

    return(
        <div style={{background: 'grey', height: '100vh', width: '100vw', display:'flex', justifyContent: 'center', alignItems: 'center',position:'relative', padding: '0', margin: '0'}}>


            <div className="cursor" style={{transform: `translate3d(${cursorXY.x}px, ${cursorXY.y}px, 0)`, zIndex: '1000000000000000000000000000',width: isHovering ? '60px' : '30px',height: isHovering ? '60px' : '30px', transition: isHovering ? 'width 0.5s, height 0.5s' : 'width 0.5s, height 0.5s', borderRadius: isHovering ? '200px' : '100px'}} />

            <div id="slideHero">
                <div class="item" style={{backgroundImage: `url('${CarBranding}')`}}>
                    <div id="HoverCursor" class="content HoverCursor" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{zIndex:'1000000000000000'}}>
                        <div class="name HoverCursor">VEHICLE BRANDING</div>
                        <div class="des">Vehicle branding is like giving a vehicle a stylish makeover with custom graphics, logos, or messages. It's a way to turn cars, trucks, or even buses into mobile billboards for businesses or causes. </div>
                        <button onClick= {()=> navigate("/Services")} className='buttonDefault' style={{width: '120px', height: '50px', fontSize: '14px'}}>Read more</button>
                    </div>
                </div>
                <div class="item" style={{backgroundImage: `url('${LEDSign}')`}}>
                    <div id="HoverCursor" class="content HoverCursor" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{zIndex:'1000000000000000'}}>
                        <div class="name">3D LED Signs</div>
                        <div class="des">3D LED signs are modern advertising displays that use colorful lights to create eye-catching designs. They make images and messages look 3D and pop out, which grabs people's attention. </div>
                        <button onClick= {()=> navigate("/Services")} className='buttonDefault' style={{width: '120px', height: '50px', fontSize: '14px'}}>Read more</button>
                    </div>
                </div>
                <div class="item" style={{backgroundImage: `url('${Engraved}')`}}>
                    <div id="HoverCursor" class="content HoverCursor" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{zIndex:'1000000000000000'}}>
                        <div class="name">ENGRAVED SIGNS</div>
                        <div class="des">Engraved signs are like personalized messages or designs that are carved onto different materials, such as metal, wood, or plastic. This carving gives the sign a textured and permanent look. </div>
                        <button onClick= {()=> navigate("/Services")} className='buttonDefault' style={{width: '120px', height: '50px', fontSize: '14px'}}>Read more</button>
                    </div>
                </div>
                <div class="item" style={{backgroundImage: `url('${Outdoor}')`}}>
                    <div id="HoverCursor" class="content HoverCursor" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{zIndex:'1000000000000000'}}> 
                        <div class="name">OUTDOOR ROAD SIGNS</div>
                        <div class="des">Outdoor road signs are like guides on the street that help people navigate and stay safe while driving or walking. They're usually made of reflective materials so they're easy to see, even at night. </div>
                        <button onClick= {()=> navigate("/Services")} className='buttonDefault' style={{width: '120px', height: '50px', fontSize: '14px'}}>Read more</button>
                    </div>
                </div>
                <div class="item" style={{backgroundImage: `url('${Wall}')`}}>
                    <div id="HoverCursor" class="content HoverCursor" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{zIndex:'1000000000000000'}}> 
                        <div class="name">WALL BRANDING</div>
                        <div class="des">Wall branding is like giving a space a unique personality by adding custom designs or graphics directly onto walls. It's a creative way to transform plain walls into engaging and memorable displays. </div>
                        <button onClick= {()=> navigate("/Services")} className='buttonDefault' style={{width: '120px', height: '50px', fontSize: '14px'}}>Read more</button>
                    </div>
                </div>
                <div class="item" style={{backgroundImage: `url('${WebDev}')`}}>
                    <div id="HoverCursor" class="content HoverCursor" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{zIndex:'1000000000000000'}}> 
                        <div class="name">WEBSITE DEVELOPMENT</div>
                        <div class="des">Website development is like building a digital space on the internet. It involves creating and designing web pages that people can visit to find information, products, or services. </div>
                        <button onClick= {()=> navigate("/Services")} className='buttonDefault' style={{width: '120px', height: '50px', fontSize: '14px'}}>Read more</button>
                    </div>
                </div>
                <div class="item" style={{backgroundImage: `url('${Glass}')`}}>
                    <div id="HoverCursor" class="content HoverCursor" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{zIndex:'1000000000000000'}}> 
                        <div class="name">GLASS BRANDING</div>
                        <div class="des">Glass stickers are like cool decals that you can stick onto glass surfaces. They come in various designs, patterns, and colors, and they can add style and privacy to windows and glass doors. We offer frosted, one-way vision, branded vinyl and many other types.</div>
                        <button onClick= {()=> navigate("/Services")} className='buttonDefault' style={{width: '120px', height: '50px', fontSize: '14px'}}>Read more</button>
                    </div>
                </div>
            </div> 
            
            <div className="buttons" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <button id="prev">
                    <KeyboardArrowLeftIcon/>
                </button>

                <button id="next">
                    <KeyboardArrowRightIcon/>
                </button>
            </div>

        </div>

    )
}