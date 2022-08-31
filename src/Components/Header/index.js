import React from 'react'
import {Link} from 'react-router-dom';


function Header() {
  return (
      <header>
        <nav className='navbar'>
        
        <Link to="/">
        Home
        </Link>
        
        <Link to="/about">
        Bio</Link>
        <Link to="/project">
        Projects</Link>
        
        <Link to="/contact">
          Contact Me!
        </Link>
        </nav>
      </header>
  )
}

export default Header