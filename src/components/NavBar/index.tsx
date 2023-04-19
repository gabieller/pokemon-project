import React from "react";
import { Link } from "react-router-dom";

import * as S from "./styles";

//@ts-ignore
import logo from "../../assets/logo.png";

const NavBar = () => {
  return (
    <S.NavBar>
      <Link to="/" style={{ textDecoration: "none" }}>
        <S.Image src={logo} />
      </Link>
      <Link to="/favorites" style={{ textDecoration: "none" }}>
        <span>Favorites Pokémons</span>
      </Link>
    </S.NavBar>
  );
};

export default NavBar;
