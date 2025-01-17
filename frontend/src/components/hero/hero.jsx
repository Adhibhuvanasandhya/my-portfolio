import React from 'react'
import "./hero.css"
import profile_img from "../../assets/san.jpeg"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import resume from '../../assets/sandhyaResume.pdf'

const Hero = () => {
        


    return (
        <div id='home' className='hero'>
            <img src={profile_img} alt=''></img>
            <h1><span>I'm Adhibhuvanasandhya,</span> Full Stack Developer</h1>
            <p>As a web developer, I thrive on building sleek, modern, and user-friendly websites and applications. Using the power of the MERN stack (MongoDB, Express.js, React, Node.js), I deliver tailored digital solutions that drive growth and engagement. Check out my portfolio to see how I turn ideas into impactful web experiences.</p>
            <div className='hero-action'>
                <div className='hero-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'> Connect With Me</AnchorLink></div>
                <div className='hero-resume'> 
                <a href={resume} download="Sandhya-resume">
                    <p>MyResume</p>
                    </a>
                </div>

            </div>


        </div>
    )
}

export default Hero