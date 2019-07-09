import { connectHits } from 'react-instantsearch-dom';
import React, { Fragment } from 'react';

const Hits = ({ hits }) => (
        
    <ul className="list-unstyled">
            {hits.map(hit => (
            <li className="media border-bottom border-primary rounded-bottom m-3" key={hit.objectID}>
               { trip(hit) }
            </li>
            ))}
    </ul>
);

const trip = (tripData) => (
    <Fragment>
            <div className="media-body">
            <h5 className="mt-0 mb-1"> {tripData.title} </h5>
             TEMP_DATA_WILL_BE_CHANGED_IN_FUTURE
            <p className="lead">
                <a className="btn btn-primary btn-sm" href={"/trip/"+ tripData.objectID} role="button">Go to trip</a>
            </p>
            </div>
    </Fragment>      
);

/*

 <Fragment>
            <img className="m-3" src={tripData.places[0].media.thumbnail.url} />
            <div className="media-body">
            <h5 className="mt-0 mb-1"> {tripData.title} </h5>
                {tripData.description}
            <p className="lead">
                <a className="btn btn-primary btn-sm" href={"/trip/"+ tripData.objectID} role="button">Go to trip</a>
            </p>
            </div>
    </Fragment>   

*/

export default connectHits(Hits);
