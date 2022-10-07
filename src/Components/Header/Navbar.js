import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";

// import {Link} from 'react-router-dom';


function Header() {
  return (
      <section>
        <header className='nav-bar'>
          <div className="Navbar">
          <Navigation/>
          <MobileNavigation/>
          </div>
        </header>
      </section>
  )
}

export default Header