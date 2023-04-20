import axios, { AxiosResponse } from "axios";

export const getPokemons = async (limit=20, offset=0): Promise<any> => {
  try {
    const response: AxiosResponse = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    );
    return response?.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export const getPokemonData = async (url): Promise<any> => {
  try {
    const response: AxiosResponse = await axios.get(url);
    return response?.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getPokemon = async (id: string): Promise<any> => {
  try {
    const response: AxiosResponse<any> = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${id}`
    );
    return response?.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
