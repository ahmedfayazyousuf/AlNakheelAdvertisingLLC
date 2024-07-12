import React from 'react';
import Background from '../../1_MediaAssets/BrandAssets/Backgrounds/PurpleBanner.jpg';
import ContactSection from "./ContactSection.js";

const Contact = () => {
  return (
    <>
      <div style={{ backgroundImage: `url(${Background})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', backgroundAttachment: 'fixed', width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <ContactSection />
      </div>
    </>
  );
};

export default Contact;
