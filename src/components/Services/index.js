import TextAnim from '../FadeAnimation.jsx';

import { useMotionValue } from "framer-motion";
import { useState, useEffect } from "react";
import React from 'react';
import TDSigns from '../1_MediaAssets/Services/3dSigns.jpeg';
import AcrylicItems from '../1_MediaAssets/Services/AcrylicItems.jpeg';
import DigitalPrinting from '../1_MediaAssets/Services/DigitalPrinting.jpeg';
import EngravedSigns from '../1_MediaAssets/Services/EngravedSigns.jpeg';
import GlassStickers from '../1_MediaAssets/Services/GlassStickers.jpeg';
import OutdoorSigns from '../1_MediaAssets/Services/OutdoorSigns.jpeg';
import PlotterVinyl from '../1_MediaAssets/Services/PlotterVinyl.jpeg';
import RollupBanner from '../1_MediaAssets/Services/RollupBanner.jpeg';
import WallBranding from '../1_MediaAssets/Services/WallBranding.jpeg';
import WoodenStands from '../1_MediaAssets/Services/WoodenStands.jpeg';
import VehicleBranding from '../1_MediaAssets/Services/VehicleBranding.jpg';
import WebDev from '../1_MediaAssets/Services/WebDev.jpg';
// import Footer from "../Home/Components/Footer/Footer.js";
// import video from '../1_MediaAssets/Services/video.mp4';


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
        <div style={{width: '100vw', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: '#29024A'}}>
            <div className="cursor" style={{transform: `translate3d(${cursorXY.x}px, ${cursorXY.y}px, 0)`, zIndex: '1000000000000000000000000000'}} />



            <div style={{width:'100%',height:'80px', display:'flex', justifyContent:'center',alignItems:'center',flexDirection:'column',position:'sticky',top:'0',left:'0', background: 'black'}}>
                <p style={{color: 'white', fontSize: '40px', marginTop: '10px'}} >
                    SERVICES
                </p>
            </div>

                
            {/* <div className="serviceCoverVid">
                <video id="background-video2" autoPlay loop muted style={{height: '100vh', width: '100vw',zIndex:'0',position:'relative',objectFit:'cover'}}>
                    <source src={video} type='video/mp4' />
                </video>
                <div style={{width:'100%',height:'100vh', display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',position:'absolute',top:'0',left:'0',zIndex:'100'}}>
                    <h1 style={{color: 'white'}} >
                        SERVICES
                    </h1>
                </div>
             
            </div> */}

            <div className="servicemain">

                <div className="serviceitem">
                    <div className="serviceimg" style={{backgroundImage:`url('${TDSigns}')`}}>

                    </div>

                    <div className="servicetextR">
                        <TextAnim Body={
                        <p className="servicetextheaderR">3D LED SIGNS</p> 
                        }/>
                        <TextAnim Body={
                        <p className="servicetextPara">3D LED signs are modern advertising displays that use colorful lights to create eye-catching designs. They make images and messages look 3D and pop out, which grabs people's attention. <span className="hideinphone">These signs can be used inside or outside by businesses to show off their brand, promotions, or messages in a cool and exciting way. They're energy-efficient and tough, making them a great choice for making a strong impression.</span> </p>
                        }/>
                    </div>
                </div>


                <div className="serviceitem">
                    <div className="servicetextL">
                        <TextAnim Body={
                        <p className="servicetextheaderL">ACRYLIC DISPLAYS & DECOR</p> 
                        }/>
                        <TextAnim Body={
                        <p className="servicetextPara" style={{textAlign: 'right'}}>Acrylic displays, frames, and decor are clear and sturdy items used to show off things like posters, photos, or products. They're like see-through picture holders that add a sleek and modern touch to any space.<span className="hideinphone">These items are often used by businesses to showcase products or by individuals to display their favorite pictures or art. Acrylic is strong and durable, and it makes whatever you put inside it look clean and professional.</span></p>
                        }/>
                    </div>
                    
                    <div className="serviceimg" style={{backgroundImage:`url('${AcrylicItems}')`}}>

                    </div>
                </div>


                <div className="serviceitem">
                    <div className="serviceimg" style={{backgroundImage:`url('${DigitalPrinting}')`}}>

                    </div>

                    <div className="servicetextR">
                        <TextAnim Body={
                        <p className="servicetextheaderR">LARGE FORMAT DIGITAL PRINTING</p> 
                        }/>
                        <TextAnim Body={
                        <p className="servicetextPara">Large format digital printing is like making really big, high-quality pictures or designs from a computer. It's great for creating large signs, banners, and posters with vivid colors and detailed graphics. <span className="hideinphone">This printing method is commonly used for advertising, events, or decorations. It's like having a giant printer that can make your ideas come to life on a big scale. It's perfect for catching people's attention and making a big impact.</span></p>
                        }/>
                    </div>
                </div>


                <div className="serviceitem">
                    <div className="servicetextL">
                        <TextAnim Body={
                        <p className="servicetextheaderL">GLASS STICKERS</p> 
                        }/>
                        <TextAnim Body={
                        <p className="servicetextPara" style={{textAlign: 'right'}}>Glass stickers are like cool decals that you can stick onto glass surfaces. They come in various designs, patterns, and colors, and they can add style and privacy to windows and glass doors. <span className="hideinphone">These stickers are easy to apply and remove, and they can transform plain glass into something decorative and interesting. They're commonly used in homes, offices, or businesses to add a touch of personality or to create a private space while still letting light in. It's like giving glass a creative makeover!</span></p>
                        }/>
                    </div>
                    
                    <div className="serviceimg" style={{backgroundImage:`url('${GlassStickers}')`}}>

                    </div>
                </div>


                <div className="serviceitem">
                    <div className="serviceimg" style={{backgroundImage:`url('${EngravedSigns}')`}}>

                    </div>

                    <div className="servicetextR">
                        <TextAnim Body={
                        <p className="servicetextheaderR">ENGRAVED SIGNS</p> 
                        }/>
                        <TextAnim Body={
                        <p className="servicetextPara">Engraved signs are like personalized messages or designs that are carved onto different materials, such as metal, wood, or plastic. This carving gives the sign a textured and permanent look. <span className="hideinphone">Engraved signs are durable and can withstand weather and wear, making them ideal for both indoor and outdoor use. They're often used for labeling, directions, or adding a professional touch to spaces. Engraved signs offer a classy and timeless way to convey information and make a lasting impression.</span></p>
                        }/>
                    </div>
                </div>


                <div className="serviceitem">
                    <div className="servicetextL">
                        <TextAnim Body={
                        <p className="servicetextheaderL">OUTDOOR ROAD SIGNS</p> 
                        }/>
                        <TextAnim Body={
                        <p className="servicetextPara" style={{textAlign: 'right'}}>Outdoor road signs are like guides on the street that help people navigate and stay safe while driving or walking. They're usually made of reflective materials so they're easy to see, even at night. <span className="hideinphone">These signs show important information like speed limits, directions, warnings, and more. They play a crucial role in keeping traffic organized and preventing accidents. Outdoor road signs are essential for creating orderly and safe roads for everyone to use.</span></p>
                        }/>
                    </div>
                    
                    <div className="serviceimg" style={{backgroundImage:`url('${OutdoorSigns}')`}}>

                    </div>
                </div>


                <div className="serviceitem">
                    <div className="serviceimg" style={{backgroundImage:`url('${PlotterVinyl}')`}}>

                    </div>

                    <div className="servicetextR">
                        <TextAnim Body={
                        <p className="servicetextheaderR">PLOTTER VINYL</p> 
                        }/>
                        <TextAnim Body={
                        <p className="servicetextPara">lotter vinyl is like a special material that's used to create custom designs or letters. It's cut by a machine called a plotter, which carefully follows a computer-generated pattern. <span className="hideinphone">This vinyl comes in different colors and finishes, like glossy or matte. It's commonly used for making signs, stickers, and decals that can be stuck onto surfaces like windows, walls, or vehicles. Plotter vinyl allows for precise and detailed designs, making it a versatile choice for adding a personal touch to various items and spaces. It's like creating your own custom stickers with a high-tech twist!</span></p>
                        }/>
                    </div>
                </div>


                <div className="serviceitem">
                    <div className="servicetextL">
                        <TextAnim Body={
                        <p className="servicetextheaderL">ROLLUPS & STANDEES</p> 
                        }/>
                        <TextAnim Body={
                        <p className="servicetextPara" style={{textAlign: 'right'}}>Rollups and standees are like portable banners or displays that can easily be set up and taken down. Rollups are designed to be rolled out and attached to a stand for stability, while standees are usually self-standing cut-out shapes or images. <span className="hideinphone">They're commonly used at events, trade shows, or even in-store promotions. Rollups and standees are great for grabbing attention because they're big and visually appealing. They're like flexible tools that businesses use to showcase products, share information, or create eye-catching setups wherever they're needed.</span></p>
                        }/>
                    </div>
                    
                    <div className="serviceimg" style={{backgroundImage:`url('${RollupBanner}')`}}>

                    </div>
                </div>


                <div className="serviceitem">
                    <div className="serviceimg" style={{backgroundImage:`url('${WallBranding}')`}}>

                    </div>

                    <div className="servicetextR">
                        <TextAnim Body={
                        <p className="servicetextheaderR">WALL BRANDING</p> 
                        }/>
                        <TextAnim Body={
                        <p className="servicetextPara">Wall branding is like giving a space a unique personality by adding custom designs or graphics directly onto walls. It's a creative way to transform plain walls into engaging and memorable displays. <span className="hideinphone">Whether it's in an office, store, or any interior space, wall branding makes a statement and reinforces a brand's identity. It can include logos, images, or even inspirational quotes. Wall branding adds a personal touch to environments, creating a more inviting and visually appealing atmosphere. It's like turning walls into canvases that tell a story or showcase a brand's character.</span></p>
                        }/>
                    </div>
                </div>


                <div className="serviceitem">
                    <div className="servicetextL">
                        <TextAnim Body={
                        <p className="servicetextheaderL">WOODEN DISPLAYS & STANDS</p> 
                        }/>
                        <TextAnim Body={
                        <p className="servicetextPara" style={{textAlign: 'right'}}>Wooden displays and stands are like functional pieces of furniture made from wood, designed to showcase products or information in a stylish and natural way. <span className="hideinphone">They come in various shapes and sizes, and they can be used to hold items like merchandise, brochures, or even electronics. Wooden displays and stands are often used in retail settings, trade shows, or events to present products attractively. They bring a touch of warmth and authenticity to the display while effectively organizing and highlighting items. It's like bringing nature's charm into your presentation while keeping things organized and visually appealing.</span></p>
                        }/>
                    </div>
                    
                    <div className="serviceimg" style={{backgroundImage:`url('${WoodenStands}')`}}>

                    </div>
                </div>


                <div className="serviceitem">
                    <div className="serviceimg" style={{backgroundImage:`url('${VehicleBranding}')`}}>

                    </div>

                    <div className="servicetextR">
                        <TextAnim Body={
                        <p className="servicetextheaderR">VEHICLE BRANDING</p> 
                        }/>
                        <TextAnim Body={
                        <p className="servicetextPara">Vehicle branding is like giving a vehicle a stylish makeover with custom graphics, logos, or messages. It's a way to turn cars, trucks, or even buses into mobile billboards for businesses or causes. <span className="hideinphone">Vehicle branding helps to grab attention on the road and promote a brand or message wherever the vehicle goes. It can include full or partial wraps that cover the vehicle's surface with eye-catching designs. Vehicle branding is a creative and effective way to make a strong impression and reach a wide audience while on the move. It's like turning your vehicle into a rolling advertisement that gets noticed wherever it travels.</span></p>
                        }/>
                    </div>
                </div>


                <div className="serviceitem">
                    <div className="servicetextL">
                        <TextAnim Body={
                        <p className="servicetextheaderL">WEBSITE DEVELOPMENT</p> 
                        }/>
                        <TextAnim Body={
                        <p className="servicetextPara" style={{textAlign: 'right'}}>Website development is like building a digital space on the internet. It involves creating and designing web pages that people can visit to find information, products, or services. <span className="hideinphone">Developers use programming languages and tools to bring these pages to life and make them interactive. Website development encompasses everything from layout and design to functionality and user experience. It's like constructing a virtual storefront or platform where businesses or individuals can showcase themselves, connect with customers, and share content. In a nutshell, website development is the process of crafting and launching a presence on the web.</span> </p>
                        }/>
                    </div>
                    
                    <div className="serviceimg" style={{backgroundImage:`url('${WebDev}')`}}>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services