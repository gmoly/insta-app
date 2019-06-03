import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, Configure } from 'react-instantsearch-dom';
import React, { Component } from 'react';
import Hits from './trips-hits';
import SearchBox from './algolia-search-bar';
import Pagination from './algolia-pagination';
import qs from 'qs';

import './algolia-trip-list.css'
const DEBOUNCE_TIME = 700;
const searchClient = algoliasearch(process.env.REACT_APP_ALGOLIA_APP_ID, process.env.REACT_APP_ALGOLIA_API_KEY);

const createURL = state => {

  const queryParams = qs.stringify({
    p: state.page
  });

  return `/?${queryParams}`;
};

const searchStateToUrl = (props, searchState) =>
  searchState ? createURL(searchState) : '';

const urlToSearchState = location => {
  const routeState = qs.parse(location.search.slice(1));

  const searchState = {
    page: routeState.p || 1,
  };

  return searchState;
};

  export default class AlgoliaTripList extends Component {
    state = {
      searchState: urlToSearchState(this.props.location),
      lastLocation: this.props.location,
    };


    static getDerivedStateFromProps(props, state) {
      if (props.location !== state.lastLocation) {
        return {
          searchState: urlToSearchState(props.location),
          lastLocation: props.location,
        };
      }
  
      return null;
    }
  
    onSearchStateChange = searchState => {
      clearTimeout(this.debouncedSetState);
  
      this.debouncedSetState = setTimeout(() => {
        this.props.history.push(
          searchStateToUrl(this.props, searchState),
          searchState
        );
      }, DEBOUNCE_TIME);
  
      this.setState({ searchState });
    };


    render() {
      return (
        <InstantSearch searchClient={searchClient} indexName="trips"
                      searchState={this.state.searchState}
                      onSearchStateChange={this.onSearchStateChange}
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
  }
