import React from 'react';
import EditTrip from '../containers/create-trip/edit-trip'

const EditTripPage = ({ location }) => {
   return (
        <EditTrip trip = { location.state.tripData }/>
   );
};

export { EditTripPage };