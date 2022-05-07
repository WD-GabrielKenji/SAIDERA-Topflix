import React from "react";
import { Route, Switch } from "react-router-dom";

import { HomePage } from "./pages/HomePage/HomePage";
import Brasil from "./pages/Paises/Brasil/Brasil";
import Coreia from "./pages/Paises/CoreiaDoSul/Coreia";
import Eua from "./pages/Paises/EUA/Eua";
import Japao from "./pages/Paises/Japao/Japao";
import UK from "./pages/Paises/ReinoUnido/ReinoUnido";
import Canada from "./pages/Paises/Canada/Canada";

export function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/eua">
        <Eua/>
      </Route>
      <Route exact path="/br">
        <Brasil/>
      </Route>
      <Route exact path="/uk">
        <UK/>
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
