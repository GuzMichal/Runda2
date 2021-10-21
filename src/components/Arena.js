import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import ArenaBox from "./ArenaBox";

const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #221f1f;
  height: 90vh;
  align-items: center;
`;

function Arena() {
  const [pokemon, setPokemon] = useState([]);
  const [arenaLength, setArenaLength] = useState();
  const [fightButton, setFightButton] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:3000/arena`).then((response) => {
      setPokemon(response.data);
      const arrayLength = response.data.length === 2 ? false : true;
      setFightButton(arrayLength);
      setArenaLength(arrayLength);
    });
  }, [arenaLength]);

  return (
    <Background>
      <ArenaBox
        pokemon={pokemon}
        fightButton={fightButton}
        setArenaLength={setArenaLength}
      />
    </Background>
  );
}

export default Arena;
