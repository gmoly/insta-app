import { connectHits } from 'react-instantsearch-dom';
import React from 'react';

const Hits = ({ hits }) => (
        <ol>
            {hits.map(hit => (
            <li key={hit.objectID}>
               { trip(hit) }
            </li>
            ))}
        </ol>
);

const trip = (tripData) => (
        <div className="jumbotron">
            <h1 className="display-3">{tripData.title}</h1>
            <p className="lead">{tripData.description}</p>
            <hr className="my-4" />
            <p><img src={tripData.places[0].media.thumbnail.url} /></p>
            <p className="lead">
                <a className="btn btn-primary btn-lg" href={"/trip/"+ tripData.objectID} role="button">Go to trip</a>
            </p>
        </div>
);

export default connectHits(Hits);
