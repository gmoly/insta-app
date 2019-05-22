import React from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

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