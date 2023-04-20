import React, { useEffect, useState } from "react";
import { getPokemonData, getPokemons } from "../../api";
import { Link } from "react-router-dom";


import Pagination from "../Pagination";
import PokemonCard from "../PokemonCard/PokemonCard";

import { Container } from "@mui/material";

import * as S from "./styles";

const Pokedex = () => {
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [pokemons, setPokemons] = useState([]);

  //Setting the total cads per page
  const itemsPerPage = 18;

  const fetchPokemons = async () => {
    try {
      const data = await getPokemons(itemsPerPage, itemsPerPage * page);

      //TODO: explain code
      const promises = data.results.map(async ({ url }) => {
        return await getPokemonData(url);
      });

      const results = await Promise.all(promises);

      setPokemons(results);
      setTotalPages(Math.ceil(data.count / itemsPerPage));
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  //handle with the pages
  const handlePreviousPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };
  const handleNextPage = () => {
    if (page + 1 !== totalPages) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, [page]);


  return (

      <Container>
        <S.Grid>
          {pokemons &&
            pokemons.map((pokemon, i) => (
              <Link
                to={`/details/${pokemon.id}`}
                style={{ textDecoration: "none" }}
              >
                <PokemonCard key={i} pokemon={pokemon} />
              </Link>
            ))}
        </S.Grid>
        <Pagination
          page={page + 1}
          totalPages={totalPages}
          handlePreviousPage={handlePreviousPage}
          handleNextPage={handleNextPage}
        />
      </Container>
  );
};

export default Pokedex;
