import React, { useEffect } from 'react';
import TripListItem from './trip-list-item';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Spinner from '../spinner/spinner';
import { withTripsService } from '../hoc/with-trips-service';
import { fetchTrips } from '../../actions';
import { compose } from '../../utils/compose';
import ErrorIndicator from '../error-indicator/error-indicator';

const TripList = ({ trips }) => {
    return (
        <ul>
            {
                trips.map((trip) => {
                    return (
                       <li key={trip.id}><TripListItem trip={trip} /></li> 
                    );
                })
            }
        </ul>
    );
};


function TripListContainer({ trips, loading, error, fetchTrips }) {

        useEffect(() => { fetchTrips() });

        if (loading) { return <Spinner /> }
        
        if (error) { return <ErrorIndicator /> }

        return <TripList trips={trips} />
}

const mapStateToProps = ( { tripList : { trips, loading, error } }) => {
    return { trips, loading, error };
}

const mapDispatchToProps = (dispatch, { tripsService }) =>
{
    return bindActionCreators (
        { fetchTrips: fetchTrips(tripsService) },
         dispatch); 
 };

export default compose (
    withTripsService(),
    connect(mapStateToProps, mapDispatchToProps)
)(TripListContainer)
