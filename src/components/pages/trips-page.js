import React from 'react';
/*import TripList from '../trip-list/trip-list';*/
import AlgoliaTripList from '../algolia-trip-list/algolia-trip-list'

const TripsPage = () => {
   return (
        <AlgoliaTripList />
   );
};

export { TripsPage };