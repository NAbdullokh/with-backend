import React from "react";
import { Container } from "./style";
import { Outlet, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <Container>
        <NavLink to={"/home"}>Home</NavLink>
        <NavLink to={"/"}>Sign Up</NavLink>
        <NavLink to={"/login"}>Login</NavLink>
      </Container>
      <Outlet />
    </>
  );
};

export default Navbar;
