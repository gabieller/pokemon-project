import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import NavBar from ".";

//@ts-ignore
import logo from "../../assets/logo.png";


describe("NavBar component", () => {
  it("should render the logo image", () => {
    render(
      <Router>
        <NavBar />
      </Router>
    );
    const logoImage = screen.getByTestId("logo");
    expect(logoImage).toBeInTheDocument();
  });

  it("should render a link to the home page", () => {
    render(
      <Router>
        <NavBar />
      </Router>
    );
    const homeLink = screen.getByRole("link", { name: /home/i });
    expect(homeLink).toBeInTheDocument();
  });

  it("should render a link to the favorites page", () => {
    render(
      <Router>
        <NavBar />
      </Router>
    );
    const favoritesLink = screen.getByRole("link", {
      name: /my favorite pokémons/i,
    });
    expect(favoritesLink).toBeInTheDocument();
  });
});