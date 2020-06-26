import React from "react";
import { Container } from "./styled-components";
import Navs from "./Navs.js";

export class MapContainer extends React.Component {
    render() {
      return (
        
        <Container className="container-fluid pt-0 pb-2">
          <Navs/>
          <div ref='map'>
            Loading map...
          </div>
        </Container>
      );
    }
  }
  export default MapContainer;