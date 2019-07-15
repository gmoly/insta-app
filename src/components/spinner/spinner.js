import React from 'react';
import spinner from './spinner.gif';
import spinnerImmLoading from './spinner-img-loading.gif';

import './spinner.css';


const Spinner = () => {
    return (
        <div className="d-flex justify-content-center">
            <img className="" src={spinner} />
        </div>
    )
}

const SpinnerImgLoading = () => {
    return (
        <img className="rounded-circle mx-3" style={{ width: "50px", height: "50px" }} src={spinnerImmLoading} />
    )
}

export { Spinner, SpinnerImgLoading };