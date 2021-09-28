import React from "react";
import styled from "styled-components";
// import { TextField } from "@material-ui/core";

const Background = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #221f1f;
  height: 85vh;
  align-items: center;
`;

const Search = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 30vh;
  background: #f5f5f1;
`;

function Pokedex() {
  return (
    <Background>
      <Search>
        <h2>Wyszukiwarka</h2>
      </Search>
      <h1>Lista Pokémonów</h1>
    </Background>
  );
}

export default Pokedex;
