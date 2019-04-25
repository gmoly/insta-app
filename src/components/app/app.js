import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { TripsPage } from '../pages/trips-page';
import { ContentsPage } from '../pages/contents-page';

import './app.css';

const App = () => {
    return (
        <Switch>
            <Route path="/trips" component={TripsPage} exact />
            <Route path="/inst" component={ContentsPage} exact />
        </Switch>
    );
};

export default (App);