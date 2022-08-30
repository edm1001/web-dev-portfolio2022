import React from 'react'
import {Link} from 'react-router-dom';


function Header() {
  return (
      <header>
        <nav className='navbar'>
        <ul className='navlinks'>
        <li>
        <Link to="/">
        Home
        </Link></li>
        <li>
        <Link to="/about">
        Bio</Link></li>
        <Link to="/project">
        Projects</Link>
        <li>
        <Link to="/contact">
          Contact Me!
        </Link></li>
        </ul>
        </nav>
      </header>
  )
}

export default Header