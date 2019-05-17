import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withTripsService } from '../hoc/with-trips-service';
import { compose } from '../../utils/compose';
import ErrorIndicator from '../error-indicator/error-indicator';

import TripForm from './create-trip-from';

class CreateTripContainer extends Component {

    render() {
        const { trip } = this.props;
        if (trip) {  return <TripForm items={ trip } />  }
        else { return <ErrorIndicator /> }
       
    }

}

const mapStateToProps = ( { tripData : { trip } } ) => {
    return { trip };
}

const mapDispatchToProps = (dispatch, { tripsService }) =>
{
   return {}/* bindActionCreators (
         { loadInstItems: (token) => dispatch(fetchInstItems(tripsService, token)),
           createTrip: (tripData) => dispatch(createTrip(tripData)) },
         dispatch); */
 };

export default compose (
    withTripsService(),
    connect(mapStateToProps, mapDispatchToProps)
)(CreateTripContainer)