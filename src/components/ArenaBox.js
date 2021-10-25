import React, { useState } from "react";
import styled from "styled-components";
import FighterContainer from "./FighterContainer";
import { Button } from "@material-ui/core";
import axios from "axios";

const ArenaDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #f5f5f1;
  width: 90vw;
  height: 80vh;
  text-transform: capitalize;
  color: black;
  border-radius: 5px;
`;

const ArenaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30vw;
  height: 90%;
  border-radius: 5px;
  border: 3px solid #221f1f;
`;

const Title = styled.h1`
  margin: 10px 0;
`;

const ScoreContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin: 30px 0;
`;

const Value = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Name = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 600;
`;

const WinnerBox = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 600;
  font-size: 150%;
  margin: 30px 0;
`;

const ActionButtons = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const SButton = styled(Button)`
  && {
    margin: 15px;
    text-transform: capitalize;
    width: 80%;
    height: 10vh;
  }
`;

function ArenaBox({ pokemon, fightButton, setArenaLength }) {
  const result = "-- WYNIK POJEDYNKU--";
  const [winner, setWinner] = useState(result);
  const [showClearArena, setShowClearArena] = useState(false);
  const [firstFighterOpacity, setFirstFighterOpacity] = useState({
    opacity: 1,
  });
  const [secondFighterOpacity, setSecondFighterOpacity] = useState({
    opacity: 1,
  });

  const firstFighterScore =
    pokemon?.[0]?.base_experience * pokemon?.[0]?.weight;
  const secondFighterScore =
    pokemon?.[1]?.base_experience * pokemon?.[1]?.weight;

  const handleFight = () => {
    if (firstFighterScore > secondFighterScore)
      return (
        setWinner(`Zwycięzca: ${pokemon?.[0]?.name}`),
        setShowClearArena(true),
        setSecondFighterOpacity({
          opacity: 0.3,
        })
      );
    else if (firstFighterScore < secondFighterScore)
      return (
        setWinner(`Zwycięzca: ${pokemon?.[1]?.name}`),
        setShowClearArena(true),
        setFirstFighterOpacity({
          opacity: 0.3,
        })
      );
  };

  const handleClearArena = () => {
    axios.delete(
      `http://localhost:3000/arena/${pokemon?.[0].id}`,
      setArenaLength()
    );
    axios.delete(
      `http://localhost:3000/arena/${pokemon?.[1].id}`,
      setArenaLength()
    );
    setWinner(result);
    setShowClearArena(false);
  };

  return (
    <ArenaDiv>
      <FighterContainer
        pokemon={pokemon[0]}
        setArenaLength={setArenaLength}
        opacity={firstFighterOpacity}
      />
      <ArenaContainer>
        <Title>Arena</Title>
        <h4>Score = Base Experience * Weight</h4>
        <ScoreContainer>
          {pokemon.map(({ name, base_experience, weight }) => (
            <Value key={name}>
              <Name>{name}</Name>SCORE: {base_experience * weight}
            </Value>
          ))}
        </ScoreContainer>
        <WinnerBox>{winner}</WinnerBox>
        <ActionButtons>
          {showClearArena === false && (
            <SButton
              onClick={handleFight}
              disabled={fightButton}
              variant="contained"
              color="primary"
              size="large"
            >
              WALKA !
            </SButton>
          )}
          {showClearArena === true && (
            <SButton
              onClick={handleClearArena}
              variant="contained"
              color="primary"
              size="large"
            >
              WYCZYŚĆ ARENĘ
            </SButton>
          )}
        </ActionButtons>
      </ArenaContainer>
      <FighterContainer
        pokemon={pokemon[1]}
        setArenaLength={setArenaLength}
        opacity={secondFighterOpacity}
      />
    </ArenaDiv>
  );
}

export default ArenaBox;
