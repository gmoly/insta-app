import React, { useRef, useEffect, useState } from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import {  iconInstagram  } from './icon';

export default function Map( { places }) {

  function mapMarkers() {
    return places.map( (element, i) => {
      if (element.latitude && element.longitude) {
          var geoPosition = [element.latitude, element.longitude];
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
        center={[places[0].latitude, places[0].longitude]}
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