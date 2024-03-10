import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {

  const loginCustomer=(e)=>{
    e.preventDefault();
    //console.log("login successfully");
  }

  return (
    <div className="mt-4 col-12">
      
      <form action="">
        <div className="email-address form-floating">
          <input
            type="text"
            className="email-address-input form-control"
            placeholder="Email Address"
          />
          <label htmlFor="">Email Address</label>
        </div>
        <div className="password mt-2 form-floating">
          <input
            type="text"
            className="password-input form-control"
            placeholder="Password"
          />
          <label htmlFor="">Password</label>
        </div>
        <div className="forgot-password">
          <label htmlFor="" className="">
            <Link to="/forgot-password" className="forgot-password-link">
              forgot Password?
            </Link>
          </label>
        </div>
        <div className="login-btn-container mt-4">
          <button className="login-btn btn bg-primary" onClick={(e)=>{loginCustomer(e)}}>Login</button>
        </div>
      </form>
      <div className="signup-container mt-4">
        <label htmlFor="" className="signup-container-link">
          Not a member?{" "}
          <Link
            onClick={() => console.log("signup your account!")}
            className="signup-link"
          >
            Please Signup
          </Link>
        </label>
      </div>
    </div>
  );
};

export default Login;
