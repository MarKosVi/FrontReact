import React, { Component } from "react";
import { Container } from "./styled-components";
import ControlledCarousel from './ControlledCarousel.js';
import { Link } from "react-router-dom";
import "./Home.css";
import Navs from "./Navs.js";

import oque from "../assets/images/oqueé.png";
import sintomas from "../assets/images/sintomas.png";
import proteger from "../assets/images/Comoproteger.png";
import transm from "../assets/images/Comotransmitido - Diagnóstico.png";

class Home extends Component {

    render() {
      return (
    <Container className="container-fluid pt-0 pb-0">
      <Navs />
    <Container className="row">
        <Container className="col-md-12 mb-4">
        <Container className="card is-card-dark">
            <Container className="chart-container large full-height">
              <ControlledCarousel />
            </Container>
        </Container>
        <Container className="row p-4">
        <Container style={{ minHeight: "380px" }} className="card col-md-3 col-sm-6 is-card-dark chart-card">
            <Container className="chart-container large full-height">
              <img src={oque} className="d-block w-100"/>
              <h2 className=" p-4 text-white">O que é Covid-19</h2>
              <p className="text-white text-large">Covid-19 é uma doença causada
              pelo coronavírus SARS-CoV-2, que apresenta um quadro ...</p>
                <Link  to="/oqueecovid"> <button className="btn btn-primary">Saiba mais</button></Link>
            </Container>
        </Container>
        
        <Container style={{ minHeight: "380px" }} className="card col-md-3 col-sm-6 is-card-dark chart-card">
            <Container className="chart-container large full-height">
              <img src={sintomas} className="d-block w-100"/>
              <h2 className=" p-4 text-white">Quais são os sintomas</h2>
              <p className="text-white text-large">Os sintomas da COVID-19
               podem variar de um simples resfriado até uma pneumonia severa...
              </p>
              <Link  to="/sintomas"> <button className="btn btn-primary">Saiba mais</button></Link>
            </Container>

        </Container>
        <Container style={{ minHeight: "380px" }} className="card col-md-3 col-sm-6 is-card-dark chart-card">
            <Container className="chart-container large full-height">
              <img src={proteger} className="d-block w-100"/>
              <h2 className=" p-4 text-white">Como se proteger</h2>
              <p className="text-white text-large">As recomendações de prevenção
               à COVID-19 são as seguintes: Lave com frequência as mãos até
               a altura dos punhos, com água e sabão, evite tocar com as mãos áreas dos olhos...</p>
               <Link  to="/comoseproteger"> <button className="btn btn-primary">Saiba mais</button></Link>
            </Container>
        </Container>
        <Container style={{ minHeight: "380px" }} className="card col-md-3 col-sm-6 is-card-dark chart-card">
            <Container className="chart-container large full-height">
              <img src={transm} className="d-block w-100"/>
              <h2 className=" p-4 text-white">Como é transmitido - Diagnóstico</h2>
              <p className="text-white text-large">A transmissão acontece de
               uma pessoa doente para outra ou por contato próximo.</p>
               <Link  to="/trasmicao"> <button className="btn btn-primary">Saiba mais</button></Link>
            </Container>
        </Container>
        </Container>
        </Container>
    </Container>
    </Container>
      );
    }
  }

  export default Home;
