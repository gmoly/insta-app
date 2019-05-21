import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { TripsPage } from '../pages/trips-page';
import { NewTripPage } from '../pages/new-trip-page';
import { TripPage } from '../pages/trip-page';
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
            <Route path="/inst" component={ContentsPage} exact />
            <Route path="/trips" component={TripsPage} exact />
            <Route path="/trip/:tripId" component={TripPage} exact />
            <Route path="/new-trip" component={NewTripPage} exact />
        </Switch>
        </div>
    );
};

export default (App);