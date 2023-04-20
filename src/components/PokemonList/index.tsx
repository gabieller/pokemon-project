import React from "react";

import * as S from "./styles";
import { Link } from "react-router-dom";
import PokemonCard from "../PokemonCard/PokemonCard";

const PokemonList = ({ pokemons }) => {
  return (
    <S.Grid>
      {pokemons.map((pokemon, i) => (
        <Link to={`/details/${pokemon.id}`} style={{ textDecoration: "none" }}>
          <PokemonCard key={i} pokemon={pokemon} />
        </Link>
      ))}
    </S.Grid>
  );
};

export default PokemonList;
