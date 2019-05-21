import { connectHits } from 'react-instantsearch-dom';
import React from 'react';

const Hits = ({ hits }) => (
        <ol>
            {hits.map(hit => (
            <li key={hit.objectID}>{hit.name}</li>
            ))}
        </ol>
);

export default connectHits(Hits);
