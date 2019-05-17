import React from 'react';

const TripForm = ({ items }) => {
    return(
        <ul>
            {
                items.map((item) => {
                    return (
                       <li key={item.id}>
                        <span>{item.description}</span>
                        <img src={item.images.thumbnail.url} />
                       </li> 
                    );
                })
            }
        </ul>
    );
}

export default TripForm;