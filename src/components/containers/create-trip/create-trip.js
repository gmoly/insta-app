import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { tripsServiceContext } from '../../app-service-context/service-context';
import ErrorIndicator from '../../error-indicator/error-indicator';
import { saveTrip, removeTrip } from '../../../actions';

import TripForm from './create-trip-form';

function CreateTripContainer({ trip, saveTrip, removeTrip }) {

    const tripsService = useContext(tripsServiceContext);

        if (trip) {  
            return <TripForm items={ trip } 
                             handleSubmit={ (tripData) => { saveTrip(tripData, tripsService) } }
                             removeTrip={ (id) => removeTrip(id, tripsService) } />  }
        else { return <ErrorIndicator /> }  

}

const mapDispatchToProps = (dispatch) =>
{
   return  bindActionCreators (
         { saveTrip: (tripData, tripsService) => dispatch(saveTrip(tripData, tripsService)),
           removeTrip: (id, tripsService) => dispatch(removeTrip(id, tripsService)) },
         dispatch); 
 };

export default connect(null, mapDispatchToProps)(CreateTripContainer)