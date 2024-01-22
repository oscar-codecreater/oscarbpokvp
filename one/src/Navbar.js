import React, { useState } from 'react'
import logo from './images/lg2.webp'
import './Navbar.css'
import { Link } from 'react-scroll'

const Navbar = () => {
  

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false)

    return (
      <>
      <nav>
  <div class="wrapper">
  <a href='/'><img className='lg1' src={logo} alt='logo' /></a>
    <input type="radio" name="slider" id="menu-btn" />
    <input type="radio" name="slider" id="close-btn" />
    <ul class="nav-links">
      <label for="close-btn" class="btn close-btn"><i class="fas fa-times"></i></label>
      <li className='nav-item'>
        <Link to="home" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Home</Link>
      </li>
      <li className='nav-item'>
        <Link to="about" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>About</Link>
      </li>
      <li className='nav-item'> 
        <Link to="ser" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Services</Link>
        <div class="mega-box">
          <div class="content">
            <div class="row">
              <ul class="mega-links">
                <li><a href="#zero">Data Entry</a></li>
                <li><a href="#one">Photo Editing</a></li>
                <li><a href="#two">CRM - Optimization Solution</a></li>
              </ul>
            </div>
            <div class="row">
              <ul class="mega-links">
              <li><a href="#three">Web Design & Development</a></li>
              <li><a href="#four">Data Conversion</a></li>
              <li><a href="#five">E - Commerce Development</a></li>
              </ul>
            </div>
            <div class="row">
              <ul class="mega-links">
                <li><a href="#six">Resume Template</a></li>
                <li><a href="#seven">Reporting Services</a></li>
                <li><a href="#eight">Digital Marketing</a></li>
              </ul>
            </div>
          </div>
        </div>
        </li>
      <li className='nav-item'>
        <Link to="contact" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Contact-Us</Link>
      </li>
    </ul>
    <label for="menu-btn" class="btn menu-btn"><i class="fas fa-bars"></i></label>
  </div>
</nav>
</>
    )
}

export default Navbar;

