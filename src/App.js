import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from './components/Navigation'
import "./App.css"

function App() {
  return (
    <div>
      <Navigation />
      <img src="../homeImage4.jpg" className="img-fluid" alt="Responsive image"/>
    </div>
  );
}

export default App;