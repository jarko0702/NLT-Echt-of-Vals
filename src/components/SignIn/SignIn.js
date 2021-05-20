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
            <input id="email" placeholder="Type your email adress" />
            <input id="password" placeholder="Password" />
            <button>Log In</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
