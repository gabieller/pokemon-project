import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Pokedex from ".";

// jest.mock("../../api", () => ({
//   getPokemons: jest.fn(() =>
//     Promise.resolve({
//       count: 1118,
//       results: [
//         {
//           name: "bulbasaur",
//           url: "https://pokeapi.co/api/v2/pokemon/1/",
//         },
//         {
//           name: "ivysaur",
//           url: "https://pokeapi.co/api/v2/pokemon/2/",
//         },
//       ],
//     })
//   ),
//   getPokemonData: jest.fn(() =>
//     Promise.resolve({
//       id: 1,
//       name: "bulbasaur",
//       types: [{ type: { name: "grass" } }, { type: { name: "poison" } }],
//       stats: [
//         { base_stat: 45, stat: { name: "hp" } },
//         { base_stat: 49, stat: { name: "attack" } },
//         { base_stat: 49, stat: { name: "defense" } },
//         { base_stat: 65, stat: { name: "special-attack" } },
//         { base_stat: 65, stat: { name: "special-defense" } },
//         { base_stat: 45, stat: { name: "speed" } },
//       ],
//       sprites: {
//         front_default:
//           "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
//       },
//     })
//   ),
// }));

describe("Pokedex component", () => {
  test("renders Pokedex without crashing", async () => {
    const { findByTestId } = render(<Pokedex />);
    const pokedexComponent = await findByTestId("pokedex");
    expect(pokedexComponent).toBeInTheDocument();
  });
  

  test("renders Pagination component", () => {
    const { getByTestId } = render(<Pokedex />);
    expect(getByTestId("pagination")).toBeInTheDocument();
  });
});
