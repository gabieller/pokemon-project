import React from "react";
import { Link } from "react-router-dom";

import * as S from "./styles";

//@ts-ignore
import logo from "../../assets/logo.png";
import { AppBar } from "@mui/material";

const NavBar = () => {
  return (
    // <AppBar position="static">

    <S.NavBar>
      <Link to="/" style={{ textDecoration: "none" }}>
        <S.Image data-testid="logo" src={logo} />
      </Link>
      <Link to="/favorites" style={{ textDecoration: "none" }}>
        <span>My favorite pokémons</span>
      </Link>
    </S.NavBar>
    // </AppBar>
  );
};

export default NavBar;
