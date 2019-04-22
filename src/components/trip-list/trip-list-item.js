import React, { Fragment } from 'react';

const TripListItem = ({ trip }) => {
    const { title, description } = trip;

    return(
        <Fragment>
            <span>{title}</span>
            <span>{description}</span>
        </Fragment>
    );
}

export default TripListItem;