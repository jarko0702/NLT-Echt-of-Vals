import React from "react";
import logo from "../../assets/PayPal_logo.png";
import "./SignIn.css";

function SignIn() {
  return (
    <div className="signIn">
      <div className="signIn__container">
        <img src={logo} alt="" />
        <div className="signIn__form">Sign In form</div>
      </div>
    </div>
  );
}

export default SignIn;
