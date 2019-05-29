import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withTripsService } from '../../hoc/with-trips-service';
import { compose } from '../../../utils/compose';
import ErrorIndicator from '../../error-indicator/error-indicator';
import { saveTrip, removeTrip } from '../../../actions';

import TripForm from './create-trip-form';

class CreateTripContainer extends Component {

    render() {
        const { trip } = this.props;
        if (trip) {  
            return <TripForm items={ trip } 
                             handleSubmit={ (tripData) => this.props.saveTrip(tripData) }
                             removeTrip={ (id) => this.props.removeTrip(id) } />  }
        else { return <ErrorIndicator /> }  
    }

}

const mapStateToProps = ( { tripData : { trip } } ) => {
    return { trip };
}

const mapDispatchToProps = (dispatch, { tripsService }) =>
{
   return  bindActionCreators (
         { saveTrip: (tripData) => dispatch(saveTrip(tripData, tripsService)),
           removeTrip: (id) => dispatch(removeTrip(id, tripsService)) },
         dispatch); 
 };

export default compose (
    withTripsService(),
    connect(mapStateToProps, mapDispatchToProps)
)(CreateTripContainer)