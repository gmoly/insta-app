import React, { useRef, useEffect, useState } from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import {  iconInstagram  } from './icon';

import './leaflet-map.css'

export default function Map( { markerId, places, scrollToRef }) {
  const myRefs = [];
  places.map(() => myRefs.push(useRef()));

  useEffect (
    () => {
    if (markerId > 0 && myRefs[markerId-1]){
      myRefs[markerId-1].current.leafletElement.openPopup();
    }
  
    if(markerId === 0) {
      places.forEach((element, i) => {
        if (myRefs[i].current) {
          myRefs[i].current.leafletElement.closePopup();
        }
      });
    }
  }
  );

  function mapMarkers() {
    console.log(places);
    return places.map( (element, i) => {
      if (element.location) {
          var geoPosition = [element.location.latitude, element.location.longitude];
          return (
          <Marker
            ref={ myRefs[i] }
            onmouseover={(e) => { scrollToRef(i); e.target.openPopup() } }
            onmouseout={(e) => e.target.closePopup() }
            position={geoPosition}
            icon= {iconInstagram(i+1)}
            key={i+1} >
          <Popup>
              {element.placeDescription}
          </Popup>
          </Marker> 
          ); 
      }
  });
  }

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
        <TileLayer  url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
        { mapMarkers() }
      </LeafletMap>
    );
}