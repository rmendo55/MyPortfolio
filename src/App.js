import React from 'react'
import Navigation from './components/Navigation'
import Home from './components/Home'
import Footer from './components/Footer'
import About from './components/About'
import "./App.css"

function App() {
  return (
    <div>
      <Navigation />
      <Home />
      <About />
      <Footer />
    </div>
  );
}

export default App;
