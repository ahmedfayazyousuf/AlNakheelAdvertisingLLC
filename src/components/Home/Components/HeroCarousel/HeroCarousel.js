import React, { useEffect} from "react";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import LEDSign from './../../../1_MediaAssets/Homepage/HeroCovers/Signs.jpg';
import CarBranding from './../../../1_MediaAssets/Homepage/HeroCovers/Car Branding.webp';
import Engraved from './../../../1_MediaAssets/Homepage/HeroCovers/Engraved.avif';
import Outdoor from './../../../1_MediaAssets/Homepage/HeroCovers/Outdoor.jpg';
import Wall from './../../../1_MediaAssets/Homepage/HeroCovers/Wall.jpg';
import WebDev from './../../../1_MediaAssets/Homepage/HeroCovers/WebDev.jpg';
import Glass from './../../../1_MediaAssets/Homepage/HeroCovers/Glass.jpg';
import { useNavigate } from "react-router-dom";


export default function Hero(){ 
    const navigate = useNavigate();

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



    return(
        <div style={{background: 'grey', height: '100vh', width: '100vw', display:'flex', justifyContent: 'center', alignItems: 'center',position:'relative', padding: '0', margin: '0'}}>

            <div id="slideHero">
                <div class="item" style={{backgroundImage: `url('${CarBranding}')`}}>
                    <div class="content" style={{zIndex:'100'}}>
                        <div class="name fontSpecial">VEHICLE BRANDING</div>
                        <div class="des">Vehicle branding is like giving a vehicle a stylish makeover with custom graphics, logos, or messages. It's a way to turn cars, trucks, or even buses into mobile billboards for businesses or causes. </div>
                        <button onClick= {()=> navigate("/Services")} className='buttonDefault' style={{width: '120px', height: '50px', fontSize: '14px', marginTop: '10px'}}>Read more</button>
                    </div>
                </div>
                <div class="item" style={{backgroundImage: `url('${LEDSign}')`}}>
                    <div class="content " style={{zIndex:'100'}}>
                        <div class="name fontSpecial">3D LED Signs</div>
                        <div class="des">3D LED signs are modern advertising displays that use colorful lights to create eye-catching designs. They make images and messages look 3D and pop out, which grabs people's attention. </div>
                        <button onClick= {()=> navigate("/Services")} className='buttonDefault' style={{width: '120px', height: '50px', fontSize: '14px', marginTop: '10px'}}>Read more</button>
                    </div>
                </div>
                <div class="item" style={{backgroundImage: `url('${Engraved}')`}}>
                    <div class="content " style={{zIndex:'100'}}>
                        <div class="name fontSpecial">ENGRAVED SIGNS</div>
                        <div class="des">Engraved signs are like personalized messages or designs that are carved onto different materials, such as metal, wood, or plastic. This carving gives the sign a textured and permanent look. </div>
                        <button onClick= {()=> navigate("/Services")} className='buttonDefault' style={{width: '120px', height: '50px', fontSize: '14px', marginTop: '10px'}}>Read more</button>
                    </div>
                </div>
                <div class="item" style={{backgroundImage: `url('${Outdoor}')`}}>
                    <div class="content " style={{zIndex:'100'}}> 
                        <div class="name fontSpecial">OUTDOOR ROAD SIGNS</div>
                        <div class="des">Outdoor road signs are like guides on the street that help people navigate and stay safe while driving or walking. They're usually made of reflective materials so they're easy to see, even at night. </div>
                        <button onClick= {()=> navigate("/Services")} className='buttonDefault' style={{width: '120px', height: '50px', fontSize: '14px', marginTop: '10px'}}>Read more</button>
                    </div>
                </div>
                <div class="item" style={{backgroundImage: `url('${Wall}')`}}>
                    <div class="content " style={{zIndex:'100'}}> 
                        <div class="name fontSpecial">WALL BRANDING</div>
                        <div class="des">Wall branding is like giving a space a unique personality by adding custom designs or graphics directly onto walls. It's a creative way to transform plain walls into engaging and memorable displays. </div>
                        <button onClick= {()=> navigate("/Services")} className='buttonDefault' style={{width: '120px', height: '50px', fontSize: '14px', marginTop: '10px'}}>Read more</button>
                    </div>
                </div>
                <div class="item" style={{backgroundImage: `url('${WebDev}')`}}>
                    <div class="content " style={{zIndex:'100'}}> 
                        <div class="name fontSpecial">WEBSITE DEVELOPMENT</div>
                        <div class="des">Website development is like building a digital space on the internet. It involves creating and designing web pages that people can visit to find information, products, or services. </div>
                        <button onClick= {()=> navigate("/Services")} className='buttonDefault' style={{width: '120px', height: '50px', fontSize: '14px', marginTop: '10px'}}>Read more</button>
                    </div>
                </div>
                <div class="item" style={{backgroundImage: `url('${Glass}')`}}>
                    <div class="content " style={{zIndex:'100'}}> 
                        <div class="name fontSpecial">GLASS BRANDING</div>
                        <div class="des">Glass stickers are like cool decals that you can stick onto glass surfaces. They come in various designs, patterns, and colors, and they can add style and privacy to windows and glass doors. We offer frosted, one-way vision, branded vinyl and many other types.</div>
                        <button onClick= {()=> navigate("/Services")} className='buttonDefault' style={{width: '120px', height: '50px', fontSize: '14px', marginTop: '10px'}}>Read more</button>
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