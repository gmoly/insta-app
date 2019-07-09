import React, { useState, useRef } from 'react';
import Map from '../maps/leaflet-map';
import TripPlace from './trip-place';

import './trip-list-item.scss'

export default function TripListItem( { trip } ) {

    const [id, useId] = useState(0);
    const myRefs = [];
    trip.places.map(() => myRefs.push(useRef()))

        function changeStateAdd(newId) {
            if(id !== newId) {
               useId(newId)
            } 
        }

        function changeStateRemove(oldId) {
            if(id === oldId) {
               useId(oldId)
            } 
        }

        function scrollToRef(refId) {
            myRefs[refId].current.scrollIntoView();
          };
            
            return(
                <div className="trip-container">
                    <div id="map-canvas">
                            <Map places={ trip.places } markerId= { id } scrollToRef={ scrollToRef } />
                    </div>  
                    <div className="container-fluid" id="main">
                        <div className="row">
                            <div className="col-md-8" id="left">
                            
                            <h2 className="text-center">{ trip.title }</h2>
                            <p className="text-center">{ trip.description }</p>
                            
                            <hr />
                            <div>
                                { trip.places.map(( (place, i) => { return ( 
                                    <div ref={ myRefs[i] } key={i+1} onMouseEnter={() => {changeStateAdd(i+1)}} onMouseLeave={() => {changeStateRemove(i+1)}}>
                                        <TripPlace place={place} index={i+1} />
                                    </div>
                             ); } ))}
                            </div> 
                            <p>
                            </p>
                                
                            <hr />      

                            </div>
                            <div className="col-md-4"></div>
                        </div> 
                    </div>
                </div>  
            );
        }