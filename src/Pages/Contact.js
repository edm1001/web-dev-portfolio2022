import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';


function Contact() {
  return (
    <section>
    <h1>Contact</h1>
    <div className='contact'>
    <div className='icons'>
                <a href='https://www.linkedin.com/in/edmer-valencia-080414227/'>
                <FaLinkedin
  color='darkblue' size='40px'
                /> 
                </a>
                <h3>LinkedIn</h3>
                </div>

                <div className='icons'>
                <a href='https://github.com/edm1001'>
                <FaGithub
  color='darkblue' size='40px'
                /></a>
                <h3>Github</h3>
                </div>
    </div>
    </section>
  )
}

export default Contact