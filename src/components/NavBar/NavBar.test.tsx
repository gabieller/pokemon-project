import React from "react";
import { render, screen } from "@testing-library/react";
import NavBar from ".";

describe("renders NavBar    ", () => {
  render(<NavBar  />);
  expect(screen.getByTestId(/logo/i)).toBeInTheDocument();
  //TODO: expect that logo is rendered
});
