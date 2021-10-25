import React from "react";
import styled from "styled-components";
import axios from "axios";
import { Button } from "@material-ui/core";

const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25vw;
  background-color: #ccd6dd;
  border-radius: 5px;
  height: 90%;
`;

const Img = styled.img`
  max-width: 50%;
  height: 40%;
  margin: 5% 5%;
`;

const CharacterName = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin: 5px 0;
`;

const FighterName = styled.h3`
  text-transform: capitalize;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 5px 5px 5px 64px;
  width: 100%;
`;

const Stats = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 33vh;
`;

const Stat = styled.div`
  display: flex;
  flex-direction: column;
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
    margin-right: 5px;
    text-transform: capitalize;
  }
`;

function FighterContainer({ pokemon, setArenaLength, opacity }) {
  const usunZAreny = () => {
    axios.delete(`http://localhost:3000/arena/${pokemon.id}`, setArenaLength());
  };

  if (!pokemon) {
    return (
      <Background>
        <h3>Dodaj Pokémona do Areny</h3>
      </Background>
    );
  } else
    return (
      <Background>
        <CharacterName>
          <FighterName>{pokemon?.name}</FighterName>
          <SButton
            onClick={usunZAreny}
            variant="contained"
            color="primary"
            size="small"
          >
            Usuń
          </SButton>
        </CharacterName>

        <Img
          src={pokemon?.sprites?.other?.dream_world.front_default}
          alt={pokemon?.name}
          style={opacity}
        />
        <Stats>
          <Stat>
            {pokemon?.height}
            <StatName>Height</StatName>
          </Stat>
          <Stat>
            {pokemon?.base_experience}
            <StatName>Base Experience</StatName>
          </Stat>
          <Stat>
            {pokemon?.weight}
            <StatName>Weight</StatName>
          </Stat>
          <Stat>
            {pokemon?.abilities?.[0].ability.name}
            <StatName>Ability</StatName>
          </Stat>
        </Stats>
      </Background>
    );
}

export default FighterContainer;
