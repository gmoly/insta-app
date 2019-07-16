import React, { useEffect, useContext } from 'react';
import TripsCarousel from './trips-carousel'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Spinner } from '../../spinner/spinner';
import { tripsServiceContext } from '../../app-service-context/service-context';
import { fetchLastTrips } from '../../../actions';
import ErrorIndicator from '../../error-indicator/error-indicator';

const COUNT_OF_ITEMS = 2;

function TripListContainer({ trips, loading, error, fetchLastTrips }) {

        const tripsService = useContext(tripsServiceContext);

        useEffect(() => { fetchLastTrips(COUNT_OF_ITEMS,tripsService) },[]);

        if (loading) { return <Spinner /> }
        
        if (error) { return <ErrorIndicator /> }

        return <TripsCarousel trips={trips} />
}

const mapStateToProps = ( { lastTrips : { trips, loading, error } }) => {
    return { trips, loading, error };
}

const mapDispatchToProps = (dispatch) =>
{
    return bindActionCreators (
        { fetchLastTrips: (count, tripsService) => dispatch(fetchLastTrips(count,tripsService)) },
         dispatch); 
 };

export default connect(mapStateToProps, mapDispatchToProps)(TripListContainer)
