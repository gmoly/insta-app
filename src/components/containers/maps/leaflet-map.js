import React from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import {  iconInstagram  } from './icon';

import './leaflet-map.css'

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.myRefs = [];
    this.props.places.map(() => this.myRefs.push(React.createRef()))
  }

  componentDidUpdate() {
    var { markerId, places } = this.props;
    if (markerId > 0 && this.myRefs[markerId-1]){
      this.myRefs[markerId-1].current.leafletElement.openPopup();
    }

    if(markerId === 0) {
      places.forEach((element, i) => {
        if (this.myRefs[i].current) {
          this.myRefs[i].current.leafletElement.closePopup();
        }
      });
    }
  }

  render() {
    var { places, scrollToRef } = this.props;
    var mapMarkers = places.map( (element, i) => {
        if (element.location) {
            var geoPosition = [element.location.latitude, element.location.longitude];
            return (
            <Marker
              ref={ this.myRefs[i] }
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