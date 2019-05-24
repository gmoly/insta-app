import algoliasearch from 'algoliasearch/lite';
import { InstantSearch } from 'react-instantsearch-dom';
import React from 'react';
import Hits from './trips-hits';

const searchClient = algoliasearch(process.env.REACT_APP_ALGOLIA_APP_ID, process.env.REACT_APP_ALGOLIA_API_KEY);

const AlgoliaTripList = () => (
  <InstantSearch searchClient={searchClient} indexName="trips">
    <Hits />
  </InstantSearch>
);

export default AlgoliaTripList
