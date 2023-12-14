import About from './Components/About/About.js';
// import Gallery from './Components/Gallery/Gallery.js';
import HeroCarousel from './Components/HeroCarousel/HeroCarousel.js';
import ClientsCarousel from './Components/ClientsCarousel/ClientsCarousel.js';

const Home = () => { 

    return (
        // <div style={{width: '100vw', height: '100%'}} class="con">
        <div class="con">

            <section style={{background: 'black', height: '100vh', width: '100vw', display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                <HeroCarousel />
            </section>

            <section style={{background: 'black', height: '100%', width: '100vw', display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                <About />
            </section>

            {/* <section style={{background: 'black', height: '100%', width: '100vw', display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Gallery />
            </section> */}

            <section style={{background: 'black', height: '100%', width: '100vw', display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                <ClientsCarousel/>
            </section>

            <div class="hover-effect4" style={{position: 'fixed', bottom: '0', right: '0', display: 'flex', flexDirection: 'column', marginRight: '10px', zIndex: '10000000'}}>
                <ul style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                    {/* eslint-disable-next-line */}
                    <li><a href="https://www.facebook.com/alnakheeladvertising" target='_blank'  style={{display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration: 'none'}} title="Facebook"><i class="fa fa-facebook"></i></a></li>
                    {/* eslint-disable-next-line */}
                    <li><a href="https://twitter.com/alnakheeladv" target='_blank' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration: 'none'}} title="Twitter"><i class="fa fa-twitter"></i></a></li>
                    {/* eslint-disable-next-line */}
                    <li><a href="https://www.instagram.com/alnakheeladv" target='_blank' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration: 'none'}} title="Instagram"><i class="fa fa-instagram"></i></a></li>
                    {/* eslint-disable-next-line */}
                    <li><a href="https://www.youtube.com/watch?v=grEgvv0kJ1c" target='_blank' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration: 'none'}} title="Youtube"><i class="fa fa-youtube"></i></a></li>
                    {/* eslint-disable-next-line */}
                    <li><a href="https://www.linkedin.com/company/alnakheeladv/about/" target='_blank' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration: 'none'}} title="LinkedIn"><i class="fa fa-linkedin"></i></a></li>
                </ul>

                
            </div>

            
        </div>
    )
}

export default Home