import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";

const Buttons = styled.div`
  width: 100%;
  margin: 2% 0;
  display: flex;
  justify-content: center;
  color: white;
`;

function Pagination({ pokemonsPerPage, totalPokemons, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPokemons / pokemonsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <Buttons>
      {pageNumbers.map((number) => (
        <Button
          key={number}
          variant="contained"
          color="neutral"
          size="large"
          style={{ position: "initial", margin: 1 }}
          onClick={() => paginate(number)}
        >
          {number}
        </Button>
      ))}
      {/* {console.log(pokemonsPerPage)} */}
    </Buttons>
  );
}

export default Pagination;
