import React from 'react';
import Placeholder from '../../Assets/images/placeholder.png';
import {FcGoogle} from 'react-icons/fc';
import {FaGithubAlt} from 'react-icons/fa';

function About() {
  return (
    <div>
    <section style={{marginBlock:'150px'}} className="intro" >
    <div  className='qoute' style={{color:'white'}}>
      <h2> bl scbiuw scbhsdbhcs socn cb iwsb consscb wuah oasb cbsciun c auob a  sjcboua </h2>
      <h4>
      <FcGoogle/>
      @edmerfranciz@gmail.com
      </h4>
      <h4>
      <FaGithubAlt/> 
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
