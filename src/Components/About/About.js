import React from 'react';
import Placeholder from '../../Assets/images/placeholder.png';


function About() {
  return (
    <section style={{marginBlock:'150px'}} className="about" >
    <div  className='qoute' style={{color:'white'}}>
      <h2> bl scbiuw scbhsdbhcs socn cb iwsb consscb wuah oasb cbsciun c auob a  sjcboua </h2>
      <p>
        add github and gmail link here
      </p>
      </div> 
    <div className='welcome'>
       <h1> Welcome to my Webpage</h1>
       <p>
        My name is Edmer Valencia, I am a Full Stack Developer graduated from a coding bootcamp offered in UT at Austin. I am eager to learn and create various technologies and projects.
       </p>
       
       </div>
      <div className='image'>
      {/* <img src={Placeholder} alt='placehodler' > </img> */}
      </div>
    
    </section>
  )
}

export default About
