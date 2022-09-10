import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export const SignIn = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const onClick = () => {
    fetch("https://coursesnodejs.herokuapp.com/user/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        password: password,
      }),
    }).then((res) => res.json().then((res) => navigate("/home")));
  };
  return (
    <div>
      <input
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
        type="password"
      />
      <button onClick={onClick}>Login</button>
      <NavLink to={"/"}>Sign Up</NavLink>
    </div>
  );
};
