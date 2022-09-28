import React from 'react'
import About from '../Components/About/About.js';
import Portfolio from '../Components/Portfolio/Project';
import Contact from '../Components/Contact/Contact';
import Services from '../Components/Services/Services.js';
import Reviews from '../Components/Reviews/Reviews.js';
import Resume from '../Components/Resume/Resume.js';

export const Home = () => {
  return (
    <section>
      <About/>
      <Portfolio/>
      <Services/>
      <Contact/>
      <Reviews/>
      <Resume/>
    </section>
  )
}


export default Home;
