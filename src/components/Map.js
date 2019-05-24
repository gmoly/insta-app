import React from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import {  iconInstagram  } from './containers/maps/icon';

import './Map.css'

class Map extends React.Component {

  render() {
    var { flag } = this.props;
    var marker = [1].map((e) => {
      return(
      <Marker
            ref="marker_0"
            onmouseover={(e) => e.target.openPopup() }
            onmouseout={(e) => e.target.closePopup() }
            position={[51.5, -0.09]} 
            icon= {iconInstagram('5')}>
            <Popup>
               { 'TEST DESCRIPTION 1' }
            </Popup>
      </Marker>
      );
    })

    if(this.refs.marker_0 && flag) {
      console.log(this.refs.marker_0.leafletElement.openPopup());
    }
   // marker[0].openPopup();
   

    /*var mapMarker = this.props.items.map( element => {
        if (element.location) {
            var geoPosition = [element.location.latitude, element.location.longitude];
            return (
            <Marker position={geoPosition} key={element.id}>
            <Popup>
                {element.description}
            </Popup>
            </Marker> 
            ); 
        }
    });*/

    return (
      <LeafletMap
        center={[50, 10]}
        zoom={6}
        minZoom={2}
        maxZoom={17}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
      >
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />

      { marker }
      <Marker 
            onmouseover={(e) => e.target.openPopup() }
            onmouseout={(e) => e.target.closePopup() }
            position={[54.5, -0.0]} 
            icon= {iconInstagram('7')}>
            <Popup>
               { 'TEST DESCRIPTION 2' }
            </Popup>
      </Marker>  

      </LeafletMap>
    );
  }
}

/**
<LeafletMap
        center={[50, 10]}
        zoom={6}
        maxZoom={10}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
      >
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
       { mapMarker }
      </LeafletMap> 

 */

export default Map