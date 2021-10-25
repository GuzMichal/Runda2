import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import SportsKabaddiOutlinedIcon from "@mui/icons-material/SportsKabaddiOutlined";
import SportsKabaddiIcon from "@mui/icons-material/SportsKabaddi";

const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #221f1f;
  height: 90vh;
  align-items: center;
`;

const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f5f5f1;
  width: 80vw;
  text-transform: capitalize;
  color: black;
  border-radius: 5px;
`;

const CardBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const PokeName = styled.h2`
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  letter-spacing: 10px;
`;

const Img = styled.img`
  width: 75%;
  max-height: 50vh;
  margin: 1% 0%;
`;

const Stats = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

const StatContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
`;

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 20%;
  text-decoration: none;
`;

const Stat = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  width: 50%;
`;

const StatName = styled.p`
  display: flex;
  flex-direction: column;
  color: black;
  font-weight: 600;
`;

const SButton = styled(Button)`
  && {
    margin: 5px;
    text-transform: capitalize;
    width: 80%;
  }
`;

const SLink = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  margin: 10px;
`;

const SFavoriteBorder = styled(FavoriteBorder)`
  && {
    font-size: 50px;
  }
`;
const SFavorite = styled(Favorite)`
  && {
    font-size: 50px;
    color: #e50914;
  }
`;

const SSportsKabaddiOutlinedIcon = styled(SportsKabaddiOutlinedIcon)`
  && {
    font-size: 50px;
  }
`;

const SSportsKabaddiIcon = styled(SportsKabaddiIcon)`
  && {
    font-size: 50px;
    color: #e50914;
  }
`;

function Details({ match }) {
  const [info, setInfo] = useState([]);
  const [arena, setArena] = useState([]);
  const [isFavourite, setIsFavourite] = useState(false);
  const [isInArena, setIsInArena] = useState(false);

  useEffect(() => {
    const loadInfo = async () => {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${match.params.name}`
      );
      setInfo(response.data);
    };
    loadInfo();
  }, [match.params.name]);

  useEffect(() => {
    axios.get(`http://localhost:3000/favourites`).then((response) => {
      const isPokemonFavourite = response.data
        .map((item) => item.id)
        .includes(info.id);
      setIsFavourite(isPokemonFavourite);
    });
  }, [isFavourite, info.id]);

  const handleAddToFavourites = () => {
    if (isFavourite === false) {
      axios.post("http://localhost:3000/favourites", {
        name: info.name,
        height: info.height,
        weight: info.weight,
        abilities: info.abilities,
        sprites: info.sprites,
        base_experience: info.base_experience,
        id: info.id,
      });
      setIsFavourite(true);
    } else {
      axios.delete(
        `http://localhost:3000/favourites/${info.id}`,
        setIsFavourite(false)
      );
    }
  };

  useEffect(() => {
    axios.get(`http://localhost:3000/arena`).then((response) => {
      setArena(response.data);
      const isPokemonInArena = response.data
        .map((item) => item.id)
        .includes(info.id);
      setIsInArena(isPokemonInArena);
    });
  }, [isInArena, info.id]);

  const handleAddToArena = () => {
    if (arena.length >= 2 && isInArena === true) {
      axios.delete(
        `http://localhost:3000/arena/${info.id}`,
        setIsInArena(false)
      );
    } else if (arena.length >= 2) {
      alert(
        "W Arenie są już dwa Pokemony ! Usuń jednego i spróbuj ponownie :-)"
      );
    } else if (isInArena === false) {
      axios.post("http://localhost:3000/arena", {
        name: info.name,
        height: info.height,
        weight: info.weight,
        abilities: info.abilities,
        sprites: info.sprites,
        base_experience: info.base_experience,
        id: info.id,
      });
      setIsInArena(true);
    } else if (isInArena === true) {
      axios.delete(
        `http://localhost:3000/arena/${info.id}`,
        setIsInArena(false)
      );
    }
  };

  if (!info) {
    return <div>Ładowanie...</div>;
  }

  return (
    <Background>
      <CardDiv>
        <PokeName>{info.name}</PokeName>
        <CardBox>
          <Img
            src={info?.sprites?.other.dream_world.front_default}
            alt={info.name}
          />
          <Stats>
            <StatContainer>
              <Stat>
                <StatName>Height: {info.height}</StatName>
              </Stat>
              <Stat>
                <StatName>Weight: {info.weight}</StatName>
              </Stat>
              <Stat>
                <StatName>Base Experience: {info.base_experience}</StatName>
              </Stat>
              <Stat>
                <StatName>
                  Ability: {info?.abilities?.[0].ability.name}
                </StatName>
              </Stat>
            </StatContainer>
            <Actions>
              <Checkbox
                checked={isFavourite}
                onChange={handleAddToFavourites}
                icon={<SFavoriteBorder />}
                checkedIcon={<SFavorite />}
              />
              <Checkbox
                checked={isInArena}
                onChange={handleAddToArena}
                icon={<SSportsKabaddiOutlinedIcon />}
                checkedIcon={<SSportsKabaddiIcon />}
              />
            </Actions>
          </Stats>
        </CardBox>
        <SLink to={"/"}>
          <SButton variant="contained" color="primary" size="large">
            Powrót do Pokédex
          </SButton>
        </SLink>
      </CardDiv>
    </Background>
  );
}

export default Details;
