import React from 'react'
import html from "../../assets/html.png"
import css from "../../assets/css-3.png"
import theme_pattern from "../../assets/theme_pattern.svg"
import js from "../../assets/js.png"
import react from "../../assets/physics.png"
import node from "../../assets/node-js.png"
import db from "../../assets/db.png"
import git from "../../assets/git.png"
import "./Skill.css"
import firebase from "../../assets/firebase.png"



const Skill = () => {
  return (
    <div id='skills' className='skill'>
        <div className='skill_tittle'>
        <h1>Skills</h1>
        <img src={theme_pattern} alt=''></img>

        </div>
        
        <div className='skill_logo'>
        <img src={html} alt='' ></img>
        <img src={css} alt='' ></img>
        <img src={js} alt='' ></img>
        <img src={react} alt='' ></img>
        <img src={node} alt=''></img>
        <img src={db} alt=''></img>
        <img src={git} alt=''></img>
        <img src={firebase} alt="" />
        </div>
       

    </div>
  )
}

export default Skill