import React from 'react';

const TripForm = ( { items } ) => {
    return(
        <ul>
            {
                items.places.map((item, i) => {
                    return (
                       <li key={i}>
                        <span>{item.placeDescription}</span>
                       </li> 
                    );
                })
            }
        </ul>
    );
}

export default TripForm;