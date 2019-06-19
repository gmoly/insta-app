import React, { useState, useEffect }  from 'react';
import { Map as LeafletMap,TileLayer,Marker } from 'react-leaflet';
import {  iconInstagram  } from '../maps/icon';
import ImageCarousel from '../../images/image-carousel';

import '../maps/leaflet-map.css'
import './create-trip-form.css'

export default function TripForm({ items, handleSubmit, removeTrip }) {
    const [places, usePlaces] = useState(items.places)
    const [title, useTitle] = useState(items.title)
    const [description, useDescription] = useState(items.description)
  
    function getInputValue() {
      return ( { ...items,
                 'title': title,
                 'description': description,
                 'places': places
                } )
    }

    function submit(e) {
        e.preventDefault()
        handleSubmit(getInputValue())
    }

    function updatePlaceData(i, place) {
        usePlaces(places.map( (item, index) => index === i ? place : item))
    }
    
    function rmTrip(e, id){
        e.preventDefault()
        removeTrip(id)
    }

        return(
            <form onSubmit={ (e) => submit(e)}>
                <fieldset>
                    <legend>Share your trip data here</legend>
                    {  idFieldData(items.id) }
                    <div className="form-group">
                        <label htmlFor="inputTitle">Trip title</label>
                        <input className="form-control" id="inputTitle" 
                        aria-describedby="titleHelp" placeholder="enter trip title" 
                        defaultValue={title} onChange={ e => useTitle(e.target.value) }/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputDescription1">Yor general trip description</label>
                        <textarea  className="form-control" id="inputDescription" rows="6" 
                        defaultValue={description} onChange={ e => useDescription(e.target.value)} />
                    </div>
                    <ul className="form-group">
                        {
                            items.places.map((item, i) => {
                                return (
                                <li className="form-group" key={i}>
                                    { placeData(item, i, updatePlaceData) }
                                </li> 
                                );
                            })
                        }
                    </ul>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </fieldset>
            </form>
            );

            function placeData(place, index, updatePlaceData) {

                const [title, useTitle] = useState(place.placeTitle);
                const [description, useDescription] = useState(place.placeDescription);
                const [location, useLocation] = useState(place.location);
                const [media, useMedia] = useState(place.media);

                function handlePositionChanged(e) {
                    const { lat, lng } = e.latlng;
                    useLocation({latitude: lat, longitude: lng})
                }

                
                useEffect(() => {
                    const place = {
                    ...place,
                    placeTitle: title,
                    placeDescription: description,
                    location: location,
                    media: media.image
                    }
                    updatePlaceData(index, place)
                  }, [title, description, location, media]);


                return (
                    <React.Fragment>
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
                                zoom={6}
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
                    </React.Fragment>
                )
            }
            
            function idFieldData(id) {
                if(id) {
                    return (
                        <div className="form-group row">
                        <button type="button" className="btn btn-danger" onClick={(e) => rmTrip(e, id) }>Remove trip</button>
                        <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Trip id</label>
                        <div className="col-sm-10">
                            <input ref="generalId" type="text" readOnly className="form-control-plaintext" id="tripId" defaultValue={id} />
                        </div>
                    </div>
                    )
                } 
            }
        
        
    }