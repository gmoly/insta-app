import React, { Component } from 'react';
import InstagramApi from '../services/InstagramApi';
import ContentList from './ContentList';
import axios from 'axios';

export default class ContentItem extends Component {

    state = {
        items : []
    }

    loadFoto = () => {
       new InstagramApi().getProfileContents(this.props.authToken)
                   .then(result => {
                         this.setState({ items: result });
                         console.log(result);
                        }
                    );
    }

    render() {

        axios.get('https://base-app-3e6b5.firebaseio.com/trips.json').then(response => console.log(response));

        var authToken = this.props.authToken;

        if (authToken) {
            if (this.state.items.length === 0) {
                return (<button type="button" className="btn btn-primary btn-lg btn-block" onClick={this.loadFoto}>Get latest foto</button>);
            } else {
                return <ContentList items={this.state.items} />
            }
        } else {
            return <div>You are not authorize</div>
        }
    }
}
