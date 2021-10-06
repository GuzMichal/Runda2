import React from "react";
import styled from "styled-components";

const Background = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #221f1f;
  height: 90vh;
  align-items: center;
`;

function Fav() {
  return (
    <Background>
      <h1>Ulubione</h1>
    </Background>
  );
}

export default Fav;
