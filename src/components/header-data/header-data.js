import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signOutInstUser } from '../../actions';

    var instagramAuthPath = "https://api.instagram.com/oauth/authorize/?response_type=token"
    var clientId = "&client_id=8b7246cc912a4f5c8cde33ecbabeab30"
    var redirectUrl = "&redirect_uri=http://localhost:3000/auth-instagram"

class HeaderDataContainer extends Component {

    render() {
        const { token, signOut } = this.props;
        if(token) {
           return <button className="btn btn-secondary my-2 my-sm-0" onClick={() =>  signOut() }>Sign out</button>
        } else {
           return <a className="btn btn-secondary my-2 my-sm-0" href={instagramAuthPath + clientId + redirectUrl} role="button">Sign In</a>
        }
    }

}

const mapStateToProps = ( { authData : { token } }) => {
    return { token };
}

const mapDispatchToProps = (dispatch) =>
{
    return bindActionCreators (
        { signOut: signOutInstUser() },
         dispatch); 
 };

export default 
    connect(mapStateToProps, mapDispatchToProps)(HeaderDataContainer)