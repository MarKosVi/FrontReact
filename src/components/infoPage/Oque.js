import React, { Component } from "react";
import { Container } from "../styled-components";
import Navs from "../Navs.js";
import "./infoPage.css";

class Oque extends Component {

    render() {
      return (
    <Container className="container-fluid pt-0 pb-0">
      <Navs name="teste4"/>
      <h1 className="indexHome4" > Oque é o COVID-19</h1>
    <Container className="row">
     <Container className="col-md-12 mb-4">
      <Container className="card is-card-dark p-4">
        <Container className="chart-container large full-height">
            <h2 className="text-white">COVID-19</h2>
            <p className="text-white text-large">
            A COVID-19 é uma doença causada pelo coronavírus 
            SARS-CoV-2, que apresenta um quadro clínico que 
            varia de infecções assintomáticas a quadros 
            respiratórios graves. De acordo com a Organização 
            Mundial de Saúde (OMS), a maioria dos pacientes com 
            COVID-19 (cerca de 80%) podem ser assintomáticos e 
            cerca de 20% dos casos podem requerer atendimento
            hospitalar por apresentarem dificuldade respiratória
            e desses casos aproximadamente 5% podem necessitar
            de suporte para o tratamento de insuficiência 
            respiratória (suporte ventilatório).
            </p>
        </Container>
        <Container className="chart-container large full-height mt-5">
            <h2 className="text-white">O que é o coronavírus?</h2>
            <p className="text-white text-large">
            A COVID-19 é uma doença causada pelo coronavírus 
            SARS-CoV-2, que apresenta um quadro clínico que 
            varia de infecções assintomáticas a quadros 
            respiratórios graves. De acordo com a Organização 
            Mundial de Saúde (OMS), a maioria dos pacientes com 
            COVID-19 (cerca de 80%) podem ser assintomáticos e 
            cerca de 20% dos casos podem requerer atendimento
            hospitalar por apresentarem dificuldade respiratória
            e desses casos aproximadamente 5% podem necessitar
            de suporte para o tratamento de insuficiência 
            respiratória (suporte ventilatório).
            </p>
        </Container>
        <Container className="chart-container large full-height mt-5">
            <h2 className="text-white">Quais são os sintomas</h2>
            <p className="text-white text-large">
            Os sintomas da COVID-19 podem variar de um simples 
            resfriado até uma pneumonia severa. Sendo os sintomas 
            mais comuns:
            </p>
            <lu className="text-white text-large">
                <li className="pl-4">Tosse</li>
                <li className="pl-4">Febre</li>
                <li className="pl-4">Coriza</li>
                <li className="pl-4">Dor de garganta</li>
                <li className="pl-4">Dificuldade para respirar</li>
            </lu>
        </Container>
      </Container> 
      </Container>
     </Container>
    </Container>
      );
    }
  }
  
export default Oque