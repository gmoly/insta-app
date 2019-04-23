import React, {Component} from 'react'
import logo from './instagram-logo.png';
import './Instagram.css';

class Instagram extends Component {

    render() {

       var instagramAuthPath = "https://api.instagram.com/oauth/authorize/?response_type=token"
       var clientId = "&client_id=8b7246cc912a4f5c8cde33ecbabeab30"
       var redirectUrl = "&redirect_uri=http://localhost:3000/auth-instagram"

        return (
            <div className="card border-primary mb-3">
                <div className="card-header">Login with:</div>
                <div className="card-body">
                    <a href={instagramAuthPath + clientId + redirectUrl}>
                        <img src={logo} className="instagram-logo" alt="instagram-logo" />
                    </a>     
                </div>
            </div>
        )
    }
}

export default Instagram