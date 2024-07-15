import React from 'react';
import Priv from './Privacy-image.jpeg';
import Footer from '../../Constants/Footer';

const PrivacyPolicy = () => {
  return(
    <div className="priv-content-container">
      <section className="priv-hero" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundImage: `url(${Priv})`, backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', minHeight: '70vh', width: '100vw' }}>
        <h1>Privacy Policy</h1>
      </section>
      <div className="priv-desc-section">
        <p>Al Nakheel Advertising LLC ("us", "we", or "our") operates the website https://alnakheeladvertisingllc.vercel.app/ the ("Service").<br /> <br/>This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data. <br /> <br/>We do not collect payment information, sensitive personal information, or offer user sign-up/sign-in functionalities on our website. We solely gather contact information provided voluntarily by users, such as names, email addresses, and phone numbers, for the purpose of communication and marketing initiatives. <br /><br/> We utilize Google Analytics to collect non-personal information, including user interests and demographics, to better understand our audience and tailor our marketing efforts accordingly. Google Analytics may collect information such as your device type, browser type, IP address, and browsing behavior, which is governed by Googles Privacy Policy.<br /><br/> We do not sell, trade, or otherwise transfer your personal information to third parties. Any information collected is solely used for internal purposes, such as improving our services and providing relevant promotional offers to our users. <br /> If you have any questions or concerns regarding our privacy practices, please contact us using the following information: <br /> <br/>Al Nakheel Advertising LLC Phone:+971 50 632 8029 Email: alnakheeladvert@gmail.com <br /> <br/>By using our Service, you consent to the collection and use of information in accordance with this Privacy Policy.</p>
      </div>
      <Footer />
    </div>
  );
};
export default PrivacyPolicy;