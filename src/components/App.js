import React, { Component } from "react";
import { Container, Nav } from "./styled-components";

// fusioncharts
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import Maps from "fusioncharts/fusioncharts.maps";
import USARegion from "fusionmaps/maps/es/fusioncharts.usaregion";
import ReactFC from "react-fusioncharts";
import "./charts-theme";

import config from "./config";
import Dropdown from "react-dropdown";
import formatNum from "./format-number";

import UserImg from "../assets/images/user.png";

ReactFC.fcRoot(FusionCharts, Charts, Maps, USARegion);

const url = `https://sheets.googleapis.com/v4/spreadsheets/${
  config.spreadsheetId
}/values:batchGet?ranges=Sheet1&majorDimension=ROWS&key=${config.apiKey}`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      dropdownOptions : [ ] ,
      selectedValue : null ,
      suspeitos: 1000,
      mortos: 1000,
      recuperados: 1000,
      total: 1000,
      evolucaoCasos: [{
            "label": "Bakersfield Central",
            "value": "8800"
        },
        {
            "label": "Garden Groove harbour",
            "value": "7300"
        },
        {
            "label": "Los Angeles Topanga",
            "value": "5900"
        },
        {
            "label": "Compton-Rancho Dom",
            "value": "5200"
        },
        {
            "label": "Daly City Serramonte",
            "value": "3300"
        }]
    };
  }

  render() {
    return (
      <Container>
        <Nav className="navbar fixed-top nav-primary is-dark is-light-text">
          <Container className="text-medium">DashBoard</Container>
          <Container className="navbar-nav">
          <Container className="user-detail-section">
            <span className="pr-2">Hello, user</span>
            <span className="img-container">
              <img src={UserImg} className="rounded-circle" alt="user" />
            </span>
          </Container>
          </Container>
        </Nav>

        {/* content area start */}
        <Container className="container-fluid pr-2 pl-2 pt-0 pb-2">
        <Container className="row">
          <Container className="col-lg-12 col-sm-12 is-light-text mb-4">
            <Container className="card grid-card is-card-dark">
              <Container className="card-heading">
                <Container className="is-dark-text-light letter-spacing text-small">
                <div class="carousel-inner">
  <div class="carousel-item active">

  </div>
  <div class="carousel-item">

  </div>
  <div class="carousel-item">

  </div>
</div>
<a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="sr-only">Previous</span>
</a>
<a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="sr-only">Next</span>
</a>
                </Container>
              </Container>

              <Container className="card-value pt-1 text-x-large">

              </Container>
            </Container>
          </Container>
        </Container>
          {/* row 1 - revenue */}
          <Container className="row">
            <Container className="col-lg-3 col-sm-6 is-light-text mb-4">
              <Container className="card grid-card is-card-dark">
                <Container className="card-heading">
                  <Container className="is-dark-text-light letter-spacing text-small">
                    Total
                  </Container>
                </Container>

                <Container className="card-value pt-1 text-x-large">
                  <span className="text-large pr-1">%</span>
                  {this.state.total}
                </Container>
              </Container>
            </Container>

            <Container className="col-lg-3 col-sm-6 is-light-text mb-4">
              <Container className="card grid-card is-card-dark">
                <Container className="card-heading">
                  <Container className="is-dark-text-light letter-spacing text-small">
                    Suspeitos
                  </Container>
                  <Container className="card-heading-brand text-x-large">
                  <i class="fa fa-user-md" aria-hidden="true"></i>

                  </Container>
                </Container>

                <Container className="card-value pt-4 text-x-large">
                  <span className="text-large pr-1">%</span>
                  {this.state.suspeitos}
                </Container>
              </Container>
            </Container>

            <Container className="col-lg-3 col-sm-6 is-light-text mb-4">
              <Container className="card grid-card is-card-dark">
                <Container className="card-heading">
                  <Container className="is-dark-text-light letter-spacing text-small">
                    Mortos
                  </Container>
                  <Container className="card-heading-brand text-x-large">
                    <i class="fa fa-plus-square" aria-hidden="true"></i>
                  </Container>
                </Container>

                <Container className="card-value pt-4 text-x-large">
                  <span className="text-large pr-1">%</span>
                  {this.state.mortos}
                </Container>
              </Container>
            </Container>

            <Container className="col-lg-3 col-sm-6 is-light-text mb-4">
              <Container className="card grid-card is-card-dark">
                <Container className="card-heading">
                  <Container className="is-dark-text-light letter-spacing text-small">
                    Recuperados
                  </Container>
                  <Container className="card-heading-brand text-x-large">
                    <i class="fa fa-heartbeat" aria-hidden="true"></i>
                  </Container>
                </Container>

                <Container className="card-value pt-4 text-x-large">
                  <span className="text-large pr-1">%</span>
                  {this.state.recuperados}
                </Container>
              </Container>
            </Container>
          </Container>


          {/* row 3 - orders trend */}
          <Container className="row" style={{ minHeight: "400px" }}>
            <Container className="col-md-12 mb-4">
              <Container className="card is-card-dark chart-card">
                <Container className="chart-container large full-height">
                  <ReactFC
                    {...{
                      type: "bar2d",
                      width: "100%",
                      height: "100%",
                      dataFormat: "json",
                      containerBackgroundOpacity: "0",
                      dataEmptyMessage: "Loading Data...",
                      dataSource: {
                        chart: {
                          theme: "covid",
                          caption: "Evolução dos casos",
                        },
                        data: this.state.evolucaoCasos
                      }
                    }}
                  />
                </Container>
              </Container>
            </Container>
          </Container>
        </Container>
        {/* content area end */}
      </Container>
    );
  }
}

export default App;
