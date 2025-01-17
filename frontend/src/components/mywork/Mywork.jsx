import React from 'react'
import "./mywork.css"
import theme_pattern from "../../assets/theme_pattern.svg"
import mywork_data from "../../assets/mywork_data.js"


const Mywork = () => {
    return (
        <div id='project' className='mywork'>
            <div className='mywork-title'>
                <h1>My Projects</h1>
                <img src={theme_pattern} alt=''></img>

            </div>
            <div className='mywork_container'>
                {mywork_data.map((work, index) => {
                    return <div key={index} className='work-card'>
                    <img src={work.w_img} alt={`project-${index}`} />
                    <div className='work-buttons'>
                        <a href={work.demo_link} target="_blank" rel="noopener noreferrer">
                            <button className='demo-btn'>Live Demo</button>
                        </a>
                        <a href={work.github_link} target="_blank" rel="noopener noreferrer">
                            <button className='github-btn'>GitHub Link</button>
                        </a>
                    </div>
                </div>
                })}
            </div>
            

        </div>
    )
}

export default Mywork