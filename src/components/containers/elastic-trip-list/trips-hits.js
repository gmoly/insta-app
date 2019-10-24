import React, { Fragment } from 'react';
import Map from '../maps/search-result-map';
import RoundProfileInfo from '../user-data/user-round-img'

const Hits = ({ hits }) => (
    <ul className="list-unstyled">
            {hits.map(hit => (
            <li className="media border-bottom border-primary rounded-bottom m-3" key={hit._id}>
               { trip(hit._source, hit._id) }
            </li>
            ))}
    </ul>
);

const trip = (tripData, id) => (
    <Fragment>
            <RoundProfileInfo tripUser={tripData.user} />
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


export default Hits;
