import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CharacterCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #f5f5f1;
  box-shadow: 0 0 10px rgba(15, 15, 15, 0.5);
  align-items: center;
  margin: 20px 20px;
  height: 90%;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;

const CharacterName = styled.h3`
  text-transform: capitalize;
  display: flex;
  justify-content: center;
  width: 10vw;
  margin: 5px 0;
  color: black;
`;

const Img = styled.img`
  max-width: 50%;
  max-height: 33vh;
  margin: 10% 10%;
`;

const Stats = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Stat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  width: 50%;
`;

const StatName = styled.p`
  display: flex;
  flex-direction: column;
  color: black;
  font-weight: 600;
`;

function Karta({ name, base_experience, height, weight, abilities, sprites }) {
  return (
    <Link to={`${name}`}>
      <CharacterCard>
        <Img src={sprites.other.dream_world.front_default} alt={name} />
        <CharacterName>{name}</CharacterName>
        <Stats>
          <Stat>
            {height}
            <StatName>Height</StatName>
          </Stat>
          <Stat>
            {base_experience}
            <StatName>Base Experience</StatName>
          </Stat>
          <Stat>
            {weight}
            <StatName>Weight</StatName>
          </Stat>
          <Stat>
            {abilities[0].ability.name}
            <StatName>Ability</StatName>
          </Stat>
        </Stats>
      </CharacterCard>
    </Link>
  );
}

export default Karta;
