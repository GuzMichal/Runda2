import React from "react";
import Nav from "./components/Nav";
import Pokedex from "./components/Pokedex";
import Fav from "./components/Fav";
import Arena from "./components/Arena";
import Details from "./components/Details";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Pokedex} />
        <Route path="/ulubione" component={Fav} />
        <Route path="/arena" component={Arena} />
        <Route path="/:name" component={Details} />
      </Switch>
    </Router>
  );
}

export default App;
