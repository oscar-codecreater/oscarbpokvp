import React from 'react'
import './About.css'
import { Link } from 'react-scroll'
import sys7 from './images/sys7.webp'

const About = () => {
    return (
        <>
        <div className='about' id='about'>
            <div className='container'>
                <div className='col-2'>
                    <h2>About - Us</h2>
                    <span className='line'></span>
                    <h1>OSCAR BPO Private Ltd., </h1><h3>Your Trusted Partner in Data Excellence</h3>
                    <p>Welcome to OSCAR, a premier Business Process Outsourcing (BPO) service provider specializing in accurate and efficient data entry solutions. At Oscar, we understand the critical role that data plays in the success of your business, and we are here to be your trusted partner in ensuring data excellence.</p>
                    <p>Oscar BPO was established with a singular mission - to provide businesses with reliable, cost-effective, and precise data entry services. Over the years, we have consistently delivered on this commitment, earning the trust of our clients and establishing ourselves as a leader in the BPO industry.</p>
                   <Link to="ser"><button className='button'>Services</button></Link>
                </div>
                 <img className='data2' src={sys7} alt='sys' />
        
            </div>
        </div>
</> 
 )
}

export default About
