import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withTripsService } from '../../hoc/with-trips-service';
import { compose } from '../../../utils/compose';
import ErrorIndicator from '../../error-indicator/error-indicator';
import Spinner from '../../spinner/spinner';
import { getTripById } from '../../../actions';

import TripListItem from '../trip-list/trip-list-item'; 

function TripInfoContainer( { tripId, tripById, trip, loading, error } ) {

        useEffect(() => { tripById(tripId) });
   
        if (loading) { return <Spinner /> }
        
        if (error) { return <ErrorIndicator /> }

        if (trip) {
            return <TripListItem trip={trip} />
        } else {
            return  <ErrorIndicator />
        }
}
  
  const mapStateToProps = ({ tripData : { trip, loading, error } }) => {
    return { trip, loading, error };
  }
  
  const mapDispatchToProps = (dispatch, { tripsService }) =>
  {
      return bindActionCreators (
          { tripById: (tripId) => dispatch(getTripById(tripId, tripsService)) },
           dispatch); 
  };
  
  export default compose (
      withTripsService(),
      connect(mapStateToProps, mapDispatchToProps)
  )(TripInfoContainer)