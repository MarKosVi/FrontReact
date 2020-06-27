import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Login from "./components/Login";
import MapContainer from "./components/MapContainer";
import Oque from "./components/infoPage/Oque";
import Sintomas from "./components/infoPage/Sintomas";
import Proteger from "./components/infoPage/Proteger";
import Trasmicao from "./components/infoPage/Trasmicao";
import Cadastrar from "./components/Cadastrar";

export default function Routes() {
    return (
      <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route exact path="/MapContainer">
            <MapContainer />
        </Route>
        <Route exact path="/Dashboard">
            <Dashboard />
        </Route>
        <Route exact path="/login">
            <Login />
        </Route>
        <Route exact path="/oqueecovid">
            <Oque />
        </Route>
        <Route exact path="/sintomas">
            <Sintomas />
        </Route>
        <Route exact path="/comoseproteger">
            <Proteger />
        </Route>
        <Route exact path="/trasmicao">
            <Trasmicao />
        </Route>
        <Route exact path="/cadastrar">
            <Cadastrar />
        </Route>
      </Switch>
    );
  }
