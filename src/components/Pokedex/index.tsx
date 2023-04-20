import React, { useEffect, useState } from "react";
import { getPokemonData, getPokemons } from "../../api";

import PokemonList from "../PokemonList";
import Pagination from "../Pagination";

import { Container } from "@mui/material";
import { Pokemon } from "../../types/Pokemon";
import { PokeAPIResponse } from "../../types/PokeAPIResponse";
import { PokemonListItem } from "../../types/PokemonListItem";

const Pokedex = () => {
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [pokemons, setPokemons] = useState([]);

  //Setting the total cads per page
  const itemsPerPage = 18;

  const fetchPokemons = async (): Promise<void> => {
    try {
      const data: PokeAPIResponse<PokemonListItem> = await getPokemons(
        itemsPerPage,
        itemsPerPage * page
      );

      const promises: Promise<Pokemon>[] = data.results.map(async ({ url }) => {
        return await getPokemonData(url);
      });

      const results: Pokemon[] = await Promise.all(promises);

      //@ts-ignore
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
    <Container data-testid="pokedex">
      <PokemonList pokemons={pokemons || []} />
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
