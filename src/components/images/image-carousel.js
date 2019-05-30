import React, { Component }  from 'react';

export default class ImageCarousel extends Component {
    constructor(props) {
        super(props);
        var { media } = this.props
        this.images = [];
    if (media.carousel !== null) {
        media.carousel.map((e) => { this.images.push(e.images.standard_resolution.url) } )
     } else {
        this.images.push(media.image.standard_resolution.url)
     }
      }

    state = {
        index: 0
    }
    
    moveToImage = (i) => {
        var index = i
        if (index < 0) {
            index = this.images.length - 1
        }
        if (index >= this.images.length) {
            index = 0
        }
        this.setState({ index: index })
    }

    render() {
    
    var { index } = this.state
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators"> 
                { this.images.map((e,i) => 
                    {  var active = '' 
                    if( i===index) {
                        active = 'active';
                    }
                        return (
                        <li key={ "carousel-indicator" + i } onClick={ () => this.moveToImage(i) } data-slide-to={ i } className={ active }></li>
                    )}
                )}
            </ol>
            <div className="carousel-inner" role="listbox">
                { this.images.map((e,i) => 
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
            <a className="carousel-control-prev" onClick={ () => this.moveToImage(this.state.index - 1) } role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" onClick={ () => this.moveToImage(this.state.index + 1) } role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
  }
}