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

function Details({ match }) {
  const [info, setInfo] = useState([]);
  const [arena, setArena] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/arena`)
      .then((res) => {
        return res.data;
      })
      .then((results) => {
        setArena(results);
      });
  }, []);

  useEffect(() => {
    const loadInfo = async () => {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${match.params.name}`
      );
      setInfo(response.data);
    };
    loadInfo();
  }, [match.params.name]);

  const dodajDoUlubionych = () => {
    axios.post("http://localhost:3000/favourites", {
      name: info.name,
      height: info.height,
      weight: info.weight,
      abilities: info.abilities,
      sprites: info.sprites,
      base_experience: info.base_experience,
      id: info.id,
    });
  };

  const usunZUlubionych = () => {
    axios.delete(`http://localhost:3000/favourites/${info.id}`);
  };

  const dodajDoAreny = () => {
    if (arena.length >= 2) {
      alert(
        "W Arenie są już dwa Pokemony ! Usuń jednego i spróbuj ponownie :-)"
      );
    } else
      axios.post("http://localhost:3000/arena", {
        name: info.name,
        height: info.height,
        weight: info.weight,
        abilities: info.abilities,
        sprites: info.sprites,
        base_experience: info.base_experience,
        id: info.id,
      });
  };

  const usunZAreny = () => {
    axios.delete(`http://localhost:3000/arena/${info.id}`);
  };

  if (!info) {
    return <div>Ładowanie...</div>;
  }

  return (
    <Background>
      {console.log(arena.length)}
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
                onChange={dodajDoUlubionych}
                icon={<FavoriteBorder style={{ fontSize: 50 }} />}
                checkedIcon={
                  <Favorite style={{ fontSize: 50, color: "#E50914" }} />
                }
              />
              <Checkbox
                onChange={usunZUlubionych}
                icon={<FavoriteBorder style={{ fontSize: 50 }} />}
                checkedIcon={
                  <Favorite style={{ fontSize: 50, color: "#E50914" }} />
                }
              />
              <Checkbox
                onChange={dodajDoAreny}
                icon={<SportsKabaddiOutlinedIcon style={{ fontSize: 50 }} />}
                checkedIcon={
                  <SportsKabaddiIcon
                    style={{ fontSize: 50, color: "#E50914" }}
                  />
                }
              />
              <Checkbox
                onChange={usunZAreny}
                icon={<SportsKabaddiOutlinedIcon style={{ fontSize: 50 }} />}
                checkedIcon={
                  <SportsKabaddiIcon
                    style={{ fontSize: 50, color: "#E50914" }}
                  />
                }
              />
            </Actions>
          </Stats>
        </CardBox>
        <Link
          to={"/"}
          style={{
            textDecoration: "none",
            display: "flex",
            justifyContent: "center",
            margin: 10,
          }}
        >
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{
              position: "initial",
              margin: 5,
              textTransform: "capitalize",
              width: "80%",
            }}
          >
            Powrót do Pokédex
          </Button>
        </Link>
      </CardDiv>
    </Background>
  );
}

export default Details;
