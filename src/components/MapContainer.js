import React, { Component  } from "react";
import { Container } from "./styled-components";
import Navs from "./Navs.js";
import { Map, InfoWindow, GoogleApiWrapper, Marker } from 'google-maps-react';
import "./Map.css";
import axios from "axios"

const mapStyles = {
  width: '100%',
  height: '100%',
};

export class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
    showingInfoWindow: false,  //Hides or the shows the infoWindow
    activeMarker: {},          //Shows the active marker upon click
    selectedPlace: {} ,
      user:{
        error: null,
        isLoaded: false,
        items: {},
        stores: []
      }
    };

  }

  componentDidMount() {
    axios.get("http://localhost:8080/users",{
      params:{
        user:"teste1"
      }
    })
    .then(res=> res.data)
    .then(result=>{
      console.log(result)
      const user={ name:result.user[0].name,itens:result.user[0].produtos_doar,lat: result.user[0]["location"]["coordinates"][1], lng: result.user[0]["location"]["coordinates"][0]}
      const stores = result.stores.map(e=>{
        return {
          name: e.name,
          dados: e.dados,
          itens:e.produtos_doar,
          lat: e["location"]["coordinates"][1], 
          lng: e["location"]["coordinates"][0]}
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
  onMarkerClick= (props, marker, e)=>
    this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });
  
onClose = props => {
  if (this.state.showingInfoWindow) {
    this.setState({
      showingInfoWindow: false,
      activeMarker: null
    });
  }
}
    displayMarkers = (stores) => {
    
    return stores.map((store, index) => {
      return <Marker 
      key={index} 
      id={index}
      name={`Nome:${store.name}, Contato:${store.contato}, itens:${store.itens.length==0?"":store.itmes}`}
      label={`${store.name}`}
      position={{
       lat: store.lat,
       lng: store.lng
     }}
     onMouseover={this.onMarkerClick}
     onClick={this.onMarkerClick}
     />
    })
  }

  render() {
    const { error, isLoaded, items,stores } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <Container>
          <Navs name="teste4"/>
          <h1 className="indexMap" >Mapa de casos</h1>
          <Container>
        <Map
          google={this.props.google}
          zoom={10}
          style={mapStyles}
          initialCenter={items}
        >
          {this.displayMarkers(stores)}
          {
             <InfoWindow
             marker={this.state.activeMarker}
             visible={true}
             onClose={this.onClose}
           >
             <div>
               <h4>{this.state.selectedPlace.name}</h4>
             </div>
           </InfoWindow>
          }
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
