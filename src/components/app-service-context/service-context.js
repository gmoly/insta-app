import React from 'react';
import InstagramService from '../../services/instagram-service';
import TripsService from '../../services/trips-service';

const instagramServiceContext = React.createContext(new InstagramService());
const tripsServiceContext = React.createContext(new TripsService());

export { instagramServiceContext, tripsServiceContext }