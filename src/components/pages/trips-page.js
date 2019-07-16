import React from 'react';
import AlgoliaTripList from '../algolia-trip-list/algolia-trip-list'
import LastTripsCarousel from '../containers/trip-list/last-trips-list'

const TripsPage = ({ location, history }) => {
   return (
      <React.Fragment>
         <LastTripsCarousel />
         <br/>
         <AlgoliaTripList location={ location }  history={ history } />
      </React.Fragment>
   );
};

export { TripsPage };