import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { TextField } from "@material-ui/core";
import axios from "axios";
import Lista from "./Lista";
// import Pagination from "./Pagination";

const Background = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #221f1f;
  height: 100%;
  align-items: center;
`;

const Search = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 30vh;
  background: rgb(245, 245, 241);
  background: linear-gradient(
    0deg,
    rgba(245, 245, 241, 1) 70%,
    rgba(229, 9, 20, 1) 100%
  );
`;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  color: white;
  letter-spacing: 4px;
`;

function Pokedex() {
  const [pokemon, setPokemon] = useState(null);
  // const [offset, setOffset] = useState(0);

  // const prev = () => {
  //   if (offset === 0) {
  //     alert("Jesteś na pierwszej stronie");
  //   } else setOffset(offset - 15);
  // };

  // const next = () => {
  //   if (offset === 150) {
  //     alert("Jesteś na ostatniej stronie");
  //   } else setOffset(offset + 15);
  // };

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=151`)
      .then((res) => {
        return res.data.results;
      })
      .then((results) => {
        return Promise.all(results.map((res) => axios.get(res.url)));
      })
      .then((results) => {
        setPokemon(results.map((res) => res.data));
      });
  }, []);

  if (!pokemon) {
    return <div>Ładowanie...</div>;
  }

  return (
    <Background>
      <Search>
        <h2>Wyszukiwarka</h2>

        <TextField
          id="outlined-basic"
          label="Wpisz nazwę Pokémona"
          variant="outlined"
        />
      </Search>
      <List>
        {/* <Pagination prev={prev} next={next} /> */}
        <Lista pokemon={pokemon} />
      </List>
      {console.log(pokemon)}
    </Background>
  );
}

export default Pokedex;
