import { useEffect } from 'react';
import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css';

import img1 from '../../../1_MediaAssets/Gallery/img1.jpg';
import img2 from '../../../1_MediaAssets/Gallery/img2.jpg';
import img3 from '../../../1_MediaAssets/Gallery/img3.jpg';
import img4 from '../../../1_MediaAssets/Gallery/img4.jpg';
import img5 from '../../../1_MediaAssets/Gallery/img5.jpg';
import img6 from '../../../1_MediaAssets/Gallery/img6.jpg';

const Slider = () => { 

  useEffect(() => {
    const splide = new Splide('.faculty-splide', {
      type: 'loop',
      perPage: 4, // Display 3 slides per page by default 
      perMove: 1,
      cover: true,
      height: '380px',
      speed: 300,
      pagination: false, 
      breakpoints: {
        1300: {
          perPage: 3, // Display 3 slides per page
        },
        800: {
          perPage: 2, // Display 2 slides per page
        },
        520: {
          perPage: 1, // Display 1 slide per page
        }
      },
    });
    splide.mount();
  }, []);

  return (
    <div className="faculty-splide splide" style={{ width: '100vw', marginTop: '30px'}}>
      <div className="splide__track">
        <ul className="splide__list img-list">
          <li className="splide__slide slide-container imageZoom" style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-end', position: 'relative', backgroundColor: 'black', backgroundImage: `url('${img1}')`, backgroundPosition: 'bottom', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
              <div className="image-text" style={{textAlign: 'center'}}>Production & Installation of Outdoor Sign</div>          </li>
          <li className="splide__slide slide-container imageZoom" style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-end', position: 'relative', backgroundColor: 'black', backgroundImage: `url('${img2}')`, backgroundPosition: 'bottom', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
              <div className="image-text" style={{textAlign: 'center'}}>Production & Installation of Outdoor Sign</div>          </li>
          <li className="splide__slide slide-container imageZoom" style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-end', position: 'relative', backgroundColor: 'black', backgroundImage: `url('${img3}')`, backgroundPosition: 'bottom', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
              <div className="image-text" style={{textAlign: 'center'}}>Production & Installation of Outdoor Sign</div>          </li>
          <li className="splide__slide slide-container imageZoom" style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-end', position: 'relative', backgroundColor: 'black', backgroundImage: `url('${img4}')`, backgroundPosition: 'bottom', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
              <div className="image-text" style={{textAlign: 'center'}}>Production & Installation of Outdoor Sign</div>          </li>
          <li className="splide__slide slide-container imageZoom" style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-end', position: 'relative', backgroundColor: 'black', backgroundImage: `url('${img5}')`, backgroundPosition: 'bottom', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
              <div className="image-text" style={{textAlign: 'center'}}>Production & Installation of Outdoor Sign</div>          </li>
          <li className="splide__slide slide-container imageZoom" style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-end', position: 'relative', backgroundColor: 'black', backgroundImage: `url('${img6}')`, backgroundPosition: 'bottom', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
            <div className="image-text" style={{textAlign: 'center'}}>Production & Installation of Outdoor Sign</div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Slider;

// Inject styles into the document
const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerHTML = `
  .slide-container {
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    margin: 0;
    padding: 0;
  }

  .slide-container img {
    width: 100%;
    height: auto;
  }

  .slide-container:hover .overlay {
    opacity: 1;
  }

  .description {
    margin: 0;
    padding: 10px;
    font-size: 14px;
  }

  /* Media query for responsiveness */
  @media (max-width: 800px) {
    .splide__slide {
      flex: 0 0 100%;
      max-width: 100%;
    }
  }
`;
document.head.appendChild(styleSheet);
