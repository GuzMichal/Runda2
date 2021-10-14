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

  useEffect(() => {
    axios
      .get(`http://localhost:3000/arena`)
      .then((res) => {
        return res.data;
      })
      .then((results) => {
        setPokemon(results);
      });
  }, [pokemon]);

  return (
    <Background>
      <ArenaBox pokemon={pokemon} />
    </Background>
  );
}

export default Arena;
