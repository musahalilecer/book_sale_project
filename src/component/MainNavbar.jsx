import React from "react";
import { Link } from "react-router-dom";
import "../style/MainNavbar.css";

const MainNavbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuvv9bIez5stvwmN5R0aH6IuzVaEw7DjT-7Q&s"
          alt="Logo"
        />
      </div>
      <div className="navbar-item">
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/customer">Customers</Link></li>
          <li><Link to="/basket">Basket</Link></li>
        </ul>
      </div>
      <div className="icon-item">
        <ul>
          <li><Link to="/login">🔒 Login</Link></li>
          <li><Link to="/register">👤 Register</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default MainNavbar;
