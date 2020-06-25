import React, { Component } from "react";
import { Container } from "./styled-components";
import ControlledCarousel from './ControlledCarousel.js';
import "./Home.css";


class Home extends Component {


    render() {
      return (
    <Container className="container pt-0 pb-2">
    <Container className="row">
        <Container className="col-md-12 mb-4">
        <Container className="card is-card-dark chart-card">
            <Container className="chart-container large full-height">
            <ControlledCarousel />
            </Container>
        </Container>
        <Container className="card is-card-dark mt-2 chart-card">
            <Container className="chart-container large full-height">

            </Container>
        </Container>
        </Container>
    </Container>
    </Container>
      );
    }
  }

  export default Home;
