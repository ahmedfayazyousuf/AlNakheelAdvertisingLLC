import React from "react";
import Background from "../../../../1_MediaAssets/BrandAssets/Backgrounds/PurpleBanner.jpg";
import './testimonial.css';

const Testimonial = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        backgroundColor: "black",
        flexDirection: "column",
        backgroundImage: `url(${Background})`,
        backgroundAttachment: "fixed",
      }}
    >
      <section className="test-section">
        <h1 className="outlined-text" style={{color: 'transparent', fontSize: '35px', margin: '0'}}>Testimonials</h1>
        <div className="test-people">
          <div className="test-person">
            <img src={Background} alt="test-person" className="test-image" />
            <h3>testimonial person</h3>
            <h6>Job title</h6>
            <p>Interdum et malesuada fames ac ante ipsum primis in faucibus.
              Interdum et malesuada fames ac ante ipsum primis in faucibus.
              Pellentesque nec nulla sit amet ex facilisis vehicula. Maecenas
              lobortis ipsum eu risus rutrum aliquam. Morbi vestibulum, augue in finibus consequat, nunc purus gravida
              magna, et dapibus turpis turpis ac elit. Integer sollicitudin,
              ipsum in dapibus pretium, sem ipsum facilisis nisl, quis fermentum
              magna diam a lacus. </p>
          </div>
          <div className="test-person">
            <img src={Background} alt="test-person" className="test-image" />
            <h3>testimonial person</h3>
            <h6>Job title</h6>
            <p>Interdum et malesuada fames ac ante ipsum primis in faucibus.
              Interdum et malesuada fames ac ante ipsum primis in faucibus.
              Pellentesque nec nulla sit amet ex facilisis vehicula. Maecenas
              lobortis ipsum eu risus rutrum aliquam. Morbi vestibulum, augue in finibus consequat, nunc purus gravida
              magna, et dapibus turpis turpis ac elit. Integer sollicitudin,
              ipsum in dapibus pretium, sem ipsum facilisis nisl, quis fermentum
              magna diam a lacus.
            </p>
          </div>
          <div className="test-person">
            <img src={Background} alt="test-person" className="test-image" />
            <h3>testimonial person</h3>
            <h6>Job title</h6>
            <p>Interdum et malesuada fames ac ante ipsum primis in faucibus.
              Interdum et malesuada fames ac ante ipsum primis in faucibus.
              Pellentesque nec nulla sit amet ex facilisis vehicula. Maecenas
              lobortis ipsum eu risus rutrum aliquam. Morbi vestibulum, augue in finibus consequat, nunc purus gravida
              magna, et dapibus turpis turpis ac elit. Integer sollicitudin,
              ipsum in dapibus pretium, sem ipsum facilisis nisl, quis fermentum
              magna diam a lacus.</p>
          </div>
        </div>
      </section>
    </div>
    
  );
};

export default Testimonial;
