import React from "react";
import "./Style.css";
import {Link} from 'react-router-dom'
import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

const LoginSignUp = () => {
    const [loginSignup,setLoginSignup]=useState(true);
    
  return (
    <div className="row g-0 loginsignup justify-content-center ">
      <div className="loginsignup-container  col-10 col-sm-4 mt-4 rounded-3 mb-5 ">
        <div className="col-10 loginsignup-subcontainer my-4 my-sm-3 justify-content-center">
          <div className="loginsignup-label text-center">
            <label htmlFor="" className="loginsignup-label-name">
              Login
            </label>
          </div>
          <div className="row loginsignup-btn justify-content-center mt-3 mt-sm-4">
            <div className="btn-group">
              <button onClick={()=>{return setLoginSignup(true)}} className={loginSignup==true?'btn border bg-primary':"btn border"}>Login</button>
              <button onClick={()=>{return setLoginSignup(false)}} className={loginSignup==false?'btn border bg-primary':"btn border"}>Singup</button>
            </div>
          </div>
          {
             loginSignup ? (<Login/>):<Signup setLoginSignup={setLoginSignup}/>
          }
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
