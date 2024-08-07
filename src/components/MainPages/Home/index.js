import { FaWhatsapp } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import Intro from './Components/Intro/Intro.js';
import About from './Components/About/About.js';
// import Testimonial from './Components/Testimonial/index.js';
import HeroCarousel from './Components/HeroCarousel/HeroCarousel.js';
import ClientsCarousel from './Components/ClientsCarousel/ClientsCarousel.js';

const Home = () => { 

    return (
        <>
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
            {/* <section style={{background: 'black', height: '100%', width: '100vw', display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Testimonial />
            </section> */}
        </div>

        
        <section style={{background: 'black', height: '100%', width: '100vw', display:'flex', justifyContent: 'center', alignItems: 'center', overflowY :'scroll'}}>
            <ClientsCarousel/>
        </section>

        <div class="hover-effect4" style={{position: 'fixed', bottom: '0', right: '0', display: 'flex', flexDirection: 'column', marginRight: '10px', zIndex: '10000000'}}>
            <ul style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                <li><a href="https://wa.me/971506328029" target='_blank' rel="noreferrer noopener" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration: 'none'}} title="Youtube"><FaWhatsapp /></a></li>
                <li><a href="https://www.instagram.com/alnakheeladv" target='_blank' rel="noreferrer noopener" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration: 'none'}} title="Instagram"><FaInstagram /></a></li>
                <li><a href="https://www.facebook.com/alnakheeladvertising" target='_blank' rel="noreferrer noopener" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration: 'none'}} title="Facebook"><FaSquareFacebook /></a></li>
                <li><a href="https://www.linkedin.com/company/alnakheeladv/about/" target='_blank' rel="noreferrer noopener" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration: 'none'}} title="LinkedIn"><FaLinkedin /></a></li>
                <li><a href="https://twitter.com/alnakheeladv" target='_blank' rel="noreferrer noopener" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration: 'none'}} title="Twitter"><FaXTwitter /></a></li>
            </ul>
        </div>
        </>
    )
}

export default Home