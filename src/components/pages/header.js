import React from 'react';
import { withRouter } from "react-router";

import HeaderDataContainer from '../containers/header-data/header-data'

const Header = ({ location }) => {
   return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="/">Together</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
    
        <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
            <li className={ checkIsActive("/", location) }>
            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className={ checkIsActive("/new-trip", location) }>
            <a className="nav-link" href="/new-trip">Create Trip</a>
            </li>
        </ul>
            <HeaderDataContainer />
        </div>
    </nav>
   );
};

var checkIsActive = (href, location) => {
    if (location.pathname === href) {
        return 'nav-item active'
    }
    return 'nav-item'
}

export default withRouter(Header);