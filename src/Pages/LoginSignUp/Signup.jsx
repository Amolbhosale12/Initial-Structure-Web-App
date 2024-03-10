import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Style.css";
import { Feather } from "@phosphor-icons/react";

const Signup = ({setLoginSignup}) => {

  
  // form data
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const handleSignup = (e) => {
    e.preventDefault();
    const signupData = { firstName, lastName, emailAddress, password };

    fetch("http://localhost:8080/signup/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(signupData),
    }).then((response) => {
      if (!response.ok) {
        throw new Error("network error occured");
      }
      return response.json();
    });

    
    setLoginSignup(true);
  };
  return (
    <div className="mt-3 mb-3 col-12">
      <form action="">
        <div className="first-name form-floating">
          <input
            type="text"
            className="first-name-input form-control"
            placeholder="First Name"
            onChange={(e) => {
              return setFirstName(e.target.value);
            }}
          />
          <label htmlFor="">First Name</label>
        </div>
        <div className="last-name mt-2 form-floating">
          <input
            type="text"
            className="last-name-input form-control"
            placeholder="Last Name"
            onChange={(e) => {
              return setLastName(e.target.value);
            }}
          />
          <label htmlFor="">Last Name</label>
        </div>
        <div className="email-address mt-2 form-floating">
          <input
            type="email"
            className="email-address-input form-control"
            placeholder="Email Address"
            onChange={(e) => {
              return setEmailAddress(e.target.value);
            }}
          />
          <label htmlFor="">Email Address</label>
        </div>
        <div className="password mt-2 form-floating">
          <input
            type="text"
            className="password-input form-control"
            placeholder="Password"
            onChange={(e) => {
              return setPassword(e.target.value);
            }}
          />
          <label htmlFor="">Password</label>
        </div>
        <div className="singup mt-2 mt-sm-3">
          <button
            className="col-12 btn btn-primary"
            onClick={(e) => {
              return handleSignup(e);
            }}
          >
            Signup
          </button>
        </div>
        
      </form>
    </div>
  );
};

export default Signup;
