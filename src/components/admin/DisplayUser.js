import React from "react";
import "./DisplayUser.css";

function DisplayUser({ email, password }) {
  return (
    <div className="displayUser">
      <div>{email}</div>
      <div>{password}</div>
    </div>
  );
}

export default DisplayUser;
