import React from 'react'
import Project01 from '../../Assets/images/placeholder.png';
import Project02 from '../../Assets/images/placeholder.png'
function Projects() {
  return (
    <section className='portfolio'>
    <h1>Portfolio</h1>
    <div className='projects'>
    <div id='project1'>
    <img src={Project01} alt ='project01'/>
    <h4>Travel Diary</h4>
    <p> JavaScript, HTML, CSS, HandleBars, Multer</p></div>
    <div id='project2'> 
    <img src={Project02} alt ='project02'/>
    <h4>CHatterize!</h4>
    <p> React, HTML, CSS, JavaScript</p>
    </div>
    
    </div>
    </section>
  )
}

export default Projects;