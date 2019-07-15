import React, { useEffect, useContext } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SpinnerImgLoading } from '../../spinner/spinner';
import ErrorIndicator from '../../error-indicator/error-indicator';
import { instagramServiceContext } from '../../app-service-context/service-context';
import { fetchProfileInfo } from '../../../actions';


function UserDataContainer({ tripUser, user, loading, error, token, getUserData }) {
        const instagramService = useContext(instagramServiceContext);
        
        useEffect(() => {
            if (token && tripUser) {
                getUserData(instagramService, token, tripUser.id);
            }
        }, []);

        if (!token) {
            return getImageTag(tripUser)
        }

        if (loading) { return <SpinnerImgLoading /> }
        
        if (error) { return <ErrorIndicator /> }

        if (user) {
            return getImageTag(user)
        }
}

function getImageTag(user) {
    return <img src={user.logo} className="rounded-circle mx-3" style={{ width: "50px", height: "50px" }} />
}


const mapStateToProps = ( { authData : {token }, userData : { loading, error, user } }) => {
    return { loading, error, user, token };
}

const mapDispatchToProps = (dispatch) =>
{
    return bindActionCreators (
        { getUserData: (instagramService, token, id) => dispatch(fetchProfileInfo(instagramService, token, id)) },
         dispatch); 
 };

export default connect(mapStateToProps, mapDispatchToProps)(UserDataContainer)