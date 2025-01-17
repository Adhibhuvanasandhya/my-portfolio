import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/hero'
import About from './components/About/About'
import Skill from './components/Skills/Skill'
import Mywork from './components/mywork/Mywork'
import Contact from './components/contact/Contact'

const App = () => {
  return (
    <div>
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skill />
      </section>
      <section id="project">
        <Mywork />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  )
}

export default App
