import React from 'react';
import './App.css';
import Home from './Components/Home';
import Nav from './Components/Nav';

function App() {
  return (
    <div className="App">
      <nav>
        <Nav/>
      </nav>
      <Home/>
    </div>
  );
}

export default App;
