import React, { useContext, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { tripsServiceContext } from '../../app-service-context/service-context';
import ErrorIndicator from '../../error-indicator/error-indicator';
import { saveTrip, removeTrip, getTripById } from '../../../actions';
import { Spinner } from '../../spinner/spinner';

import TripForm from './create-trip-form';

function EditTripContainer({ trip, saveTrip, removeTrip, loadedTrip, loading, error }) {
    const tripsService = useContext(tripsServiceContext);

        useEffect(() => {
            getTripById(trip.objectID, tripsService)
        }, [loading, error, loadedTrip])

        
        if (loading) {
            return <Spinner />
        }

        if (error) {
            return <ErrorIndicator />
        }

        if (loadedTrip) {  
            return <TripForm items={ loadedTrip } 
                             handleSubmit={ (tripData) => { saveTrip(tripData, tripsService) } }
                             removeTrip={ (id) => removeTrip(id, tripsService) } />  
        }

}

const mapStateToProps = ( { tripData : { trip, loading, error} }) => {
    const loadedTrip = trip;
    return { loadedTrip, loading, error };
}

const mapDispatchToProps = (dispatch) =>
{
   return  bindActionCreators (
         { 
           getTripById: (tripId, tripsService) => dispatch(getTripById(tripId, tripsService)),
           saveTrip: (tripData, tripsService) => dispatch(saveTrip(tripData, tripsService)),
           removeTrip: (id, tripsService) => dispatch(removeTrip(id, tripsService)) },
         dispatch); 
 };

export default connect(mapStateToProps, mapDispatchToProps)(EditTripContainer)