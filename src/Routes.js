import React from "react";
import { Route, Switch } from "react-router-dom";

import { HomePage } from "./pages/HomePage";

export function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/eua">
        <h1>EUA Page</h1>
      </Route>
      <Route exact path="/br">
        <h1>BR Page</h1>
      </Route>
      <Route exact path="/uk">
        <h1>UK Page</h1>
      </Route>
      <Route exact path="/kor">
        <h1>KOR Page</h1>
      </Route>
      <Route exact path="/uk">
        <h1>CAN Page</h1>
      </Route>
      <Route exact path="/jp">
        <h1>JP Page</h1>
      </Route>
      <Route exact path="/MUDAR">
        <h1>*ADICIONAL*</h1>
      </Route>
    </Switch>
  );
}
