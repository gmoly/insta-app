import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { TripsPage } from '../pages/trips-page';
import { UserDataPage } from '../pages/user-data-page';
import { ContentsPage } from '../pages/contents-page';

import Instagram from '../../auth/Instagram';

import './app.css';

const App = () => {
    return (
        <div>
        <Instagram />
        <Switch>
            <Route path="/auth-instagram" exect component={UserDataPage}/>
            <Route path="/trips" component={TripsPage} exact />
            <Route path="/inst" component={ContentsPage} exact />
        </Switch>
        </div>
    );
};

export default (App);