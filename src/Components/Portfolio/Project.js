import React from 'react'
import Project01 from '../../Assets/images/placeholder.png';
import Project02 from '../../Assets/images/placeholder.png';
import {BiLinkExternal} from 'react-icons/bi';
import {BsGlobe} from 'react-icons/bs';

function Projects() {
  return (
    <section className='portfolio'>
    <h1>Portfolio</h1>
    <div className='projects'>
    <div id='project1'>
    <img src={Project01} alt ='project01' href='https://afternoon-harbor-62644.herokuapp.com/'  />
    <h4>Travel Diary</h4>
    <p> JavaScript, HTML, CSS, HandleBars, Multer</p>
    <a href='https://chatterize123.herokuapp.com/' ><BiLinkExternal size={25}/></a>
    </div>
    <div id='project2'> 
    <img src={Project02} alt ='project02'/>
    <h4>Chatterize!</h4>
    <p> React, HTML, CSS, JavaScript</p>
    <a href='https://afternoon-harbor-62644.herokuapp.com/'><BiLinkExternal size={20}/></a>
    </div>
    
    </div>
    </section>
  )
}

export default Projects;