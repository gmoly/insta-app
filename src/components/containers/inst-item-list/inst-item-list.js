import React, { Component, Fragment } from 'react';
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

const InstItemList = ({ loading, items, createTrip, userId, token, loadInstItems }) => {
    var spinner = loading ? <Spinner /> : '';
    return (
        <Fragment>
            <ImagePicker 
            images={items.map((item, i) => ({src: item.images.thumbnail.url, value: i, object: item}))}
            onPick={ (images)  => createTrip(images.map( element => { return element.src }), userId ) }
            multiple
            />
             { spinner }
            <button type="button" className="btn btn-primary" onClick={ () => loadInstItems(token, items.slice(-1)[0].id) }>Load more</button>
        </Fragment>
    );
};

class InstItemListContainer extends Component {

    componentDidMount() {
        var { loadInstItems, items, token } = this.props
        if (items.length > 0) {
            loadInstItems(token, items.slice(-1)[0].id);
        } else {
            loadInstItems(token);
        }
    }

    render() {
        const { items, loading, error, createTrip, user, token, loadInstItems } = this.props;

        if (loading && items.length === 0) { return <Spinner /> }
        
        if (error) { return <ErrorIndicator /> }

        if (token === null) { return <Redirect to="/" /> }

        return <InstItemList loading={ loading } items={ items } createTrip={ createTrip } userId={ user.id } token={ token } loadInstItems={ loadInstItems }/>
    }

}


const mapStateToProps = ( { instItemList : { items, loading, error }, authData : { token, user } }) => {
    return { items, loading, error, token, user };
}

const mapDispatchToProps = (dispatch, { tripsService, instagramService }) =>
{
   return bindActionCreators (
         { loadInstItems: (token, last_id) => dispatch(fetchInstItems(instagramService, token, last_id)),
           createTrip: (tripData, userId) => dispatch(createTrip(tripsService, tripData, userId)) },
         dispatch); 
 };

export default compose (
    withTripsService(),
    withInstagramService(),
    connect(mapStateToProps, mapDispatchToProps)
)(InstItemListContainer)