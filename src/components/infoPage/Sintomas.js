import React, { Component } from "react";
import { Container } from "../styled-components";
import Navs from "../Navs.js";
import "./infoPage.css";

class Sintomas extends Component {

    render() {
      return (
    <Container className="container-fluid pt-0 pb-0">
      <Navs name="teste4" />
      <h1 className="indexHome2" >Covid-19 - Sintomas</h1>
    <Container className="row">
     <Container className="col-md-12 mb-4">
      <Container className="card is-card-dark">
        <Container className="chart-container large full-height m-2">
            <p className="text-white text-large p-4">
            Ocoronavírus (SARS-CoV-2) ainda precisa de mais estudos
            para caracterizar de forma precisa, 
            os sinais e sintomas da doença. Alguns sinais
            já foram identificados que são principalmente 
            respiratórios, semelhantes a um resfriado. 
            Podem também, causar infecção do trato respiratório
            inferior, como as pneumonias
            </p>
        </Container>
        <Container className="chart-container large full-height mt-1">
            <h2 className="text-white p-4">Os principais sintomas conhecidos até o momento são:</h2>
            <lu className="text-white text-large">
                <li className="pl-4">Tosse</li>
                <li className="pl-4">Febre</li>
                <li className="pl-4">Coriza</li>
                <li className="pl-4">Dor de garganta</li>
                <li className="pl-4">Dificuldade para respirar</li>
            </lu>
            <p className="text-white text-large p-4">
            Febre acompanhada de sintomas respiratórios, ter 
            viajado nos últimos 14 dias antes do início dos 
            sintomas para área de transmissão, ou ter tido 
            contato próximo com um caso suspeito ou confirmado; 
            procurar atendimento médico imediatamente e informar 
            detalhadamente o histórico de viagem recente e seus 
            sintomas.
            </p>
        </Container>
      </Container> 
      </Container>
     </Container>
    </Container>
      );
    }
  }

export default Sintomas