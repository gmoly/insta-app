import React, { Fragment, useEffect, useContext } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SpinnerImgLoading } from '../../spinner/spinner';
import ErrorIndicator from '../../error-indicator/error-indicator';
import { usersServiceContext } from '../../app-service-context/service-context';
import { fetchProfilesInfo } from '../../../actions';
import Map from '../maps/search-result-map';

function HitsDataContainer({ hits, users,  loading, error, getUsersData }) {
    const usersService = useContext(usersServiceContext);

    useEffect(() => {
        if (hits) {
            getUsersData(usersService, Array.from(hits.map(hit => hit._source.user.id)));
        }
    }, []);

    if (loading) { return <SpinnerImgLoading /> }
        
    if (error) { return <ErrorIndicator /> }

    if (users) {
       return  <ul className="list-unstyled">
                    {hits.map(hit => (
                        <li className="media border-bottom border-primary rounded-bottom m-3" key={hit._id}>
                            { trip(hit._source, hit._id, users) }
                        </li>
                    ))}
                </ul>
    }
}

const mapStateToProps = ( { usersData : { loading, error, users } }) => {
    return { loading, error, users };
}

const mapDispatchToProps = (dispatch) =>
{
    return bindActionCreators (
        { getUsersData: (usersService, ids) => dispatch(fetchProfilesInfo(usersService, ids)) },
         dispatch); 
 };

const trip = (tripData, id, users) => (
    <Fragment>
            { getUserImg(tripData.user, users) }
            <div className="media-body">
            <h5 className="mt-0 mb-1"> {tripData.title} </h5>
            <p><small>Published:&nbsp;<strong>{new Date(Number(tripData.published)).toLocaleString()}</strong></small></p>
            <div className="row">
                <div className="col-md-5">
                    <ul>
                        {tripData.places.map((item, i) => {
                            return(
                                <li key={i}>
                                    <p><u>{ (i+1) + ". " + item.placeTitle}</u></p>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="col-md-7"><Map places={tripData.places}/></div>
            </div>
            <p className="lead">
                <a className="btn btn-primary btn-sm" href={"/trip/"+ id} role="button">Go to trip</a>
            </p>
            </div>
    </Fragment>      
);

const getUserImg = (defaultUser, users) => {
    var user = users.find(user => { return defaultUser.id === user.id } )
    if (user) {
        return <img src={user.logo} className="rounded-circle mx-3" style={{ width: "50px", height: "50px" }} />
    } else {
        return <img src={defaultUser.logo} className="rounded-circle mx-3" style={{ width: "50px", height: "50px" }} />
    } 
}

export default connect(mapStateToProps, mapDispatchToProps)(HitsDataContainer)
