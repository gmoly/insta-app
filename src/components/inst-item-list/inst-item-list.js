import React, { Component } from 'react';
import InstItem from './inst-item';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Spinner from '../spinner/spinner';
import { withTripsService } from '../hoc/with-trips-service';
import { fetchInstItems } from '../../actions';
import { compose } from '../../utils/compose';
import ErrorIndicator from '../error-indicator/error-indicator';

const InstItemList = ({ items }) => {
    return (
        <ul>
            {
                items.map((item) => {
                    return (
                       <li key={item.id}><InstItem item={item} /></li> 
                    );
                })
            }
        </ul>
    );
};


class InstItemListContainer extends Component {

    componentDidMount() {
      this.props.fetchInstItems('123');
    }

    render() {
        const { items, loading, error } = this.props;

        if (loading) { return <Spinner /> }
        
        if (error) { return <ErrorIndicator /> }

        return <InstItemList items={ items } />
    }

}


const mapStateToProps = ( { instItemList : { items, loading, error }, authData : { token } }) => {
    return { items, loading, error, token };
}

const mapDispatchToProps = (dispatch, { tripsService }) =>
{
    return bindActionCreators (
        { fetchInstItems: fetchInstItems(tripsService, "id") },
         dispatch); 
 };

export default compose (
    withTripsService(),
    connect(mapStateToProps, mapDispatchToProps)
)(InstItemListContainer)