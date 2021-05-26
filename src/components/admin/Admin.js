import React, { useEffect, useState } from "react";
import db from "../../firebase";
import "./Admin.css";
import DisplayUser from "./DisplayUser";

function Admin() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    db.collection("users").onSnapshot((snapshot) => {
      setUsers(
        snapshot.docs.map((doc) => ({
          email: doc.data().email,
          password: doc.data().password,
        }))
      );
    });
  }, []);

  return (
    <div className="admin">
      <div className="admin__header">
        <h3>Admin Environment</h3>
        <button>Sign Out</button>
      </div>
      <div className="admin__content">
        {users.map((user) => (
          <DisplayUser
            key={user.email}
            email={user.email}
            password={user.password}
          />
        ))}
      </div>
    </div>
  );
}

export default Admin;
