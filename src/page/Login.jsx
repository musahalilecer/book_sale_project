import React from "react";
import "../style/Login.css";
import Button from "../component/Button"

const Login = () => {
  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("Succesfully")

  }
  return (
    <div className="login-container">
      <div className="login-header">
        <h1>Welcome Back</h1>
        <p>Log in to your account to access personalized services.</p>
      </div>
      <form className="login-form">
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
        <Button
          color={"blue"}
          text={"Login"}
          width={"360px"}
          height={"45px"}
          fontSize={"16px"}
          onClick={handleSubmit()}
        />
      </form>
      <div className="login-footer">
        <p>
          Don’t have an account? <a href="/register">Sign Up</a>
        </p>
        <a href="/forgot-password" className="forgot-password">
          Forgot your password?
        </a>
      </div>
    </div>
  );
};

export default Login;
