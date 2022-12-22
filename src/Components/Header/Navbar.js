import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";
import { Navbar } from "react-bootstrap";
// import {Link} from 'react-router-dom';


function Header() {
  return (
      <section>
        <header className='navbar'>
          <div className="Navbar">
          <Navigation/>
          <MobileNavigation/>
          </div>
        </header>
      </section>
  )
}

export default Header