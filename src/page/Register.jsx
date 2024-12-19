import React from "react";
import "../style/Register.css";
import { useDispatch, useSelector } from "react-redux";
import { addCustomer } from "../redux/actions/CustomerAction";

const Register = () => {

  return (
    <div className="register-container">
      <div className="register-header">
        <h2>Create Your Account</h2>
        <p>Join us and enjoy personalized services.</p>
      </div>
      <form className="register-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="photo">Upload Profile Photo</label>
          <input
            type="file"
            id="photo"
            className="form-input file-input"
          />
        </div>
        <button type="submit" className="register-submit">Register</button>
      </form>
      <div className="register-footer">
        <p>
          Already have an account? <a href="/login">Log In</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
