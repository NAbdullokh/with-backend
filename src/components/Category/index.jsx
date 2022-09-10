import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Container } from "./style";

export const Category = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://coursesnodejs.herokuapp.com/user/category?page=1&limit=5", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => setData(res.data.data));
  }, []);
  console.log(data);
  return (
    <>
      {data.map((value) => {
        console.log(value);
        return (
          <NavLink to={`/home/${value?._id}`}>
            <Container>
              <Container.Title>{value.name}</Container.Title>
              <Container.Img
                src={`https://coursesnodejs.herokuapp.com/${value.imgUrl}`}
                alt="look"
              />
            </Container>
          </NavLink>
        );
      })}
    </>
  );
};
