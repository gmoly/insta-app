import React, { Component } from 'react';
import Map from '../maps/leaflet-map';
import TripPlace from './trip-place';

import './trip-list-item.scss'

export default class TripListItem extends Component {
    constructor(props) {
        super(props);
        this.myRefs = [];
        this.props.trip.places.map(() => this.myRefs.push(React.createRef()))
      }

    state = {
        id: 0
    }

        changeStateAdd(id) {
            if(this.state.id !== id) {
                this.setState({
                    id: id
                })
            } 
        }

        changeStateRemove(id) {
            if(this.state.id === id) {
                this.setState({
                    id: 0
                })
            } 
        }

        scrollToRef = (refId) => {
            this.myRefs[refId].current.scrollIntoView();
          };

        render() {
         
            var { trip } = this.props;
            return(
                <div className="trip-container">
                    <div id="map-canvas">
                            <Map places={ trip.places } markerId={ this.state.id } scrollToRef={ this.scrollToRef } />
                    </div>  
                    <div className="container-fluid" id="main">
                        <div className="row">
                            <div className="col-xs-8" id="left">
                            
                            <h2>{ trip.title }</h2>
                            <p>{ trip.description }</p>
                            
                            <hr />
                            <div className="places-block">
                                { trip.places.map(( (place, i) => { return ( 
                                    <div ref={ this.myRefs[i] } key={i+1} onMouseEnter={() => {this.changeStateAdd(i+1)}} onMouseLeave={() => {this.changeStateRemove(i+1)}}>
                                        <TripPlace place={place}/>
                                    </div>
                             ); } ))}
                            </div> 
                            <p>
                            </p>
                                
                            <hr />      

                            </div>
                            <div className="col-xs-4"></div>
                        </div> 
                    </div>
                </div>  
            );
        }
    
}