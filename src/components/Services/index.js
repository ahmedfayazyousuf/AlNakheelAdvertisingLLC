import { useMotionValue } from "framer-motion";
import { useState, useEffect } from "react";
import React from 'react';
import TDSigns from '../MediaAssets/Services/3dSigns.jpeg';
import AcrylicItems from '../MediaAssets/Services/AcrylicItems.jpeg';
import DigitalPrinting from '../MediaAssets/Services/DigitalPrinting.jpeg';
import EngravedSigns from '../MediaAssets/Services/EngravedSigns.jpeg';
import GlassStickers from '../MediaAssets/Services/GlassStickers.jpeg';
import OutdoorSigns from '../MediaAssets/Services/OutdoorSigns.jpeg';
import PlotterVinyl from '../MediaAssets/Services/PlotterVinyl.jpeg';
import RollupBanner from '../MediaAssets/Services/RollupBanner.jpeg';
import WallBranding from '../MediaAssets/Services/WallBranding.jpeg';
import WoodenStands from '../MediaAssets/Services/WoodenStands.jpeg';
import VehicleBranding from '../MediaAssets/Services/VehicleBranding.jpg';
import bg from '../MediaAssets/Services/bg3.jpg';
import Footer from "../Footer/index.js";


const Services = () =>{

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



    return(
        <div style={{width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center',backgroundRepeat:'no-repeat',backgroundPosition: 'center center',backgroundSize:'cover',backgroundImage:`url('${bg}')`}}>
            <div className="cursor" style={{transform: `translate3d(${cursorXY.x}px, ${cursorXY.y}px, 0)`, zIndex: '1000000000000000000000000000'}} />

            <div className="servicemain">

                <div className="serviceitem">
                    <div className="serviceimg" style={{backgroundImage:`url('${TDSigns}')`}}>

                    </div>

                    <div className="servicetextR">
                        <p className="servicetextheaderR">3D LED SIGNS</p> 
                        <p className="servicetextPara">3D LED signs are modern advertising displays that use colorful lights to create eye-catching designs. They make images and messages look 3D and pop out, which grabs people's attention. These signs can be used inside or outside by businesses to show off their brand, promotions, or messages in a cool and exciting way. They're energy-efficient and tough, making them a great choice for making a strong impression.</p>
                    </div>
                </div>


                <div className="serviceitem">
                    <div className="servicetextL">
                        <p className="servicetextheaderL">ACRYLIC DISPLAYS & DECOR</p> 
                        <p className="servicetextPara" style={{textAlign: 'right'}}>Acrylic displays, frames, and decor are clear and sturdy items used to show off things like posters, photos, or products. They're like see-through picture holders that add a sleek and modern touch to any space. These items are often used by businesses to showcase products or by individuals to display their favorite pictures or art. Acrylic is strong and durable, and it makes whatever you put inside it look clean and professional.</p>
                    </div>
                    
                    <div className="serviceimg" style={{backgroundImage:`url('${AcrylicItems}')`}}>

                    </div>
                </div>


                <div className="serviceitem">
                    <div className="serviceimg" style={{backgroundImage:`url('${DigitalPrinting}')`}}>

                    </div>

                    <div className="servicetextR">
                        <p className="servicetextheaderR">LARGE FORMAT DIGITAL PRINTING</p> 
                        <p className="servicetextPara">3D LED signs are modern advertising displays that use colorful lights to create eye-catching designs. They make images and messages look 3D and pop out, which grabs people's attention. These signs can be used inside or outside by businesses to show off their brand, promotions, or messages in a cool and exciting way. They're energy-efficient and tough, making them a great choice for making a strong impression.</p>
                    </div>
                </div>


                <div className="serviceitem">
                    <div className="servicetextL">
                        <p className="servicetextheaderL">GLASS STICKERS</p> 
                        <p className="servicetextPara" style={{textAlign: 'right'}}>3D LED signs are modern advertising displays that use colorful lights to create eye-catching designs. They make images and messages look 3D and pop out, which grabs people's attention. These signs can be used inside or outside by businesses to show off their brand, promotions, or messages in a cool and exciting way. They're energy-efficient and tough, making them a great choice for making a strong impression.</p>
                    </div>
                    
                    <div className="serviceimg" style={{backgroundImage:`url('${GlassStickers}')`}}>

                    </div>
                </div>


                <div className="serviceitem">
                    <div className="serviceimg" style={{backgroundImage:`url('${EngravedSigns}')`}}>

                    </div>

                    <div className="servicetextR">
                        <p className="servicetextheaderR">ENGRAVED SIGNS</p> 
                        <p className="servicetextPara">3D LED signs are modern advertising displays that use colorful lights to create eye-catching designs. They make images and messages look 3D and pop out, which grabs people's attention. These signs can be used inside or outside by businesses to show off their brand, promotions, or messages in a cool and exciting way. They're energy-efficient and tough, making them a great choice for making a strong impression.</p>
                    </div>
                </div>


                <div className="serviceitem">
                    <div className="servicetextL">
                        <p className="servicetextheaderL">OUTDOOR ROAD SIGNS</p> 
                        <p className="servicetextPara" style={{textAlign: 'right'}}>3D LED signs are modern advertising displays that use colorful lights to create eye-catching designs. They make images and messages look 3D and pop out, which grabs people's attention. These signs can be used inside or outside by businesses to show off their brand, promotions, or messages in a cool and exciting way. They're energy-efficient and tough, making them a great choice for making a strong impression.</p>
                    </div>
                    
                    <div className="serviceimg" style={{backgroundImage:`url('${OutdoorSigns}')`}}>

                    </div>
                </div>


                <div className="serviceitem">
                    <div className="serviceimg" style={{backgroundImage:`url('${PlotterVinyl}')`}}>

                    </div>

                    <div className="servicetextR">
                        <p className="servicetextheaderR">PLOTTER VINYL</p> 
                        <p className="servicetextPara">3D LED signs are modern advertising displays that use colorful lights to create eye-catching designs. They make images and messages look 3D and pop out, which grabs people's attention. These signs can be used inside or outside by businesses to show off their brand, promotions, or messages in a cool and exciting way. They're energy-efficient and tough, making them a great choice for making a strong impression.</p>
                    </div>
                </div>


                <div className="serviceitem">
                    <div className="servicetextL">
                        <p className="servicetextheaderL">ROLLUPS & STANDEES</p> 
                        <p className="servicetextPara" style={{textAlign: 'right'}}>3D LED signs are modern advertising displays that use colorful lights to create eye-catching designs. They make images and messages look 3D and pop out, which grabs people's attention. These signs can be used inside or outside by businesses to show off their brand, promotions, or messages in a cool and exciting way. They're energy-efficient and tough, making them a great choice for making a strong impression.</p>
                    </div>
                    
                    <div className="serviceimg" style={{backgroundImage:`url('${RollupBanner}')`}}>

                    </div>
                </div>


                <div className="serviceitem">
                    <div className="serviceimg" style={{backgroundImage:`url('${WallBranding}')`}}>

                    </div>

                    <div className="servicetextR">
                        <p className="servicetextheaderR">WALL BRANDING</p> 
                        <p className="servicetextPara">3D LED signs are modern advertising displays that use colorful lights to create eye-catching designs. They make images and messages look 3D and pop out, which grabs people's attention. These signs can be used inside or outside by businesses to show off their brand, promotions, or messages in a cool and exciting way. They're energy-efficient and tough, making them a great choice for making a strong impression.</p>
                    </div>
                </div>


                <div className="serviceitem">
                    <div className="servicetextL">
                        <p className="servicetextheaderL">WOODEN DISPLAYS & STANDS</p> 
                        <p className="servicetextPara" style={{textAlign: 'right'}}>3D LED signs are modern advertising displays that use colorful lights to create eye-catching designs. They make images and messages look 3D and pop out, which grabs people's attention. These signs can be used inside or outside by businesses to show off their brand, promotions, or messages in a cool and exciting way. They're energy-efficient and tough, making them a great choice for making a strong impression.</p>
                    </div>
                    
                    <div className="serviceimg" style={{backgroundImage:`url('${WoodenStands}')`}}>

                    </div>
                </div>


                <div className="serviceitem">
                    <div className="serviceimg" style={{backgroundImage:`url('${VehicleBranding}')`}}>

                    </div>

                    <div className="servicetextR">
                        <p className="servicetextheaderR">VEHICLE BRANDING</p> 
                        <p className="servicetextPara">3D LED signs are modern advertising displays that use colorful lights to create eye-catching designs. They make images and messages look 3D and pop out, which grabs people's attention. These signs can be used inside or outside by businesses to show off their brand, promotions, or messages in a cool and exciting way. They're energy-efficient and tough, making them a great choice for making a strong impression.</p>
                    </div>
                </div>



                <Footer />
            </div>
        </div>
    )
}

export default Services