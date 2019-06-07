import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Map } from 'immutable'

import './Images.scss'
import Image from './Image'

export default function ImagePicker({ multiple, onPick, images }) {

    const [picked, usePicked] = useState(Map());

    return (
      <div className="image_picker row mx-auto">
        { images.map( (image, i) => renderImage(image, i)) }
        <div className="clear"/>
      </div>
    )

    function renderImage(image, i) {
      return (
          <div className="card mx-5 my-3 ">
            <h3 className="card-header mb-3">Card header</h3>
            <Image 
              src={image.src}
              isSelected={ picked.has(image.value)} 
              onImageClick={() => handleImageClick(image)} 
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
    
    function handleImageClick(image) {
      const pickedImage = multiple ? picked : Map()
      const newerPickedImage = 
        pickedImage.has(image.value) ? 
          pickedImage.delete(image.value) : 
            pickedImage.set(image.value, image.object)
            usePicked(newerPickedImage)
    
      const pickedImageToArray = []
      newerPickedImage.map((image, i) => pickedImageToArray.push({src: image, value: i}))
      
      onPick(multiple ? pickedImageToArray : pickedImageToArray[0])
    }
}

ImagePicker.propTypes = {
  images: PropTypes.array,
  multiple: PropTypes.bool,
  onPick: PropTypes.func
}