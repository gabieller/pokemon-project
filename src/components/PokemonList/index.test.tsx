import React from "react";
import { render } from "@testing-library/react";
import PokemonList from ".";

describe("PokemonList", () => {
  const mockPokemons = [
    { id: 1, name: "Bulbasaur" },
    { id: 2, name: "Charmander" },
    { id: 3, name: "Squirtle" },
  ];

  test("renders PokemonList without crashing", () => {
    render(<PokemonList pokemons={[]} />);
  });
});
