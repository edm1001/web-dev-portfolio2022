import React from 'react';
import Placeholder from '../../Assets/images/placeholder.png';
import {FcGoogle} from 'react-icons/fc';
import {FaGithubAlt} from 'react-icons/fa';

function About() {
  return (
    <div>
    <section style={{marginBlock:'150px'}} className="intro" >
    <div  className='qoute' style={{color:'white'}}>
      <h2> In all human affairs there are efforts, and there are results and the strength of the effort is the measure of the result </h2><h4 style={{color:'red'}}> -James Allen</h4>
      <h4>
      <FcGoogle size={50}/>
      </h4>
      <h4>
      <FaGithubAlt size={50}/> 
      </h4>
      
      
      </div> 

    </section>
    <section className='about'>
    <div className='welcome' style={{flex:'1'}}>
       <h1> Welcome to my Webpage</h1>
       <p>
        My name is Edmer Valencia, I am a Full Stack Developer graduated from a coding bootcamp offered in UT at Austin. I am eager to learn and create various technologies and projects.
       </p>

       </div>
       <img className='intro-img' src={Placeholder} alt='placeholder' style={{flex:1}}/>
      </section>
    
    </div>
  )
}

export default About
