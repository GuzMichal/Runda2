import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const Background = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #221f1f;
  height: 85vh;
  align-items: center;
`;

const Img = styled.img`
  max-width: 50%;
  max-height: 33vh;
  margin: 10% 10%;
`;

function Details({ match }) {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const loadInfo = async () => {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${match.params.name}`
      );
      setInfo(response.data);
    };
    loadInfo();
  }, []);

  if (!info) {
    return <div>Ładowanie...</div>;
  }
  return (
    <Background>
      <h1>Karta Pokémona</h1>
      <Img src={info.sprites.other.dream_world.front_default} alt={info.name} />
      {console.log(info)}
    </Background>
  );
}

export default Details;
