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
import axios from "axios";

ReactFC.fcRoot(FusionCharts, Charts, Maps, USARegion);

const url = `https://sheets.googleapis.com/v4/spreadsheets/${
  config.spreadsheetId
}/values:batchGet?ranges=Sheet1&majorDimension=ROWS&key=${config.apiKey}`;

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoaded: false,
      error: null,
      nomeMunicipioUser:"",
      dropdownOptions: [],
      selectedValue: null,
      suspeitos: 1000,
      mortos: 1000,
      recuperados: 1000,
      total: 1000,
      evolucaoCasos: [],
      evolucaoGeral: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3000/municipios/user", {
        params: {
          user: "teste4",
        },
      })
      .then((res) => res.data)
      .then((result) => {
        const municipios = result.municipios.map((e) => {
          return {
            label: e.municipio,
            value: e.covid.confirmados,
          };
        });
       const municipiosASC =  municipios.sort((a,b)=>{
          if (a > b) return 1;
          if (b > a) return -1;
        
          return 0;
        })

        this.setState(
          {
            isLoaded: true,
            dropdownOptions: [],
            selectedValue: null,
            error: null,
            nomeMunicipioUser:result.user_municipio.municipio,
            suspeitos: parseInt(result.user_municipio.covid.acompanhamento),
            mortos: parseInt(result.user_municipio.covid.obito),
            recuperados: parseInt(result.user_municipio.covid.recuperados),
            total: parseInt(result.user_municipio.covid.confirmados),
            evolucaoCasos: municipiosASC,
            evolucaoGeral: [
              {
                label: "Jan",
                value: "1",
              },
              {
                label: "Feb",
                value: "5",
              },
              {
                label: "Mar",
                value: "10",
              },
              {
                label: "Apr",
                value: "12",
              },
              {
                label: "May",
                value: "14",
              },
              {
                label: "Jun",
                value: "16",
              },
            ],
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        );
      });
  }

  render() {
    const { error, isLoaded} = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <Container className="container-fluid pr-2 pl-2 pt-0 pb-2">
          <Navs name="teste4" />
          <h1 className="indexDash">{this.state.nomeMunicipioUser}</h1>
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
                    <i class="fa fa-user-md" aria-hidden="true" />
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
                    <i class="fa fa-plus-square" aria-hidden="true" />
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
                    <i class="fa fa-heartbeat" aria-hidden="true" />
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
                        data: this.state.evolucaoCasos,
                      },
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
                        data: this.state.evolucaoGeral,
                      },
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
}

export default Dashboard;
