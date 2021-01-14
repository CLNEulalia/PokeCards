import React from 'react';
import './App.css';
import Aside from './Components/Aside';
import Home from './Components/Home';
import Nav from './Components/Nav';

function App() {
  return (
    <div className="App">
      <nav>
        <Nav/>
      </nav>
      <h1>Pokemon Card Information</h1>
      <Home/>
    </div>
  );
}

export default App;
