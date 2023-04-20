import React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react";
import Pokedex from ".";

describe("Pokedex component", () => {
  // test("renders Pokedex without crashing", () => {
  //   render(<Pokedex />);
  // });

  // test("fetches data and renders PokemonList", async () => {
  //   const { getByTestId } = render(<Pokedex />);
  //   await waitFor(() => getByTestId("pokemon-list"));
  //   expect(getByTestId("pokemon-list")).toBeInTheDocument();
  // });

  test("renders Pagination component", () => {
    const { getByTestId } = render(<Pokedex />);
    expect(getByTestId("pagination")).toBeInTheDocument();
  });
});
