import React from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import {  iconInstagram  } from './containers/maps/icon';

import './Map.css'

class Map extends React.Component {

  render() {
    var { markerId, places } = this.props;
    console.log(markerId);
    var mapMarkers = places.map( (element, i) => {
        if (element.location) {
            var geoPosition = [element.location.latitude, element.location.longitude];
            return (
            <Marker
              ref={ "marker_" + {i} }
              onmouseover={(e) => e.target.openPopup() }
              onmouseout={(e) => e.target.closePopup() }
              position={geoPosition}
              icon= {iconInstagram({i}+1)}>
              key={element.id}>
            <Popup>
                {element.placeDescription}
            </Popup>
            </Marker> 
            ); 
        }
    });

    if (markerId && this.refs['marker_' + markerId]){
      this.refs['marker_' + markerId].leafletElement.openPopup();
    }

    if(markerId === null) {
      mapMarkers.forEach((element, i) => {
        if (this.refs['marker_' + i]) {
          this.refs['marker_' + i].leafletElement.closePopup();
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
        { mapMarkers }
      </LeafletMap>
    );
  }
}

export default Map