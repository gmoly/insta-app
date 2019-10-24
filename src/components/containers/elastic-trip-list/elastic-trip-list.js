import React, { useEffect, useContext, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { elasticSearchServiceContext } from '../../app-service-context/service-context';
import ErrorIndicator from '../../error-indicator/error-indicator';
import { Spinner } from '../../spinner/spinner';
import { searchTrips } from '../../../actions';
import Hits from './trips-hits';
import Pagination from './elastic-pagination';
import qs from 'qs';

import './elastic-trip-list.css'
import SearchBox from './elastic-search-bar';

  
  function urlToSearchState(location, from, size) {
    const routeState = qs.parse(location.search.slice(1));
    const searchState = { page: Number(routeState.p) || 1,
                          from: from || 0,
                          size: size || 1,
                          query: routeState.q
                        };
    return searchState;
  }


function TripsSearchContainer( { searchTrips, hits, hitsSize, loading, error, location } ) {
    const [searchState, useSearchState] = useState(urlToSearchState(location))
    const [lastLocation, useLastLocation] = useState(location)

    function refine(page) {
        const from = page > 1 ? searchState.size*page-1 : 0
        useSearchState({ ...searchState, page, from })
    }

    function queryRefine(query) {
      useSearchState({ page: 1, from: 0, size: searchState.size, query })
    }

    if (location !== lastLocation) {
        useSearchState(urlToSearchState(location))
        useLastLocation(location)
      }

    const elasticSearchService = useContext(elasticSearchServiceContext);

    useEffect(() => { searchTrips(searchState.from, searchState.size, searchState.query, elasticSearchService) },[searchState]);

    if (loading) { return <Spinner /> }
    
    if (error) { return <ErrorIndicator /> }

    if (hits) {
        return  <div className="search-result light">
                    <SearchBox currentRefinement = {searchState.query} refine = { queryRefine } />
                    <Hits hits = {hits} />
                    <Pagination nbPages = { Math.ceil(hitsSize/searchState.size) } currentRefinement = { searchState.page } query = { searchState.query } refine = { refine } />
                </div>
    } else {
        return  <ErrorIndicator />
    }
}

const mapStateToProps = ({ searchData : { searchResult, loading, error } }) => {
    if (searchResult) {
         const { hits, total : { value } } = searchResult
         const hitsSize = value
         return { hits, hitsSize, loading, error };
    }
    return { loading, error };
}

const mapDispatchToProps = (dispatch) =>
{
  return bindActionCreators (
      { searchTrips: (from, size, query, elasticSearchService) => dispatch(searchTrips(from, size, query, elasticSearchService)) },
       dispatch); 
};

export default connect(mapStateToProps, mapDispatchToProps)(TripsSearchContainer)

