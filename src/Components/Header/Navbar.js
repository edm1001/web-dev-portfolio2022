import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";
import { Nav,Navbar,Container } from "react-bootstrap";
// import {Link} from 'react-router-dom';


function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Iconhere</Navbar.Brand>
        <Nav >
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About me</Nav.Link>
          <Nav.Link href="#portfolio">Portfolio</Nav.Link>
          <Nav.Link href="#services">Services</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
          <Nav.Link href="#reviews">Reviews</Nav.Link>
          <Nav.Link href="#resume">Resume</Nav.Link>

        </Nav>
      </Container>
    </Navbar>

  )
}

export default Header

      // <section>
      //   <header className='navbar'>
      //     <div className="Navbar">
      //     <Navigation/>
      //     <MobileNavigation/>
      //     </div>
      //   </header>
      // </section>