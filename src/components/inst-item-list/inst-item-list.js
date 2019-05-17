import React, { Component } from 'react';
import InstItem from './inst-item';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Spinner from '../spinner/spinner';
import { withTripsService } from '../hoc/with-trips-service';
import { fetchInstItems, createTrip } from '../../actions';
import { compose } from '../../utils/compose';
import ErrorIndicator from '../error-indicator/error-indicator';

import ImagePicker from '../images/ImagePicker';

const InstItemList = ({ items, createTrip, userId }) => {
    var imageList = items.map( element => { return element.images.thumbnail.url } )
    return (
        <ImagePicker 
        images={items.map((item, i) => ({src: item.images.thumbnail.url, value: i, object: item}))}
        onPick={ (images)  => createTrip(images.map( element => { return element.src }), userId ) }
        multiple
        />
       /* <ul>
            {
                items.map((item) => {
                    return (
                       <li key={item.id}><InstItem item={item} /></li> 
                    );
                })
            }
        </ul>*/
    );
};

class InstItemListContainer extends Component {

    componentDidMount() {
        this.props.loadInstItems(this.props.token);
    }

    render() {
        const { items, loading, error, createTrip, user } = this.props;

        if (loading) { return <Spinner /> }
        
        if (error) { return <ErrorIndicator /> }

        return <InstItemList items={ items } createTrip={ createTrip } userId={ user.id }/>
    }

}


const mapStateToProps = ( { instItemList : { items, loading, error }, authData : { token, user } }) => {
    return { items, loading, error, token, user };
}

const mapDispatchToProps = (dispatch, { tripsService }) =>
{
   return bindActionCreators (
         { loadInstItems: (token) => dispatch(fetchInstItems(tripsService, token)),
           createTrip: (tripData, userId) => dispatch(createTrip(tripsService, tripData, userId)) },
         dispatch); 
 };

export default compose (
    withTripsService(),
    connect(mapStateToProps, mapDispatchToProps)
)(InstItemListContainer)