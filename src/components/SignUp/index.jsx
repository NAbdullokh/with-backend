import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Container } from "./style";

export const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const onSubmit = () => {
    fetch("https://coursesnodejs.herokuapp.com/user/sign-up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        fullName: fullName,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data);
        navigate("/login");
      });
  };
  return (
    <Container>
      <input
        onChange={(e) => setFullName(e.target.value)}
        placeholder="Name"
        type="text"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        type="password"
      />
      <button onClick={onSubmit}>Submit</button>
      <NavLink to={"/login"}>Sign In</NavLink>
    </Container>
  );
};
