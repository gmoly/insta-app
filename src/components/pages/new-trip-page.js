import React from 'react';
import CreateTrip from '../containers/create-trip/create-trip'

const NewTripPage = ({ location }) => {
   return (
        <CreateTrip trip = { location.state.tripData }/>
   );
};

export { NewTripPage };