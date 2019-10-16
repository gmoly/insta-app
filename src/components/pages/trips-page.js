import React from 'react';
import ElasticTripList from '../containers/elastic-trip-list/elastic-trip-list'
import LastTripsCarousel from '../containers/trip-list/last-trips-list'

const TripsPage = ({ location, history }) => {
   return (
      <React.Fragment>
         <LastTripsCarousel />
         <br/>
         <ElasticTripList location={ location }  history={ history } from={0} size={10} />
      </React.Fragment>
   );
};

export { TripsPage };