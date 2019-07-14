import React from 'react';
import ImageCarousel from '../../images/image-carousel';

const TripPlace = ({ place, index }) => {
    console.log(place)
    return( 
        <div className="mb-3 border rounded-bottom">
            <div className="m-3">
                <h3 className="featurette-heading text-center">{"#" + index + " " + place.placeTitle }</h3>
                <p className="lead text-justify">{place.placeDescription}</p>
                <div className = "w-50 mb-3 mx-auto">
                <ImageCarousel media = { place.media }/>
                </div>
            </div>
      </div>
       
    )

}

export default TripPlace;