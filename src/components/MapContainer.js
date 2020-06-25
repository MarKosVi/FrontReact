import React from "react";
import { Container } from "./styled-components";
export class MapContainer extends React.Component {
    render() {
      return (
        <Container className="container-fluid pt-0 pb-2">
          <div ref='map'>
            Loading map...
          </div>
        </Container>
      )
    }
  }
  export default MapContainer;