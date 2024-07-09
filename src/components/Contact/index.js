import { FaInstagram, FaFacebookSquare, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import React, { useRef } from 'react';
import Background from '../1_MediaAssets/BrandAssets/Backgrounds/PurpleBanner.jpg';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    document.getElementById("SubmitButton").innerHTML = "Loading...";
    e.preventDefault();

    const formData = new FormData(form.current);
    const allFieldsFilled = Array.from(formData.values()).every(value => value.trim() !== "");

    if (!allFieldsFilled) {
      document.getElementById('errorMessage').innerHTML = "Kindly fill in all fields.";
      setTimeout(function() {
          document.getElementById('errorMessage').innerHTML = "";
      }, 4000);
      document.getElementById("SubmitButton").innerHTML = "Submit";
      return;
    }

    emailjs.sendForm('service_52qhn6a', 'template_ffrf0g1', form.current, '8N86O_yBWwu-KCl4h')
      .then((result) => {
        console.log(result.text);
        document.getElementById('errorMessage').style.color = "green";
        document.getElementById('errorMessage').innerHTML = "We will get back to you soon!";      
        document.getElementById("SubmitButton").innerHTML = "Submit";
        setTimeout(function() {
            document.getElementById('errorMessage').innerHTML = "";
        }, 4000);
        e.target.reset(); // Reset the form after successful submission
      }, (error) => {
        console.log(error.text);
        document.getElementById('errorMessage').innerHTML = "Error sending message. Please try again later.";
        setTimeout(function() {
            document.getElementById('errorMessage').innerHTML = "";
        }, 4000);
      });
  };

  return (
    <>
      <div style={{ backgroundImage: `url(${Background})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', backgroundAttachment: 'fixed', width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '110px' }}>
        
        <div className="mainDivContact">
          <form ref={form} onSubmit={sendEmail} className='ContactForm'>

            <h1 className="hero-title outlined-text" style={{color: 'transparent', fontSize: '30px'}}>Contact Us</h1>
            <input className='inputContact' required placeholder="Full Name" type="text" name="fullName" />
            <input className='inputContact' required placeholder="Email Address" type="email" name="email"  />
            <input className='inputContact' required placeholder="Phone Number" type="text" name="phoneNumber"/>
            <input className='inputContact' required placeholder="Subject" type="text" name="subject"/>
            <textarea className='inputContact' required placeholder="Message" cols="30" rows="3" name="message"></textarea>
            
            <div className='errorMessage' id='errorMessage' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', color: 'red', fontSize: '10px', height: '12px'}}></div>

            <button id="SubmitButton" style={{fontSize: '14px', width: '100%', background: '#8c4ac1'}}>Submit</button>
          </form>

          <div className="imagediv">
            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start', width: '100%', gap: '10px', padding: '10px', flexDirection: 'column' }}>
                <div className="cta">
                    <FaInstagram className="iii" style={{ color: '#fff', padding: '0', margin: '0', fontSize: '30px' }} />
                    <a className="button-text" style={{ textDecoration: 'none', color: 'black', fontSize: '10px', padding: '0' }} href="https://www.instagram.com/alnakheeladv" target="_blank" rel="noopener noreferrer">
                        @alnakheeladv
                    </a>
                </div>

                <div className="cta">
                    <FaFacebookSquare className="iii" style={{ color: '#fff', padding: '0', margin: '0', fontSize: '30px' }} />
                    <a className="button-text" style={{ textDecoration: 'none', color: 'black', fontSize: '10px', padding: '0' }} href="https://www.facebook.com/alnakheeladvertising" target="_blank" rel="noopener noreferrer">
                        @alnakheeladvertising
                    </a>
                </div>

                <div className="cta">
                    <FaWhatsapp className="iii" style={{ color: '#fff', padding: '0', margin: '0', fontSize: '30px' }} />
                    <a className="button-text" style={{ textDecoration: 'none', color: 'black', fontSize: '10px', padding: '0' }} href="https://wa.me/971506328029" target="_blank" rel="noopener noreferrer">
                        +971 50 632 8029
                    </a>
                </div>

                <div className="cta">
                    <FaLinkedin className="iii" style={{ color: '#fff', padding: '0', margin: '0', fontSize: '30px' }} />
                    <a className="button-text" style={{ textDecoration: 'none', color: 'black', fontSize: '10px', padding: '0' }} href="https://www.linkedin.com/company/alnakheeladv" target="_blank" rel="noopener noreferrer">
                        @alnakheeladv
                    </a>
                </div>

                <div className="cta">
                    <MdAlternateEmail className="iii" style={{ color: '#fff', padding: '0', margin: '0', fontSize: '30px' }} />
                    <p className="button-text" style={{ textDecoration: 'none', color: 'black', fontSize: '10px', padding: '0' }}>
                        alnakheeladvert@gmail.com
                    </p>
                </div>
            </div>
          </div>
        
        </div>
      </div>
    </>
  );
};

export default Contact;
