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

const SButton = styled(Button)`
  && {
    margin: 1px;
  }
`;

function Pagination({ pokemonsPerPage, totalPokemons, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPokemons / pokemonsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <Buttons>
      {pageNumbers.map((number) => (
        <SButton
          key={number}
          variant="contained"
          color="primary"
          size="large"
          onClick={() => paginate(number)}
        >
          {number}
        </SButton>
      ))}
    </Buttons>
  );
}

export default Pagination;
