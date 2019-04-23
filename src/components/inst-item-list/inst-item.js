import React, { Fragment } from 'react';

const InstItem = ({ item }) => {
    const { title, description } = item;

    return(
        <Fragment>
            <span>{title}</span>
            <span>{description}</span>
        </Fragment>
    );
}

export default InstItem;