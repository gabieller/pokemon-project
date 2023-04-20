import React from "react";
import { render } from "@testing-library/react";
import PokemonCard from "./";

describe("PokemonCard component", () => {
  const pokemon = {
    name: "Bulbasaur",
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    },
  };

  test("renders PokemonCard without crashing", () => {
    render(<PokemonCard pokemon={pokemon} />);
  });

  test("displays the correct image", () => {
    const { getByRole } = render(<PokemonCard pokemon={pokemon} />);
    const image = getByRole("img");
    expect(image).toHaveAttribute("src", pokemon.sprites.front_default);
  });

  test("displays the correct name", () => {
    const { getByText } = render(<PokemonCard pokemon={pokemon} />);
    expect(getByText(pokemon.name)).toBeInTheDocument();
  });
});
