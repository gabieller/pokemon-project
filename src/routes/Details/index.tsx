import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemon } from "../../api";
import { divideValue } from "../../utils/divideValue";

import { FaRulerVertical, FaWeight } from "react-icons/fa";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { Container, IconButton } from "@mui/material";

import * as S from "./styles";

interface Pokemon {
  id: string;
  name: string;
  base_experience: string;
  sprites: Array<any>;
  height: number;
  weight: number;
  types: Array<any>;
  abilities: Array<any>;
  stats: Array<any>;
}

const Details = () => {
  const [pokemonDetails, setPokemonDetails] = useState<Pokemon>();
  const [favorite, setFavorite] = useState([]);

  const { id } = useParams();

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

  const loadFavoritePokemons = () => {
    const ids = JSON.parse(localStorage.getItem("favoriteId")) || [];
    setFavorite(ids);
  };

  useEffect(() => {
    loadFavoritePokemons();
  }, []);

  const updateFavoritePokemons = (id) => {
    const updatedFavorite = [...favorite];
    const favoriteIndex = favorite.indexOf(id);
    if (favoriteIndex >= 0) {
      updatedFavorite.splice(favoriteIndex, 1);
    } else {
      updatedFavorite.push(id);
    }
    localStorage.setItem("favoriteId", JSON.stringify(updatedFavorite));
    setFavorite(updatedFavorite);
  };

  const onHeartClick = () => {
    updateFavoritePokemons(pokemonDetails?.id);
  };

  return (
    <Container maxWidth="xl">
      <S.Details>
        <div>
          <S.ImageCard>
            <img src={pokemonDetails?.sprites.front_default} />
          </S.ImageCard>
          <IconButton onClick={onHeartClick}>
            {favorite.includes(pokemonDetails?.id) ? (
              <FavoriteIcon style={{ fill: "#fff" }} />
            ) : (
              <FavoriteBorderIcon style={{ fill: "#fff" }} />
            )}
          </IconButton>
        </div>

        <S.Description>
          <S.Infos>
            <p>{pokemonDetails?.name}</p>

            {pokemonDetails?.types.map(({ type, i }) => (
              <S.TypeTag key={i}>{type.name}</S.TypeTag>
            ))}
          </S.Infos>
          <hr />
          <S.RowGrid>
            <h3>ABILITIES:</h3>

            {pokemonDetails?.abilities.map(({ ability, i }) => (
              <p key={i}>{ability.name}</p>
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
            <span>{divideValue(pokemonDetails?.height, 10)}m</span>
            <FaWeight />
            <span>{divideValue(pokemonDetails?.weight, 100)} kg</span>
          </S.Stats>
          <hr />

          <h3> POWER STATS:</h3>
          <S.Grid>
            {pokemonDetails?.stats.map(({ stat, base_stat, i }) => (
              <S.Powers key={i}>
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
