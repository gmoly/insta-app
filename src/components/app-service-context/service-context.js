import React from 'react';
import InstagramService from '../../services/instagram-service';
import TripsService from '../../services/trips-service';
import ElasticSearchService from '../../services/elasticsearch-service';

const instagramServiceContext = React.createContext(new InstagramService());
const tripsServiceContext = React.createContext(new TripsService());
const elasticSearchServiceContext = React.createContext(new ElasticSearchService());

export { instagramServiceContext, tripsServiceContext, elasticSearchServiceContext }