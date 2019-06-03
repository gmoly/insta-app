import React from 'react';
/*import TripList from '../trip-list/trip-list';*/
import AlgoliaTripList from '../algolia-trip-list/algolia-trip-list'

const TripsPage = ({ location, history }) => {
   return (
        <AlgoliaTripList location={ location }  history={ history } />
   );
};

export { TripsPage };