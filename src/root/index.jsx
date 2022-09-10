import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../components/Home";
import { SignUp } from "../components/SignUp";
import Navbar from "../components/Navbar";
import { Container } from "./style";
import { SignIn } from "../components/SignIn";
import Generic from "../Generic";

export const Root = () => {
  return (
    <Container>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/home/:id" element={<Generic />} />
        </Route>
      </Routes>
    </Container>
  );
};
