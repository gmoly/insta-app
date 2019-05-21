import algoliasearch from 'algoliasearch/lite';
import { InstantSearch } from 'react-instantsearch-dom';
import React from 'react';
import Hits from './trips-hits';

const searchClient = algoliasearch('JCBGU44849', 'aa3c28d6c5551ca71c745761837d7d3c');

const AlgoliaTripList = () => (
  <InstantSearch searchClient={searchClient} indexName="trips">
    <Hits />
  </InstantSearch>
);

export default AlgoliaTripList
