import React, { useState } from 'react';

import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail from "../../assets/mail_icon.svg";
import location from "../../assets/location_icon.svg";
import call from "../../assets/call_icon.svg";
import linkedin from "../../assets/linkedin-logo.png"
import github from "../../assets/github.png"

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [responseMessage, setResponseMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/api/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            setResponseMessage(data.message);

            if (response.ok) {
                alert('Your message has been sent successfully!'); // Alert for success
                setFormData({ name: '', email: '', message: '' });
            } else {
                alert(data.message || 'Failed to send your message. Please try again later.'); // Alert for error
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to send your message. Please try again later.'); // Alert for network or server issues
            setResponseMessage('Failed to send your message. Please try again later.');
        }
    };

    return (
        <div id='contact' className='contact'>
            <div className='contat_title'>
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt='' />
            </div>
            <div className='contact_section'>
                <div className='contact-left'>
                    <h1>Let's talk</h1>
                    <div className='contact-details'>
                        <div className='contat-detail'>
                            <img src={mail} alt='' /> <p>sandhyaponrajan.l@gmail.com</p>
                        </div>
                        <div className='contat-detail'>
                            <img src={call} alt='' /> <p>9566705745</p>
                        </div>
                        <div className='contat-detail'>
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
                                  <img src={github} alt="GitHub"/>
                                </a>
                              </div>
                        

                    </div>
                </div>
                <form className='contact-right' onSubmit={handleSubmit}>
                {responseMessage && <p className="response-message">{responseMessage} </p>}
                    <label>Your Name</label>
                    <input type='text' placeholder='Enter your name' name='name' value={formData.name} onChange={handleChange} />
                    <label>Your Email</label>
                    <input type='email' placeholder='Enter your email' name='email' value={formData.email} onChange={handleChange} />
                    <label>Write your message here</label>
                    <textarea name='message' placeholder='Enter your message' value={formData.message} onChange={handleChange}></textarea>
                    <button type='submit' className='contact-submit'>Submit Now</button>
                    
                </form>
                
            </div>
           
        </div>
    );
};

export default Contact;
