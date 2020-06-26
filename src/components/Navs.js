import React from "react";
import { Container, Nav } from "./styled-components";
import { Link } from "react-router-dom";
import "./App.css";

import logo from "../assets/images/logo.png";
import UserImg from "../assets/images/user.png";

function Navs(){
    return (
        <Nav className="navbar fixed-top nav-primary is-dark is-light-text">
          <Container className="text-large"><img src={logo} className="imgSize"  alt="logo" />Covid-19 
          <span className="text-white pl-5 ml-md-5 pr-md-2"><Link to="/">Home</Link></span>
          <span className="text-white pl-4 pr-2"><Link to="/MapContainer">Mapa</Link></span>
          <span className="text-white pl-4 pr-2"><Link to="/Dashboard">Dashboard</Link></span>
          </Container>
          <Container className="navbar-nav">
          <Container className="user-detail-section">
            <span className="pr-4">Olá, user</span>
            <span className="img-container">
              <img src={UserImg} className="rounded-circle" alt="user" />
            </span>
          </Container>
          </Container>
        </Nav>
    );
}

export default Navs;