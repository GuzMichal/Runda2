import React, { useState, useEffect } from "react";
import styled from "styled-components";
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

function Fav() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage] = useState(15);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/favourites`)
      .then((res) => {
        return res.data;
      })
      .then((results) => {
        setPokemon(results);
      });
  }, []);

  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  const currentPokemons = pokemon.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  );
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (!pokemon) {
    return (
      <Background>
        <h1>BRAK ULUBIONYCH POKEMONÓW :(</h1>
      </Background>
    );
  } else
    return (
      <Background>
        <h1>Ulubione</h1>
        <List>
          <Pagination
            pokemonsPerPage={pokemonsPerPage}
            totalPokemons={pokemon.length}
            paginate={paginate}
          />
          <Lista pokemon={currentPokemons} />
        </List>
      </Background>
    );
}

export default Fav;
