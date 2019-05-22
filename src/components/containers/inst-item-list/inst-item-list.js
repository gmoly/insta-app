import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Spinner from '../../spinner/spinner';
import { withInstagramService } from '../../hoc/with-instagram-service';
import { withTripsService } from '../../hoc/with-trips-service';
import { fetchInstItems, createTrip } from '../../../actions';
import { compose } from '../../../utils/compose';
import ErrorIndicator from '../../error-indicator/error-indicator';

import ImagePicker from '../../images/ImagePicker';
import  { Redirect } from 'react-router-dom'

const InstItemList = ({ items, createTrip, userId }) => {
    var imageList = items.map( element => { return element.images.thumbnail.url } )
    return (
        <ImagePicker 
        images={items.map((item, i) => ({src: item.images.thumbnail.url, value: i, object: item}))}
        onPick={ (images)  => createTrip(images.map( element => { return element.src }), userId ) }
        multiple
        />
    );
};

class InstItemListContainer extends Component {

    componentDidMount() {
        this.props.loadInstItems(this.props.token);
    }

    render() {
        const { items, loading, error, createTrip, user, token } = this.props;

        if (loading) { return <Spinner /> }
        
        if (error) { return <ErrorIndicator /> }

        if (token === null) { return <Redirect to="/" /> }

        return <InstItemList items={ items } createTrip={ createTrip } userId={ user.id }/>
    }

}


const mapStateToProps = ( { instItemList : { items, loading, error }, authData : { token, user } }) => {
    return { items, loading, error, token, user };
}

const mapDispatchToProps = (dispatch, { tripsService, instagramService }) =>
{
   return bindActionCreators (
         { loadInstItems: (token) => dispatch(fetchInstItems(instagramService, token)),
           createTrip: (tripData, userId) => dispatch(createTrip(tripsService, tripData, userId)) },
         dispatch); 
 };

export default compose (
    withTripsService(),
    withInstagramService(),
    connect(mapStateToProps, mapDispatchToProps)
)(InstItemListContainer)