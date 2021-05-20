import React from "react";

import "./SignIn.css";

function SignIn() {
  const logo = "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg";
  return (
    <div className="signIn">
      <div className="signIn__container">
        <img src={logo} alt="" />
        <div className="signIn__form">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="signIn__form">
              <input id="email" type="email" placeholder="E-mailadres" />
            </div>
            <div className="signIn__form">
              <input id="password" type="password" placeholder="Wachtwoord" />
            </div>
            <div className="signIn__form">
              <button>Log In</button>
            </div>
          </form>
        </div>
        <div className="signIn__openAcountForm">
          <button className="signIn__openAcount">Rekening openen</button>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
