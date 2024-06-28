import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import Intro from './Components/Intro/Intro.js';
import About from './Components/About/About.js';
import HeroCarousel from './Components/HeroCarousel/HeroCarousel.js';
import ClientsCarousel from './Components/ClientsCarousel/ClientsCarousel.js';
import Gallery from './Components/WorksSlider/index.js';

const Home = () => { 

    return (
        <div class="con">
            <section style={{background:'black' , height: '100%', width: '100vw', display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Intro />
            </section>
            <section style={{background: 'black', height: '100vh', width: '100vw', display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                <HeroCarousel />
            </section>

            <section style={{background: 'black', height: '100%', width: '100vw', display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                <About />
            </section>

            <section style={{background: 'black', height: '100%', width: '100vw', display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Gallery />
            </section>

            <section style={{background: 'black', height: '100%', width: '100vw', display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                <ClientsCarousel/>
            </section>
            
            <div class="hover-effect4" style={{position: 'fixed', bottom: '0', right: '0', display: 'flex', flexDirection: 'column', marginRight: '10px', zIndex: '10000000'}}>
                <ul style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                    <li><a href="https://www.facebook.com/alnakheeladvertising" target='_blank' rel="noreferrer noopener" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration: 'none'}} title="Facebook"><FaSquareFacebook /></a></li>
                    <li><a href="https://twitter.com/alnakheeladv" target='_blank' rel="noreferrer noopener" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration: 'none'}} title="Twitter"><FaXTwitter /></a></li>
                    <li><a href="https://www.instagram.com/alnakheeladv" target='_blank' rel="noreferrer noopener" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration: 'none'}} title="Instagram"><FaInstagram /></a></li>
                    <li><a href="https://www.youtube.com/watch?v=grEgvv0kJ1c" target='_blank' rel="noreferrer noopener" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration: 'none'}} title="Youtube"><FaYoutube /></a></li>
                    <li><a href="https://www.linkedin.com/company/alnakheeladv/about/" target='_blank' rel="noreferrer noopener" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration: 'none'}} title="LinkedIn"><FaLinkedin /></a></li>
                </ul>

                
            </div>

            
        </div>
    )
}

export default Home