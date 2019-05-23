import React from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import {  iconInstagram  } from './containers/maps/icon';

import './Map.css'

class Map extends React.Component {
  render() {

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

      <Marker 
            position={[51.5, -0.09]} 
            icon= {iconInstagram('5')}>
            <Popup>
               { 'TEST DESCRIPTION' }
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