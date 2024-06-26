import React from 'react';
import TDSigns from '../1_MediaAssets/Services/3dSigns.jpeg'; import AcrylicItems from '../1_MediaAssets/Services/AcrylicItems.jpeg'; import DigitalPrinting from '../1_MediaAssets/Services/DigitalPrinting.jpeg'; import EngravedSigns from '../1_MediaAssets/Services/EngravedSigns.jpeg'; import GlassStickers from '../1_MediaAssets/Services/GlassStickers.jpeg'; import OutdoorSigns from '../1_MediaAssets/Services/OutdoorSigns.jpeg'; import PlotterVinyl from '../1_MediaAssets/Services/PlotterVinyl.jpeg'; import RollupBanner from '../1_MediaAssets/Services/RollupBanner.jpeg'; import WallBranding from '../1_MediaAssets/Services/WallBranding.jpeg'; import WoodenStands from '../1_MediaAssets/Services/WoodenStands.jpeg'; import VehicleBranding from '../1_MediaAssets/Services/VehicleBranding.jpg';import WebDev from '../1_MediaAssets/Services/WebDev.jpg';
import Texture from './PurpleBanner.jpg'
// import Rotator from './Rotator.png';
import Card from './Card.js'; 
import HeroServices from './HeroServices.js';
import Footer from '../Constants/Footer';

const Services = () =>{

    const services = [
        { image: TDSigns, title: '3D LED SIGNS', description: "3D LED signs use colorful lights to create eye-catching, 3D designs. Used by businesses for branding, promotions, or messages, they're energy-efficient and durable, making a strong, impressive impact indoors or outdoors."},
        { image: AcrylicItems, title: 'ACRYLIC DISPLAYS & DECOR', description: "Acrylic displays, frames, and decor are clear, sturdy items showcasing posters, photos, or products. They add a sleek, modern touch to any space, making items look clean and professional." },
        { image: DigitalPrinting, title: 'LARGE FORMAT DIGITAL PRINTING', description: "Large format digital printing creates big, high-quality pictures or designs for signs, banners, and posters. It's ideal for advertising, events, or decorations, making a big impact with vivid colors and detailed graphics." },
        { image: GlassStickers, title: 'GLASS STICKERS', description: "Glass stickers are decorative decals for glass surfaces, adding style and privacy. Easy to apply and remove, they transform plain glass with designs, patterns, and colors, commonly used in homes, offices, or businesses." },
        { image: EngravedSigns, title: 'ENGRAVED SIGNS', description: "Engraved signs are personalized messages or designs carved onto metal, wood, or plastic. They're durable and weather-resistant, used for labeling, directions, or adding a professional touch to spaces." },
        { image: OutdoorSigns, title: 'OUTDOOR ROAD SIGNS', description: "Outdoor road signs guide and ensure safety on streets. Made of reflective materials, they display speed limits, directions, and warnings, playing a crucial role in keeping traffic organized and preventing accidents." },
        { image: PlotterVinyl, title: 'PLOTTER VINYL', description: "Plotter vinyl creates custom designs or letters, cut by a plotter machine. Available in various colors and finishes, it's used for signs, stickers, and decals on windows, walls, or vehicles, offering precise, detailed designs." },
        { image: RollupBanner, title: 'ROLLUPS & STANDEES', description: "Rollups and standees are portable displays for events, trade shows, or in-store promotions. Rollups roll out and attach to stands, while standees are self-standing cut-outs. They grab attention with their big, visually appealing designs."},
        { image: WallBranding, title: 'WALL BRANDING', description: "Wall branding adds custom designs or graphics to walls, transforming spaces with unique personalities. It's used in offices, stores, or interiors to make statements and reinforce brand identities with logos, images, or quotes." },
        { image: WoodenStands, title: 'WOODEN DISPLAYS & STANDS', description: "Wooden displays and stands showcase products or information in a stylish, natural way. Used in retail settings, trade shows, or events, they add warmth and authenticity while organizing and highlighting items." },
        { image: VehicleBranding, title: 'VEHICLE BRANDING', description: "Vehicle branding gives vehicles a stylish makeover with custom graphics, logos, or messages. It's a mobile advertisement that grabs attention on the road, promoting brands or messages with eye-catching designs." },
        { image: WebDev, title: 'WEBSITE DEVELOPMENT', description: "Website development creates and designs web pages for information, products, or services. It includes layout, design, functionality, and user experience, crafting a digital space for businesses or individuals to showcase themselves and connect with customers." },
      ];

    return(
        <>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: '#000', backgroundImage: `url(${Texture})`, backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', minHeight: '100vh', width: '100vw' }}>
                {/* <img src={Rotator} alt='rotator' className='rotating-image' /> */}
                <HeroServices />
                <div className="services-page">
                    <div className="services-container">
                    {services.map((service, index) => (
                            <Card 
                                key={index}
                                image={service.image}
                                title={service.title}
                                description={service.description} 
                            />
                        ))}
                    </div>
                </div>
            </div>
        <Footer />
        </>
    )
}

export default Services;