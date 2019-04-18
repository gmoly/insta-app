import React, { Component } from 'react';
import InstagramApi from '../services/InstagramApi';
import ContentList from './ContentList';

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
