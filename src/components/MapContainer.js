import React, { Component  } from "react";
import { Container } from "./styled-components";
import Navs from "./Navs.js";
import { Map, InforWindow, GoogleApiWrapper, Marker } from 'google-maps-react';
import "./Map.css";

import config from "./config";

const mapStyles = {
  width: '100%',
  height: '100%',
};

export class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stores: [{lat: 47.49855629475769, lng: -122.14184416996333},
              {latitude: 47.359423, longitude: -122.021071},
              {latitude: 47.2052192687988, longitude: -121.988426208496},
              {latitude: 47.6307081, longitude: -122.1434325},
              {latitude: 47.3084488, longitude: -122.2140121},
              {latitude: 47.5524695, longitude: -122.0425407}]
    };
  }

  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return <Marker key={index} id={index} position={{
       lat: store.latitude,
       lng: store.longitude
     }}
     onClick={() => console.log("You clicked me!")} />
    })
  }

  render() {
    return (
        <Container>
          <Navs/>
          <h1 className="indexMap" >Mapa de casos</h1>
          <Container>
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176}}
        >
          {this.displayMarkers()}
        </Map>
        </Container>
        </Container>
    );
  }
}
  export default GoogleApiWrapper({
    apiKey: "AIzaSyD22Pl2WKLpgt7M6F7bMhLUsfUC0FGYsiQ"
  })(MapContainer);
