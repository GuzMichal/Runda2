import React from "react";
import styled from "styled-components";

const Background = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #221f1f;
  height: 85vh;
  align-items: center;
`;

function Arena() {
  return (
    <Background>
      <h1>Arena</h1>
    </Background>
  );
}

export default Arena;
