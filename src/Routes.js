import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";

export default function Routes() {
    return (
      <Switch>
        <Route exact path="/Dashboard">
            <Dashboard />
        </Route>
        <Route exact path="/login">
            <Login />
        </Route>
      </Switch>
    );
  }
