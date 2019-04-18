import React, { Component } from 'react';
import ImagePicker from './images/ImagePicker';
import Map from './Map';

export default class ContentList extends Component {

    state = {
        images : []
    }

    render() {
        console.log(this.props.items);
        var imageList = this.props.items.map( element => { return element.images.thumbnail.url } )
        console.log({imageList})
        return <div>

        <ImagePicker 
          images={imageList.map((image, i) => ({src: image, value: i}))}
          onPick={ ({images}) => this.setState({ images }) }
          multiple
        />
                    <Map items={this.props.items}/>
               </div>;
                // <ul> { itemList } </ul>
    }

}