import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { FaRulerVertical, FaWeight } from "react-icons/fa";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { getPokemon } from "../../api";

import * as S from "./styles";
import { Button, Container, IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

interface Pokemon {
  id: string;
  name: string;
  base_experience: string;
  sprites: Object[];
  height: number;
  weight: number;
  types: Array<any>;
  abilities: Array<any>;
  stats: Array<any>;
}

const Details = () => {
  const [pokemonDetails, setPokemonDetails] = useState<Pokemon>();
  const [favorites, setFavorites] = useState([]);
  const dispatch = useDispatch();
  const favoritesStore = useSelector((state) => state.favorites);
  const favorite = false;
  const { id } = useParams();

  useEffect(() => {
    setFavorites(favoritesStore);
  }, []);

  const statsValue = (value) => {
    if (value <= 49) return "#ef476f";

    if (value <= 79) return "#ffd166";

    return "#06d6a0";
  };

  useEffect(() => {
    const fetchPokemon = async () => {
      const data = await getPokemon(`${id}`);

      setPokemonDetails(data);
    };
    fetchPokemon();
  }, [id]);

  // const addFavoritePokemon = (pokemon) => {
  //   dispatch({ type: "ADD_POKEMON", payload: pokemon });
  // };

  // useEffect(() => {
  //   favorites.forEach((el) => {
  //     console.log(el);
  //   });
  // }, [favorites]);

  const transformWeight = (weight: number): number => {
    return weight / 100;
  };
  const transformHeight = (height: number): number => {
    return height / 10;
  };

  return (
    <Container>
      <S.Details>
        <div>
          <S.ImageCard>
            <img src={pokemonDetails?.sprites.front_default} />
          </S.ImageCard>
          {/* <IconButton onClick={addFavoritePokemon(pokemonDetails)}>
            {favorite ? (
              <FavoriteIcon style={{ fill: "#fff" }} />
            ) : (
              <FavoriteBorderIcon style={{ fill: "#fff" }} />
            )}
          </IconButton> */}
        </div>

        <button onClick={addFavoritePokemon(pokemonDetails)}>FAVORITO</button>

        <S.Description>
          <S.Infos>
            <p>{pokemonDetails?.name}</p>

            {pokemonDetails?.types.map(({ type }) => (
              <S.TypeTag>{type.name}</S.TypeTag>
            ))}
          </S.Infos>
          <hr />
          <S.RowGrid>
            <h3>ABILITIES:</h3>

            {pokemonDetails?.abilities.map(({ ability }) => (
              <p>{ability.name}</p>
            ))}
          </S.RowGrid>
          <hr />
          <S.RowGrid>
            <h3>EXPERIENCE:</h3>
            <p>{pokemonDetails?.base_experience}</p>
          </S.RowGrid>
          <hr />
          <S.Stats>
            <h3> BODY STATS:</h3>

            <FaRulerVertical />

            <span>{transformHeight(pokemonDetails?.height)}m</span>
            <FaWeight />
            <span>{transformWeight(pokemonDetails?.weight)} kg</span>
          </S.Stats>
          <hr />

          <h3> POWER STATS:</h3>
          <S.Grid>
            {pokemonDetails?.stats.map(({ stat, base_stat }) => (
              <S.Powers>
                <S.CircleStat bgColor={statsValue(base_stat)}>
                  <span>{base_stat}</span>
                </S.CircleStat>
                <p>{stat.name}</p>
              </S.Powers>
            ))}
          </S.Grid>
        </S.Description>
      </S.Details>
    </Container>
  );
};

export default Details;
