import React, { Fragment, useEffect, useContext } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Spinner from '../../spinner/spinner';
import { instagramServiceContext, tripsServiceContext } from '../../app-service-context/service-context';
import { fetchInstItems, createTrip } from '../../../actions';
import ErrorIndicator from '../../error-indicator/error-indicator';

import ImagePicker from '../../images/ImagePicker';
import  { Redirect } from 'react-router-dom'

const InstItemList = ({ loading, items, createTrip, userId, token, loadInstItems, tripsService, instagramService }) => {
    var spinner = loading ? <Spinner /> : '';
    return (
        <Fragment>
            <ImagePicker 
            images={items.map((item, i) => ({src: item.images.low_resolution.url, value: i, object: item}))}
            onPick={ (images)  => createTrip(tripsService, images.map( element => { return element.src }), userId ) }
            multiple
            />
             { spinner }
            <button type="button" className="btn btn-primary" onClick={ () => loadInstItems(instagramService, token, items.slice(-1)[0].id) }>Load more</button>
        </Fragment>
    );
};

function InstItemListContainer({items, loading, error, createTrip, user, token, loadInstItems}) {

    
   const tripsService = useContext(tripsServiceContext);
   const instagramService = useContext(instagramServiceContext);

    useEffect( () => {
        if (items.length === 0) {
            loadInstItems(instagramService, token);
        }
    }, [])

        if (loading && items.length === 0) { return <Spinner /> }
        
        if (error) { return <ErrorIndicator /> }

        if (token === null) { return <Redirect to="/" /> }

        return <InstItemList loading={ loading } items={ items } createTrip={ createTrip } userId={ user.id } token={ token } loadInstItems={ loadInstItems } tripsService= { tripsService } instagramService= {instagramService}/>
}


const mapStateToProps = ( { instItemList : { items, loading, error }, authData : { token, user } }) => {
    return { items, loading, error, token, user };
}

const mapDispatchToProps = (dispatch) =>
{
   return bindActionCreators (
         { loadInstItems: (instagramService, token, last_id) => dispatch(fetchInstItems(instagramService, token, last_id)),
           createTrip: (tripsService, tripData, userId) => dispatch(createTrip(tripsService, tripData, userId)) },
         dispatch); 
 };

export default connect(mapStateToProps, mapDispatchToProps)(InstItemListContainer)