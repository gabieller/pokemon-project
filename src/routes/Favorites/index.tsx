import React, { useEffect, useState } from "react";
import { getPokemon } from "../../api";

import PokemonList from "../../components/PokemonList";

import * as S from "./styles";

const Favorites = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const ids = JSON.parse(localStorage.getItem("favoriteId")) || [];

    const fetchPokemons = async () => {
      try {
        const promises = ids.map((id) => getPokemon(id));

        const results = await Promise.all(promises);

        setPokemons(results);
      } catch (error) {
        console.log(error);
        throw error;
      }
    };

    fetchPokemons();
  }, []);

  return (
    <S.Container>
      <h3>My favorite pokémons</h3>

      <PokemonList pokemons={pokemons || []} />
    </S.Container>
  );
};

export default Favorites;
