import React, { useState, useEffect }  from 'react';
import { Map as LeafletMap,TileLayer,Marker } from 'react-leaflet';
import {  iconInstagram  } from '../maps/icon';
import ImageCarousel from '../../images/image-carousel';
import Collapse from 'react-bootstrap/Collapse';

import '../maps/leaflet-map.css';
import './create-trip-form.css';


export default function placesData({items, updatePlaceData}) {

    return (
        <div className="accordion" id="accordionPlaces">
            {
                items.places.map((item, i) => {
                    return (
                         placeData(item, i, updatePlaceData)
                    );
                })
            }
        </div>
    )
}
   
function placeData(place, index, updatePlaceData) {

                const [title, useTitle] = useState(place.placeTitle);
                const [description, useDescription] = useState(place.placeDescription);
                const [location, useLocation] = useState(place.location);
                const [media, useMedia] = useState(place.media);
                const [open, useOpen] = useState(false);
                const [validation, useValidation] = useState('rgba(255,120,81,0.25)');

                function handlePositionChanged(e) {
                    const { lat, lng } = e.latlng;
                    useLocation({latitude: lat, longitude: lng})
                }

                function validateFormItem() {
                    if (title && description) {
                        useValidation('');
                    } else {
                        useValidation('rgba(255,120,81,0.25)');
                    }
                }

                useEffect(() => {
                    const place = {
                    ...place,
                    placeTitle: title,
                    placeDescription: description,
                    location: location,
                    media: media.image
                    }
                    validateFormItem()
                    updatePlaceData(index, place)
                  }, [title, description, location, media, open]);


                return (
                    <div className="card" key={index} style={{ width: '100%', backgroundColor: validation }}>
                        <div className="card-header" id={"heading_"+index}>
                                <h5 className="mb-0">
                                    <button
                                        className="btn btn-link"
                                        type="button"
                                        onClick={() => useOpen(!open)}
                                        aria-controls={"collaps_" + index}
                                        aria-expanded={open}>
                                        {"#" + (index+1) + " " + location.name } 
                                    </button>
                                </h5>
                            </div>
                        <Collapse in={open}>
                            <div id={"collaps_"+index} className="collapse" aria-labelledby={"heading_"+index}>
                                <div className="card-body"> 
                                    <div className="form-group carousel-container">
                                        <ImageCarousel media={ place.media } />
                                    </div>    
                                    <div className="form-group">
                                        <label htmlFor="inputPlaceTitle">Trip title</label>
                                        <input className="form-control" id="inputPlaceTitle" aria-describedby="titleHelp" 
                                            placeholder="enter place title" defaultValue={ title } onChange= { (e) => { useTitle(e.target.value) } }/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputPlaceDescription1">Place description</label>
                                        <textarea className="form-control" id="inputPlaceDescription" rows="6" 
                                        defaultValue={description} onChange= {(e) => { useDescription(e.target.value) }} />
                                    </div>
                                    <div className="form-group map-canvas">
                                            <LeafletMap
                                                center={[location.latitude, location.longitude]}
                                                zoom={15}
                                                minZoom={2}
                                                maxZoom={17}
                                                attributionControl={true}
                                                zoomControl={true}
                                                doubleClickZoom={true}
                                                scrollWheelZoom={true}
                                                dragging={true}
                                                animate={true}
                                                easeLinearity={0.35} >
                                                <TileLayer  url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
                                                <Marker
                                                    draggable={true}
                                                    position={[location.latitude, location.longitude]}
                                                    icon= {iconInstagram('')}
                                                    onmouseout={(e) => handlePositionChanged(e) }
                                                    />
                                            </LeafletMap>
                                    </div>
                                </div>
                            </div>
                        </Collapse>
                    </div>
                )
}