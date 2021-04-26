import React, { Component } from 'react'
import Navigation from './components/Navigation'
import Home from './components/Home'
import Footer from './components/Footer'
import About from './components/About'
import Projects from './components/Projects'
import Header from './components/Header'
import ImgContainer from './components/ImgContainer'
import "./App.css"

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div >
        <Navigation />
        <Home />
        <About />
        <Projects />
        <Header title="Skills"/>
        <ImgContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
