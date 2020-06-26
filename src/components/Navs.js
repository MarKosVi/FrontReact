import React from "react";
import { Container, Nav } from "./styled-components";
import { Link } from "react-router-dom";
import "./App.css";

import logo from "../assets/images/logo.png";
import UserImg from "../assets/images/user.png";

function Navs(){
    return (
      <Nav className="nav p-2 fixed-top nav-primary is-dark is-light-text">
        <Container className="container">
          <Container className="text-large">
          <img src={logo} className="imgSize"  alt="logo" />Covid-19
          <span className="text-white pl-5 ml-md-5 pr-md-2"><Link className="linker" to="/">Home</Link></span>
          <span className="text-white pl-4 pr-2"><Link className="linker" to="/MapContainer">Mapa</Link></span>
          <span className="text-white pl-4 pr-2"><Link className="linker " to="/Dashboard">Dashboard</Link></span>
          </Container>
          <Container className="row justify-content-end use">
            <Container className="navbar-nav m-4">
              <Container className="user-detail-section">
                <span className="pr-4">Olá, user</span>
                <span className="img-container">
                  <img src={UserImg} className="rounded-circle" alt="user" />
                </span>
              </Container>
            </Container>
          </Container>
        </Container>
      </Nav>
    );
}

export default Navs;
