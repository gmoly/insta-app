import React, { Component } from 'react';
import TripListItem from './trip-list-item';
import { connect } from 'react-redux';

import Spinner from '../spinner/spinner';
import { withTripsService } from '../hoc/with-trips-service';
import { tripsLoaded, tripsRequested, tripsError } from '../../actions';
import { compose } from '../../utils/compose';
import ErrorIndicator from '../error-indicator/error-indicator';

class TripList extends Component {

    componentDidMount() {
        const { tripsService, tripsLoaded, tripsRequested, tripsError } = this.props;
        tripsRequested();
        tripsService.getTrips()
            .then((data) => tripsLoaded(data))
            .catch((err) => tripsError(err));
    }

    render() {
        const { trips, loading, error } = this.props;

        if (loading) { return <Spinner /> }
        
        if (error) { return <ErrorIndicator /> }

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
    }

}

const mapStateToProps = ({ trips, loading, error }) => {
    return { trips, loading, error };
}

const mapDispatchToProps = { tripsLoaded, tripsRequested, tripsError };

export default compose (
    withTripsService(),
    connect(mapStateToProps, mapDispatchToProps)
)(TripList)
