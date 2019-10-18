import React from 'react';
import ElasticTripList from '../containers/elastic-trip-list/elastic-trip-list'
import LastTripsCarousel from '../containers/trip-list/last-trips-list'

const TripsPage = ({ location, history }) => {
   return (
      <React.Fragment>
         <LastTripsCarousel />
         <br/>
         <ElasticTripList location={ location } />
      </React.Fragment>
   );
};

export { TripsPage };