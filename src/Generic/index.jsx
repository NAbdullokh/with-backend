import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container } from "./styles";

export const Generic = () => {
  const [url, setUrl] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://coursesnodejs.herokuapp.com/user/category/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setUrl(res?.data?.books);
        console.log(res, "kk");
      });
  }, []);
  return (
    <Container>
      {url.map((item) => {
        return (
          <>
            <Container.Img
              src={`https://coursesnodejs.herokuapp.com/${item?.imgUrl}`}
              alt="logo"
            />
            <p>{item.name}</p>
          </>
        );
      })}
    </Container>
  );
};

export default Generic;
