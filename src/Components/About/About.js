import React, {useEffect} from 'react';
import Placeholder from '../../Assets/images/placeholder.png';
import {FcGoogle} from 'react-icons/fc';
import {FaGithubAlt} from 'react-icons/fa';
import Aos from 'aos';
import "aos/dist/aos.css";

const About=()=> {
  useEffect(() => {
    Aos.init({duration:3000});
  }, [])
  return (
    <>  
    <section style={{marginBlock:'150px'}} className="intro video-background" id="home" >
      <div className="video-background__inner">
        {/* add automated video */}
        <video className='video-background__video' src="..."> </video>
      </div>
    <div  className='qoute video-background__content' style={{color:'white'}}>
      <h2> In all human affairs there are efforts and there are results, and the strength of the effort is the measure of the result </h2><h4 style={{color:'red'}}> - James Allen</h4>
      <h4>
      <FcGoogle size={50}/>
      </h4>
      <h4>
      <FaGithubAlt size={50}/> 
      </h4>
      
      
      </div> 

    </section>
    <section className='about' id="about">
    <div data-aos="fade-right" className='welcome' style={{flex:'1'}}>
       <h1> Welcome to my Webpage</h1>
       <p>
        My name is Edmer Valencia, I am a Full Stack Developer that graduated from the coding bootcamp program offered in University of Texas at Austin. I am eager to learn and create various technologies and projects.
       </p>

       </div>
       <img data-aos="fade-left" className='intro-img' src={Placeholder} alt='placeholder' style={{flex:1}}/>
      </section>
    
    </>
  )
}

export default About
