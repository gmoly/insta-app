import React, { useEffect, useContext } from 'react';
import TripListItem from './trip-list-item';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Spinner from '../spinner/spinner';
import { tripsServiceContext } from '../../app-service-context/service-context';
import { fetchTrips } from '../../actions';
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

        const tripsService = useContext(tripsServiceContext);

        useEffect(() => { fetchTrips(tripsService) },[]);

        if (loading) { return <Spinner /> }
        
        if (error) { return <ErrorIndicator /> }

        return <TripList trips={trips} />
}

const mapStateToProps = ( { tripList : { trips, loading, error } }) => {
    return { trips, loading, error };
}

const mapDispatchToProps = (dispatch) =>
{
    return bindActionCreators (
        { fetchTrips: (tripsService) => dispatch(fetchTrips(tripsService)) },
         dispatch); 
 };

export default connect(mapStateToProps, mapDispatchToProps)(TripListContainer)
