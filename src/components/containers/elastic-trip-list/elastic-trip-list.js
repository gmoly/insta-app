import React, { useEffect, useContext } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { elasticSearchServiceContext } from '../../app-service-context/service-context';
import ErrorIndicator from '../../error-indicator/error-indicator';
import { Spinner } from '../../spinner/spinner';
import { searchTrips } from '../../../actions';
import Hits from './trips-hits';

import './elastic-trip-list.css'


function TripsSearchContainer( { searchTrips, from, size, hits, loading, error } ) {

    const elasticSearchService = useContext(elasticSearchServiceContext);

    useEffect(() => { searchTrips(from, size, elasticSearchService) },[]);

    if (loading) { return <Spinner /> }
    
    if (error) { return <ErrorIndicator /> }

    if (hits) {
        return  <div className="search-result light"><Hits hits = {hits} /></div>
    } else {
        return  <ErrorIndicator />
    }
}

const mapStateToProps = ({ searchData : { hits, loading, error } }) => {
return { hits, loading, error };
}

const mapDispatchToProps = (dispatch) =>
{
  return bindActionCreators (
      { searchTrips: (from, size, elasticSearchService) => dispatch(searchTrips(from, size, elasticSearchService)) },
       dispatch); 
};

export default connect(mapStateToProps, mapDispatchToProps)(TripsSearchContainer)

