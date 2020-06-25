import React, { Component } from "react";
import { Container } from "./styled-components";
import "./Home.css";

import img1 from "../assets/images/tela1img.png";
import img2 from "../assets/images/tela2img.png";
import img3 from "../assets/images/tela3img.png";

class Home extends Component {

  
    render() {
      return (
    <Container className="container pt-0 pb-2">
    <Container className="row">
        <Container className="col-md-12 mb-4">
        <Container className="card is-card-dark chart-card">
            <Container className="chart-container large full-height">
            <span className=" imageHome">
              <img src={img1} className="mx-auto" alt="user" />
            </span>
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


