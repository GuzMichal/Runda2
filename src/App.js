import React from "react";
import Nav from "./components/Nav";
import Pokedex from "./components/Pokedex";
import Fav from "./components/Fav";
import Arena from "./components/Arena";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Pokedex} />
        <Route path="/ulubione" component={Fav} />
        <Route path="/arena" component={Arena} />
      </Switch>
    </Router>
  );
}

export default App;
