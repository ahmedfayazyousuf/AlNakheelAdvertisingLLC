import React, { useState } from 'react';
import './Contact.css';
import Footer from '../Constants/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: '',
  });

  const [isPhoneValid, setIsPhoneValid] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === 'phoneNumber') {
      const phoneRegex = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
      setIsPhoneValid(phoneRegex.test(value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isPhoneValid) {
      console.log('Form submitted', formData);
    } else {
      alert('Please enter a valid phone number.');
    }
  };

  return (
    <>
      <div style={{ background: 'black', width: '100vw', height: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '110px' }}>
       
          
            <form className="form" onSubmit={handleSubmit}>
              <p className="form-heading">Contact Us</p>
              <p className="para">We're Excited to hear from you!</p>
              <div className="form-field">
                <input
                  required
                  placeholder="Full Name"
                  className="input-field"
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-field">
                <input
                  required
                  placeholder="Email Address"
                  className="input-field"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-field">
                <input
                  required
                  placeholder="Phone Number"
                  className="input-field"
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  style={{ borderColor: isPhoneValid ? 'initial' : 'red' }}
                />
                {!isPhoneValid && <span style={{ color: 'red' , fontSize:'0.6em'}}>Invalid number. </span>}
              </div>

              <div className="form-field">
                <input
                  required
                  placeholder="Subject"
                  className="input-field"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-field">
                <textarea
                  required
                  placeholder="Message"
                  cols="30"
                  rows="3"
                  className="input-field"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
              </div>

              <button className="sendMessage-btn" type='submit'>Submit</button>
            </form>
          </div>
        
      <Footer />
    </>
  );
};

export default Contact;