import algoliasearch from 'algoliasearch/lite';
import { InstantSearch } from 'react-instantsearch-dom';
import React from 'react';
import Hits from './trips-hits';
import SearchBox from './algolia-search-bar';

import './algolia-trip-list.css'

const searchClient = algoliasearch(process.env.REACT_APP_ALGOLIA_APP_ID, process.env.REACT_APP_ALGOLIA_API_KEY);

const AlgoliaTripList = () => (
  <InstantSearch searchClient={searchClient} indexName="trips">
    <div className="search-result light">
      <SearchBox />
      <Hits />
    </div>
  </InstantSearch>
);

export default AlgoliaTripList
