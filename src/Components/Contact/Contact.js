import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';


function Contact() {
  return (
    <section className='contact'>
    <h1>Contact</h1>
    <div className='message'>
    <h2> Message Me!</h2>  
    <input id='msg-info' placeholder='write your pessage here'></input>
    <div className='sender'>
    <input placeholder='name'></input>
    <input placeholder='email'></input>
    </div>
    </div>
    <div className='contact'>
    <div className='icons'>
                <a href='https://www.linkedin.com/in/edmer-valencia-080414227/'>
                <FaLinkedin
  color='darkblue' size={50}
                /> 
                <a href='https://github.com/edm1001'>
                <FaGithub
  color='white' size={50}
                /></a>
                </a>
                </div>
    </div>
    </section>
  )
}

export default Contact