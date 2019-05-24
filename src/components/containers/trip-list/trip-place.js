import React from 'react';

const TripPlace = ({ place }) => {
    return( 
        <div className="card mb-3" >
            <h3 className="card-header">{ place.placeTitle }</h3>
            <div className="card-body">
                <p className="card-text">{place.placeDescription}</p>
            </div>
            <img src={place.media.low_resolution.url}/>
        </div>
    )

}

export default TripPlace;