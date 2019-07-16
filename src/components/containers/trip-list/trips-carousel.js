import React, { useState }  from 'react';
import { relative } from 'path';

export default function TripsCarousel({ trips }) {
    const [index, useIndex] = useState(0);
    const timer = setInterval(() => { moveToImage(index+1) }, 5000);

    function  moveToImage(i) {
        var index = i
        if (index < 0) {
            index = Object.keys(trips).length - 1
        }
        if (index >= Object.keys(trips).length) {
            index = 0
        }
        useIndex(index);
    }

    return(
        <div id="mainCarousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                { Object.keys(trips).map((element, i) => { 
                    var active = '' 
                    if( i===index) {
                        active = 'active';
                    }
                        return (
                        <li key={ "carousel-indicator" + i } onClick={ () => moveToImage(i) } data-slide-to={ i } className={ active }></li>
                    )}
                )}
            </ol>
            <div className="carousel-inner">
            { Object.values(trips).map((element, i) => {
                 var active = '' 
                 if( i===index) {
                     active = 'active';
                 } return (
                    <div key={"carousel-item" + i} className={"carousel-item " + active}>
                        <svg className="bd-placeholder-img" width="100%" height="320px" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                            <rect fill="#777" width="100%" height="100%" />
                        </svg>
                        <div className="container">
                        <div className="carousel-caption">
                                <h1>{element.title}</h1>
                                <p>{element.description}</p>
                                <p><a className="btn btn-lg btn-primary" href={ "/trip/"+Object.keys(trips)[i] } role="button">Learn more</a></p>
                        </div>
                        </div>
                    </div>
                 )
            })}
            </div>

            <a className="carousel-control-prev" onClick={ () => moveToImage(index - 1) } role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" onClick={ () => moveToImage(index + 1) } role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>

    )
}
