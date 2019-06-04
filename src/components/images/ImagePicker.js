import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Map } from 'immutable'

import './Images.scss'
import Image from './Image'

class ImagePicker extends Component {

    state = {
        picked: Map() 
    }

  handleImageClick(image) {
    const { multiple, onPick } = this.props
    const pickedImage = multiple ? this.state.picked : Map()
    const newerPickedImage = 
      pickedImage.has(image.value) ? 
        pickedImage.delete(image.value) : 
          pickedImage.set(image.value, image.object)
          
    this.setState({picked: newerPickedImage})

    const pickedImageToArray = []
    newerPickedImage.map((image, i) => pickedImageToArray.push({src: image, value: i}))
    
    onPick(multiple ? pickedImageToArray : pickedImageToArray[0])
  }

  renderImage(image, i) {
    return (
        <div className="card mx-5 my-3 ">
          <h3 className="card-header mb-3">Card header</h3>
          <Image 
            src={image.src}
            isSelected={this.state.picked.has(image.value)} 
            onImageClick={() => this.handleImageClick(image)} 
            key={i}
          />
          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
          <div class="card-footer text-muted">
            <a href="#" class="card-link ">Card link</a>
          </div>
        </div>
    )
  }

  render() {
    const { images } = this.props
    return (
      <div className="image_picker row mx-auto">
        { images.map( (image, i) => this.renderImage(image, i)) }
        <div className="clear"/>
      </div>
    )
  }
}

ImagePicker.propTypes = {
  images: PropTypes.array,
  multiple: PropTypes.bool,
  onPick: PropTypes.func
}

export default ImagePicker