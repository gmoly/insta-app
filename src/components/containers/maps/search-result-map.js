import React from 'react'
import { Map as LeafletMap, TileLayer, Marker } from 'react-leaflet';
import {  iconInstagram  } from './icon';

export default function Map( { places }) {

  function mapMarkers() {
    return places.map( ({ location }, i) => {
      if (location.latitude && location.longitude) {
          var geoPosition = [location.latitude, location.longitude];
          return (
          <Marker
            position={geoPosition}
            icon= {iconInstagram(i+1)}
            key={i+1} >
          </Marker> 
          ); 
      }
  });
  }

    return (
      <LeafletMap
        style={{width: '100%', height: '200px'}}
        center={[places[0].location.latitude, places[0].location.longitude]}
        zoom={10}
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
        <TileLayer  url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
        { mapMarkers() }
      </LeafletMap>
    );
}