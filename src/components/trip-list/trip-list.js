import React, { Component } from 'react';
import TripListItem from './trip-list-item';
import { connect } from 'react-redux';

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


class TripListContainer extends Component {

    componentDidMount() {
      this.props.fetchTrips();
    }

    render() {
        const { trips, loading, error } = this.props;

        if (loading) { return <Spinner /> }
        
        if (error) { return <ErrorIndicator /> }

        return <TripList trips={trips} />
    }

}


const mapStateToProps = ({ trips, loading, error }) => {
    return { trips, loading, error };
}

const mapDispatchToProps = (dispatch, { tripsService }) =>
{
    return {
        fetchTrips: fetchTrips(tripsService, dispatch)
    }; 
 };

export default compose (
    withTripsService(),
    connect(mapStateToProps, mapDispatchToProps)
)(TripListContainer)
