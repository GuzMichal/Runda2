import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";

const Buttons = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

function Pagination({ prev, next }) {
  return (
    <Buttons>
      <Button
        variant="contained"
        color="primary"
        size="large"
        style={{ position: "initial", margin: 5 }}
        onClick={prev}
      >
        Poprzednia
      </Button>

      <Button
        variant="contained"
        color="primary"
        size="large"
        style={{ position: "initial", margin: 5 }}
        onClick={next}
      >
        Następna
      </Button>
    </Buttons>
  );
}

export default Pagination;
