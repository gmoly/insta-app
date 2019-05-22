import React, { Fragment } from 'react';

const TripListItem = ({ trip }) => {
    console.log('trip');
    console.log(trip);

    return(
        <Fragment>
            <span>{trip.title}</span>
            <span>{trip.description}</span>
        </Fragment>
    );
}

export default TripListItem;