// import React from "react"

import { useState } from "react";
type AuthUser = {
  name: string;
  email: string;
};

function User() {
  const [user, setUser] = useState<AuthUser>({} as AuthUser);
  const handleLogin = () => {
    setUser({
      name: "Jaydip",
      email: "google@gmail.com",
    });
  };
  // const handleLogout = () => {
  //   setUser(null);
  // };
  return (
    <>
      <div>
        <button onClick={handleLogin}>Login</button>
        {/* <button onClick={handleLogout}>Logout</button> */}
        {/* <h3>User name is {user?.name}</h3> */}
        {/* <h3>User email is {user?.email}</h3> */}
        <h3>User name is {user.name}</h3>
        <h3>User email is {user.email}</h3>
      </div>
    </>
  );
}

export default User;

// const [user, setUser] = useState<AuthUser | null>(null);
//  const handleLogout = () => {
//   setUser(null);
// };
