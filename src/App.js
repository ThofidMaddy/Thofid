
import {  Routes, Route, Link } from "react-router-dom";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Components/Navbar'

import Contacts from './Components/Contacts';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Works from './Components/Works';
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <div className="container">
      
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Works></Works>
      <Contacts></Contacts>
      
      </div>
    </div>
  );
}

export default App;
