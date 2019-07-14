import React, {useEffect, useContext, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import Spinner from '../../spinner/spinner';
import { instagramServiceContext, tripsServiceContext } from '../../app-service-context/service-context';
import { fetchInstItems } from '../../../actions';
import ErrorIndicator from '../../error-indicator/error-indicator';

import ImagePicker from '../../images/ImagePicker';
import  { Redirect } from 'react-router-dom';

import actionButton from './action-btn.gif';
import staticButton from './static-btn.png';
import moreButton from './more.gif';



const InstItemList = ({ loading, items, token, loadInstItems, instagramService, tripData, useSelectedImages }) => {
    const spinner = loading ? <Spinner /> : '';
    const isDisabled = tripData.places.length > 0 ? '' : 'disabled'
    const btn = isDisabled ? staticButton : actionButton

    return (
        <div className="album py-5 bg-light">
            <div className="container">
                    <ImagePicker 
                    images={items.map((item, i) => ({src: item.images.low_resolution.url, value: i, object: item}))}
                    onPick = {(images) => useSelectedImages(images.map( element => { return element.src })) }
                    multiple
                    />
                    { spinner }
                    <span className="badge badge-light border border-primary col-md-12" style={{cursor: 'pointer'}} onClick={ () => loadInstItems(instagramService, token, items.slice(-1)[0].id) }>
                    <img src={moreButton} />
                    </span>
            </div>
            <Link className={"btn my-fixed-btn "+ isDisabled } to={{ pathname: '/new-trip',  state: { tripData }}}>
                <img src={btn} style={{transform: 'rotate(90deg)'}}/>
            </Link>
        </div>
    );
};

function InstItemListContainer({items, loading, error, user, token, loadInstItems}) {

    
   const tripsService = useContext(tripsServiceContext);
   const instagramService = useContext(instagramServiceContext);
   const [selectedImages, useSelectedImages] = useState([]);

    useEffect( () => {
        if (items.length === 0) {
            loadInstItems(instagramService, token);
        }
    }, [])

        if (loading && items.length === 0) { return <Spinner /> }
        
        if (error) { return <ErrorIndicator /> }

        if (token === null) { return <Redirect to="/" /> }

        const tripData = tripsService.mapInstItemsToTrip(selectedImages, user)

        return <InstItemList loading={ loading } items={ items } token={ token } loadInstItems={ loadInstItems } instagramService={instagramService} tripData={tripData} useSelectedImages={useSelectedImages} />
}


const mapStateToProps = ( { instItemList : { items, loading, error }, authData : { token, user } }) => {
    return { items, loading, error, token, user };
}

const mapDispatchToProps = (dispatch) =>
{
   return bindActionCreators (
         { loadInstItems: (instagramService, token, last_id) => dispatch(fetchInstItems(instagramService, token, last_id)) },
         dispatch); 
 };

export default connect(mapStateToProps, mapDispatchToProps)(InstItemListContainer)