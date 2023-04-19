import React from "react";

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import * as S from "./styles";

interface Pokemon {
  name: string;
}

const PokemonCard = ({ pokemon }) => {
  const favorite = true;
  return (
    <S.PokeCard>
      <img src={pokemon.sprites.front_default} />
      <S.Info>
        <p>{pokemon.name}</p>
        {favorite ? (
          <FavoriteIcon style={{ fill: "#fff", height: "12" }} />
        ) : (
          <FavoriteBorderIcon style={{ fill: "#fff", height: "12" }} />
        )}
      </S.Info>
    </S.PokeCard>
  );
};

export default PokemonCard;
