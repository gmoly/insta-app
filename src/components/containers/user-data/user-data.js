import React, { useEffect, useContext } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Spinner } from '../../spinner/spinner';
import { authInstUser } from '../../../actions';
import ErrorIndicator from '../../error-indicator/error-indicator';
import  { Redirect } from 'react-router-dom';
import { instagramServiceContext } from '../../app-service-context/service-context';
import { usersServiceContext } from '../../app-service-context/service-context';


function UserDataContainer({ hash, authUser, loading, error }) {
        const instagramService = useContext(instagramServiceContext);
        const usersService = useContext(usersServiceContext);
        
        useEffect(() => {
            var authToken = hash.substring(1).split('=')[1];
            if (authToken) {
                authUser(instagramService, usersService, authToken);
            }
        }, []);

        if (loading) { return <Spinner /> }
        
        if (error) { return <ErrorIndicator /> }

        return <Redirect to='/inst' />
}


const mapStateToProps = ( { authData : { loading, error } }) => {
    return { loading, error };
}

const mapDispatchToProps = (dispatch) =>
{
    return bindActionCreators (
        { authUser: (instagramService, usersService, token) => dispatch(authInstUser(instagramService, usersService, token)) },
         dispatch); 
 };

export default connect(mapStateToProps, mapDispatchToProps)(UserDataContainer)
