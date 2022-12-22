

const NavLinks = (props) => {

    return (
    <nav >
    <ul className="navlinks">
        <li>
          <a href="#home" onClick={()=> props.isMobile && props.closeMobileMenu()}> Home</a></li>
        <li>
          <a href='#about' onClick={()=> props.isMobile && props.closeMobileMenu()}>About</a></li>
        <li>
          <a href='#portfolio' onClick={()=> props.isMobile && props.closeMobileMenu()}>Portfolio</a></li>
        <li>
          <a href='#services' onClick={()=> props.isMobile && props.closeMobileMenu()}>Services</a></li>
        <li>
          <a href='#contact' onClick={()=> props.isMobile && props.closeMobileMenu()}>Contact</a></li>
        <li>
          <a href="#reviews" onClick={()=> props.isMobile && props.closeMobileMenu()}>Testimonials</a></li>
        <li>
          <a href="#resume" onClick={()=> props.isMobile && props.closeMobileMenu()}>Resume</a></li>
    </ul>
    </nav>

  )
}

export default NavLinks;