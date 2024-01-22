import React from 'react';
import { FaTwitter, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';
import './Footer.css'
import logo from './images/3.webp'

const Footer = () => {
  return (
   
    <div class="pg-footer">
    <footer class="footer">
      <svg class="footer-wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
        <path class="footer-wave-path" d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"></path>
      </svg>
      <div class="footer-content">
        <div class="footer-content-column">
        <a href='/'><img className='lg2' src={logo} alt='logo' /></a>
        </div>
        <div class="footer-content-column">
        <div className="footer-menu-add">
          <h2 className='footer-menu-name-add'>Address</h2>
          <ul id="menu-address" class="footer-menu-list-add">
          <li className='menu-item menu-item-type-post_type menu-item-object-page'>
            <h4>Kovilpatti</h4>
            <h5>OSCAR TECHNOLOGY</h5>
            Suba Nagar Road,<br />
            Near New Bus Stand,<br/>
            Kovilpatti-628501,<br/>
            Tamilnadu.
          </li>
          <div className='menu-item-ft'>
            <a href='mailto:oscarbpokvp@gmail.com'><i class="fa-solid fa-envelope"></i>oscarbpokvp@gmail.com</a></div><br/>
            <div className='menu-item-num'>
            <i class="fa-solid fa-square-phone"></i>+91 9042416094
          </div> 
          </ul>
          <ul> 
          <li className='menu-item menu-item-type-post_type menu-item-object-page'>
            <h4>Thoothukudi</h4>
            <h5>OSCAR TECHNOLOGY</h5>
            Opposite TVS Showroom,<br />
            Thoothukudi – 628002,<br />
            Tamilnadu.<br/><br/>
            </li>
            <div className='menu-item-ft'>
            <a href='mailto:oscarbpokvp@gmail.com'><i class="fa-solid fa-envelope"></i>oscarbpokvp@gmail.com</a></div><br/>
            <div className='menu-item-num'>
            <i class="fa-solid fa-square-phone"></i>0461 2311180
            </div>
            </ul>
            </div>
        </div>
        <div class="footer-content-column">
          <div class="footer-menu">
            <h2 class="footer-menu-name"> Quick Links</h2>
            <ul id="menu-quick-links" class="footer-menu-list">
            <div className='ft-link'>
            <li><a className='menu-item menu-item-type-custom menu-item-object-custom' href="#home">Home</a></li>
            <li><a className='menu-item menu-item-type-post_type menu-item-object-page' href="#ser">Services</a></li>
            <li><a className='menu-item menu-item-type-custom menu-item-object-custom' href="#about">About Us</a></li>
            <li><a className='menu-item menu-item-type-post_type menu-item-object-page' href="#contact">Contact</a></li>
            </div>
            </ul>
          </div>
        </div>
        <div className="footer-content-column">
          <div class="footer-call-to-action">
                <h1 className='footer-call-to-action-title'>Follow Us On:</h1>        
                <div className="social">
                <a href="https://twitter.com/yourTwitterHandle">
                  <FaTwitter />
                </a>
                <a href="https://instagram.com/yourInstagramHandle">
                  <FaInstagram />
                </a>
                <a href="https://facebook.com/yourFacebookPage">
                  <FaFacebook />
                </a>
                <a href="https://youtube.com/yourYouTubeChannel">
                  <FaYoutube />
                </a>
                </div>
          </div>
      </div>
        <div class="footer-content-column">
          <div class="footer-call-to-action">
            <div className='btn-ct'>
            <a class="footer-call-to-action-button button" href="#contact" target="_self"> Contact </a>
            </div>
          </div>
        </div>
  </div>
      <div class="footer-copyright">
        <div class="footer-copyright-wrapper">
          <p>
          &copy; {new Date().getFullYear()} Oscar Technology. | All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
  );
};

export default Footer;
