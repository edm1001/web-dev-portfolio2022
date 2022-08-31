import React from "react";
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Pages/Bio';
import Contact from "./Pages/Contact";
import Projects from './Pages/Project';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from "./Pages/Home";
// import Particle from './Components/pasticleBackground';


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <div>
        <Routes>
          <Route 
          path="/"
          element = {<Home/>}>
          </Route>
          <Route 
          path="/About"
          element = {<About/>}>
          </Route>
          <Route 
          path="/contact"
          element = {<Contact/>}>
          </Route>
          <Route 
          path="/project"
          element = {<Projects/>}>
          </Route>
        </Routes>
        </div>
        {/* <div><Particle /></div> */}
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
