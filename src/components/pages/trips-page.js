import React from 'react';
import AlgoliaTripList from '../algolia-trip-list/algolia-trip-list'

const TripsPage = ({ location, history }) => {
   return (
        <AlgoliaTripList location={ location }  history={ history } />
   );
};

export { TripsPage };