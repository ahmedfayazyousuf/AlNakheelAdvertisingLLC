import { FaLinkedin } from "react-icons/fa6";import { FaRegHeart } from "react-icons/fa";import { MdEmail } from "react-icons/md";import { FaPhoneVolume, FaWhatsapp } from "react-icons/fa6";import { IoLocation } from "react-icons/io5";import { MdPlayArrow } from "react-icons/md";
import './Footer.css';
import React from 'react';
import { FaInstagram, FaFacebook} from 'react-icons/fa'; // Import icons from react-icons library
// import { FaXTwitter } from "react-icons/fa6";
import FooterBG from '../../1_MediaAssets/BrandAssets/Texture.png';
import Logo from '../../1_MediaAssets/BrandAssets/LogoWhite.png';

const Footer = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-end', background: '#000', height: '100%', flexDirection: 'row', backgroundImage: `url('${FooterBG}')`, backgroundPosition: 'top', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
    <footer className="main-footer" style={{width: '100%'}}>
      <div className="main-footer__top">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-12 col-md-12 wow fadeInUp" data-wow-delay="100ms">
              <div className="footer-widget-two__column footer-widget-two__about">
                <div className="footer-widget-two__logo">
                  <a href="/">
                    <img src={Logo} style={{ width: '50px', marginTop: '0px' }} alt="Logo" />
                  </a>
                </div>
                <p className="footer-widget-two__about-text" style={{ fontSize: '14px', lineHeight: '1.5', color: '#fff', width: '90%' }}>
                  Our comprehensive advertisment solutions will completely transform your company. Grow the future of your business.
                </p>
                
                  <div style={{display: 'flex', justifyContent:'flex-start', alignItems: 'center', gap: '15px', width: '80%', marginTop: '-10px'}}>
                    <a href="https://www.instagram.com/rexmedicalevents/" style={{textDecoration: 'none', color: '#fff'}}> 
                        <FaInstagram size={25} style={{color: '#a863e0'}} />
                    </a>
                    <a href="https://www.facebook.com/rexmedicalevents/" style={{textDecoration: 'none', color: '#fff'}}>
                        <FaFacebook size={25} style={{color: '#a863e0'}} />
                    </a> 
                    <a href="https://wa.me/971547773686" style={{textDecoration: 'none', color: '#fff'}}>
                        <FaWhatsapp size={27} style={{color: '#a863e0'}} />
                    </a>
                    <a href="https://www.linkedin.com/company/rexmedicalevents/" style={{textDecoration: 'none', color: '#fff'}}>
                        <FaLinkedin size={27} style={{color: '#a863e0'}} />
                    </a>
                  </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-12 col-md-12 wow fadeInUp" data-wow-delay="200ms">
              <div className="footer-widget-two__column footer-widget-two__link">
                <div className="footer-widget-two__title-box">
                  <h1 className="footer-widget-two__title" style={{color: '#a863e0'}}>Useful Links</h1>
                </div>
                <div className="footer-widget-two__link-box">
                  <ul className="footer-widget-two__link-list list-unstyled">
                    <li><a style={{ fontSize: '14px', lineHeight: '1.5', textDecoration: 'none' }} href="/"> <MdPlayArrow style={{marginRight: '4px'}} /> Home</a></li>
                    <li><a style={{ fontSize: '14px', lineHeight: '1.5', textDecoration: 'none' }} href="/About"> <MdPlayArrow style={{marginRight: '4px'}} /> About</a></li>
                    <li><a style={{ fontSize: '14px', lineHeight: '1.5', textDecoration: 'none' }} href="/UpcomingCourses"> <MdPlayArrow style={{marginRight: '4px'}} /> Upcoming Courses</a></li>
                    <li><a style={{ fontSize: '14px', lineHeight: '1.5', textDecoration: 'none' }} href="/Faculty"> <MdPlayArrow style={{marginRight: '4px'}} /> Faculty</a></li>
                    <li><a style={{ fontSize: '14px', lineHeight: '1.5', textDecoration: 'none' }} href="/Resources"> <MdPlayArrow style={{marginRight: '4px'}} /> Resources</a></li>
                    <li><a style={{ fontSize: '14px', lineHeight: '1.5', textDecoration: 'none' }} href="/Contact"> <MdPlayArrow style={{marginRight: '4px'}} /> Contact</a></li>
                    <li><a style={{ fontSize: '14px', lineHeight: '1.5', textDecoration: 'none' }} href="/Login"> <MdPlayArrow style={{marginRight: '4px'}} /> Dashboard</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-12 col-md-12 wow fadeInUp" data-wow-delay="200ms">
              <div className="footer-widget-two__column footer-widget-two__link">
                <div className="footer-widget-two__title-box">
                  <h1 className="footer-widget-two__title" style={{color: '#a863e0'}}>Policies</h1>
                </div>
                <div className="footer-widget-two__link-box">
                  <ul className="footer-widget-two__link-list list-unstyled">
                    <li><a style={{ fontSize: '14px', lineHeight: '1.5', textDecoration: 'none' }} href="/PrivacyPolicy"> <MdPlayArrow style={{marginRight: '4px'}} /> Privacy Policy</a></li>
                    <li><a style={{ fontSize: '14px', lineHeight: '1.5', textDecoration: 'none' }} href="/TermsandConditions"> <MdPlayArrow style={{marginRight: '4px'}} /> Terms & Conditions</a></li>
                    <li><a style={{ fontSize: '14px', lineHeight: '1.5', textDecoration: 'none' }} href="/RefundPolicy"> <MdPlayArrow style={{marginRight: '4px'}} /> Refund Policy</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-12 col-md-12 wow fadeInUp" data-wow-delay="300ms">
              <div className="footer-widget-two__column footer-widget__contact">
                <div className="footer-widget-two__title-box">
                  <h1 className="footer-widget-two__title" style={{color: '#a863e0'}}>Contact Us</h1>
                </div>
                <ul className="footer-widget-two__contact-list" style={{margin: '0', padding: '0'}}>
                  <li>
                    <div className="icon">
                        <IoLocation style={{ fontSize: '30px', color: '#a863e0' }} />
                    </div>
                    <div className="text">
                      <p style={{ fontSize: '14px', lineHeight: '1.5' }}>Ajman, <br /> United Arab Emirates</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                        <FaPhoneVolume style={{ fontSize: '24px', color: '#a863e0', marginRight: '6px' }} />
                    </div>
                    <div className="text">
                      <p style={{ fontSize: '14px', lineHeight: '1.5' }}><a style={{textDecoration: 'none'}} href="tel:971506328029">Phone: +971 50 632 8029</a></p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                        <MdEmail style={{ fontSize: '30px', color: '#a863e0' }} />
                    </div>
                    <div className="text">
                      <p style={{ fontSize: '14px', lineHeight: '1.5' }}><a style={{textDecoration: 'none'}} href="mailto:alnakheeladvert@gmail.com">alnakheeladvert@gmail.com</a></p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-footer__bottom">
        <div className="container">
          <div className="main-footer__bottom-inner">
            <p className="main-footer__bottom-text" style={{fontWeight: '300'}}>Made with <FaRegHeart style={{color: '#ff80a8', marginBottom: '3px'}} /> for</p>
            <p className="main-footer__bottom-text" style={{fontWeight: '300'}}>©2024 Al Nakheel Advertising LLC. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>



        
    </div>
  );
};

export default Footer;
