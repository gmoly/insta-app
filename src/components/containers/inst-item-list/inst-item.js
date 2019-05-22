import React, { Fragment } from 'react';

const InstItem = ({ item }) => {
    const { description, images } = item;
    
    return(
        <Fragment>
            <span>{description}</span>
            <img src={images.thumbnail.url} />
        </Fragment>
    );
}

export default InstItem;