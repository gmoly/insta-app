import React, { Component } from 'react';
import TripListItem from './trip-list-item';
import { connect } from 'react-redux';

import Spinner from '../spinner/spinner';
import { withTripsService } from '../hoc/with-trips-service';
import { tripsLoaded, tripsRequested } from '../../actions';
import { compose } from '../../utils/compose';

class TripList extends Component {

    componentDidMount() {
        const { tripsService, tripsLoaded, tripsRequested } = this.props;
        tripsRequested();
        tripsService.getTrips()
            .then((data) => tripsLoaded(data));
    }

    render() {
        const { trips, loading } = this.props;

        if (loading) { return <Spinner /> }
        
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

const mapStateToProps = ({ trips, loading }) => {
    return { trips, loading };
}

const mapDispatchToProps = { tripsLoaded, tripsRequested };

export default compose (
    withTripsService(),
    connect(mapStateToProps, mapDispatchToProps)
)(TripList)
