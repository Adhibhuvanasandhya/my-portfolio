import React from 'react'
import "./About.css"
import theme_pattern from "../../assets/theme_pattern.svg"
import profile from "../../assets/san1.jpeg"

const About = () => {
    return (
        <div id='about' className='about'>
            <div className='about-tittle'>
                <h1>About me</h1>
                <img src={theme_pattern} alt=''></img>
                </div>
                <div className='about_section'>
                <div className='about_left'>
                    <img src={profile} alt=''></img>
                </div>
                <div className='about_right'>
                    <div className='about_para'>
                        <p>I'm web developer passionate about creating responsive, user-friendly, and visually engaging websites. I specialize in front-end development using HTML, CSS, JavaScript, React.js, and Tailwind CSS, and I build scalable back-end systems with Node.js and Express.js.</p>
                        <p>I thrive on solving real-world problems through technology and aim to deliver impactful, user-focused solutions. Let's build something great together!</p>

                    </div>
    
                </div>

                </div>

        </div>
    )
}

export default About