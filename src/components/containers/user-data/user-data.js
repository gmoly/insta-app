import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Spinner from '../../spinner/spinner';
import { withInstagramService } from '../../hoc/with-instagram-service';
import { authInstUser } from '../../../actions';
import { compose } from '../../../utils/compose';
import ErrorIndicator from '../../error-indicator/error-indicator';
import  { Redirect } from 'react-router-dom'


function UserDataContainer({ hash, authUser, loading, error }) {

        useEffect(() => {
            var authToken = hash.substring(1).split('=')[1];
            if (authToken) {
                authUser(authToken);
            }
        });

        if (loading) { return <Spinner /> }
        
        if (error) { return <ErrorIndicator /> }

        return <Redirect to='/inst' />
}


const mapStateToProps = ( { authData : { loading, error } }) => {
    return { loading, error };
}

const mapDispatchToProps = (dispatch, { instagramService }) =>
{
    return bindActionCreators (
        { authUser: (token) => dispatch(authInstUser(instagramService, token)) },
         dispatch); 
 };

export default compose (
    withInstagramService(),
    connect(mapStateToProps, mapDispatchToProps)
)(UserDataContainer)
