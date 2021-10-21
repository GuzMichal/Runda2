import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { TextField } from "@material-ui/core";
import axios from "axios";
import Lista from "./Lista";
import Pagination from "./Pagination";

const Background = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #221f1f;
  height: 100%;
  min-height: 90vh;
  align-items: center;
`;

const Search = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 23vh;
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
  const [pokemon, setPokemon] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage] = useState(15);
  const [input, setInput] = useState("");

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

  const filteredPokemons = pokemon.filter((pokemon) => {
    if (input === "") {
      return pokemon;
    } else if (pokemon.name.toLowerCase().includes(input.toLowerCase())) {
      return pokemon.name;
    }
  });

  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  const currentPokemons = filteredPokemons.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  );
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (!pokemon) {
    return (
      <Background>
        <h1>Ładowanie...</h1>
      </Background>
    );
  } else
    return (
      <Background>
        <Search>
          <h2>Wyszukiwarka</h2>
          <TextField
            id="outlined-basic"
            color="primary"
            label="Wpisz nazwę Pokémona"
            variant="outlined"
            onChange={(event) => {
              setInput(event.target.value);
            }}
          />
        </Search>
        <List>
          <Pagination
            pokemonsPerPage={pokemonsPerPage}
            totalPokemons={filteredPokemons.length}
            paginate={paginate}
          />
          <Lista pokemon={currentPokemons} />
          <Pagination
            pokemonsPerPage={pokemonsPerPage}
            totalPokemons={filteredPokemons.length}
            paginate={paginate}
          />
        </List>
      </Background>
    );
}

export default Pokedex;
