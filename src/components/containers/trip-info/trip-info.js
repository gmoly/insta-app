import React, { useEffect, useContext } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { tripsServiceContext } from '../../app-service-context/service-context';
import ErrorIndicator from '../../error-indicator/error-indicator';
import { Spinner } from '../../spinner/spinner';
import { getTripById } from '../../../actions';

import TripListItem from '../trip-list/trip-list-item'; 

function TripInfoContainer( { tripId, tripById, trip, loading, error } ) {
        console.log(trip)
        const tripsService = useContext(tripsServiceContext);

        useEffect(() => { tripById(tripId, tripsService) },[]);
   
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
  
  const mapDispatchToProps = (dispatch) =>
  {
      return bindActionCreators (
          { tripById: (tripId, tripsService) => dispatch(getTripById(tripId, tripsService)) },
           dispatch); 
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(TripInfoContainer)