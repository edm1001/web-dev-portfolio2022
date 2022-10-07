import React from "react";
import Navbar from './Components/Header/Navbar.js';
import Footer from './Components/Footer';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from "./Pages/Home";
// import Particle from './Components/pasticleBackground';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <div>
        <Routes>
          <Route 
          path="/"
          element = {<Home/>}>
          </Route>
        </Routes>
        </div>
       <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
