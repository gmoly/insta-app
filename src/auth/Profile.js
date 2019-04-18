import React, { Component } from 'react';
import InstagramApi from '../services/InstagramApi';

export default class Profile extends Component {

        instagramApi = new InstagramApi();

        state = {
            id: null,
            logo: null,
            nick: null,
            name: null
        }

        componentWillMount() {
            if (localStorage.authToken) {
                this.setState( {
                    token: localStorage.authToken
                });
            } else {
                var authToken = this.props.location.hash.substring(1).split('=')[1];
                localStorage.authToken = authToken;
                this.setState( {
                    token: authToken
                });
            }
        }

        updateProfile() {
            this.instagramApi
                .getProfileInfo(this.state.token)
                .then(({nick, name, logo, id}) =>
                    this.setState({ nick, name, id, logo})
                );
        }

        render() {
           // this.updateProfile();
            return (
                <div>{this.state.token}</div>
                //<ContentList token={this.state.token} />
            );
    }
  }