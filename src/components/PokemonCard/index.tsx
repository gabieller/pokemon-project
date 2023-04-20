import React from "react";

import * as S from "./styles";

const PokemonCard = ({ pokemon }) => {
  return (
    <S.PokeCard>
      <img src={pokemon.sprites.front_default} />
      <S.Info>
        <p>{pokemon.name}</p>
      </S.Info>
    </S.PokeCard>
  );
};

export default PokemonCard;
