import React, { Component }  from 'react';
import { Map as LeafletMap,TileLayer,Marker } from 'react-leaflet';
import {  iconInstagram  } from '../maps/icon';
import '../maps/leaflet-map.css'
import './create-trip-form.css'


export default class TripForm extends Component {
  
    getInputValue() {
      return ( { ...this.props.items,
                 'title': this.refs.generalTitle.value,
                 'description': this.refs.generalDescription.value 
                } )
    }
  
    handleSubmit(e){
        e.preventDefault()
        this.props.handleSubmit(this.getInputValue())
    }

    removeTrip(e, id){
        e.preventDefault()
        this.props.removeTrip(id)
    }

    handlePositionChanged = (e) => {
        const { lat, lng } = e.latlng;
        console.log(lat, lng);
      }
  
    render() { 
       const { items } = this.props
        return(
            <form onSubmit={ (e) => this.handleSubmit(e)}>
                <fieldset>
                    <legend>Share your trip data here</legend>
                    {  this.idFieldData(items.id) }
                    <div className="form-group">
                        <label htmlFor="inputTitle1">Trip title</label>
                        <input ref="generalTitle" className="form-control" id="inputTitle1" aria-describedby="titleHelp" placeholder="enter trip title" defaultValue={items.title}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputDescription1">Yor general trip description</label>
                        <textarea ref="generalDescription" className="form-control" id="inputDescription" rows="6" defaultValue={items.description} />
                    </div>
                    <ul className="form-group">
                        {
                            items.places.map((item, i) => {
                                return (
                                <li className="form-group" key={i}>
                                    { this.placeData(item) }
                                </li> 
                                );
                            })
                        }
                    </ul>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </fieldset>
            </form>
            );
    }

    placeData(place){
        return (
            <React.Fragment>
             <div className="form-group">
                <img src={place.media.thumbnail.url} />
             </div>    
            <div className="form-group">
                <label htmlFor="inputPlaceTitle1">Trip title</label>
                <input className="form-control" id="inputPlaceTitle1" aria-describedby="titleHelp" placeholder="enter place title" defaultValue={place.placeTitle}/>
            </div>
            <div className="form-group">
                <label htmlFor="inputPlaceDescription1">Place description</label>
                <textarea className="form-control" id="inputPlaceDescription" rows="6" defaultValue={place.placeDescription} />
            </div>
            <div className="form-group map-canvas">
                    <LeafletMap
                        center={[place.location.latitude, place.location.longitude]}
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
                            position={[place.location.latitude, place.location.longitude]}
                            icon= {iconInstagram('')}
                            onmouseout={(e) => this.handlePositionChanged(e) }
                            />
                    </LeafletMap>

                </div>
            </React.Fragment>
        )
    }
    
     idFieldData(id) {
        if(id) {
            return (
                <div className="form-group row">
                <button type="button" className="btn btn-danger" onClick={(e) => this.removeTrip(e, id) }>Remove trip</button>
                <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Trip id</label>
                <div className="col-sm-10">
                    <input ref="generalId" type="text" readOnly className="form-control-plaintext" id="tripId" defaultValue={id} />
                </div>
            </div>
            )
        } 
    }

}
