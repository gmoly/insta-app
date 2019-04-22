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
      this.props.fetchTrips();
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

const mapDispatchToProps = (dispatch, ownProps) =>
{
    const { tripsService } = ownProps;

    return {
        fetchTrips: () => {
            dispatch(tripsRequested());
            tripsService.getTrips()
            .then((data) => dispatch(tripsLoaded(data)))
            .catch((err) => dispatch(tripsError(err)));
        }
    }     
 };

export default compose (
    withTripsService(),
    connect(mapStateToProps, mapDispatchToProps)
)(TripList)
