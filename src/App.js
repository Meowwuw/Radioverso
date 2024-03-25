import React from 'react';
import Intro from './components/Intro';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Intro />
      <About />
      <Contact />
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
};

export default App;

