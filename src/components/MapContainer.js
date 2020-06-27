import React, { Component  } from "react";
import { Container } from "./styled-components";
import Navs from "./Navs.js";
import { Map, InforWindow, GoogleApiWrapper, Marker } from 'google-maps-react';
import "./Map.css";
import axios from "axios"

import config from "./config";

const mapStyles = {
  width: '100%',
  height: '100%',
};

export class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user:{
        error: null,
        isLoaded: false,
        items: {},
        stores: []
      }
    };


  }

  componentDidMount() {
    axios.get("http://localhost:3000/users",{
      params:{
        user:"teste1"
      }
    })
    .then(res=> res.data)
    .then(result=>{
      
      const user={ name:result.user[0].name,lat: result.user[0]["location"]["coordinates"][1], lng: result.user[0]["location"]["coordinates"][0]}
      const stores = result.stores.map(e=>{
        return {name: e.name, lat: e["location"]["coordinates"][1], lng: e["location"]["coordinates"][0]}
      })
      stores.push(user)

     this.setState({
        isLoaded: true,
        items: user,
        stores:stores
      },(error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
    })
  }

  displayMarkers = (stores) => {
    return stores.map((store, index) => {
      return <Marker key={index} id={index} position={{
       lat: store.lat,
       lng: store.lng
     }}
     onClick={() => console.log(`${store.name}`)} />
    })
  }

  render() {
    const { error, isLoaded, items,stores } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
console.log(stores)
      return (
        <Container>
          <Navs/>
          <h1 className="indexMap" >Mapa de casos</h1>
          <Container>
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={items}
        >
          {this.displayMarkers(stores) }
        </Map>
        </Container>
        </Container>
    );  

    }
  }
}

  export default GoogleApiWrapper({
    apiKey: "AIzaSyD22Pl2WKLpgt7M6F7bMhLUsfUC0FGYsiQ"
  })(MapContainer);
