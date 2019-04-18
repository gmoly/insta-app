import React, { Component } from 'react';
import  { Redirect } from 'react-router-dom'

export default class Auth extends Component {

    render() {
        if (!localStorage.authToken) {
            var authToken = this.props.location.hash.substring(1).split('=')[1];
            if (authToken) {
                localStorage.authToken = authToken;
                return <Redirect to='/' />
            } else {
                return <div>Auth issue, please login again!</div>
            }
        }
        return <Redirect to='/' />
 }

}
