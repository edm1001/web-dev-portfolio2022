import React from 'react'
import {Link} from 'react-router-dom';


function Header() {
  return (
      <header>
        <nav className='navbar'>
        
        <Link to="/">
        Home
        </Link>
        <a href='about'>About</a>
        <a>Portfolio</a>
        <a>Contact</a>
        <a>Services</a>
        <a>Resume</a>
        <a>Testimonials</a>
        </nav>
      </header>
  )
}

export default Header