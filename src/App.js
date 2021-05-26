import React, { useState } from "react";
import Admin from "./components/admin/Admin";
import SignIn from "./components/SignIn/SignIn";

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  if (isAdmin) {
    return <Admin />;
  } else {
    return (
      <div>
        <SignIn setIsAdmin={setIsAdmin} />
      </div>
    );
  }
}

export default App;
