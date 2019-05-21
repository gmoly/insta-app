import React from 'react';
import TripInfo from '../trip-info/trip-info'

const TripPage = ({ match }) => {
   return (
        <TripInfo tripId={ match.params.tripId } />
   );
};

export { TripPage };