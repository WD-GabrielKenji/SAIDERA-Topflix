import React from "react";
import { Route, Switch } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import Brasil from "./pages/Brasil/Brasil";
import Canada from "./pages/Canada/Canada";
import Coreia from "./pages/Coreia/Coreia";
import Eua from "./pages/Eua/Eua";
import Japao from "./pages/Japao/Japao";
import ReinoUnido from "./pages/ReinoUnido/ReinoUnido";
import Mundo from "./pages/Mundo/Mundo";

export function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage/>
      </Route>
      <Route exact path="/mundi">
        <Mundo/>
      </Route>
      <Route exact path="/eua">
        <Eua/>
      </Route>
      <Route exact path="/br">
        <Brasil/>
      </Route>
      <Route exact path="/uk">
        <ReinoUnido/>
      </Route>
      <Route exact path="/kor">
        <Coreia/>
      </Route>
      <Route exact path="/can">
        <Canada/>
      </Route>
      <Route exact path="/jp">
        <Japao/>
      </Route>
      <Route exact path="/guia">
        <h1>*ADICIONAR*</h1>
      </Route>
    </Switch>
  );
}
