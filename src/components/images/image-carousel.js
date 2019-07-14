import React, { useState }  from 'react';

export default function ImageCarousel({ media }) {
    console.log(media)
    const images = [];
    const [index, useIndex] = useState(0);
    if (media.carousel) {
        media.carousel.map((e) => { images.push(e.images.standard_resolution.url) } )
     } else {
        images.push(media.image.standard_resolution.url)
     }

     function  moveToImage(i) {
        var index = i
        if (index < 0) {
            index = images.length - 1
        }
        if (index >= images.length) {
            index = 0
        }
        useIndex(index);
    }
    

    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators"> 
                { images.map((e,i) => 
                    {  var active = '' 
                    if( i===index) {
                        active = 'active';
                    }
                        return (
                        <li key={ "carousel-indicator" + i } onClick={ () => moveToImage(i) } data-slide-to={ i } className={ active }></li>
                    )}
                )}
            </ol>
            <div className="carousel-inner" role="listbox">
                { images.map((e,i) => 
                    {  var active = '' 
                    if( i===index) {
                        active = 'active';
                    }
                        return (
                            <div key={"carousel-img-"+ i } className= {"carousel-item "+ active }>
                                <div className="img"><img className="d-block img-fluid" src={ e } alt={ "slide "+ i} /></div>
                            </div>
                    )}
                )}
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
    );
}
