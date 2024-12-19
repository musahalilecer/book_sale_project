import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainNavbar from './component/MainNavbar'
import Home from './page/Home'
import About from './page/About'
import Login from './page/Login'
import Profile from './page/Profile'
import Register from './page/Register'
import Customer from './page/Customer';
import Basket from './page/Basket';

function App() {
  return (
    <Router>
      <MainNavbar/>
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/customer" element={ <Customer/> }></Route>
        <Route path="/basket" element={ <Basket/> }></Route>
        <Route ></Route>
      </Routes>
    </Router>
  )
}

export default App;
