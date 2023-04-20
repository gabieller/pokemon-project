import React, { useContext, useEffect, useState } from "react";

import * as S from "./styles";
import { Container } from "@mui/material";
// import FavoriteContext, { FavoriteProvider } from "../../contexts/favoritesContext";
import { getPokemon, getPokemonData } from "../../api";
import { Link } from "react-router-dom";
import PokemonCard from "../../components/PokemonCard/PokemonCard";

const Favorites = () => {
  const [pokemons, setPokemons] = useState([]);
  
  useEffect(() => {
    // const ids = JSON.parse(localStorage.getItem("favoritesId")) || [];
    setPokemons(ids);
  }, [pokemons]);

  const fetchPokemons = async () => {
    try {
      const data = await getPokemon(1);

      //TODO: explain code
      const promises = data.results.map(async ({ url }) => {
        return await getPokemonData(url);
      });

      const results = await Promise.all(promises);

      setPokemons(results);

    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);


  return (
    <Container>
      lista de pokemons favoritos
      {/* <S.Grid> */}
      {/* {pokemons &&
        pokemons.map((pokemon, i) => (
          <Link
            to={`/details/${pokemon.id}`}
            style={{ textDecoration: "none" }}
          >
            <PokemonCard key={i} pokemon={pokemon} />
          </Link>
        ))} */}
      {/* </S.Grid> */}
    </Container>
  );
};

export default Favorites;
