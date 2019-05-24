import React, { Component } from 'react';
import Map from '../../Map';
import TripPlace from './trip-place';

import './trip-list-item.scss'

export default class TripListItem extends Component {

    state = {
        id: null
    }

        changeStateAdd(id) {
            if(this.state.id !== id) {
                this.setState({
                    id: id
                })
            } 
        }

        changeStateRemove(id) {
            if(this.state.id && this.state.id === id) {
                this.setState({
                    id: null
                })
            } 
        }

        render() {
         
            var { trip } = this.props;

            return(
                <div className="trip-container">
                    <div id="map-canvas">
                            <Map places={ trip.places } markerId={ this.state.id }/>
                    </div>  
                    <div className="container-fluid" id="main">
                        <div className="row">
                            <div className="col-xs-8" id="left">
                            
                            <h2>{ trip.title }</h2>
                            <p>{ trip.description }</p>
                            
                            <hr />
                            <div className="places-block">
                                { trip.places.map(( (place, i) => { return ( 
                                    <div onMouseOver={() => {this.changeStateAdd({i})}} onMouseOut={() => {this.changeStateRemove({i})}}>
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