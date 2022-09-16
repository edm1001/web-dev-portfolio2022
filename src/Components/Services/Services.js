import React from 'react'


import {AiOutlineHtml5, } from 'react-icons';


function Services() {
  return (
    <section className=' Services'>
    <h1>Services</h1>
    <div className='service-list'>
      <div className='service'>
        <h3>Create Websites </h3>
        <p>I create websites according to your wants and needs!</p></div>
        <div className='service'>
        <h3>Refractor Code</h3>
        <p>Got a broken site? Contact me and we can fix it!</p></div>
        <div className='service'>
        <h3>Technical Skills</h3>
        <p></p></div>
        <div className='service'>
        <h3>Passion for Learning</h3></div>
        <div className='service'>
        <h3>Modern Layout</h3></div>
        <div className='service'>
        <h3>Responsive Design</h3></div>
        <div className='service'>
        <h3>Strong Communication</h3></div>
    </div>
    <div className='skills'>
    <h3> Skills</h3>
    <ul style={{listStyleType:'none'}}>
        <li>HTML/CSS</li>
        <li>JavaScript</li>
        <li>Bootstrap</li>
        <li>Node</li>
        <li>Front End Development</li>
        <li>React</li>
        <li>npm</li>
        <li>jQUery</li>
    </ul>
    </div>
    </section>
  ) }
export default Services