import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import FavoriteContext from "../../contexts/favoritesContext";



import * as S from "./styles";

//@ts-ignore
import logo from "../../assets/logo.png";

const NavBar = () => {
  const [favoritesId, setFavoritesId] = useState([]);
  const { favoritePokemons } = useContext(FavoriteContext);
  
  // useEffect(() => {
  //   const ids = JSON.parse(localStorage.getItem("favoritesId")) || [];
  //   setFavoritesId(ids);
  // }, []);

  return (
    <S.NavBar>
      <Link to="/" style={{ textDecoration: "none" }}>
        <S.Image src={logo} />
      </Link>
      <Link to="/favorites" style={{ textDecoration: "none" }}>
        <span>My favorites pokémons ({favoritePokemons.length})</span>
      </Link>
    </S.NavBar>
  );
};

export default NavBar;
