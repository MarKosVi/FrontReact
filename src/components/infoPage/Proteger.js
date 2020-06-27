import React, { Component } from "react";
import { Container } from "../styled-components";
import Navs from "../Navs.js";
import "./infoPage.css";

class Proteger extends Component {

    render() {
      return (
    <Container className="container-fluid pt-0 pb-0">
      <Navs name="teste4"/>
      <h1 className="indexHome0" >   Como se Proteger COVID-19</h1>
    <Container className="row">
     <Container className="col-md-12 mb-4">
      <Container className="card is-card-dark">
        <Container className="chart-container large full-height">
        <p className="text-white text-large p-4">
        O Ministério da Saúde orienta cuidados básicos para reduzir
        o risco geral de contrair ou transmitir infecções respiratórias 
        agudas, incluindo o coronavírus. Entre as medidas estão:
            </p>
        </Container>
        <Container className="chart-container large full-height mt-1">
            <h2 className="text-white p-4">Os principais sintomas conhecidos até o momento são:</h2>
            <lu className="text-white text-large">
                <li className="pl-4">Lavar as mãos frequentemente com água e sabão por pelo menos 20 segundos, respeitando os 5 momentos de higienização. Se não houver água e sabonete, usar um desinfetante para as mãos à base de álcool.</li>
                <li className="pl-4">Evitar tocar nos olhos, nariz e boca com as mãos não lavadas.</li>
                <li className="pl-4">Evitar contato próximo com pessoas doentes.</li>
                <li className="pl-4">Ficar em casa quando estiver doente.</li>
                <li className="pl-4">Cobrir boca e nariz ao tossir ou espirrar com um lenço de papel e jogar no lixo.</li>
                <li className="pl-4">Limpar e desinfetar objetos e superfícies tocados com frequência.</li>
            </lu>
            <h2 className="text-white p-4">Cuidados que profissionais da Saúde devem ter:</h2>
            <p className="text-white text-large p-4">
            Profissionais de saúde devem utilizar medidas de precaução padrão, de contato e de gotículas (máscara cirúrgica, luvas, avental não estéril e óculos de proteção).
            Para a realização de procedimentos que gerem aerossolização de secreções respiratórias como intubação, aspiração de vias aéreas ou indução de escarro, deverá ser utilizado precaução por aerossóis, com uso de máscara N95.
            </p>
            <h2 className="text-white p-4">Casos no Brasil:</h2>
            <p className="text-white text-large p-4">
            O Ministério da Saúde confirmou o primeiro caso de coronavírus em São Paulo. É o primeiro registro da doença no país e em toda América do Sul, a confirmação do exame inicial foi positiva, o paciente é um homem de 61 ano que esteve na Itália, passou pelo hospital e teve o diagnóstico positivo para o coronavírus.
            </p>
            <h2 className="text-white p-4">Epidemia Global:</h2>
            <p className="text-white text-large p-4">
            A SBI- Sociedade Brasileira de Infectologia, informou que existe a possibilidade de um risco global, mas não há motivo para pânico neste momento. O Comitê de Emergência da OMS declarou que é cedo para declarar a situação como emergência em saúde pública de interesse internacional neste momento, devido ao número limitado e localizado de casos e pelas medidas que já estão sendo tomadas para que o surto não se espalhe.
            </p>
        </Container>
      </Container> 
      </Container>
     </Container>
    </Container>
      );
    }
  }
  
export default Proteger