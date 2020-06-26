import React, { Component } from "react";
import { Container } from "./styled-components";
import "./Dashboard.css";
// fusioncharts
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import Maps from "fusioncharts/fusioncharts.maps";
import USARegion from "fusionmaps/maps/es/fusioncharts.usaregion";
import ReactFC from "react-fusioncharts";
import "./charts-theme";
import Navs from "./Navs.js";

import config from "./config";
import Dropdown from "react-dropdown";
import formatNum from "./format-number";

ReactFC.fcRoot(FusionCharts, Charts, Maps, USARegion);

const url = `https://sheets.googleapis.com/v4/spreadsheets/${
  config.spreadsheetId
}/values:batchGet?ranges=Sheet1&majorDimension=ROWS&key=${config.apiKey}`;

class Dashboard extends React.Component {

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
            "label": "Cidade A",
            "value": "8800"
        },
        {
            "label": "Cidade B",
            "value": "7300"
        },
        {
            "label": "Cidade C",
            "value": "590"
        },
        {
            "label": "Cidade D",
            "value": "5200"
        },
        {
            "label": "Cidade E",
            "value": "8300"
        },
        {
            "label": "Cidade F",
            "value": "900"
        },
        {
            "label": "Cidade G",
            "value": "10200"
        },
        {
            "label": "Cidade H",
            "value": "3500"
        }],

        evolucaoGeral: [{
        label: "Jan",
        value: "1"
      },
      {
        label: "Feb",
        value: "5"
      },
      {
        label: "Mar",
        value: "10"
      },
      {
        label: "Apr",
        value: "12"
      },
      {
        label: "May",
        value: "14"
      },
      {
        label: "Jun",
        value: "16"
      }],
    };
  }

  render() {
    return (
        <Container className="container-fluid pr-2 pl-2 pt-0 pb-2">
          <Navs/>
          <h1 className="indexDash">Dashboard</h1>
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
            <Container className="col-md-6 mb-4">
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
                          caption: "Casos Registrados: Cidades",
                        },
                        data: this.state.evolucaoCasos
                      }
                    }}
                  />
                </Container>
              </Container>
            </Container>
            <Container className="col-md-6 mb-4">
              <Container className="card is-card-dark chart-card">
                <Container className="chart-container large full-height">
                  <ReactFC
                    {...{
                      type: "line",
                      width: "100%",
                      height: "100%",
                      dataFormat: "json",
                      containerBackgroundOpacity: "0",
                      dataEmptyMessage: "Loading Data...",
                      dataSource: {
                        chart: {
                          theme: "covid",
                          caption: "Casos Registrados: Brasil",
                        },
                        data: this.state.evolucaoGeral
                      }
                    }}
                  />
                </Container>
              </Container>
            </Container>
          </Container>
          </Container>


    );
  }
}

export default Dashboard;
