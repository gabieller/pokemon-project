import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Details from "./routes/Details";
import "./index.css";
import Pokedex from "./components/Pokedex";
import Favorites from "./routes/Favorites";
import { FavoriteProvider } from "./contexts/favoritesContext";

//creating the routes of the application
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Pokedex />,
      },

      {
        path: "/details/:id",
        element: <Details />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FavoriteProvider
      value={{
        favoritePokemons: favorites,
        updateFavoritePokemons: updateFavoritePokemons,
      }}
    >
      <RouterProvider router={router} />
    </FavoriteProvider>
  </React.StrictMode>
);
