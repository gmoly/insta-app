import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { TripsPage } from '../pages/trips-page';
import { NewTripPage } from '../pages/new-trip-page';
import { EditTripPage } from '../pages/edit-trip-page';
import { TripPage } from '../pages/trip-page';
import { UserDataPage } from '../pages/user-data-page';
import { ContentsPage } from '../pages/contents-page';
import  UserTripsPage   from '../pages/user-trips-page';
import Header from '../pages/header';
import Footer from '../pages/footer';

import './app.css';

require('dotenv').config();

const App = () => {
    return (
        <Fragment>
        <Header />
        <Switch>
            <Route path="/auth-instagram" exect component={UserDataPage}/>
            <Route path="/inst" component={ContentsPage} exact />
            <Route path="/" component={TripsPage} exact />
            <Route path="/trip/:tripId" component={TripPage} exact />
            <Route path="/new-trip" component={NewTripPage} exact />
            <Route path="/edit-trip" component={EditTripPage} exact />
            <Route path="/user-trips" component={UserTripsPage} exact/>
            <Route path="/user-trips/:userId" component={UserTripsPage} />
        </Switch>
        <Footer />
        </Fragment>
    );
};

export default (App);