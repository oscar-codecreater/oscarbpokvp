// src/App.js
import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';
import Backtotop from './Backtotop';
import './App.css';


function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Home />
      <About />
      <Services />
      <Contact />
      <Footer />
      <Backtotop/>
      
    </div>
  );
}

export default App;
