import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, Configure } from 'react-instantsearch-dom';
import React, { useState, useEffect } from 'react';
import Hits from './trips-hits';
import SearchBox from './algolia-search-bar';
import Pagination from './algolia-pagination';
import qs from 'qs';

import './algolia-trip-list.css'
const searchClient = algoliasearch(process.env.REACT_APP_ALGOLIA_APP_ID, process.env.REACT_APP_ALGOLIA_API_KEY);

function createURL(state) {
  const queryParams = qs.stringify({ p: state.page});
  return `/?${queryParams}`;
}

function urlToSearchState(location) {
  const routeState = qs.parse(location.search.slice(1));
  const searchState = { page: routeState.p || 1 };
  return searchState;
}

  export default function AlgoliaTripList({ location, history }) {
    const [searchState, useSearchState] = useState(urlToSearchState(location))
    const [lastLocation, useLastLocation] = useState(location)
  
      if (location !== lastLocation) {
        useSearchState(urlToSearchState(location))
        useLastLocation(location)
      }
  
    function onSearchStateChange(searchState) {
        useSearchState(searchState);
    };
  
      return (
        <InstantSearch searchClient={searchClient} indexName="trips"
                      searchState={ searchState }
                      onSearchStateChange={ onSearchStateChange }
                      createURL={createURL} >
          <Configure hitsPerPage={1} />
            <div className="search-result light">
              <SearchBox />
              <Hits />
              <Pagination />
            </div>
          </InstantSearch>
      );
  }
