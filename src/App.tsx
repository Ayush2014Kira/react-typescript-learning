import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./theme/componets/Login"
import Signup from './theme/componets/signup';
import Navbar from "./theme/componets/navbar"
const App: React.FC = () => {
  return (
    <Router>
    <Routes>
      <Route path="/Login" element={<Login/>} />
      <Route path='/' element={<Signup/>}/>
      <Route path='/navbar' element={<Navbar/>}/>

    </Routes>
  </Router>
   
  );
}

export default App;
