import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withTripsService } from '../hoc/with-trips-service';
import { compose } from '../../utils/compose';
import ErrorIndicator from '../error-indicator/error-indicator';
import Spinner from '../spinner/spinner';
import { getTripById } from '../../actions';

import TripListItem from '../trip-list/trip-list-item'; 

class TripInfoContainer extends Component {

    componentWillMount() {
        this.props.tripById(this.props.tripId);
    }

    componentDidMount() {
        this.props.tripById(this.props.tripId);
      }
  
      render() {
        const { trip, loading, error } = this.props;
        if (loading) { return <Spinner /> }
        
        if (error) { return <ErrorIndicator /> }

        if (trip) {
            return <TripListItem trip={trip} />
        } else {
            return  <ErrorIndicator />
        }
      }
}
  
  const mapStateToProps = ({ tripData : { trip, loading, error } }) => {
    return { trip, loading, error };
  }
  
  const mapDispatchToProps = (dispatch, { tripsService }) =>
  {
      return bindActionCreators (
          { tripById: (tripId) => dispatch(getTripById(tripId, tripsService)) },
           dispatch); 
  };
  
  export default compose (
      withTripsService(),
      connect(mapStateToProps, mapDispatchToProps)
  )(TripInfoContainer)