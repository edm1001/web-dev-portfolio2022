import React from 'react'
import {BiLinkExternal} from 'react-icons/bi';
// import travelDiary from '../../Assets/gifs/travel-blog.gif';
// import Chatterize from '../../Assets/gifs/chatterize.gif';
import {IoLogoJavascript} from 'react-icons/io';
import {SiExpress, SiMongodb, SiInsomnia, SiSequelize, } from 'react-icons/si';
import {FaReact} from 'react-icons/fa';
import {DiNodejs} from 'react-icons/di';
import {GrHeroku , GrMysql} from 'react-icons/gr';
// import {BsGlobe} from 'react-icons/bs';

function Projects() {
  return (
    //click method shows the info

    <section className='portfolio' id="portfolio">
    <h1>Portfolio</h1>
    <div className='projects' >
    
    <div id='project1'>
    {/* <img src={travelDiary} alt ='project01' href='https://afternoon-harbor-62644.herokuapp.com/' id='travel-gif' /> */}

    
    
    <h3> MVC Framework</h3>
    <p><SiInsomnia size={20}/><SiSequelize size={20}/><GrMysql size={20}/><GrHeroku size={20}/><DiNodejs size={20}/><IoLogoJavascript size={20}/></p>
    <a href='https://afternoon-harbor-62644.herokuapp.com/' ><BiLinkExternal size={25}/></a>
    
    </div>


    <div id='project2'> 
    {/* <img src={Chatterize} alt ='project02' id='chatterize'/> */}
    <h3>MERN Stack</h3>
    <p><SiMongodb size={20}/><SiExpress size={20}/><FaReact size={20}/><DiNodejs size={20}/><IoLogoJavascript size={20}/><GrHeroku size={20}/></p>
    <a href='https://chatterize123.herokuapp.com/'><BiLinkExternal size={25}/></a>
  
    
    </div>
    </div>
    </section>
  )
}

export default Projects;