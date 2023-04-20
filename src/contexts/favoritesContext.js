import { createContext } from "react";

const FavoriteContext = createContext({
  favoritePokemons: [],
});

export const FavoriteProvider = FavoriteContext.Provider;

export default FavoriteContext;
