import React from "react";
import "./Style.css";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate=useNavigate();
    const submitData=(e)=>{
        e.preventDefault();
        navigate("/forgot-password-next");
    }
  return (
    <div className="row g-0 forgot-password-main justify-content-center ">
      <div className="row g-0 col-9 col-sm-4  mt-4 mt-sm-5 forgot-password-container p-4 p-sm-5">
        <div className="forgot-password-colleactions">
          <div className="text-center">
            <label htmlFor="" className="forgot-password-label">Forgot Password</label>
          </div>
          <div className="col-12 mt-4 mt-sm-5">
            <form action="">
              <div className="form-floating">
                <input type="email" placeholder="Email" className="form-control" />
                <label htmlFor="">Email</label>
              </div>
              
              <div className="mt-4 mt-sm-4">
                <button className="submit-btn btn bg-primary" onClick={(e)=>{return submitData(e)}}>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ForgotPassword;
