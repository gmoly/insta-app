import React, { useEffect, useContext } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SpinnerImgLoading } from '../../spinner/spinner';
import ErrorIndicator from '../../error-indicator/error-indicator';
import { usersServiceContext } from '../../app-service-context/service-context';
import { fetchProfileInfo } from '../../../actions';


function UserDataContainer({ tripUser, user, loading, error, getUserData }) {
        const usersService = useContext(usersServiceContext);
        
        useEffect(() => {
            if (tripUser) {
                getUserData(usersService, tripUser.id);
            }
        }, []);

        if (loading) { return <SpinnerImgLoading /> }
        
        if (error) { return <ErrorIndicator /> }

        if (user) {
            return getImageTag(user)
        }
}

function getImageTag(user) {
    return <img src={user.logo} className="rounded-circle mx-3" style={{ width: "50px", height: "50px" }} />
}


const mapStateToProps = ( { userData : { loading, error, user } }) => {
    return { loading, error, user };
}

const mapDispatchToProps = (dispatch) =>
{
    return bindActionCreators (
        { getUserData: (usersService, id) => dispatch(fetchProfileInfo(usersService, id)) },
         dispatch); 
 };

export default connect(mapStateToProps, mapDispatchToProps)(UserDataContainer)