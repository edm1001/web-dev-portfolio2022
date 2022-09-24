import React from 'react'

// import {Link} from 'react-router-dom';


function Header() {
  return (
      <header>
        <nav className='navbar'>
        <a href="#home"> Home</a>
        <a href='#about'>About</a>
        <a href='#portfolio'>Portfolio</a>
        <a href='#services'>Services</a>
        <a href='#contact'>Contact</a>
        <a href="#reviews">Testimonials</a>
        <a href="#resume" >Resume</a>
        </nav>
      </header>
  )
}

export default Header