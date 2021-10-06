import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navi = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  width: 100%;
  height: 10vh;
  background: #e50914;
`;

const Pokedex = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  cursor: pointer;
  color: black;
`;

const Img = styled.img`
  height: 150%;
  align-items: flex-start;
`;

const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  height: 100%;
  width: 30%;
  padding-inline-start: unset;
  margin-block-start: unset;
  margin-block-end: unset;
`;

const Items = styled.li`
  position: relative;
  margin: 0 10px;
  font-size: 20px;
  font-weight: 900;
  cursor: pointer;
  letter-spacing: 4px;
  color: black;
`;

function Nav() {
  return (
    <Navi>
      <Pokedex>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          Pokédex
        </Link>
      </Pokedex>
      <Img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Pok%C3%A9ball.png" />
      <List>
        <Link to="/ulubione" style={{ textDecoration: "none" }}>
          <Items>ULUBIONE</Items>
        </Link>
        <Link to="/arena" style={{ textDecoration: "none" }}>
          <Items>ARENA</Items>
        </Link>
      </List>
    </Navi>
  );
}

export default Nav;
