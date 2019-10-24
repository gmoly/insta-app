import React from 'react';
import InstagramService from '../../services/instagram-service';
import TripsService from '../../services/trips-service';
import ElasticSearchService from '../../services/elasticsearch-service';
import UsersService from '../../services/users-service';

const instagramServiceContext = React.createContext(new InstagramService());
const tripsServiceContext = React.createContext(new TripsService());
const elasticSearchServiceContext = React.createContext(new ElasticSearchService());
const usersServiceContext = React.createContext(new UsersService());

export { instagramServiceContext, tripsServiceContext, elasticSearchServiceContext, usersServiceContext }