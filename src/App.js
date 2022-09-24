import React from "react";
import Header from './Components/Header';
import Footer from './Components/Footer';
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
        </Routes>
        </div>
       <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
