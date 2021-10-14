import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Karta from "./Karta";
import FighterContainer from "./FighterContainer";
import { Button } from "@material-ui/core";

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

const Value = styled.div``;

function ArenaBox({ pokemon }) {
  return (
    <ArenaDiv>
      <FighterContainer pokemon={pokemon[0]} />
      <ArenaContainer>
        <h1>Arena</h1>
        {pokemon.map(({ name, base_experience, weight }) => (
          <Value key={name}>
            {name}:{base_experience * weight}
          </Value>
        ))}
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
          WALKA !
        </Button>
      </ArenaContainer>
      <FighterContainer pokemon={pokemon[1]} />
    </ArenaDiv>
  );
}

export default ArenaBox;
