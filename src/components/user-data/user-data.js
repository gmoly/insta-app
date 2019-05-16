import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Spinner from '../spinner/spinner';
import { withTripsService } from '../hoc/with-trips-service';
import { authInstUser } from '../../actions';
import { compose } from '../../utils/compose';
import ErrorIndicator from '../error-indicator/error-indicator';
import  { Redirect } from 'react-router-dom'


class UserDataContainer extends Component {

    componentDidMount() {
        var authToken = this.props.hash.substring(1).split('=')[1];
        if (authToken) {
            this.props.authUser(authToken);
        }
    }

    render() {
        const { loading, error } = this.props;

        if (loading) { return <Spinner /> }
        
        if (error) { return <ErrorIndicator /> }

        return <Redirect to='/inst' />
    }

}


const mapStateToProps = ( { authData : { loading, error } }) => {
    return { loading, error };
}

const mapDispatchToProps = (dispatch, { tripsService }) =>
{
    return bindActionCreators (
        { authUser: (token) => dispatch(authInstUser(tripsService, token)) },
         dispatch); 
 };

export default compose (
    withTripsService(),
    connect(mapStateToProps, mapDispatchToProps)
)(UserDataContainer)
