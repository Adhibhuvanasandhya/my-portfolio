import React, { useState, useEffect, useRef } from 'react'
import "./Nav.css"
import underline from "../../assets/nav_underline.svg"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from "../../assets/menu_open.svg"
import menu_close from "../../assets/menu_close.svg"
import linkedin from "../../assets/linkedin-logo.png"
import github from "../../assets/github.png"

const Navbar = () => {
  const [menu, setMenu] = useState("")
  const [activeSection, setActiveSection] = useState("") // state to track active section
  const menuRef = useRef();

  // IntersectionObserver to detect section visibility
  useEffect(() => {
    const sections = document.querySelectorAll('section'); // select all sections
    const options = {
      rootMargin: '0px',
      threshold: 0.5 // 50% of the section must be in view
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id); // set active section based on visibility
        }
      });
    }, options);

    sections.forEach(section => {
      observer.observe(section); // observe each section
    });

    return () => {
      observer.disconnect(); // cleanup observer on unmount
    };
  }, []);

  const openMenu = () => {
    menuRef.current.style.right = "0";
  }
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  }

  return (
    <div className='navbar'>
      <h1 className='text-4xl font-extrabold'>SANDHYA</h1>
      <img onClick={openMenu} src={menu_open} alt='' className='nav-mob-open' />

      <ul ref={menuRef} className='nav-menu'>
        <img onClick={closeMenu} src={menu_close} alt='' className='nav-mob-close' />
        <li>
          <AnchorLink className='anchor-link' href='#home'>
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {activeSection === "home" ? <img src={underline} alt='' /> : <></>}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#about'>
            <p onClick={() => setMenu("about")}>About Me</p>
          </AnchorLink>
          {activeSection === "about" ? <img src={underline} alt='' /> : <></>}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#skills'>
            <p onClick={() => setMenu("skills")}>Skills</p>
          </AnchorLink>
          {activeSection === "skills" ? <img src={underline} alt='' /> : <></>}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#project'>
            <p onClick={() => setMenu("project")}>My Projects</p>
          </AnchorLink>
          {activeSection === "project" ? <img src={underline} alt='' /> : <></>}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
          {activeSection === "contact" ? <img src={underline} alt='' /> : <></>}
        </li>
      </ul>
      <div className='nav-connect'>
        <div>
          <a href="https://www.linkedin.com/in/adhibhuvanasandhya" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" />
          </a>
        </div>
        <div>
          <a href="https://github.com/Adhibhuvanasandhya" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
