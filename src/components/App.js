import React from "react";
import { Container, Nav } from "./styled-components";
import { Link } from "react-router-dom";
import Routes from "../Routes";

import UserImg from "../assets/images/user.png";

function App(){
    return (
      <Container className="App container">
        <Nav className="navbar fixed-top nav-primary is-dark is-light-text">
          <Container className="text-medium">Covid-19 
          <span className=" pl-5 ml-5 pr-2"><Link to="/">Home</Link></span>
          <span className=" pl-4 pr-2"><Link to="/Dashboard">Mapa</Link></span>
          <span className=" pl-4 pr-2"><Link to="/Dashboard">Dashboard</Link></span>
          </Container>
          <Container className="navbar-nav">
          <Container className="user-detail-section pr-4">
            <span className="pr-4">Olá, user</span>
            <span className="img-container">
              <img src={UserImg} className="rounded-circle" alt="user" />
            </span>
          </Container>
          </Container>
        </Nav>
        <Routes />
      </Container>
    );
}

export default App;