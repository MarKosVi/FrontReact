import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Login from "./components/Login";
import MapContainer from "./components/MapContainer";

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
      </Switch>
    );
  }
