import { useState } from "react";

function LoggedIn() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoggedIn = () => {
    setIsLoggedIn(true);
  };
  const handleLoggedOut = () => {
    setIsLoggedIn(false);
  };
  return (
    <>
      <div>
        <button onClick={handleLoggedIn}>Login</button>
        <button onClick={handleLoggedOut}>Logout</button>
        <h3>User is {isLoggedIn ? "logged in" : "logged out"}</h3>
      </div>
    </>
  );
}

export default LoggedIn;
