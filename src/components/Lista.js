import React from "react";
import styled from "styled-components";
import Karta from "./Karta";

const Karty = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
`;

const Card = styled.div`
  width: 30vw;
`;

function Lista({ pokemon, addFavouritePokemon }) {
  return (
    <Karty>
      {pokemon.map(
        ({ name, base_experience, height, weight, abilities, sprites }) => (
          <Card key={name}>
            <Karta
              name={name}
              base_experience={base_experience}
              height={height}
              weight={weight}
              abilities={abilities}
              sprites={sprites}
              addFavouritePokemon={addFavouritePokemon}
            />
          </Card>
        )
      )}
      {/* {console.log(pokemon)} */}
    </Karty>
  );
}

export default Lista;
