import React from "react";

import * as S from "./styles";
import { Link } from "react-router-dom";
import PokemonCard from "../PokemonCard";

const PokemonList = ({ pokemons }) => {
  return (
    <S.Grid>
      {pokemons.map((pokemon, i) => (
        <Link to={`/details/${pokemon.id}`} style={{ textDecoration: "none" }}  key={i}>
          <PokemonCard pokemon={pokemon} data-testid="pokemon-card" />
        </Link>
      ))}
    </S.Grid>
  );
};

export default PokemonList;
