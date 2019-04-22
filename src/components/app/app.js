import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { TripsPage } from '../pages/trips-page';

import './app.css';

const App = () => {
    return (
        <Switch>
            <Route path="/trips"
             component={TripsPage} />
        </Switch>
    );
};

export default (App);