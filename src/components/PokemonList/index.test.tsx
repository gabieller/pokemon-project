import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
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

  test("renders correct number of PokemonCards", () => {
    const { getAllByTestId } = render(<PokemonList pokemons={mockPokemons} />);
    const pokemonCards = getAllByTestId("pokemon-card");
    expect(pokemonCards.length).toBe(mockPokemons.length);
  });


  test("clicking on a PokemonCard navigates to the correct details page", () => {
    const { getByText } = render(
      <MemoryRouter>
        <PokemonList pokemons={mockPokemons} />
      </MemoryRouter>
    );
    fireEvent.click(getByText("Bulbasaur"));
    expect(window.location.pathname).toBe("/details/1");
  });
});
