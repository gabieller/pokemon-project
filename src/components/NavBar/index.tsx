import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import * as S from "./styles";

//@ts-ignore
import logo from "../../assets/logo.png";

const NavBar = () => {
  const [favoriteId, setFavoriteId] = useState([]);

  useEffect(() => {
    const ids = JSON.parse(localStorage.getItem("favoriteId"));
    setFavoriteId(ids);
  }, []);

  return (
    <S.NavBar>
      <Link to="/" style={{ textDecoration: "none" }}>
        <S.Image data-testid="logo" src={logo} />
      </Link>
      <Link to="/favorites" style={{ textDecoration: "none" }}>
        <span>My favorite pokémons</span>
      </Link>
    </S.NavBar>
  );
};

export default NavBar;
