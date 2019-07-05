import React, { useState, useEffect }  from 'react';
import { Map as LeafletMap,TileLayer,Marker } from 'react-leaflet';
import {  iconInstagram  } from '../maps/icon';
import ImageCarousel from '../../images/image-carousel';
import Collapse from 'react-bootstrap/Collapse';
import PlaceImagePicker from '../../images/PlaceImagePicker';

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
                const [selectedImages, useSelectedImages] = useState([]);
                const [open, useOpen] = useState(false);
                const [titleValidation, useTitleValidation] = useState("badge badge-secondary");
                const [descriptionValidation, useDescriptionValidation] = useState("badge badge-secondary");
                const [imagesValidation, useImagesValidation] = useState("badge badge-secondary");
                const [validation, useValidation] = useState("border-secondary");

                function handlePositionChanged(e) {
                    const { lat, lng } = e.latlng;
                    useLocation({latitude: lat, longitude: lng})
                }

                function validateFormItem() {
                    title ? useTitleValidation('') : useTitleValidation("badge badge-secondary");
                    description ? useDescriptionValidation('') : useDescriptionValidation("badge badge-secondary");
                    selectedImages.length > 0 ? useImagesValidation('') : useImagesValidation("badge badge-secondary");
                    title && description && selectedImages.length > 0 ? useValidation('') : useValidation("border-secondary")
                }

                function placeLabel() {
                    if (title) {
                        return title
                    }
                    if (location.name) {
                        return location.name
                    }
                    return "place"
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
                  }, [title, description, location, selectedImages, open]);


                return (
                    <div className={ "card " + validation } key={index} style={{ width: '100%' }}>
                        <div className="card-header" id={"heading_"+index}>
                                <h5 className="mb-0">
                                    <button
                                        className="btn btn-link"
                                        type="button"
                                        onClick={() => useOpen(!open)}
                                        aria-controls={"collaps_" + index}
                                        aria-expanded={open}>
                                        {"#" + (index+1) + " " + placeLabel() } 
                                    </button>
                                </h5>
                            </div>
                        <Collapse in={open}>
                            <div id={"collaps_"+index} className="collapse" aria-labelledby={"heading_"+index}>
                                <div className="card-body"> 
                                    <div className="form-group">
                                    <span className={ imagesValidation }>Place images:</span>
                                        <PlaceImagePicker 
                                            images={place.media.carousel.map((item, i) => ({src: item.images.low_resolution.url, value: i, object: item}))}
                                            onPick = {(images) => useSelectedImages(images.map( element => { return element.src })) }
                                            multiple
                                        />
                                    </div>    
                                    <div className="form-group col-md-6 mb-3">
                                    <span className={"mb-2 " + titleValidation }>Place title:</span>
                                        <input className="form-control" id="inputPlaceTitle" aria-describedby="titleHelp" 
                                            placeholder="enter place title" defaultValue={ title } onChange= { (e) => { useTitle(e.target.value) } }/>
                                    </div>
                                    <div className="form-group col-md-10 mb-3">
                                    <span className={"mb-2 " + descriptionValidation }>Place description:</span>
                                        <textarea className="form-control" id="inputPlaceDescription" rows="6" 
                                        defaultValue={description} onChange= {(e) => { useDescription(e.target.value) }} />
                                    </div>
                                    <div className="form-group">
                                    <span>Place position :</span>
                                        <div className="map-canvas mx-auto">
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
                            </div>
                        </Collapse>
                    </div>
                )
}