import React, { Fragment } from 'react';

const InstItem = ({ item }) => {
    const { title, description, images } = item;
    
    return(
        <Fragment>
            <span>{title}</span>
            <span>{description}</span>
            <img src={images.thumbnail.url} />
        </Fragment>
    );
}

export default InstItem;