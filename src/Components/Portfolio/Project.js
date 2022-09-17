import React from 'react'
import {BiLinkExternal} from 'react-icons/bi';
import travelDiary from '../../Assets/gifs/travel-blog.gif';
import Chatterize from '../../Assets/gifs/chatterize.gif';

// import {BsGlobe} from 'react-icons/bs';

function Projects() {
  return (
    //click method shows the info

    <section className='portfolio' id="portfolio">
    <h1>Portfolio</h1>
    <div className='projects' >
    <div id='project1'>
    <img src={travelDiary} alt ='project01' href='https://afternoon-harbor-62644.herokuapp.com/' id='travel-gif' />
    {/* add logo instead of name */}
    <p> JavaScript, HTML, CSS, HandleBars, Multer</p>
    <a href='https://afternoon-harbor-62644.herokuapp.com/' ><BiLinkExternal size={25}/></a>
    </div>
    <div id='project2'> 
    <img src={Chatterize} alt ='project02' id='chatterize'/>
    <h4>Chatterize!</h4>
    <p> React, HTML, CSS, JavaScript</p>
    <a href='https://chatterize123.herokuapp.com/'><BiLinkExternal size={20}/></a>
    </div>
    
    </div>
    </section>
  )
}

export default Projects;