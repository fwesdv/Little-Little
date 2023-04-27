import React from 'react';
import logo from './logo.svg';
import './App.css'
import Navbar from './navbar';
import Home from './page/Home';

function App() {
  return (

    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
    </div>
  );
}

export default App;
