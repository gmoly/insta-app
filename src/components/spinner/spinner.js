import React from 'react';
import spinner from './spinner.gif';

import './spinner.css';


const Spinner = () => {
    return (
        <div className="d-flex justify-content-center">
            <img className="" src={spinner} />
        </div>
    )
}

export default Spinner;