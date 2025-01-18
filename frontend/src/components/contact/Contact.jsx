import React, { useState } from 'react';
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail from "../../assets/mail_icon.svg";
import location from "../../assets/location_icon.svg";
import call from "../../assets/call_icon.svg";
import linkedin from "../../assets/linkedin-logo.png";
import github from "../../assets/github.png";

const Contact = () => {

    return (
        <div id='contact' className='contact'>
            <div className='contact_title'>
                <h1 >Get in touch</h1>
                <img src={theme_pattern} alt='' />
            </div>
            <div className='contact_section'>
                <div className='contact-left'>
                    <h1>Let's talk</h1>
                    <div className='contact-details'>
                        <div className='contact-detail'>
                            <img src={mail} alt='' /> <p>sandhyaponrajan.l@gmail.com</p>
                        </div>
                        <div className='contact-detail'>
                            <img src={call} alt='' /> <p>9566705745</p>
                        </div>
                        <div className='contact-detail'>
                            <img src={location} alt='' /> <p>Porur, Chennai</p>
                        </div>
                    </div>
                    <div className='contact-links'>
                        <div className='contact-link'>
                            <a href="https://www.linkedin.com/in/adhibhuvanasandhya" target="_blank" rel="noopener noreferrer">
                                <img src={linkedin} alt="LinkedIn" />
                            </a>
                        </div>
                        <div className='contact-link'>
                            <a href="https://github.com/Adhibhuvanasandhya" target="_blank" rel="noopener noreferrer">
                                <img src={github} alt="GitHub" />
                            </a>
                        </div>
                        
                    </div>
                    <div>
                        <a href="mailto:sandhyaponrajan.l@gmail.com" className='contact-submit'> Mail connect</a>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Contact;
